import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen, Award, GitBranch, FileText } from "lucide-react";

const EducationAndMore = () => {
  return (
    <section className="py-24 px-4" id="more">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; education</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Background</h3>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-semibold">B.Tech — Computer Science & Engineering</h4>
                <p className="text-muted-foreground font-mono text-sm">JSS Academy of Technical Education, Noida</p>
                <p className="text-muted-foreground font-mono text-sm">July 2018 – July 2022 · GPA: 8.19</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; awards</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Recognition</h3>
          <div className="rounded-lg border border-border bg-card p-6 hover:glow-border transition-all duration-300">
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-semibold">Winner — Smart India Hackathon 2020</h4>
                <p className="text-primary/80 font-mono text-sm mb-3">AICTE · Ministry of Women and Child Development</p>
                <ul className="space-y-1.5 text-secondary-foreground/80 text-sm">
                  <li className="flex gap-2"><span className="text-primary/60">▹</span>Led a 5-member team as Team Leader/Backend Engineer for a government solution.</li>
                  <li className="flex gap-2"><span className="text-primary/60">▹</span>Built configurable AMC system for the Government e-Marketplace (GeM) portal.</li>
                  <li className="flex gap-2"><span className="text-primary/60">▹</span>Implemented real-time collaboration using Etherpad and WebRTC.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; publications</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Research</h3>
          <div className="rounded-lg border border-border bg-card p-6 hover:glow-border transition-all duration-300">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-semibold leading-snug">
                  A Study for the Development of a Photogrammetry-based Augmented Reality and Gesture Recognition Projection System
                </h4>
                <p className="text-muted-foreground font-mono text-sm mt-1">IEEE Xplore · ICI-2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; open source</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Contributions</h3>
          <div className="grid gap-4">
            {[
              { name: "Tasveer", date: "June 2019", desc: "Implemented frame dimension detection before download to optimize resource usage." },
              { name: "MapBot", date: "Aug 2019", desc: "Streamlined CI using Travis CI — 40% pipeline time reduction. Updated codebase to PEP8." },
              { name: "CropAI", date: "Oct 2019", desc: "Migrated TensorFlow models to Keras — improved accuracy to 97% (+1.8%). Authored cross-platform setup docs." },
            ].map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-5 hover:glow-border transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <GitBranch className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      {project.name}
                      <span className="ml-2 text-muted-foreground font-mono text-xs">{project.date}</span>
                    </h4>
                    <p className="text-secondary-foreground/70 text-sm mt-1">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">&gt; certificates</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "AWS Cloud Practitioner Essentials",
              "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
              "Introduction to Statistics – Udacity",
              "TensorFlow for Deep Learning – Udacity",
            ].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationAndMore;
