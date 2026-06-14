"use client";

import { DATA } from "@/app/data";
import {
  Contact,
  EngineeringHighlights,
  Projects,
  Footer,
  Header,
  Navbar,
  Skills,
  TechnicalWriting,
} from "@/components/sections";
import TargetCursor from "@/components/ui/target-cursor";
import useMobileDetection from "@/hooks/use-mobile";

export default function Page() {
  const checkMobile = useMobileDetection();

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center gap-12 p-8 w-full">
        <Header data={DATA.HEADER} />
        <Projects data={DATA.PROJECTS} />
        <EngineeringHighlights data={DATA.HIGHLIGHTS} />
        <Skills data={DATA.SKILLS} />
        <TechnicalWriting data={DATA.BLOGS} medium={DATA.MEDIUM} />
        <Contact data={DATA.HEADER} />
        <Footer />
      </main>

      {!checkMobile && <TargetCursor spinDuration={2} hideDefaultCursor />}
    </>
  );
}
