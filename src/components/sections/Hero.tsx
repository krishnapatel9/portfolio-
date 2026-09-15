"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const roles = ["Backend Engineer", "AI-Native Developer", "Software Developer"];

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setRoleText("Backend Engineer \u00B7 AI-Native Developer \u00B7 Software Developer");
      return;
    }

    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const current = roles[ri];
      if (!deleting) {
        ci++;
        if (ci > current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
      } else {
        ci--;
        if (ci < 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
          ci = 0;
        }
      }
      setRoleText(current.slice(0, ci));
      timeout = setTimeout(tick, deleting ? 35 : 65);
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-[100px] md:pb-[80px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center">
      <div>
        <div className="font-mono text-[13px] text-accent mb-4 tracking-[1px] uppercase">
          Hi, my name is
        </div>
        <h1 className="font-disp font-bold text-[clamp(40px,6vw,68px)] text-text leading-[1.02] tracking-[-1.5px] mb-5">
          {siteConfig.name}.
        </h1>
        <div className="font-mono text-[18px] text-accent mb-[22px] min-h-[26px] flex items-center role-line">
          {isClient ? roleText : roles[0]}
          {isClient && <span className="cursor"></span>}
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-green border border-[rgba(74,222,128,0.3)] bg-[rgba(74,222,128,0.06)] px-[14px] py-[6px] rounded-[20px] mb-[28px]">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-[pulse_2s_infinite]"></span>
          {siteConfig.internships} internships &middot; {siteConfig.shippedSystems} shipped systems &middot; {siteConfig.cpi} CPI
        </div>

        <p className="text-[16px] text-text-dim max-w-[480px] mb-[36px] leading-[1.6]">
          I build <b>backend services and AI-native systems</b> — Node.js/TypeScript APIs, Python automation, and agent orchestration pipelines that ship to production.
        </p>

        <div className="flex flex-wrap gap-[14px] mb-[36px]">
          <a
            href="#projects"
            className="font-mono font-semibold text-[13px] bg-accent text-[#0A0E11] px-6 py-[13px] rounded-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,211,238,0.12)]"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="font-mono font-semibold text-[13px] bg-transparent text-text border border-panel-border px-6 py-[13px] rounded-sm transition-colors duration-150 hover:border-text-dim"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Terminal UI */}
      <div className="bg-panel border border-panel-border rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1216] border-b border-panel-border">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
          <span className="font-mono text-[12px] text-text-faint ml-2">whoami.sh</span>
        </div>
        <div className="p-[22px] font-mono text-[13px] leading-[2]">
          <div><span className="text-green">$</span> <span className="text-text">whoami</span></div>
          <div className="mb-[14px]"><span className="text-text">krishna_patel</span></div>
          
          <div><span className="text-green">$</span> <span className="text-text">cat education.txt</span></div>
          <div className="mb-[14px]">
            <span className="text-text-faint">university:</span> <span className="text-text">Parul University</span><br />
            <span className="text-text-faint">degree:</span> <span className="text-text">B.Tech CSE</span><br />
            <span className="text-text-faint">cpi:</span> <span className="text-accent">8.21</span> &nbsp;<span className="text-text-faint">grad:</span> <span className="text-text">2026</span>
          </div>
          
          <div><span className="text-green">$</span> <span className="text-text">cat focus.txt</span></div>
          <div>
            <span className="text-text-faint">backend:</span> <span className="text-text">Node.js · TypeScript · FastAPI</span><br />
            <span className="text-text-faint">ai:</span> <span className="text-text">RAG · Agents · Vector DBs</span><br />
            <span className="text-text-faint">devops:</span> <span className="text-text">Docker · GitLab CI/CD · AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
