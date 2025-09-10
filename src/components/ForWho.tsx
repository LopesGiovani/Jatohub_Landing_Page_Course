import { CheckCircle } from "lucide-react";

const ForWho = () => {
  const targetAudience = [
    "Quer entrar no mercado de IA mas não sabe por onde começar.",
    "Deseja transformar IA em negócio real e lucrativo.",
    "Busca uma forma prática de criar sua empresa sem gastar uma fortuna.",
    "Quer aprender com quem já aplica IA em automações, vendas e negócios."
  ];

  return (
    <section id="curso" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Para quem é este <span className="text-gradient">curso?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Este curso é ideal para empreendedores que querem abraçar o futuro da tecnologia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glow rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Este curso é para você que:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/30">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;