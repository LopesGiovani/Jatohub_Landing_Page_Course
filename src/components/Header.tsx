import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass hover-glass border-b border-border/50 animate-fade-in-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 hover-lift">
            <img 
              src="/54dde7d1-82db-4b77-a0a3-f6e231bec3df.png" 
              alt="Jato Hub Logo" 
              className="w-10 h-10 animate-glow-pulse"
            />
            <span className="text-xl font-bold text-gradient">Jato Hub</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#curso" className="text-foreground/80 hover:text-primary transition-smooth hover-glow">
              O Curso
            </a>
            <a href="#instrutor" className="text-foreground/80 hover:text-primary transition-smooth hover-glow">
              Instrutor
            </a>
            <a href="#garantia" className="text-foreground/80 hover:text-primary transition-smooth hover-glow">
              Garantia
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              variant="cta" 
              className="hidden sm:flex ripple-effect hover-lift animate-pulse-neon"
              onClick={() => window.open('https://pay.hub.la/EYvGkhvrNHjdVjbwDq9t', '_blank')}
            >
              Acessar Curso
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden hover-glass">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;