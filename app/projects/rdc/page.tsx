import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBanner } from "../../project-banner";
import { ArticleNav } from "../../article-nav";
import RDCbanner from "../../../public/projects/inside/rdc/eUDrPv_L4LMGvDPzFp2CTBctUZbNen1w-XeS_hvcyy7q2NN1Dydem0BlroM8hfHje01dZE1tMTp9yOk8fqJRiYkp.webp";
import rdc1 from "../../../public/projects/inside/rdc/Slide 4.webp";
import rdc2 from "../../../public/projects/inside/rdc/Slide 5.webp";
import rdc3 from "../../../public/projects/inside/rdc/Slide 6.webp";
import { ZoomableImage } from "@/app/zoomable-image";

export const metadata: Metadata = {
  title: "Russian Design Cup — Валера Сироткин",
  description: "Кейс: Russian Design Cup, 2021–2026.",
};

export default function RdcProject() {
  return (
    <main className="mx-auto max-w-[692px] px-6 antialiased mt-12">
      <ArticleNav
        sections={[
          { id: "what-i-did", label: "Что я делал" },
          { id: "pr-communications", label: "PR и коммуникации" },
          { id: "running-competition", label: "Организация конкурса" },
          { id: "budget", label: "Бюджет" },
          { id: "landing", label: "Лендинг" },
          { id: "jury", label: "Жюри" },
          { id: "platforms", label: "Платформы" },
          { id: "final-broadcasts", label: "Финал и трансляции" },
          { id: "content-promotion", label: "Контент и продвижение" },
        ]}
      />
      <Link
        href="/"
        className="inline-flex h-[22px] items-center rounded-full border border-gray-300 px-2 text-xs text-gray-500 no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800"
      >
        На главную
      </Link>

      <h1 className="text-lg sm:text-2xl font-medium mt-4 mb-2">Russian Design Cup</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2021–2026</p>

      <ProjectBanner src={RDCbanner} alt="Russian Design Cup" />

      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 mb-6">
        <p>
          Russian Design Cup — конкурс для дизайнеров, который существует уже 15 лет. Я помогаю организовывать его с 2020 года.
        </p>
      </div>
      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-48 leading-relaxed">
      <p className="mb-6">
        За это время моя роль сильно изменилась: от PR и рассылок до полноценной организации конкурса. Последние годы вместе с Пашей Карповым мы были основными драйверами RDC внутри VK и отвечали за проведение конкурса от идеи и бюджета до жюри, платформы, коммуникаций и финала.
      </p>
              <ZoomableImage
          src={rdc1}
          alt="Слайд с презентации Russian Design Cup, на котором показан начало конкурса"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h2 id="what-i-did" className="font-medium mb-1 mt-10">Что я делал</h2>
      <h3 id="pr-communications" className="font-medium mb-1 mt-6">PR и коммуникации</h3>
      <p className="mb-6">
        Начинал с продвижения конкурса: занимался рассылками, PR и коммуникацией с участниками. Помогал привлекать внимание к конкурсу и поддерживать интерес на протяжении всех этапов.
      </p>
      <h3 id="running-competition" className="font-medium mb-1 mt-6">Организация конкурса</h3>
      <p className="mb-6">
        Вместе с Пашей отвечал за проведение конкурса целиком: планирование, координацию команд и подрядчиков, сроки, бюджет и решение организационных вопросов.
      </p>
                    <ZoomableImage
          src={rdc2}
          alt="Слайд с презентации Russian Design Cup, на котором показан начало конкурса"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h3 id="budget" className="font-medium mb-1 mt-6">Бюджет</h3>
      <p className="mb-6">
        Помогал собирать общий бюджет конкурса и объединять в нём бюджеты разных направлений.
      </p>
      <h3 id="landing" className="font-medium mb-1 mt-6">Лендинг</h3>
      <p className="mb-6">
        Организовал переезд основного лендинга на конструктор сайтов. Это позволило отказаться от постоянного привлечения разработчиков: теперь большинство изменений я мог делать самостоятельно, что заметно ускорило выпуск обновлений.
      </p>
                    <ZoomableImage
          src={rdc3}
          alt="Слайд с презентации Russian Design Cup, на котором показан начало конкурса"
          sizes="(max-width: 692px) 100vw, 692px"
          className="rounded-xl mt-3 mb-4 w-full h-auto"
        />
      <h3 id="jury" className="font-medium mb-1 mt-6">Жюри</h3>
      <p className="mb-6">
        Организовывал работу жюри, договаривался с экспертами об участии в конкурсе и финале, координировал оценку работ. Сам также участвовал в оценивании.
      </p>
      <h3 id="platforms" className="font-medium mb-1 mt-6">Платформы</h3>
      <p className="mb-6">
        Вёл переговоры с платформами, на которых проходил конкурс. За время моей работы RDC проводился на Студии от ПРОСТОРа - мини-приложении ВКонтакте, а с 2026 года — на Dprofile.
      </p>
      <h3 id="final-broadcasts" className="font-medium mb-1 mt-6">Финал и трансляции</h3>
      <p className="mb-6">
        Участвовал в подготовке и проведении онлайн-трансляций, был ведущим финала со стороны организаторов. Помогал организовывать офлайн-финал и координировать финалистов.
      </p>
      <h3 id="content-promotion" className="font-medium mb-1 mt-6">Контент и продвижение</h3>
      <p className="mb-6">
        Создавал креативы, писал тексты и готовил материалы для продвижения конкурса. В зависимости от задачи совмещал роли организатора, дизайнера, копирайтера, разработчика и ведущего.
      </p>
    </div>
    </main>
  );
}
