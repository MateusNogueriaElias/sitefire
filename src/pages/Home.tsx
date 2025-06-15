import { ArrowRight, Play, CheckCircle, Star, Users, Trophy, Target, Zap, Rocket, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-fire-primary" />,
      title: "Landing Pages de Alto Impacto",
      description: "Páginas focadas em conversão que transformam visitantes em leads qualificados",
      link: "/servicos"
    },
    {
      icon: <Target className="h-12 w-12 text-fire-primary" />,
      title: "Sites WordPress Profissionais",
      description: "Sites completos e profissionais com painel administrativo intuitivo",
      link: "/servicos"
    },
    {
      icon: <Rocket className="h-12 w-12 text-fire-primary" />,
      title: "Desenvolvimento Personalizado",
      description: "Soluções sob medida para necessidades específicas do seu negócio",
      link: "/servicos"
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6 text-yellow-300" />,
      title: "Design Exclusivo",
      description: "Layouts personalizados que refletem a identidade da sua marca."
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-300" />,
      title: "Foco no Cliente",
      description: "Entendemos suas necessidades para entregar a melhor solução."
    },
    {
      icon: <Trophy className="h-6 w-6 text-yellow-300" />,
      title: "Resultados Comprovados",
      description: "Aumente sua visibilidade e impulsione seus resultados online."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "Empresa X",
      testimonial: "A FireDomínios transformou nossa presença online. Profissionais e atenciosos!",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Maria Oliveira",
      company: "Empresa Y",
      testimonial: "Superaram nossas expectativas. O site ficou incrível e já estamos colhendo os frutos.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b82bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Carlos Pereira",
      company: "Empresa Z",
      testimonial: "Recomendo a FireDomínios para todos que buscam um serviço de alta qualidade e personalizado.",
      image: "https://images.unsplash.com/photo-1573496800685-a280abf34bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center fire-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 particle-bg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              Mostre ao mundo o seu melhor — crie seu site com a <span className="fire-text-glow">FireDomínios!</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl opacity-90">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Sites Profissionais</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>E-commerce Completo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Suporte Dedicado</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift">
                  Começar Meu Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-fire-primary px-8 py-4 text-lg font-semibold hover-lift">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
                Nossos <span className="fire-text-gradient">Serviços</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforme sua visão em realidade com nossas soluções digitais
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover-lift border-0 shadow-lg h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 fire-gradient rounded-full mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold font-poppins mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link to={service.link || "#"}>
                      <Button className="w-full fire-gradient text-white hover:shadow-lg">
                        Saiba Mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
                Por que Escolher a <span className="fire-text-gradient">FireDomínios?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra os diferenciais que nos tornam a melhor escolha para o seu projeto
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover-lift border-0 shadow-md h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-full mb-4 mx-auto">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold font-poppins mb-2">{feature.title}</CardTitle>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 fire-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-8">
              Resultados <span className="text-yellow-300">Reais</span> para o Seu Negócio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mb-4 md:mb-0">
                <div className="text-5xl font-bold font-poppins mb-2">300% +</div>
                <p className="text-xl opacity-80">Aumento médio nas conversões de clientes</p>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-5xl font-bold font-poppins mb-2">5x +</div>
                <p className="text-xl opacity-80">Retorno sobre o investimento em campanhas de marketing</p>
              </div>
              <div>
                <div className="text-5xl font-bold font-poppins mb-2">95% +</div>
                <p className="text-xl opacity-80">Taxa de satisfação dos clientes com nossos serviços</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
                O que Nossos <span className="fire-text-gradient">Clientes</span> Dizem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja o que nossos clientes estão falando sobre a experiência com a FireDomínios
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover-lift border-0 shadow-md h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <CardTitle className="text-lg font-bold font-poppins">{testimonial.name}</CardTitle>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 fire-gradient-reverse text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-8">
              Pronto para Levar Seu Negócio para o <span className="text-yellow-300">Próximo Nível?</span>
            </h2>
            <p className="text-xl opacity-90 mb-12">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift">
                Solicitar Orçamento Gratuito
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
