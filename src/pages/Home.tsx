import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { ArrowRight, Award, CheckCircle, Rocket, Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Landing Pages de Alto Impacto",
      description: "Páginas que convertem visitantes em clientes com design irresistível e estratégia comprovada",
      highlight: "Aumento de 400% nas conversões",
      color: "from-fire-primary to-fire-secondary"
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Sites WordPress Profissionais", 
      description: "Sites completos e otimizados que posicionam sua marca como líder no mercado",
      highlight: "Entrega em até 5 dias",
      color: "from-fire-secondary to-fire-accent"
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Desenvolvimento Exclusivo",
      description: "Soluções únicas e personalizadas que fazem sua empresa se destacar da concorrência",
      highlight: "100% sob medida",
      color: "from-fire-accent to-fire-primary"
    }
  ];

  const benefits = [
    "Design moderno e irresistível",
    "Otimização para máximas conversões", 
    "SEO avançado para Google",
    "Suporte dedicado 24/7",
    "Entrega expressa garantida",
    "ROI comprovado desde o dia 1"
  ];

  return (
    <div className="overflow-hidden">
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative min-h-screen flex items-center justify-center particle-bg">
          <div className="absolute inset-0 fire-gradient opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <Sparkles className="h-16 w-16 text-orange-200 opacity-60" />
          </div>
          <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <Zap className="h-20 w-20 text-white opacity-40" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
            <Target className="h-12 w-12 text-orange-200 opacity-50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
                <Sparkles className="h-4 w-4 mr-2 text-orange-200" />
                <span className="text-sm font-medium">Agência Digital #1 em Resultados</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-8 leading-tight">
                Sua Empresa
                <span className="block text-orange-200 font-black drop-shadow-2xl">Dominando</span>
                <span className="block text-orange-100">a Internet</span>
              </h1>
              
              <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto opacity-95 font-light leading-relaxed">
                Criamos sites que não apenas impressionam, mas 
                <span className="font-bold text-orange-200"> transformam visitantes em clientes fiéis</span> 
                e fazem sua receita explodir
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contato">
                  <Button size="lg" className="bg-white text-fire-dark hover:bg-orange-50 hover:text-fire-primary px-12 py-6 text-xl font-bold hover-lift hover-glow rounded-full shadow-2xl">
                    <Rocket className="mr-3 h-6 w-6" />
                    Começar Nosso Projeto
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/servicos">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-12 py-6 text-xl font-bold hover-lift rounded-full backdrop-blur-sm bg-transparent">
                    Ver Cases de Sucesso
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section - Enhanced */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-32 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-fire-primary/5 to-fire-accent/5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center mb-20 animate-fade-in-up">
                <div className="inline-flex items-center bg-fire-gradient-soft border border-fire-primary/20 rounded-full px-6 py-2 mb-6">
                  <Target className="h-4 w-4 mr-2 text-fire-primary" />
                  <span className="text-sm font-semibold text-fire-primary">Serviços Premium</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
                  Mostre ao mundo o seu melhor — <span className="fire-text-gradient">crie seu site com a Fire Domínios!</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 200 + 400}>
                  <Card className="hover-lift border-0 shadow-2xl h-full animate-scale-in glass-card group overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative z-10">
                          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {service.highlight}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 font-poppins group-hover:text-fire-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                        <Link to="/contato">
                          <Button className="w-full fire-gradient text-white hover:shadow-xl hover-lift rounded-full py-6 text-lg font-semibold">
                            Quero Este Serviço
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Section - Redesigned */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-32 fire-gradient-reverse text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 particle-bg"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left" delay={300}>
                <div className="animate-fade-in-up">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
                    <Award className="h-4 w-4 mr-2 text-orange-200" />
                    <span className="text-sm font-medium">Por que Fire Domínios?</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight">
                    A Escolha dos <span className="text-orange-200">Vencedores</span>
                  </h2>
                  
                  <p className="text-xl mb-10 opacity-95 leading-relaxed">
                    Não somos apenas mais uma agência. Somos arquitetos do sucesso digital, 
                    <span className="font-bold text-orange-200"> especialistas em criar experiências que vendem</span>
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-4 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-fire-primary" />
                        </div>
                        <span className="text-lg font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/sobre">
                    <Button size="lg" className="bg-white text-fire-primary hover:bg-orange-50 px-10 py-6 text-lg font-bold hover-lift rounded-full shadow-xl">
                      <Users className="mr-3 h-5 w-5" />
                      Conhecer Nossa História
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={500}>
                <div className="relative animate-scale-in">
                  <div className="glass-card rounded-3xl p-10 text-center transform hover:rotate-0 transition-transform duration-500 hover-glow">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-fire-primary rounded-full mb-8">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Resultados Extraordinários</h3>
                    
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-6 fire-text-gradient">Excelência</div>
                      <div className="text-lg text-gray-600 font-medium">
                        Entregamos projetos que transformam negócios e geram resultados excepcionais para nossos clientes
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA Section - Enhanced */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-32 fire-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 particle-bg"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal direction="fade" delay={400}>
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
                  <Sparkles className="h-4 w-4 mr-2 text-orange-200" />
                  <span className="text-sm font-medium">Última Chance de Transformar Seu Negócio</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-8 leading-tight">
                  Pronto para <span className="text-orange-200">Fazer Parte</span> da Nossa História de Sucesso?
                </h2>
                
                <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
                  Vamos juntos criar o próximo capítulo de transformação digital do seu negócio
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/contato">
                    <Button size="lg" className="bg-white text-fire-dark hover:bg-orange-50 hover:text-fire-primary px-12 py-6 text-xl font-bold hover-lift hover-glow rounded-full shadow-2xl">
                      <Rocket className="mr-3 h-6 w-6" />
                      Começar Nosso Projeto
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                  <Link to="/servicos">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-12 py-6 text-xl font-bold hover-lift rounded-full backdrop-blur-sm bg-transparent">
                      Ver Nossos Serviços
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
