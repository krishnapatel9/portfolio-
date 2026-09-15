import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-16">
      <div className="font-mono text-[12px] text-accent tracking-[2px] uppercase mb-2">
        Work History
      </div>
      <h2 className="font-disp font-bold text-[clamp(26px,5vw,32px)] text-text mb-2">
        Experience
      </h2>
      <p className="text-text-dim text-[15px] mb-12 max-w-[500px]">
        Hands-on internships across AI/ML engineering, backend infrastructure, and enterprise integrations.
      </p>

      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <div key={job.id} className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="font-mono text-[12px] text-text-faint md:w-[150px] flex-shrink-0 mt-1">
              {job.date}
            </div>
            <div>
              <div className="font-disp font-semibold text-[18px] text-text mb-1">
                {job.role}
              </div>
              <div className="text-accent text-[14px] mb-4">
                {job.company} <span className="font-mono text-[11px] text-text-faint ml-2 border border-panel-border bg-[#0d1216] px-2 py-0.5 rounded">{job.location}</span>
              </div>
              <ul className="list-none pl-0 flex flex-col gap-3">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="relative pl-5 text-[14.5px] text-text-dim before:content-['▹'] before:absolute before:left-0 before:text-accent">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
