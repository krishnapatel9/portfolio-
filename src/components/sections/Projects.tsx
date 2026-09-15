import { projects } from "@/data/projects";
import Icon from "@/components/ui/Icon";

export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-16">
      <div className="font-mono text-[12px] text-accent tracking-[2px] uppercase mb-2">
        Shipped Work
      </div>
      <h2 className="font-disp font-bold text-[clamp(26px,5vw,32px)] text-text mb-2">
        Projects
      </h2>
      <p className="text-text-dim text-[15px] mb-12 max-w-[500px]">
        Full-stack systems and AI tooling built end-to-end — from data pipeline to deployed interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="glass-panel rounded-lg p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <h3 className="font-disp font-semibold text-[17px] text-text m-0">
                  {project.title}
                </h3>
                <span className="font-mono text-[11px] text-green border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.05)] px-2 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-green rounded-full"></span>
                  {project.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[12px] text-text-dim border border-panel-border bg-[#0d1216] px-3 py-1.5 rounded transition-all duration-200 hover:text-text hover:border-accent">
                    <Icon name="github" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[12px] text-text-dim border border-panel-border bg-[#0d1216] px-3 py-1.5 rounded transition-all duration-200 hover:text-text hover:border-accent">
                    <Icon name="external" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="text-[14.5px] text-text-dim mb-6 flex-grow leading-[1.6]">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] text-text-faint bg-panel border border-panel-border px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
