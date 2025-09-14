import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-scale-breath"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforme sua vida com <span className="text-gradient animate-shimmer">R$ 79,90</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um investimento que pode retornar milhares de vezes em poucos meses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Comparação de Preços */}
            <div className="space-y-6">
              <div className="floating-card rounded-xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Valor normal:</span>
                  <span className="text-2xl font-bold text-muted-foreground line-through">R$ 297</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold">Oferta especial:</span>
                  <span className="text-4xl font-bold text-primary glow-text animate-pulse-neon">R$ 79,90</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-primary mb-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                  <Clock className="w-4 h-4 animate-glow-pulse" />
                  <span>Oferta por tempo limitado</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Vagas limitadas para garantir suporte de qualidade</span>
                </div>
              </div>

              {/* O que inclui */}
              <div className="card-glow rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">O que está incluído:</h3>
                <div className="space-y-3">
                  {[
                    "6 módulos completos (4+ horas de conteúdo)",
                    "Acesso vitalício ao curso",
                    "Comunidade exclusiva de alunos",
                    "Suporte direto do instrutor",
                    "3 bônus exclusivos (valor R$ 211)",
                    "Garantia de 7 dias",
                    "Certificado de conclusão"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="text-center">
              <div className="card-glow rounded-2xl p-8 neon-border">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">R$ 79,90</div>
                  <p className="text-muted-foreground">pagamento único</p>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-8 h-auto whitespace-normal leading-tight mb-6"
                  onClick={() => window.open('https://pay.hub.la/EYvGkhvrNHjdVjbwDq9t', '_blank')}
                >
                  Quero criar minha empresa de IA em 30 dias
                  <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
                </Button>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Acesso imediato após o pagamento</p>
                  <p>✅ Garantia incondicional de 7 dias</p>
                  <p>✅ Pagamento 100% seguro</p>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <p className="text-sm text-primary font-semibold">
                    ⚠️ Restam apenas 47 vagas para esta turma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;