import { siteConfig } from "@/data/siteConfig";
import Icon from "@/components/ui/Icon";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16">
      <div className="font-mono text-[12px] text-accent tracking-[2px] uppercase mb-2">
        What's Next?
      </div>
      <h2 className="font-disp font-bold text-[clamp(26px,5vw,32px)] text-text mb-2">
        Get In Touch
      </h2>
      <p className="text-text-dim text-[15px] mb-12 max-w-[500px]">
        Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 bg-panel border border-panel-border rounded-lg p-5 transition-colors duration-200 hover:border-accent-dim group">
          <div className="w-[42px] h-[42px] rounded-lg bg-accent-glow flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="mail" />
          </div>
          <div>
            <div className="font-mono text-[10.5px] text-text-faint uppercase tracking-[1px]">Email</div>
            <div className="text-[14.5px] font-semibold mt-0.5 text-text group-hover:text-accent transition-colors">{siteConfig.email}</div>
          </div>
        </a>

        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-panel border border-panel-border rounded-lg p-5 transition-colors duration-200 hover:border-accent-dim group">
          <div className="w-[42px] h-[42px] rounded-lg bg-accent-glow flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="linkedin" />
          </div>
          <div>
            <div className="font-mono text-[10.5px] text-text-faint uppercase tracking-[1px]">LinkedIn</div>
            <div className="text-[14.5px] font-semibold mt-0.5 text-text group-hover:text-accent transition-colors">Connect with me</div>
          </div>
        </a>

        <div className="md:col-span-2 mt-1.5 bg-gradient-to-br from-[rgba(255,179,0,0.08)] to-transparent border border-accent-dim rounded-lg p-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-disp font-semibold text-[17px] text-text mb-1">Open to Opportunities</div>
            <div className="text-[13.5px] text-text-dim">Actively interviewing for Software Engineer and AI Developer roles.</div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/Krishna_fsd.pdf" download="Krishna_Patel_FSD_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold bg-transparent border border-panel-border text-text px-4 py-2 rounded transition-all duration-200 hover:border-accent hover:text-accent">
              <Icon name="download" />
              FSD CV
            </a>
            <a href="/kp_resume.pdf" download="Krishna_Patel_SDE_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold bg-transparent border border-panel-border text-text px-4 py-2 rounded transition-all duration-200 hover:border-accent hover:text-accent">
              <Icon name="download" />
              SDE CV
            </a>
            <a href="/AI_KP.pdf" download="Krishna_Patel_AI_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold bg-transparent border border-panel-border text-text px-4 py-2 rounded transition-all duration-200 hover:border-accent hover:text-accent">
              <Icon name="download" />
              AI CV
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-block font-mono text-[13px] font-semibold bg-accent text-[#0A0E11] px-4 py-2 rounded transition-all duration-200 hover:bg-[#15b8d3]">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
