
import { ArrowRight, Zap, Target, Rocket, CheckCircle, Star, Sparkles, TrendingUp, Users, Award, Crown, Gem, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Landing Pages Profissionais",
      description: "Páginas otimizadas que convertem visitantes em clientes, com design moderno e funcionalidades avançadas",
      highlight: "Alta Conversão",
      color: "fire-gradient"
    },
    {
      icon: <Crown className="h-10 w-10 text-white" />,
      title: "Sites WordPress Premium", 
      description: "Websites completos e personalizados que posicionam sua marca como referência no mercado",
      highlight: "Entrega Rápida",
      color: "fire-gradient"
    },
    {
      icon: <Gem className="h-10 w-10 text-white" />,
      title: "Desenvolvimento Personalizado",
      description: "Soluções únicas e exclusivas desenvolvidas especificamente para as necessidades do seu negócio",
      highlight: "100% Exclusivo",
      color: "fire-gradient"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "TechStart Solutions",
      content: "Resultados incríveis! Nosso faturamento cresceu significativamente em poucos meses. Investimento que realmente vale a pena.",
      rating: 5,
      avatar: "👨‍💼",
      result: "300% Crescimento"
    },
    {
      name: "Marina Silva",
      company: "Boutique Elegance",
      content: "Site lindíssimo e funcional. Recebo elogios constantes dos clientes e o número de vendas online aumentou muito.",
      rating: 5,
      avatar: "👩‍💼",
      result: "150% Vendas"
    },
    {
      name: "Pedro Oliveira",
      company: "Consultoria Premium",
      content: "Profissionais excepcionais! Entregaram exatamente o que precisávamos, no prazo e com qualidade superior.",
      rating: 5,
      avatar: "👨‍🎓",
      result: "250% Leads"
    }
  ];

  const stats = [
    { number: "500%", label: "Aumento em Conversões", icon: TrendingUp },
    { number: "300+", label: "Projetos Entregues", icon: Award },
    { number: "24h", label: "Resposta Garantida", icon: Zap },
    { number: "100%", label: "Satisfação Garantida", icon: Users }
  ];

  const benefits = [
    "Design profissional e moderno",
    "Tecnologia de ponta", 
    "SEO otimizado para Google",
    "Suporte técnico especializado",
    "Entrega dentro do prazo",
    "ROI comprovado"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        {/* Elementos Flutuantes Suaves */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Sparkles className="h-16 w-16 text-fire-primary" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Crown className="h-20 w-20 text-fire-secondary" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float opacity-25" style={{ animationDelay: '4s' }}>
          <Gem className="h-12 w-12 text-fire-accent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 magnetic-effect">
              <Crown className="h-5 w-5 mr-2 text-fire-primary" />
              <span className="text-sm font-medium fire-text-gradient">Agência Digital Premium</span>
              <Sparkles className="h-5 w-5 ml-2 text-fire-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-playfair mb-8 leading-tight text-gray-900">
              <span className="block">Domine a</span>
              <span className="block fire-text-gradient">Internet</span>
              <span className="block">com Estilo</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Criamos sites profissionais que 
              <span className="font-bold fire-text-gradient"> impressionam seus clientes</span> e 
              <span className="font-bold text-gray-800"> geram resultados reais</span> para seu negócio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contato">
                <Button size="lg" className="btn-fire text-white px-12 py-6 text-lg font-medium hover-lift rounded-lg shadow-lg magnetic-effect">
                  <Rocket className="mr-3 h-5 w-5" />
                  Começar Meu Projeto
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="border-2 border-fire-primary text-fire-primary hover:bg-fire-primary hover:text-white px-12 py-6 text-lg font-medium hover-lift rounded-lg magnetic-effect">
                  <Shield className="mr-3 h-5 w-5" />
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>

            {/* Stats Suavizados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in glass-card p-6 rounded-xl hover-lift magnetic-effect" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 fire-gradient-soft rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-fire-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-2 fire-text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center glass-card border border-fire-primary/20 rounded-full px-6 py-3 mb-6 magnetic-effect">
              <Target className="h-5 w-5 mr-2 text-fire-primary" />
              <span className="text-sm font-medium text-fire-primary">NOSSOS SERVIÇOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
              Soluções que <span className="fire-text-gradient">Transformam</span> seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada projeto é uma 
              <span className="font-bold fire-text-gradient"> experiência única</span> 
              criada para elevar sua marca ao próximo nível
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg h-full animate-scale-in glass-card group overflow-hidden magnetic-effect" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <div className={`${service.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 font-playfair text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    <Link to="/contato">
                      <Button className="w-full btn-fire text-white hover-lift rounded-lg py-4 font-medium magnetic-effect">
                        Quero Este Serviço
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 fire-gradient text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center glass-morphism border border-white/30 rounded-full px-6 py-3 mb-8 magnetic-effect">
                <Award className="h-5 w-5 mr-2 text-white" />
                <span className="text-sm font-medium">Por que Fire Dominios?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8 leading-tight">
                A Escolha dos <span className="text-yellow-200">Vencedores</span>
              </h2>
              
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Não somos apenas uma agência. Somos 
                <span className="font-bold text-yellow-200"> parceiros estratégicos</span> que transformam
                <span className="font-bold"> visões em realidade digital</span>
              </p>
              
              <div className="space-y-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-slide-in-right hover-lift magnetic-effect" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/sobre">
                <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 font-medium hover-lift rounded-lg shadow-lg magnetic-effect">
                  <Users className="mr-3 h-5 w-5" />
                  Conheça Nossa História
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="glass-card rounded-2xl p-8 text-center hover-glow magnetic-effect">
                <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-xl mb-8">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-8 text-gray-800">Resultados Comprovados</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover-lift">
                    <div className="text-4xl font-bold mb-2 fire-text-gradient">500%</div>
                    <div className="text-sm text-gray-600">Aumento em Vendas</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-4xl font-bold mb-2 fire-text-gradient">300+</div>
                    <div className="text-sm text-gray-600">Projetos Entregues</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-4xl font-bold mb-2 fire-text-gradient">24h</div>
                    <div className="text-sm text-gray-600">Resposta Rápida</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-4xl font-bold mb-2 fire-text-gradient">100%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center glass-card border border-fire-primary/20 rounded-full px-6 py-3 mb-6 magnetic-effect">
              <Star className="h-5 w-5 mr-2 text-fire-primary" />
              <span className="text-sm font-medium text-fire-primary">DEPOIMENTOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-gray-900">
              Clientes que <span className="fire-text-gradient">Conquistaram</span> Seus Objetivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de empresas que alcançaram 
              <span className="font-bold fire-text-gradient"> resultados extraordinários</span> conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in glass-card group magnetic-effect" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="inline-block fire-gradient text-white px-3 py-1 rounded-full text-xs font-medium mb-6">
                    {testimonial.result}
                  </div>
                  
                  <p className="text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6 flex items-center space-x-4">
                    <div className="w-12 h-12 fire-gradient rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="fire-text-gradient text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 fire-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center glass-morphism border border-white/30 rounded-full px-6 py-3 mb-8 magnetic-effect">
              <Sparkles className="h-5 w-5 mr-2 text-white" />
              <span className="text-sm font-medium">Transforme Sua Presença Digital</span>
              <Crown className="h-5 w-5 ml-2 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8 leading-tight">
              Pronto para <span className="text-yellow-200">Dominar</span> Seu Mercado?
            </h2>
            
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Vamos criar juntos uma presença digital que 
              <span className="font-bold text-yellow-200"> impressiona, converte e gera resultados!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-12 py-6 text-lg font-medium hover-lift rounded-lg shadow-lg magnetic-effect">
                  <Rocket className="mr-3 h-5 w-5" />
                  Começar Meu Projeto Agora
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-12 py-6 text-lg font-medium hover-lift rounded-lg glass-morphism magnetic-effect">
                  <Crown className="mr-3 h-5 w-5" />
                  Ver Todos os Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
