
import { ArrowRight, Zap, Target, Rocket, CheckCircle, Star, Sparkles, TrendingUp, Users, Award, Crown, Gem, Shield, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Landing Pages Magnéticas",
      description: "Páginas que hipnotizam visitantes e os transformam em clientes obsessivos pelo seu produto",
      highlight: "Conversão até 800%",
      color: "fire-gradient-mega",
      glow: "hover-glow-mega"
    },
    {
      icon: <Crown className="h-12 w-12 text-white" />,
      title: "Sites WordPress Imperiais", 
      description: "Websites majestosos que coroam sua marca como a autoridade absoluta do seu nicho",
      highlight: "Entrega em 3 dias",
      color: "fire-gradient-reverse",
      glow: "hover-rainbow"
    },
    {
      icon: <Gem className="h-12 w-12 text-white" />,
      title: "Desenvolvimento Diamante",
      description: "Criações exclusivas e preciosas que fazem seus concorrentes chorarem de inveja",
      highlight: "100% exclusivo",
      color: "fire-gradient",
      glow: "hover-glow-mega"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "TechStart Solutions",
      content: "INACREDITÁVEL! Nosso faturamento EXPLODIU 10x em apenas 2 meses. Cada real investido retornou 50x!",
      rating: 5,
      avatar: "👨‍💼",
      result: "10x FATURAMENTO"
    },
    {
      name: "Marina Silva",
      company: "Boutique Elegance",
      content: "Jamais imaginei que um site pudesse ser TÃO PODEROSO. Clientes me pedem indicação do desenvolvedor!",
      rating: 5,
      avatar: "👩‍💼",
      result: "500% VENDAS"
    },
    {
      name: "Pedro Oliveira",
      company: "Consultoria Premium",
      content: "A concorrência está DESESPERADA tentando descobrir nosso segredo. Fire Dominios é GENIAL!",
      rating: 5,
      avatar: "👨‍🎓",
      result: "1000% LEADS"
    }
  ];

  const stats = [
    { number: "1000%", label: "Explosão em Conversões", icon: TrendingUp, color: "text-pink-500" },
    { number: "500+", label: "Sucessos Arrasadores", icon: Award, color: "text-purple-500" },
    { number: "24h", label: "Resposta Instantânea", icon: Zap, color: "text-blue-500" },
    { number: "∞", label: "Satisfação Garantida", icon: Users, color: "text-green-500" }
  ];

  const benefits = [
    "Design que VICIA e converte",
    "Tecnologia de outro planeta", 
    "SEO que DOMINA o Google",
    "Suporte que nunca te abandona",
    "Entrega que QUEBRA recordes",
    "ROI que EXPLODE desde o dia 1"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Ultra Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center particle-bg-ultra">
        <div className="absolute inset-0 fire-gradient-mega opacity-98"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
        
        {/* Ultra Floating Elements */}
        <div className="absolute top-20 left-10 animate-float-mega">
          <Sparkles className="h-20 w-20 text-yellow-300 opacity-80 animate-pulse-rainbow" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float-mega" style={{ animationDelay: '2s' }}>
          <Crown className="h-24 w-24 text-white opacity-60 animate-rotate-glow" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-mega" style={{ animationDelay: '4s' }}>
          <Gem className="h-16 w-16 text-yellow-300 opacity-70 animate-bounce-glow" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float-mega" style={{ animationDelay: '1s' }}>
          <Flame className="h-14 w-14 text-orange-300 opacity-50 animate-morphing" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up-delayed">
            <div className="inline-flex items-center glass-morphism-ultra rounded-full px-8 py-4 mb-12 magnetic-effect">
              <Crown className="h-6 w-6 mr-3 text-yellow-300 animate-bounce-glow" />
              <span className="text-lg font-bold fire-text-mega">Agência #1 em Resultados IMPOSSÍVEIS</span>
              <Sparkles className="h-6 w-6 ml-3 text-yellow-300 animate-text-shine" />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-playfair mb-12 leading-tight">
              <span className="block fire-text-mega neon-glow">DOMINE</span>
              <span className="block text-white animate-text-shine mb-4">A INTERNET</span>
              <span className="block fire-text-glow animate-pulse-rainbow">COMO UM REI</span>
            </h1>
            
            <p className="text-2xl md:text-4xl mb-16 max-w-6xl mx-auto opacity-95 font-medium leading-relaxed">
              Criamos sites que não apenas 
              <span className="font-black fire-text-mega"> DESTROEM a concorrência</span>, 
              mas fazem seus clientes 
              <span className="font-black text-yellow-300 neon-glow"> IMPLORAREM</span> 
              para comprar de você
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Link to="/contato">
                <Button size="lg" className="btn-fire-mega text-white hover:bg-gray-100 px-16 py-8 text-2xl font-black hover-lift-mega rounded-full shadow-2xl magnetic-effect">
                  <Rocket className="mr-4 h-8 w-8 animate-bounce-glow" />
                  EXPLODIR VENDAS AGORA
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="border-4 border-white text-white hover:bg-white hover:text-fire-primary px-16 py-8 text-2xl font-black hover-lift-mega rounded-full glass-morphism-ultra magnetic-effect">
                  <Shield className="mr-4 h-8 w-8" />
                  Ver CASOS ÉPICOS
                </Button>
              </Link>
            </div>

            {/* Ultra Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in-bounce glass-card-ultra p-8 rounded-3xl hover-lift-mega magnetic-effect" style={{ animationDelay: `${index * 300}ms` }}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-full mb-6 animate-pulse-rainbow ${stat.color}`}>
                    <stat.icon className="h-10 w-10" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black mb-3 fire-text-mega neon-glow">{stat.number}</div>
                  <div className="text-sm opacity-90 font-bold text-gray-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Ultra Enhanced */}
      <section className="py-40 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden particle-bg-ultra">
        <div className="absolute inset-0 bg-gradient-to-r from-fire-primary/10 to-fire-accent/10"></div>
        
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in-up-delayed">
            <div className="inline-flex items-center glass-card-ultra border border-fire-primary/30 rounded-full px-8 py-4 mb-8 magnetic-effect">
              <Target className="h-6 w-6 mr-3 text-fire-primary animate-bounce-glow" />
              <span className="text-lg font-black text-fire-primary">SERVIÇOS DEVASTADORES</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8">
              Soluções que <span className="fire-text-mega">ANIQUILAM</span>
              <br />
              <span className="fire-text-glow">a Concorrência</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
              Cada projeto é uma 
              <span className="font-black fire-text-gradient"> OBRA-PRIMA DIGITAL</span> 
              criada para fazer sua empresa 
              <span className="font-black text-fire-primary neon-glow"> REINAR ABSOLUTA</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Card key={index} className={`${service.glow} border-0 shadow-2xl h-full animate-scale-in-bounce glass-card-ultra group overflow-hidden magnetic-effect`} style={{ animationDelay: `${index * 300}ms` }}>
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${service.color} p-10 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-20 translate-x-20 animate-morphing"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 animate-pulse-rainbow"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-white/30 backdrop-blur-sm rounded-3xl mb-8 group-hover:scale-125 transition-transform duration-500 animate-bounce-glow">
                        {service.icon}
                      </div>
                      <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-black mb-6 neon-glow">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-3xl font-black mb-6 font-playfair group-hover:fire-text-gradient transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-10 leading-relaxed text-lg">{service.description}</p>
                    <Link to="/contato">
                      <Button className="w-full btn-fire-mega text-white hover:shadow-xl hover-lift-mega rounded-full py-8 text-xl font-black magnetic-effect">
                        QUERO DOMINAR AGORA
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Ultra Enhanced */}
      <section className="py-40 fire-gradient-mega text-white relative overflow-hidden particle-bg-ultra">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up-delayed">
              <div className="inline-flex items-center glass-morphism-ultra border border-white/30 rounded-full px-8 py-4 mb-12 magnetic-effect">
                <Award className="h-6 w-6 mr-3 text-yellow-300 animate-bounce-glow" />
                <span className="text-lg font-black">Por que FIRE DOMINIOS?</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black font-playfair mb-12 leading-tight">
                A Escolha dos <span className="text-yellow-300 neon-glow animate-text-shine">CAMPEÕES</span>
              </h2>
              
              <p className="text-2xl mb-12 opacity-95 leading-relaxed font-medium">
                Não somos apenas uma agência. Somos 
                <span className="font-black text-yellow-300 neon-glow"> MAGOS DIGITAIS</span> que transformam
                <span className="font-black fire-text-glow"> sonhos em IMPÉRIOS online</span>
              </p>
              
              <div className="space-y-6 mb-16">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-6 animate-slide-in-right-smooth hover-lift-mega magnetic-effect" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex-shrink-0 w-12 h-12 fire-gradient rounded-full flex items-center justify-center animate-pulse-rainbow">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-xl font-bold">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/sobre">
                <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-12 py-8 text-xl font-black hover-lift-mega rounded-full shadow-xl magnetic-effect">
                  <Users className="mr-4 h-6 w-6" />
                  NOSSA HISTÓRIA ÉPICA
                  <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in-bounce">
              <div className="glass-card-ultra rounded-3xl p-12 text-center transform hover:rotate-0 transition-transform duration-700 hover-glow-mega magnetic-effect">
                <div className="inline-flex items-center justify-center w-24 h-24 fire-gradient rounded-full mb-12 animate-pulse-rainbow">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-4xl font-black mb-12 text-gray-800 fire-text-gradient">Resultados IMPOSSÍVEIS</h3>
                
                <div className="grid grid-cols-2 gap-10">
                  <div className="text-center group hover-lift-mega">
                    <div className="text-5xl font-black mb-4 fire-text-mega neon-glow">1000%</div>
                    <div className="text-sm text-gray-600 font-bold">Explosão em Vendas</div>
                  </div>
                  <div className="text-center group hover-lift-mega">
                    <div className="text-5xl font-black mb-4 fire-text-mega neon-glow">500+</div>
                    <div className="text-sm text-gray-600 font-bold">Sucessos Épicos</div>
                  </div>
                  <div className="text-center group hover-lift-mega">
                    <div className="text-5xl font-black mb-4 fire-text-mega neon-glow">24h</div>
                    <div className="text-sm text-gray-600 font-bold">Resposta Flash</div>
                  </div>
                  <div className="text-center group hover-lift-mega">
                    <div className="text-5xl font-black mb-4 fire-text-mega neon-glow">∞</div>
                    <div className="text-sm text-gray-600 font-bold">Satisfação Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Ultra Enhanced */}
      <section className="py-40 bg-gradient-to-br from-white to-gray-50 particle-bg-ultra">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-fade-in-up-delayed">
            <div className="inline-flex items-center glass-card-ultra border border-fire-primary/30 rounded-full px-8 py-4 mb-8 magnetic-effect">
              <Star className="h-6 w-6 mr-3 text-fire-primary animate-bounce-glow" />
              <span className="text-lg font-black text-fire-primary">DEPOIMENTOS ÉPICOS</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8">
              Clientes que <span className="fire-text-mega">DOMINARAM</span>
              <br />
              <span className="fire-text-glow">seus Mercados</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Histórias REAIS de empresas que se tornaram 
              <span className="font-black fire-text-gradient"> LENDAS</span> com a Fire Dominios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift-mega border-0 shadow-2xl animate-scale-in-bounce glass-card-ultra group magnetic-effect" style={{ animationDelay: `${index * 300}ms` }}>
                <CardContent className="p-10">
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 text-yellow-400 fill-current animate-bounce-glow" />
                    ))}
                  </div>
                  
                  <div className="inline-block fire-gradient text-white px-4 py-2 rounded-full text-sm font-black mb-6 animate-pulse-rainbow">
                    {testimonial.result}
                  </div>
                  
                  <p className="text-gray-700 mb-10 text-lg italic leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t-2 border-fire-primary/20 pt-8 flex items-center space-x-6">
                    <div className="w-16 h-16 fire-gradient rounded-full flex items-center justify-center text-3xl animate-pulse-rainbow">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-black text-xl">{testimonial.name}</div>
                      <div className="fire-text-gradient font-bold">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Ultra Enhanced */}
      <section className="py-40 fire-gradient-mega text-white relative overflow-hidden particle-bg-ultra">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up-delayed">
            <div className="inline-flex items-center glass-morphism-ultra border border-white/30 rounded-full px-8 py-4 mb-12 magnetic-effect">
              <Sparkles className="h-6 w-6 mr-3 text-yellow-300 animate-bounce-glow" />
              <span className="text-lg font-black">ÚLTIMA CHANCE de se Tornar uma LENDA</span>
              <Crown className="h-6 w-6 ml-3 text-yellow-300 animate-rotate-glow" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-12 leading-tight">
              Pronto para <span className="text-yellow-300 neon-glow animate-text-shine">REINAR</span>
              <br />
              <span className="fire-text-glow">Seu Mercado?</span>
            </h2>
            
            <p className="text-2xl md:text-3xl mb-16 opacity-95 max-w-4xl mx-auto leading-relaxed font-medium">
              Não deixe seus concorrentes DOMINAREM primeiro. 
              <span className="font-black text-yellow-300 neon-glow"> Vamos criar seu IMPÉRIO digital!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="btn-fire-mega bg-white text-fire-primary hover:bg-gray-100 px-16 py-8 text-2xl font-black hover-lift-mega rounded-full shadow-2xl magnetic-effect">
                  <Rocket className="mr-4 h-8 w-8 animate-bounce-glow" />
                  CONQUISTAR O MUNDO AGORA
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="border-4 border-white text-white hover:bg-white hover:text-fire-primary px-16 py-8 text-2xl font-black hover-lift-mega rounded-full glass-morphism-ultra magnetic-effect">
                  <Crown className="mr-4 h-8 w-8" />
                  Ver ARSENAL Completo
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
