/**
 * Оптимизация изображений репозитория: конвертирует крупные PNG/JPG в WebP,
 * ресайзит слишком большие изображения и автоматически обновляет все ссылки
 * на них в коде (app/**\/*.tsx).
 *
 * Использование:
 *   1) npm install --save-dev sharp
 *   2) node scripts/optimize-images.js
 *   3) Проверить сайт локально (npm run dev), затем закоммитить изменения.
 *
 * Что делает:
 *   - Ищет все .png/.jpg/.jpeg в public/, крупнее MIN_SIZE_KB
 *   - Уменьшает ширину до MAX_WIDTH (если больше) без апскейла
 *   - Сохраняет как .webp рядом, удаляет оригинал
 *   - Заменяет во всех .tsx файлах расширение в путях на .webp
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const APP_DIR = path.join(ROOT, "app");

const MIN_SIZE_KB = 15; // не трогаем совсем мелкие иконки
const MAX_WIDTH = 1920; // достаточно для любого экрана на сайте
const WEBP_QUALITY = 80;

function walk(dir, exts, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, out);
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function walkFiles(dir, exts, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, exts, out);
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function main() {
  const images = walk(PUBLIC_DIR, [".png", ".jpg", ".jpeg"]);
  const renameMap = new Map(); // oldFilename -> newFilename (basename only)

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of images) {
    const sizeKb = fs.statSync(file).size / 1024;
    if (sizeKb < MIN_SIZE_KB) continue; // пропускаем мелкие иконки

    const dir = path.dirname(file);
    const base = path.basename(file, path.extname(file));
    const outFile = path.join(dir, base + ".webp");

    const before = fs.statSync(file).size;
    const meta = await sharp(file).metadata();

    await sharp(file)
      .resize({
        width: Math.min(meta.width || MAX_WIDTH, MAX_WIDTH),
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outFile);

    const after = fs.statSync(outFile).size;
    totalBefore += before;
    totalAfter += after;

    fs.unlinkSync(file); // удаляем оригинал

    renameMap.set(path.basename(file), path.basename(outFile));

    console.log(
      `${path.relative(ROOT, file)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
    );
  }

  // Обновляем ссылки в коде (.tsx)
  const codeFiles = walkFiles(APP_DIR, [".tsx", ".ts"]);
  let filesChanged = 0;

  for (const file of codeFiles) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    for (const [oldName, newName] of renameMap.entries()) {
      if (content.includes(oldName)) {
        content = content.split(oldName).join(newName);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      filesChanged++;
      console.log(`updated refs: ${path.relative(ROOT, file)}`);
    }
  }

  console.log("\n--- Готово ---");
  console.log(`Изображений обработано: ${renameMap.size}`);
  console.log(`Файлов кода обновлено: ${filesChanged}`);
  console.log(
    `Размер: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
