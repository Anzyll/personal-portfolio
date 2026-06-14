import { ArrowUpRight, BookOpen } from "lucide-react";

import { IBlogData } from "@/app/data";

export function TechnicalWriting({
  data,
  medium,
}: {
  data: Record<string, IBlogData>;
  medium: string;
}) {
  return (
    <section id="writing" className="w-full">
      <div className="flex justify-between items-end gap-4">
        <h2 className="font-medium text-primary/90 text-base">
          technical writing.
        </h2>
        <a
          href={medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm cursor-target"
        >
          Medium <ArrowUpRight size={16} />
        </a>
      </div>

      <ul className="gap-3 grid sm:grid-cols-2 mt-4">
        {Object.entries(data).map(([title, value]) => (
          <li
            key={title}
            className="bg-card p-3 border rounded-md cursor-target"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="mt-0.5 w-4 h-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-primary/90 text-sm">{title}</p>
                <p className="mt-1 text-muted-foreground text-xs">
                  {value.DESCRIPTION}
                </p>
                <a
                  href={value.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-muted-foreground hover:text-primary text-xs"
                >
                  Read on {value.DATE} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-muted-foreground text-xs">
        More articles coming soon.
      </p>
    </section>
  );
}
