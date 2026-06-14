import { FileText, Github, Linkedin, Mail } from "lucide-react";

import { MovingElement } from "../navbar";

interface IContactData {
  RESUME: string;
  EMAIL: string;
  GITHUB: string;
  LINKEDIN: string;
}

export function Contact({ data }: { data: IContactData }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full">
      <div className="space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">Let&apos;s work together.</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base">
            I&apos;m interested in backend engineering, distributed systems,
            cloud infrastructure, and production-ready API development.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <button
              className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow-sm px-4 rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none"
              onClick={() => handleChange(data.EMAIL)}
            >
              <Mail className="mr-2 w-4 h-4" />
              Get in touch
            </button>
            <button
              className="inline-flex justify-center items-center hover:bg-primary/10 disabled:opacity-50 shadow-sm px-4 border border-primary rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none"
              onClick={() => handleChange(data.RESUME)}
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center items-center">
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
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
            >
              <Mail />
            </MovingElement>
          </div>
        </div>

        <div className="cursor-target">
          <p className="text-gray-400 text-sm">
            Open to backend and distributed systems engineering roles
          </p>
          <p className="mt-2 text-gray-500 text-xs">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
