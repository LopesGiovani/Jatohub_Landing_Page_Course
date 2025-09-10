import { BookOpen, Building, Lightbulb, Users, TrendingUp, Rocket } from "lucide-react";

const CourseStructure = () => {
  const modules = [
    {
      icon: TrendingUp,
      number: "01",
      title: "Oportunidade bilionária da IA em 2025",
      description: "Entenda o cenário atual e as oportunidades únicas que existem hoje no mercado de IA"
    },
    {
      icon: Building,
      number: "02", 
      title: "Modelos de negócios de IA que funcionam",
      description: "Conheça os modelos mais lucrativos e qual se adapta melhor ao seu perfil"
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Criando seu MVP com ferramentas simples",
      description: "Construa seu primeiro produto viável sem conhecimento técnico avançado"
    },
    {
      icon: BookOpen,
      number: "04",
      title: "Estruturação da empresa (marca, processos e legal)",
      description: "Organize todos os aspectos legais e operacionais para funcionar profissionalmente"
    },
    {
      icon: Users,
      number: "05",
      title: "Primeiros clientes e vendas com IA",
      description: "Estratégias práticas para conseguir seus primeiros contratos e faturamento"
    },
    {
      icon: Rocket,
      number: "06",
      title: "Escalando para se tornar uma empresa sólida",
      description: "Como crescer de forma sustentável e se estabelecer no mercado"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Estrutura do <span className="text-gradient">curso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6 módulos completos que vão te levar do zero à sua primeira empresa de IA funcionando
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="glass rounded-xl p-6 hover-lift neon-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {module.number}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {module.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {module.description}
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

export default CourseStructure;