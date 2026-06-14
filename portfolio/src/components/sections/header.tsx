import { Github, Linkedin, Mail } from "lucide-react";

import { MovingElement } from "../navbar";

interface IHeaderData {
  NAME: string;
  ROLE: string;
  SPECIALIZATION: string;
  HEADLINE: string;
  RESUME: string;
  EMAIL: string;
  GITHUB: string;
  LINKEDIN: string;
  TECH_PILLS: string[];
  IMPACTS: string[];
  ABOUT: string[];
}

export function Header({ data }: { data: IHeaderData }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full">
      <div className="space-y-2">
        <div>
          <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
            {data.NAME}
          </h1>
          <h2 className="flex flex-col gap-0 mt-1 font-normal text-primary/90 text-base">
            <p>{data.ROLE}</p>
            <p>{data.SPECIALIZATION}</p>
          </h2>
          <div className="mt-3 max-w-2xl">
            <p className="text-muted-foreground text-base">{data.HEADLINE}</p>
          </div>

          <ul className="flex flex-wrap items-center gap-2 mt-4">
            {data.TECH_PILLS.map((tech) => (
              <li key={tech} className="bg-muted px-2 py-1 rounded text-xs">
                {tech}
              </li>
            ))}
          </ul>

          <ul className="gap-2 grid sm:grid-cols-2 mt-4">
            {data.IMPACTS.map((impact) => (
              <li
                key={impact}
                className="bg-card px-3 py-2 border rounded-md text-primary/90 text-sm cursor-target"
              >
                {impact}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 pt-2 text-sm">
          <MovingElement
            className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow-sm px-4 py-2 rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors disabled:pointer-events-none"
            change={() => handleChange(data.RESUME)}
            toChange={false}
            ariaLabel="Resume"
          >
            Resume
          </MovingElement>
          <div className="flex gap-2">
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
            >
              <Mail />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.GITHUB)}
              ariaLabel="Github"
            >
              <Github />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.LINKEDIN)}
              ariaLabel="Linkedin"
            >
              <Linkedin />
            </MovingElement>
          </div>
        </div>
      </div>

      <h2 className="mt-8 font-medium text-primary/90 text-base">about me.</h2>
      <div className="flex flex-col gap-2 mt-4 font-normal text-muted-foreground text-base leading-relaxed">
        {data.ABOUT.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
