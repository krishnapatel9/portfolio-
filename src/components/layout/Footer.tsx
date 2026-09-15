import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-panel-border py-7 flex justify-between items-center flex-wrap gap-3 mt-20">
      <div className="font-mono text-[12.5px] text-text-faint">
        Built by <span className="text-accent">{siteConfig.name}</span>
      </div>
      <div className="flex gap-4">
        <a href="#top" className="text-text-faint text-[12.5px] font-mono hover:text-text transition-colors mr-3">
          Back to top &uarr;
        </a>
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-text-faint text-[12.5px] font-mono hover:text-text transition-colors">
          GitHub
        </a>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-faint text-[12.5px] font-mono hover:text-text transition-colors">
          LinkedIn
        </a>
        <a href={`mailto:${siteConfig.email}`} className="text-text-faint text-[12.5px] font-mono hover:text-text transition-colors">
          Email
        </a>
      </div>
    </footer>
  );
}
