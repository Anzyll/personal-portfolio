import {
  Braces,
  CloudCog,
  GitBranch,
  KeyRound,
  Network,
  RadioTower,
  RefreshCcw,
} from "lucide-react";

const icons = [
  Braces,
  GitBranch,
  RefreshCcw,
  CloudCog,
  KeyRound,
  Network,
  RadioTower,
];

export function EngineeringHighlights({ data }: { data: string[] }) {
  return (
    <section className="w-full">
      <h2 className="font-medium text-primary/90 text-base">
        engineering highlights.
      </h2>

      <ul className="gap-3 grid sm:grid-cols-2 mt-4">
        {data.map((highlight, index) => {
          const Icon = icons[index] ?? Braces;

          return (
            <li
              key={highlight}
              className="flex items-center gap-3 bg-card p-3 border rounded-md text-primary/90 text-sm cursor-target"
            >
              <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
              <span>{highlight}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
