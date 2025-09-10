import { Zap, Target, Cog, Users, TrendingUp, Rocket } from "lucide-react";

const WhatYouLearn = () => {
  const learnings = [
    {
      icon: Target,
      title: "Entender como escolher o modelo de negócio ideal de IA.",
      description: "Descubra qual tipo de empresa de IA se alinha com seus objetivos e mercado"
    },
    {
      icon: Cog,
      title: "Usar ferramentas no-code para criar seu primeiro protótipo.",
      description: "Construa soluções reais sem precisar programar uma linha de código"
    },
    {
      icon: Rocket,
      title: "Montar a estrutura mínima da sua empresa (marca, processos e pitch).",
      description: "Organize todos os aspectos fundamentais para operar profissionalmente"
    },
    {
      icon: Users,
      title: "Validar seu produto/serviço e conquistar os primeiros clientes.",
      description: "Estratégias testadas para provar seu conceito e gerar as primeiras vendas"
    },
    {
      icon: TrendingUp,
      title: "Escalar sua empresa com estratégias de marketing e tráfego pago.",
      description: "Cresça de forma sustentável e previsível no mercado de IA"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Conteúdo Completo</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dentro do <strong>Empresa de IA em 30 Dias</strong>, você vai dominar todas as etapas 
            necessárias para criar e escalar seu negócio:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-glow rounded-xl p-6 hover:scale-105 transition-bounce">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;