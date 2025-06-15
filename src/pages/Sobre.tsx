
import { Users, Award, Lightbulb, Heart, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Sobre = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-fire-primary" />,
      title: "Inovação",
      description: "Sempre buscamos as tecnologias e tendências mais avançadas para criar soluções únicas"
    },
    {
      icon: <Heart className="h-8 w-8 text-fire-primary" />,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete na qualidade e dedicação em cada projeto"
    },
    {
      icon: <Target className="h-8 w-8 text-fire-primary" />,
      title: "Resultados",
      description: "Focamos em entregar resultados concretos que impactem positivamente seu negócio"
    },
    {
      icon: <Users className="h-8 w-8 text-fire-primary" />,
      title: "Parceria",
      description: "Não somos apenas fornecedores, somos parceiros estratégicos do seu sucesso"
    }
  ];

  const team = [
    {
      name: "Gabriel Fire",
      role: "CEO & Founder",
      description: "Especialista em estratégia digital com mais de 8 anos de experiência em transformação digital"
    },
    {
      name: "Marina Code",
      role: "Head de Desenvolvimento",
      description: "Desenvolvedora full-stack apaixonada por criar soluções elegantes e eficientes"
    },
    {
      name: "Lucas Design",
      role: "Creative Director",
      description: "Designer visionário especializado em UX/UI e branding para empresas inovadoras"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Fundação",
      description: "Nasceu o sonho de revolucionar a presença digital das empresas"
    },
    {
      year: "2021",
      title: "Primeiros Sucessos",
      description: "Mais de 50 projetos entregues com resultados excepcionais"
    },
    {
      year: "2022",
      title: "Expansão",
      description: "Crescimento da equipe e diversificação dos serviços"
    },
    {
      year: "2023",
      title: "Reconhecimento",
      description: "Premiação como uma das melhores agências digitais do ano"
    },
    {
      year: "2024",
      title: "Inovação",
      description: "Lançamento de novas tecnologias e metodologias exclusivas"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 fire-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Sobre a <span className="text-yellow-300">Fire Dominios</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Somos uma agência digital apaixonada por transformar ideias em experiências digitais extraordinárias
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Nossa <span className="fire-text-gradient">História</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Fire Dominios nasceu da visão de que toda empresa merece uma presença digital 
                que não apenas existe, mas que verdadeiramente impacta e transforma negócios.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Fundada em 2020, começamos como um pequeno time de apaixonados por tecnologia 
                e design. Hoje, somos reconhecidos como uma das agências digitais mais inovadoras, 
                com um portfólio de mais de 200 projetos bem-sucedidos.
              </p>
              <p className="text-lg text-gray-600">
                Nosso segredo? Combinar criatividade excepcional com tecnologia de ponta e, 
                acima de tudo, entender profundamente as necessidades de cada cliente.
              </p>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="fire-gradient rounded-2xl p-8 text-white text-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
                <p className="text-lg opacity-90 mb-6">
                  Empoderar empresas através de soluções digitais que convertem visitantes em clientes fiéis
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-2">200+</div>
                    <div className="text-sm opacity-90">Projetos Entregues</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">4 Anos</div>
                    <div className="text-sm opacity-90">de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Satisfação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-fire-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Nossos <span className="fire-text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que norteiam cada decisão e cada projeto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Nossa <span className="fire-text-gradient">Jornada</span>
            </h2>
            <p className="text-xl text-gray-600">
              Os marcos mais importantes da nossa trajetória de sucesso
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-fire-primary hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <Card className="hover-lift border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-fire-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-3 font-poppins">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 fire-gradient rounded-full items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Nossa <span className="fire-text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os talentos por trás dos projetos que transformam negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="w-24 h-24 fire-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-poppins">{member.name}</h3>
                  <div className="text-fire-primary font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fire-gradient-reverse text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Pronto para Fazer Parte da Nossa História de Sucesso?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vamos juntos criar o próximo capítulo de transformação digital do seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contato" className="fire-gradient bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300">
                Começar Nosso Projeto
              </a>
              <a href="/servicos" className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300">
                Ver Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
