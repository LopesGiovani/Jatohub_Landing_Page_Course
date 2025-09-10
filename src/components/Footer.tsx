const Footer = () => {
  return (
    <footer className="glass border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 hover-lift">
            <img 
              src="/0c1e7918-a560-414a-94d5-6638ac7336c6.png" 
              alt="Jato Hub Logo" 
              className="w-10 h-10 animate-glow-pulse"
            />
            <span className="text-xl font-bold text-gradient">Jato Hub</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth hover-glow relative group">
              Política de Privacidade
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-primary transition-smooth hover-glow relative group">
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-primary transition-smooth hover-glow relative group">
              Suporte
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 Jato Hub. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: XX.XXX.XXX/0001-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;