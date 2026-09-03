import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import { ArticleNav } from "../../article-nav";
import { ZoomableImage } from "@/app/zoomable-image";
import dobrobanner from "../../../public/projects/inside/dobro/vkdobro1.webp";
import dobroold from "../../../public/projects/inside/dobro/vkdobro2.webp";
import dobronew from "../../../public/projects/inside/dobro/vkdobro3.webp";
import dobrominiapp from "../../../public/projects/inside/dobro/vkdobro4.webp";
import dobrods from "../../../public/projects/inside/dobro/vkdobro5.webp";

export const metadata: Metadata = {
  title: "VK Добро — Валера Сироткин",
  description: "Кейс: проект VK Добро, 2022–2023.",
};

export default function VkDobroProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "ecosystem-web", label: "Экосистема и веб-платформа" },
          { id: "leadership-handover", label: "Лидерство и передача проекта" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">VK Добро</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2022–2023</p>

      <ProjectBanner src={dobrobanner} alt="VK Добро" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          VK Добро — платформа для благотворительных сборов и волонтёрских проектов VK. Помогал
          с ребрендингом продукта и переводом интерфейсов на общую дизайн-систему.
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
      <p className="mb-6">
          VK Добро (ранее — Добро Mail) — крупный социальный сервис и платформа для благотворительности внутри экосистемы VK. Мое подключение к проекту произошло в период кризисного менеджмента, когда продуктовая команда осталась без дизайнеров прямо в момент масштабного ребрендинга.
      </p>
      <ZoomableImage
          src={dobroold}
          alt="Интерфейс сервиса Добро Mail до ребрендинга"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <p className="mb-6">
          Перед проектом стоял жесткий дедлайн: нужно было в сжатые сроки провести ребрендинг, перейти от Добро Mail к VK Dobro и перевести все интерфейсы на единый визуальный язык экосистемы — VKUI.
      </p>
      <h2 id="ecosystem-web" className="font-medium mb-1 mt-10">Экосистема и веб-платформа</h2>
      <p className="mb-6">
          Чтобы не останавливать текущую работу сервиса, я сразу включился в формат hands-on дизайна и начал редизайн с изолированных контентных блоков:
      </p>
      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-1 px-4">
        <li>Веб-версия: Вручную пересобрал интерфейсы и логику страниц «Статей» и «Волонтерства», после чего шаг за шагом трансформировал весь основной сайт вместе с его адаптивной мобильной версией.</li>
        <li>VK Mini App: Совместно с продуктовой командой спроектировал и проработал с нуля сервис внутри ВКонтакте. Продумал End-to-End пользовательские сценарии, отрисовал интерфейсы и заложил основу для нового канала привлечения благотворительных сборов.</li>
      </ul>
      <ZoomableImage
          src={dobronew}
          alt="Интерфейс сервиса ВК Добро"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />
      <p>
          Результаты трансформации и запуск новой платформы были успешно анонсированы <Link href="https://vk.company/ru/press/releases/11490/?ysclid=mth1ttbeq0830955724" className="underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600">в официальном пресс-релизе VK.</Link> 
      </p>
      <ZoomableImage
          src={dobrominiapp}
          alt="Интерфейс сервиса ВК Добро"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-12 w-full h-auto"
        />
      <h2 id="leadership-handover" className="font-medium mb-1 mt-10">Лидерство и передача проекта</h2>
      <p className="mb-6">
          Когда у команды появилась открытая ставка на продуктового дизайнера, я активно подключился к выстраиванию найма:
      </p>
      <ul className="list-disc list-outside text-gray-700 dark:text-gray-300 mt-2 space-y-2 mb-4 px-4">
        <li>Отбирал портфолио и проводил продуктовые и технические интервью с кандидатами.</li>
        <li>Участвовал в принятии итогового решения и онбординге нового специалиста.</li>
        <li>Плавно передал контекст и систему, а затем курировал работу дизайнера в течение первого года, что позволило проекту перейти к автономному развитию.</li>
      </ul>
      <ZoomableImage
          src={dobrods}
          alt="Интерфейс сервиса ВК Добро"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      </div>
    </main>
  );
}
