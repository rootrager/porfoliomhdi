import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageSeed: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${project.imageSeed}/1200/750`}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <span className="font-mono text-xs text-muted">0{index + 1}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={project.href}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          View case study <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
