import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import vkuiBanner from "../../../public/projects/vkui2.webp";

export const metadata: Metadata = {
  title: "Дизайн-система VKUI — Валера Сироткин",
  description: "Кейс: дизайн-система VKUI, 2021–2024.",
};

export default function VkuiProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Дизайн-система VKUI</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2024</p>

      <ProjectBanner src={vkuiBanner} alt="Дизайн-система VKUI" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VKUI — основная дизайн-система VK для веб- и мобильных интерфейсов. Участвовал в
          разработке и развитии библиотеки компонентов и токенов, которыми пользуются десятки
          продуктовых команд.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">

        <h2 className="font-medium mb-1 mt-10">Контекст и импульс к объединению</h2>
        <p className="mb-6">
          Всё началось в момент, когда компания входила в фазу масштабного экосистемного ребрендинга. На тот момент у нас существовало две фундаментальные дизайн-системы:
        </p>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li><strong>VKUI</strong> — React-библиотека компонентов, которую развивала отдельная выделенная команда специально под нужды мобильного приложения и веб-версии ВКонтакте.</li>
          <li><strong>Paradigm</strong> — система, которая развивалась исторически с 2012 года и служила визуальным ядром для продуктов Mail (Почта, Облако, Главная страница).</li>
        </ul>
        <p className="mb-6">
          Содержать и параллельно разрабатывать две самостоятельные дизайн-системы требовало колоссальных ресурсов фронтенда и создавало визуальный разрыв при переходе пользователей между сервисами. Чтобы решить обе проблемы, было принято решение объединить системы в одну — сделать <strong>VKUI</strong> основным техническим и компонентным стандартом компании, а <strong>Paradigm</strong> интегрировать как одну из базовых тем.
        </p>

        <h2 className="font-medium mb-1 mt-10">Воркшоп в офисе ВКонтакте: 4 дня и 160 токенов</h2>
        <p className="mb-6">
          Объединить две зрелые системы невозможно просто волевым решением в Jira. Чтобы прийти к единому знаменателю, мы собрались вместе с командой разработки и дизайна ВКонтакте в их офисе и начали сложный процесс совместной синхронизации.
        </p>
        <p className="mb-6">
          Основная задача состояла в том, чтобы спуститься на самый нижний уровень — к токенам цвета и типографики. Мы буквально вручную разбирали каждый оттенок, сравнивали наименования, искали пересечения и убирали дубли.
        </p>
        <blockquote className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 mb-6">
          За 4 дня непрерывных дискуссий и разборов нам удалось договориться об MVP-наборе токенов. Он включал в себя порядка 160 токенов в тёмной и светлой темах, которые полностью покрывали визуальные потребности продуктов Mail и ВКонтакте.
        </blockquote>
        <p className="mb-6">
          Мне доверили собрать <strong>самую первую версию библиотеки</strong> и наполнить её цветами. Мы вместе с Ваней Барышевым и Лешей Зайцевым из ВКонтакте спроектировали логику связей токенов, заложили правила именования (naming convention), затем я написал документацию. Так появился фундамент для общего репозитория токенов, поддерживающего как глобальные темы (Light / Dark), так и кастомные темы для отдельных продуктов.
        </p>

        <h2 className="font-medium mb-1 mt-10">Сборка компонентов и единый язык (Design × Dev)</h2>
        <p className="mb-6">
          Когда уровень токенов был зафиксирован, мы перешли к компонентной базе. В качестве пилота мы взяли <strong>Кнопку (Button)</strong> и пошагово собрали все возможные её состояния, размеры, вариации иконок и эффекты. На её примере мы отточили подход к неймингу параметров. Для нас было критически важно сформировать <strong>Single Source of Truth</strong> — единый понятийный аппарат, чтобы дизайнер в Figma и разработчик в React-коде оперировали абсолютно идентичными пропсами и терминами.
        </p>
        <p className="mb-6">
          Далее библиотека начала стремительно наполняться:
        </p>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li>Базовые UI-примитивы: Input, Checkbox, Switch, Radio, Avatar, Badge.</li>
          <li>Сложные элементы: Modal Card, Action Sheet, Segmented Control, Tabs.</li>
        </ul>
        <p className="mb-6">
          На протяжении всей сборки мы работали в теснейшей связке с платформенной командой VKUI. Мы строго контролировали, насколько каждый новый компонент соответствует созданной системе токенов, и проверяли отступы.
        </p>

        <h2 className="font-medium mb-1 mt-10">Масштабирование и внедрение в продукты Mail</h2>
        <p className="mb-6">
          Моей ключевой практической задачей на этапе внедрения было масштабировать обновлённый VKUI на продукты Mail (Почта, Облако). Процесс миграции мы выстроили поэтапно, чтобы не останавливать продуктовые фичи:
        </p>
        <ol className="list-decimal list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-6 px-4">
          <li><strong>Перевод макетов на токены:</strong> сначала мы перевели существующие файлы и экраны в Figma на новую систему токенов.</li>
          <li><strong>Внедрение продуктовых тем:</strong> бывали кейсы, когда стандартной палитры не хватало под специфические сценарии. В таких случаях я самостоятельно добавлял и прописывал продуктовые темы напрямую в <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">общий репозиторий токенов</Link>.</li>
          <li><strong>Замена компонентов в коде:</strong> на этапе разработки инженеры постепенно заменяли устаревшие элементы интерфейса на базовые компоненты из библиотеки VKUI (Button, Input, Checkbox и др.).</li>
        </ol>
        <p className="mb-6">
          Главным плюсом нового фундамента стало то, что продукты Mail сразу «из коробки» получили <strong>встроенную адаптивность</strong> и <strong>автоматическое переключение тёмной и светлой тем</strong> без необходимости писать кастомный код для каждого экрана. В ходе всего процесса я выступал связующим звеном — поддерживал постоянную коммуникацию между разработчиками VKUI и продуктовыми командами Mail.
        </p>

        <h2 className="font-medium mb-1 mt-10">Результаты</h2>
        <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
          <li><strong>Объединение экосистемы:</strong> две изолированные дизайн-системы превратились в единый платформенный стандарт, доступный в Open Source и Figma Community.</li>
          <li><strong>Единая архитектура токенов:</strong> создана структура из 160+ токенов, поддерживающая тёмную, светлую и продуктовые темы компании.</li>
          <li><strong>Ускорение разработки:</strong> продукты Mail получили гибкую темизацию и готовую компонентную базу, существенно сократившую time-to-market новых фич.</li>
          <li><strong>Единый словарь:</strong> команды дизайна и разработки Mail и VK синхронизировали терминологию и процессы сборки интерфейсов.</li>
        </ul>
                <p className="mb-6">
          Ключевые ссылки: <Link href="https://vkcom.github.io/VKUI/" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">официальный сайт VKUI</Link>, <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">репозиторий токенов</Link>, <Link href="https://github.com/VKCOM/VKUI" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">репозиторий компонентов</Link>, <Link href="https://www.figma.com/@vkui" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">VKUI в Figma Community</Link> и <Link href="https://www.figma.com/@paradigm" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">Paradigm UI Kit в Figma Community</Link>.
        </p>
      </div>
    </main>
  );
}
