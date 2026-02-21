import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  { name: "Languages", skills: ["Python", "GoLang", "C", "C++", "JavaScript", "ReactJS", "HTML/CSS"] },
  { name: "Backend", skills: ["FastAPI", "Django", "Flask", "REST APIs", "async I/O", "gRPC"] },
  { name: "Linux & Infra", skills: ["Ubuntu", "Kali Linux", "System Services", "SSH", "Bash", "Vim"] },
  { name: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "PL/SQL"] },
  { name: "Cloud", skills: ["AWS (EC2, S3, Lambda, SQS, VPC)", "Oracle OCI", "GCP", "Azure", "Cloudflare"] },
  { name: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "Container Registries"] },
  { name: "CI/CD & Automation", skills: ["Ansible", "Terraform", "GitHub Actions", "GitLab CI", "Shell Scripting"] },
  { name: "AI/ML", skills: ["TensorFlow", "Keras", "PyTorch", "OpenAI API", "Claude API"] },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-border bg-card p-5 hover:glow-border transition-all duration-300"
            >
              <h4 className="font-mono text-primary text-xs tracking-wider uppercase mb-3">{cat.name}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
