import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string;
}

const jobs: Job[] = [
  {
    company: "Sav Holdings Group",
    role: "Software Developer",
    location: "Pune, India",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Founding engineer for India dev center — defined CI/CD processes with Jenkins, GitHub Actions, Docker & Kubernetes, adopted by 15+ engineers across 4 teams.",
      "Promoted to core team for consistently delivering production-ready backend & infra solutions.",
      "Led incident management with PagerDuty & New Relic — <5 min MTTR, 95% uptime.",
      "Optimized domain drop-catching algorithms in C++/Python — 35% latency reduction (200→130ms), 25% less hardware usage.",
      "Zero-downtime migration of 6 production servers using Ansible — cut infra costs by 30% ($12K/yr).",
      "Optimized CI/CD pipelines — build time from 50 min to 10 min for 10+ microservices.",
      "Designed scalable FastAPI services integrating AWS SQS/Lambda, Oracle RDS, Redis — 20K+ daily transactions, 98% success rate.",
      "Integrated Claude & OpenAI APIs into backend for an AI-based website builder.",
    ],
    skills: "Ubuntu, Ansible, Docker, Kubernetes, GitHub Actions, AWS, Oracle Cloud, C++, Python, Redis, CI/CD",
  },
  {
    company: "Senquire Analytics",
    role: "Backend Developer",
    location: "Pune, India",
    period: "Sep 2022 – Oct 2024",
    bullets: [
      "Built licensing backend eliminating unauthorized usage across 50K+ licenses with 100% compliance.",
      "Optimized Python services with FastAPI, SQLAlchemy & Redis — 30% faster response times via async/await.",
      "Improved PostgreSQL & MongoDB performance by 20% through indexing & connection pooling.",
      "Engineered event-driven systems with Celery & RabbitMQ — throughput from 1K to 2.4K req/s.",
      "Strengthened API security with OAuth2, JWT, SSL/TLS, and comprehensive test automation.",
      "Integrated PLCs, Arduino/Raspberry Pi, and industrial cameras into backend services for 6+ clients.",
      "Helped deploy AI/ML models into production with data/ML teams.",
    ],
    skills: "Python, FastAPI, Django, PostgreSQL, MongoDB, Docker, AWS, Celery, RabbitMQ, OAuth2",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Where I've Worked</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />

                <div className="rounded-lg border border-border bg-card p-6 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.company}
                      </h4>
                      <p className="text-primary font-mono text-sm">{job.role}</p>
                    </div>
                    <div className="text-muted-foreground text-sm font-mono mt-1 md:mt-0">
                      <span>{job.period}</span>
                      <span className="mx-2">·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-secondary-foreground/80 text-sm leading-relaxed flex gap-2">
                        <span className="text-primary/60 mt-1 shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.split(", ").map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
