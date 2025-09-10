import { Shield, Clock, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section id="garantia" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Garantia Total</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Sua satisfação é <span className="text-gradient">garantida</span>
          </h2>

          <div className="card-glow rounded-2xl p-8 md:p-12 neon-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Garantia de 7 dias ou seu dinheiro de volta
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "Se em até 7 dias você sentir que o curso não é para você, 
                  devolvemos 100% do seu investimento. <strong>Risco zero.</strong>"
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Reembolso integral garantido</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Processo rápido e simples</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Sem perguntas ou burocracias</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Pagamento 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
            <p className="text-muted-foreground">
              <strong>Por que oferecemos essa garantia?</strong><br />
              Porque temos absoluta confiança na qualidade do nosso conteúdo. 
              Mais de 500 alunos já transformaram suas vidas com esse método.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;