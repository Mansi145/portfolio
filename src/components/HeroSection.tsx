import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            &gt; hello world
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-gradient glow-text">Mansi Gupta</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 leading-relaxed">
            Backend & Infrastructure Engineer
          </p>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
            3 years of experience building high-performance backend services and automating
            production-grade infrastructure using Python/C++, Docker, Kubernetes, and AWS/Oracle/GCP.
            Specialized in containerized deployments, CI/CD, and distributed systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
        >
          <a href="mailto:guptamansi9350@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors px-3 py-2 rounded-md border border-border hover:glow-border">
            <Mail className="w-4 h-4" />
            <span className="font-mono">guptamansi9350@gmail.com</span>
          </a>
          <span className="flex items-center gap-2 px-3 py-2 rounded-md border border-border">
            <MapPin className="w-4 h-4" />
            <span className="font-mono">Pune, India</span>
          </span>
          <a href="tel:+919990011989" className="flex items-center gap-2 hover:text-primary transition-colors px-3 py-2 rounded-md border border-border hover:glow-border">
            <Phone className="w-4 h-4" />
            <span className="font-mono">+91-9990011989</span>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors px-3 py-2 rounded-md border border-border hover:glow-border">
            <Linkedin className="w-4 h-4" />
            <span className="font-mono">LinkedIn</span>
          </a>
          <a href="https://github.com/Mansi145" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors px-3 py-2 rounded-md border border-border hover:glow-border">
            <Github className="w-4 h-4" />
            <span className="font-mono">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <ChevronDown className="w-5 h-5 text-primary/50 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
