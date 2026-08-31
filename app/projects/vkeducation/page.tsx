import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import { ZoomableImage } from "../../zoomable-image";
import vkEducationBanner from "../../../public/projects/inside/Education/DN-109.webp";
import vkEducationFigma from "../../../public/projects/inside/Education/figma-education.webp";

export const metadata: Metadata = {
  title: "VK Education — Валера Сироткин",
  description: "Кейс: проект VK Education, 2021–2026.",
};

export default function VkEducationProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <Link
        href="/"
        className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">VK Education</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={vkEducationBanner} alt="VK Education" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          5 лет преподаю дизайн студентам Технопарка — от основ визуального мышления до самостоятельной работы в Figma
        </p>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
        <p className="mb-6">
          Уже пять лет я читаю лекции и провожу практические семинары по дизайну для студентов Технопарка — образовательной программы для студентов МГТУ им. Н. Э. Баумана.
        </p>
        <p className="mb-6">
          За это время через мои занятия прошло около 400 студентов. Я помогаю разработчикам разобраться в основах дизайна, освоить Figma и научиться самостоятельно собирать интерфейсы — не просто повторяя готовые макеты, а понимая, из каких элементов и решений они состоят.
        </p>
        <h2 className="font-medium mb-1 mt-10">Задача</h2>
        <p className="mb-6">
          Студенты приходят в Технопарк прежде всего как разработчики. В течение семестра они работают над большими проектами, которые в конце защищают.
        </p>
        <p className="mb-6">
          При этом современному разработчику важно не только уметь реализовывать готовый интерфейс, но и понимать, почему он устроен именно так: как работает визуальная иерархия, из чего складывается интерфейс, как связаны между собой элементы и как сохранить целостность продукта при его масштабировании.
        </p>
        <p className="mb-6">
          Моя задача — дать студентам базовое понимание дизайна и практический инструмент, с которым они смогут самостоятельно работать над интерфейсами своих проектов.
        </p>
        <h2 className="font-medium mb-1 mt-10">Подход</h2>
        <p className="mb-6">
          Обучение состоит из лекции об основах дизайна и двух практических семинаров в Figma.
        </p>
        <p className="mb-6">
          Вместо изучения инструмента ради самого инструмента мы собираем интерфейс постепенно: от простых примитивов к компонентам, а затем из компонентов — отдельные страницы. Такой подход помогает студентам увидеть дизайн как систему, а не просто набор визуальных решений.
        </p>
        <ZoomableImage
          src={vkEducationFigma}
          alt="Список компонентов скриншотом с Figma"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
        <p className="mb-6">
          Полученные навыки они применяют в своих семестровых проектах. Изначально я проводил занятия для групп фронтенд-разработки, а с прошлого года также обучаю студентов мобильной разработки.
        </p>
        <p className="mb-6">
          За пять лет занятия прошли около 400 студентов, и я получаю стабильно положительную обратную связь. Многие выпускники Технопарка впоследствии приходят работать в нашу компанию — поэтому для меня это не только образовательный проект, но и возможность познакомиться с будущими коллегами ещё на этапе их обучения.
        </p>
      </div>

    </main>
  );
}
