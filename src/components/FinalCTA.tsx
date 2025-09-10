import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBzdHJva2U9IiNmZmZmZmYwOCIgZmlsbD0ibm9uZSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Sua empresa de IA está a <span className="text-gradient">um clique</span> de distância
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Não deixe esta oportunidade passar. O mercado de IA está explodindo e 
            quem entrar agora sai na frente.
          </p>

          {/* Card Principal */}
          <div className="card-glow rounded-2xl p-8 md:p-12 neon-border mb-12">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Acesso Imediato</h3>
                <p className="text-sm text-muted-foreground">
                  Comece a assistir agora mesmo
                </p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Comunidade Exclusiva</h3>
                <p className="text-sm text-muted-foreground">
                  Networking com outros empreendedores
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Garantia Total</h3>
                <p className="text-sm text-muted-foreground">
                  7 dias para testar sem riscos
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-primary mb-2">R$ 79,90</div>
              <p className="text-muted-foreground">
                <span className="line-through">R$ 297</span> • Oferta especial de lançamento
              </p>
            </div>

            <Button variant="hero" size="lg" className="text-xl px-12 py-6 h-auto w-full md:w-auto">
              Quero criar minha empresa de IA em 30 dias (por apenas R$79,90)
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Urgência */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Últimas 47 vagas disponíveis</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Oferta válida por tempo limitado</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;