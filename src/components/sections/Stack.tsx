import Icon from "@/components/ui/Icon";

export default function Stack() {
  const stackData = [
    {
      title: "LANGUAGES",
      icon: "{} ",
      items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"]
    },
    {
      title: "FRONTEND",
      icon: "◩ ",
      items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Supabase"]
    },
    {
      title: "BACKEND & APIs",
      icon: "⚡ ",
      items: ["Node.js", "FastAPI", "Express.js", "REST APIs", "WebSockets", "API Integrations"]
    },
    {
      title: "AI / GENERATIVE AI",
      icon: "🧠 ",
      items: ["LLMs", "Generative AI", "Prompt Engineering", "AI Agent Orchestration", "RAG", "Conversational AI", "AI Workflows", "Hugging Face"]
    },
    {
      title: "MACHINE LEARNING",
      icon: "📊 ",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "DATABASES",
      icon: "🗄️ ",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Chroma", "SQLAlchemy", "Prisma"]
    },
    {
      title: "CLOUD / DEVOPS",
      icon: "☁️ ",
      items: ["AWS", "Docker", "Git", "GitLab CI/CD", "Self-hosted Runners", "SSH Deployments"]
    },
    {
      title: "SECURITY / ENTERPRISE",
      icon: "🔐 ",
      items: ["JWT", "Keycloak", "SSO", "RBAC", "Vault", "Secure API Integrations"]
    },
    {
      title: "AUTOMATION",
      icon: "⚙️ ",
      items: ["Workflow Automation", "Cron Jobs", "Programmatic SEO", "Third-party Integrations", "Enterprise Integrations"]
    },
    {
      title: "CERTIFICATIONS",
      icon: "📜 ",
      items: [
        { name: "AWS (Cloud Foundations)", url: "https://www.credly.com/badges/df27d3b7-b351-47fc-83c6-ea594dde6bf0/public_url" },
        { name: "Infosys (Database and SQL)", url: "https://drive.google.com/file/d/1pHrRjh6KEd6nlPrecU_90RgDS4tpVquJ/view?usp=drive_link" },
        { name: "DeepLearning.AI (ChatGPT Prompt Engineering)", url: "https://learn.deeplearning.ai/accomplishments/a1904d60-e8dd-4f01-87b6-ed546e7e27b8?usp=sharing" },
        { name: "HackerRank (Problem Solving)", url: "https://www.hackerrank.com/certificates/30c6157c7757" }
      ]
    }
  ];

  return (
    <section id="stack" className="py-[90px]">
      <div className="font-mono text-[12px] text-accent tracking-[1.5px] uppercase mb-[14px] flex items-center gap-2.5 before:content-[''] before:w-[22px] before:h-[1px] before:bg-accent">
        Technical Stack
      </div>
      <h2 className="font-disp font-bold text-[clamp(30px,4vw,44px)] tracking-[-1px] mb-[14px] text-text">
        What I Work With
      </h2>
      <p className="text-[15px] text-text-dim max-w-[560px] mb-[50px]">
        Tools and technologies across backend engineering, AI development, and infrastructure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {stackData.map((category) => (
          <div key={category.title} className="bg-panel border border-panel-border rounded-lg p-6">
            <div className="flex items-center gap-2.5 mb-4 font-mono text-[12.5px] text-text tracking-[0.5px]">
              <span className="w-[30px] h-[30px] rounded-md bg-accent-glow flex items-center justify-center text-accent text-[14px]">
                {category.icon}
              </span>
              {category.title}
            </div>
            <div className="flex flex-wrap gap-[7px]">
              {category.items.map((item, i) => {
                const isLink = typeof item === 'object';
                const name = isLink ? item.name : item;
                const url = isLink ? item.url : undefined;
                
                if (isLink) {
                  return (
                    <a href={url} target="_blank" rel="noopener noreferrer" key={name} className="font-mono text-[11.5px] text-text-dim bg-[#0D1216] border border-panel-border px-2.5 py-[5px] rounded flex items-center gap-1 transition-colors hover:text-accent hover:border-accent-dim">
                      {name}
                      <Icon name="external" className="text-accent ml-0.5" style={{ width: 10, height: 10 }} />
                    </a>
                  );
                }
                
                return (
                  <span key={name} className="font-mono text-[11.5px] text-text-dim bg-[#0D1216] border border-panel-border px-2.5 py-[5px] rounded flex items-center gap-1">
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
