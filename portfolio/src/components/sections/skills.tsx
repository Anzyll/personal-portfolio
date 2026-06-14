import {
  Activity,
  Cloud,
  Database,
  MessageSquare,
  Server,
  ShieldCheck,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

const groupIcons: Record<string, LucideIcon> = {
  Backend: Server,
  Data: Database,
  Messaging: MessageSquare,
  Security: ShieldCheck,
  Cloud: Cloud,
  Observability: Activity,
  Testing: TestTube2,
};

export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div id="skills" className="w-full">
      <h2 className="font-medium text-primary/90 text-base">tech stack.</h2>

      <ul className="gap-3 grid sm:grid-cols-2 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="bg-card p-3 border rounded-md cursor-target">
            <div className="flex items-center gap-2">
              {(() => {
                const Icon = groupIcons[key] ?? Server;

                return <Icon className="w-4 h-4 text-muted-foreground" />;
              })()}
              <p>{key}</p>
            </div>
            <ul className="flex flex-wrap gap-2 mt-3">
              {value.map((skill) => (
                <li
                  key={skill}
                  className="bg-muted px-2 py-1 rounded text-muted-foreground text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
