export type ProjectLink = {
  href: string;
  title: string;
  description: string;
};

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="mt-6 mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col rounded-2xl bg-white p-5 shadow-custom no-underline transition-shadow hover:shadow-custom-hover dark:bg-neutral-900"
        >
          <h3 className="inline-block">{link.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{link.description}</p>
        </a>
      ))}
    </div>
  );
}
