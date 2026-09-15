import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="py-[90px]">
      <div className="font-mono text-[12px] text-accent tracking-[1.5px] uppercase mb-[14px] flex items-center gap-2.5 before:content-[''] before:w-[22px] before:h-[1px] before:bg-accent">
        How I Work
      </div>
      <h2 className="font-disp font-bold text-[clamp(30px,4vw,44px)] tracking-[-1px] mb-[14px] text-text">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-[50px] mt-10">
        <div className="about-text">
          <p className="text-[15.5px] text-text-dim mb-[18px] max-w-[520px]">
            Final-year <b className="text-text font-semibold">Computer Science</b> student at <b className="text-text font-semibold">Parul University</b> (CPI 8.21, graduating 2026), working at the intersection of <span className="text-accent">backend engineering and AI-native development</span>.
          </p>
          <p className="text-[15.5px] text-text-dim mb-[18px] max-w-[520px]">
            I've shipped <b className="text-text font-semibold">GitLab CI/CD pipelines with self-hosted runners</b> in production, built <b className="text-text font-semibold">AI agent orchestration</b> for an enterprise operations platform, and developed multimodal AI tools combining speech, vision, and language models end-to-end.
          </p>
          <p className="text-[15.5px] text-text-dim mb-[18px] max-w-[520px]">
            I lean on AI coding assistants to prototype fast without cutting corners — comfortable picking up new tools quickly in cross-functional, fast-paced teams.
          </p>

          <div className="bg-panel border border-panel-border rounded-lg p-6 mt-8">
            <div className="font-mono text-[11px] text-text-faint uppercase tracking-[1px] mb-2">Education</div>
            <div className="font-disp font-semibold text-[17px] text-text mb-1">Parul University, Vadodara</div>
            <div className="text-text-dim text-[14.5px]">B.Tech, Computer Science Engineering · CPI 8.21 · 2022—2026</div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-panel border border-panel-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-dim">
            <div className="font-disp font-semibold text-[16.5px] text-text mb-2">Ships in production</div>
            <div className="text-[14.5px] text-text-dim leading-[1.6]">CI/CD pipelines, SSO, and agent orchestration built for a live enterprise operations platform — not demos.</div>
          </div>
          
          <div className="bg-panel border border-panel-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-dim">
            <div className="font-disp font-semibold text-[16.5px] text-text mb-2">AI-native workflow</div>
            <div className="text-[14.5px] text-text-dim leading-[1.6]">Uses AI coding assistants to prototype quickly while keeping code quality and scalability intact.</div>
          </div>
          
          <div className="bg-panel border border-panel-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-dim">
            <div className="font-disp font-semibold text-[16.5px] text-text mb-2">Full-stack range</div>
            <div className="text-[14.5px] text-text-dim leading-[1.6]">Comfortable from Node.js/TypeScript APIs down to Python ML pipelines and infra automation.</div>
          </div>
          
          <div className="border border-accent-dim bg-[rgba(34,211,238,0.02)] rounded-lg p-6 transition-all duration-200 hover:-translate-y-1">
            <div className="font-disp font-semibold text-[16.5px] text-text mb-2 flex items-center gap-2">
              <Icon name="check" />
              Leadership & Hackathons
            </div>
            <div className="text-[14.5px] text-text-dim leading-[1.6]">
              <ul className="list-none pl-0 flex flex-col gap-1.5 mt-2">
                <li className="relative pl-[14px]"><span className="absolute left-0 text-accent-dim">▹</span> Anchor — CDC (Career Development Cell)</li>
                <li className="relative pl-[14px]"><span className="absolute left-0 text-accent-dim">▹</span> Team Technical — PU AI Society</li>
                <li className="relative pl-[14px]"><span className="absolute left-0 text-accent-dim">▹</span> Team Finance — PU Projections '24</li>
                <li className="relative pl-[14px]"><span className="absolute left-0 text-accent-dim">▹</span> Hackathon: PUCodeHackathon 2.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
