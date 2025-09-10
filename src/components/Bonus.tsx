import { Gift, FileText, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bonus = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Kit de Prompts Empresariais",
      subtitle: "50 prompts prontos para gestão, vendas e marketing",
      value: "R$ 79,90",
      description: "Prompts testados e otimizados para automatizar processos empresariais"
    },
    {
      icon: FileText,
      title: "Modelo de Proposta Comercial de IA",
      subtitle: "Pronto para personalizar e usar",
      value: "R$ 67",
      description: "Template profissional que já converteu milhares em vendas"
    },
    {
      icon: Wrench,
      title: "Guia das Ferramentas mais usadas em 2025",
      subtitle: "Todas no-code e acessíveis",
      value: "R$ 47",
      description: "Lista atualizada das melhores ferramentas para criar empresas de IA"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Bônus Exclusivos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bônus que <span className="text-gradient">aceleram</span> seu sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além do curso completo, você recebe materiais exclusivos para implementar mais rápido
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div key={index} className="card-glow rounded-xl p-6 text-center relative">
                  {/* Badge de Valor */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {bonus.value}
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 mt-2">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-primary text-sm font-semibold mb-3">
                    {bonus.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo do Valor */}
        <div className="max-w-lg mx-auto">
          <div className="card-glow rounded-xl p-8 text-center neon-border">
            <h3 className="text-2xl font-bold mb-4">Valor total dos bônus:</h3>
            <div className="text-4xl font-bold text-primary mb-4">R$ {totalValue}</div>
            <p className="text-muted-foreground mb-6">
              Mas hoje você leva tudo isso de <strong>graça</strong> junto com o curso
            </p>
            
            <Button variant="hero" size="lg" className="w-full">
              Quero todos os bônus agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;