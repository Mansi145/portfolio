import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "More", href: "#more" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-primary font-semibold text-sm">
          MG<span className="animate-pulse">_</span>
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
