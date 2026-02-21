const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Built with React & Tailwind · Mansi Gupta © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
