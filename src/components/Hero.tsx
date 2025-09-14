import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBzdHJva2U9IiNmZmZmZmYwOCIgZmlsbD0ibm9uZSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-scale-breath"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: '0s'
    }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary rounded-full animate-float animate-glow-pulse"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-float animate-glow-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-primary/50 rounded-full animate-float animate-glow-pulse" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/70 rounded-full animate-float animate-glow-pulse" style={{
      animationDelay: '3s'
    }}></div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        {/* Badge de Destaque */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 hover-glow animate-bounce-in">
          <Zap className="w-4 h-4 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium">Oportunidade Bilionária da IA em 2025</span>
        </div>

        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          Construa sua Empresa de{" "}
          <span className="text-gradient glow-text animate-shimmer">Inteligência Artificial</span>{" "}
          em 30 Dias
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <strong>mesmo sem saber programar</strong>
        </p>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{
        animationDelay: '0.6s'
      }}>
          👉 Transforme ideias em negócio real com IA, validando clientes e faturando rápido.
        </p>

        {/* Descrição Adicional */}
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
        animationDelay: '0.8s'
      }}>
          "Descubra o passo a passo para criar sua primeira empresa de Inteligência Artificial, 
          usando ferramentas simples, acessíveis e que qualquer pessoa pode aplicar."
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{
        animationDelay: '1s'
      }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-sm sm:text-base lg:text-lg px-3 sm:px-6 lg:px-8 py-4 sm:py-4 h-auto ripple-effect hover-lift micro-bounce w-full sm:w-auto whitespace-normal leading-tight text-center"
            onClick={() => window.open('https://pay.hub.la/EYvGkhvrNHjdVjbwDq9t', '_blank')}
          >
            Quero criar minha empresa de IA agora mesmo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-bounce-in" style={{
          animationDelay: '1.2s'
        }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary animate-glow-pulse" style={{
              animationDelay: `${i * 0.1}s`
            }} />)}
            </div>
            <span>Vagas limitadas</span>
          </div>
        </div>

        {/* Oferta Especial */}
        <div className="floating-card rounded-xl p-6 max-w-md mx-auto neon-border hover-lift animate-bounce-in" style={{
        animationDelay: '1.4s'
      }}>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Valor normal: R$297</p>
            <p className="text-3xl font-bold text-primary mb-2 glow-text animate-pulse-neon">Apenas R$79,90</p>
            <p className="text-sm text-muted-foreground">⚠️ Oferta especial de lançamento</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;