import { Building, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Building,
      title: "CEO da Jato Hub",
      description: "Hub de tecnologia, IA e automações"
    },
    {
      icon: Users,
      title: "Clientes Corporativos",
      description: "Bayer, AgroSolutions, Dentista do Povo"
    },
    {
      icon: Award,
      title: "Especialista em IA",
      description: "Aplicada a negócios e automações"
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Dezenas de empresas transformadas"
    }
  ];

  return (
    <section id="instrutor" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sobre o <span className="text-gradient">instrutor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda com quem já está aplicando IA em empresas reais
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Foto e Informações Básicas */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-card rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/5e99a7c9-28b2-43e0-a9e1-cb7582844471.png"
                  alt="Joel Gouvêa Neto - CEO da Jato Hub"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Joel Gouvêa Neto
              </h3>
              
              <p className="text-lg text-primary font-semibold mb-6">
                Fundador e CEO da Jato Hub
              </p>
            </div>

            {/* Descrição e Conquistas */}
            <div>
              <div className="card-glow rounded-xl p-8 mb-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  <strong>Joel Gouvêa Neto</strong> é fundador e CEO da Jato Hub, hub de 
                  tecnologia, IA e automações que atende empresas como Bayer, AgroSolutions 
                  e Dentista do Povo.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90">
                  Especialista em inteligência artificial aplicada a negócios, já ajudou 
                  dezenas de empresas a reduzirem custos, aumentarem vendas e escalarem 
                  operações com tecnologia.
                </p>
              </div>

              {/* Grid de Conquistas */}
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="card-glow rounded-lg p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;