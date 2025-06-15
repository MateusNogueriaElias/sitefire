
import { ArrowRight, Zap, Target, Rocket, CheckCircle, Star, Sparkles, TrendingUp, Users, Award, Crown, Gem, Shield, Clock, DollarSign, AlertTriangle, Trophy, Eye, Heart, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Landing Pages que VENDEM",
      description: "Páginas que hipnotizam seus visitantes e os transformam em clientes pagantes em segundos",
      highlight: "500% + Vendas",
      urgency: "ÚLTIMAS VAGAS",
      color: "fire-gradient-intense"
    },
    {
      icon: <Crown className="h-12 w-12 text-white" />,
      title: "Sites WordPress DOMINANTES", 
      description: "Websites que fazem seus concorrentes chorarem de inveja e seus clientes implorarem por mais",
      highlight: "Autoridade Total",
      urgency: "OFERTA LIMITADA",
      color: "fire-gradient-intense"
    },
    {
      icon: <Gem className="h-12 w-12 text-white" />,
      title: "Desenvolvimento EXCLUSIVO",
      description: "Soluções únicas que fazem sua marca ser lembrada para sempre na mente dos clientes",
      highlight: "100% Único",
      urgency: "SÓ 3 VAGAS",
      color: "fire-gradient-intense"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "TechStart Solutions",
      content: "IMPRESSIONANTE! Em 30 dias meu faturamento TRIPLICOU. Nunca vi nada igual. Todos os meus concorrentes estão perguntando onde eu fiz meu site!",
      rating: 5,
      avatar: "👨‍💼",
      result: "300% LUCRO",
      timeframe: "30 dias"
    },
    {
      name: "Marina Silva",
      company: "Boutique Elegance",
      content: "Meu Deus! O site ficou TÃO perfeito que eu mesma fico babando olhando. As vendas EXPLODIRAM e agora sou referência no mercado!",
      rating: 5,
      avatar: "👩‍💼",
      result: "500% VENDAS",
      timeframe: "45 dias"
    },
    {
      name: "Pedro Oliveira",
      company: "Consultoria Premium",
      content: "SENSACIONAL! Agora sou visto como o EXPERT da área. Minha agenda lotou e preciso contratar mais funcionários. Melhor investimento da minha vida!",
      rating: 5,
      avatar: "👨‍🎓",
      result: "400% LEADS",
      timeframe: "60 dias"
    }
  ];

  const stats = [
    { number: "847%", label: "Aumento Médio em Vendas", icon: TrendingUp, color: "text-green-400" },
    { number: "2.3M", label: "Faturamento Gerado", icon: DollarSign, color: "text-yellow-400" },
    { number: "24h", label: "Para Começar SEU Projeto", icon: Clock, color: "text-blue-400" },
    { number: "100%", label: "Satisfação GARANTIDA", icon: Trophy, color: "text-purple-400" }
  ];

  const benefits = [
    "Design que HIPNOTIZA visitantes",
    "Tecnologia de ELITE mundial", 
    "SEO que DOMINA o Google",
    "Suporte VIP 24/7/365",
    "Entrega GARANTIDA no prazo",
    "ROI COMPROVADO cientificamente"
  ];

  const urgencyElements = [
    { icon: <AlertTriangle className="h-5 w-5" />, text: "Apenas 7 vagas este mês", color: "text-red-400" },
    { icon: <Clock className="h-5 w-5" />, text: "Promoção acaba em 48h", color: "text-orange-400" },
    { icon: <Eye className="h-5 w-5" />, text: "1.247 pessoas vendo agora", color: "text-blue-400" }
  ];

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Elementos Flutuantes Magnéticos */}
        <div className="absolute top-20 left-10 animate-float-intense opacity-40">
          <Sparkles className="h-20 w-20 text-yellow-400 animate-magnetic-pull" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float-intense opacity-30" style={{ animationDelay: '1s' }}>
          <Crown className="h-24 w-24 text-yellow-500 animate-magnetic-pull" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-intense opacity-35" style={{ animationDelay: '2s' }}>
          <DollarSign className="h-16 w-16 text-green-400 animate-magnetic-pull" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Elementos de Urgência */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {urgencyElements.map((element, index) => (
                <div key={index} className={`glass-morphism rounded-full px-4 py-2 flex items-center space-x-2 animate-urgent-glow ${element.color}`}>
                  {element.icon}
                  <span className="text-sm font-bold">{element.text}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-morphism rounded-full px-8 py-4 mb-12 inline-block pulsing-border">
              <div className="flex items-center space-x-3">
                <Crown className="h-6 w-6 text-yellow-400 animate-magnetic-pull" />
                <span className="text-lg font-bold magnetic-text">🔥 AGÊNCIA #1 DO BRASIL 🔥</span>
                <Trophy className="h-6 w-6 text-yellow-400 animate-magnetic-pull" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-playfair mb-8 leading-tight">
              <span className="block hypnotic-text">PARE de Perder</span>
              <span className="block magnetic-text text-9xl">DINHEIRO</span>
              <span className="block text-white">Todo Santo Dia!</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 max-w-5xl mx-auto leading-relaxed">
              Enquanto você <span className="text-red-400 font-bold animate-urgent-glow">PERDE clientes</span> para sites horríveis,
              <br />nossos clientes estão <span className="magnetic-text font-bold">FATURANDO MILHÕES!</span>
            </p>

            <div className="glass-card p-6 rounded-2xl mb-12 max-w-4xl mx-auto">
              <div className="text-4xl font-bold mb-4">
                <span className="magnetic-text">R$ 2.347.892</span>
              </div>
              <p className="text-xl text-gray-300">Faturamento gerado para nossos clientes nos últimos 30 dias</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Link to="/contato">
                <Button size="lg" className="btn-irresistible text-white px-16 py-8 text-2xl font-black hover-magnetic rounded-xl shadow-2xl">
                  <Rocket className="mr-4 h-8 w-8" />
                  QUERO FATURAR AGORA!
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
              <div className="text-center">
                <div className="text-red-400 font-bold text-lg animate-urgent-glow">⚠️ ÚLTIMAS 7 VAGAS ⚠️</div>
                <div className="text-sm text-gray-400">Promoção válida por 48 horas</div>
              </div>
            </div>

            {/* Stats Hipnotizantes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-8 rounded-2xl hover-magnetic pulsing-border" style={{ animationDelay: `${index * 300}ms` }}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 fire-gradient-intense rounded-xl mb-6 animate-magnetic-pull`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl md:text-5xl font-black mb-4 ${stat.color} animate-success-pulse`}>{stat.number}</div>
                  <div className="text-lg text-gray-300 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="urgency-indicator rounded-full px-8 py-4 mb-8 inline-block">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-white animate-magnetic-pull" />
                <span className="text-xl font-black text-white">ATENÇÃO: OPORTUNIDADE ÚNICA!</span>
                <AlertTriangle className="h-6 w-6 text-white animate-magnetic-pull" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8">
              <span className="block text-white">Serviços que</span>
              <span className="block magnetic-text">TRANSFORMAM</span>
              <span className="block hypnotic-text">Pobres em Ricos!</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Pare de <span className="text-red-400 font-bold">sonhar</span> e comece a 
              <span className="magnetic-text font-black"> REALIZAR!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-irresistible border-0 shadow-2xl h-full glass-card group overflow-hidden pulsing-border" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <div className={`${service.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="absolute top-4 right-4 urgency-indicator px-3 py-1 rounded-full text-xs font-black">
                      {service.urgency}
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 group-hover:scale-125 transition-transform duration-500 animate-magnetic-pull">
                        {service.icon}
                      </div>
                      <div className="social-proof px-6 py-3 rounded-full text-lg font-black mb-6 animate-success-pulse">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-3xl font-black mb-6 font-playfair magnetic-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-10 text-lg leading-relaxed">{service.description}</p>
                    <Link to="/contato">
                      <Button className="w-full btn-irresistible text-white hover-magnetic rounded-xl py-6 text-xl font-black">
                        QUERO ESTE PODER!
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

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="social-proof rounded-full px-8 py-4 mb-8 inline-block animate-success-pulse">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-white animate-magnetic-pull" />
                <span className="text-xl font-black text-white">CLIENTES APAIXONADOS!</span>
                <Heart className="h-6 w-6 text-white animate-magnetic-pull" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8">
              <span className="block magnetic-text">Resultados</span>
              <span className="block hypnotic-text">INSANOS!</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Veja como transformamos <span className="text-red-400 font-bold">sonhadores</span> em 
              <span className="magnetic-text font-black"> MILIONÁRIOS!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-irresistible border-0 shadow-2xl glass-card group pulsing-border" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-magnetic-pull" />
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-8">
                    <div className="social-proof text-white px-4 py-2 rounded-full text-sm font-black animate-success-pulse">
                      {testimonial.result}
                    </div>
                    <div className="text-yellow-400 text-sm font-bold">
                      em {testimonial.timeframe}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-700 pt-6 flex items-center space-x-4">
                    <div className="w-16 h-16 fire-gradient-intense rounded-full flex items-center justify-center text-3xl animate-magnetic-pull">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-black text-white text-lg">{testimonial.name}</div>
                      <div className="magnetic-text font-bold">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-3xl pulsing-border">
            <div className="urgency-indicator rounded-full px-8 py-4 mb-12 inline-block">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-white animate-magnetic-pull" />
                <span className="text-xl font-black text-white">⏰ OFERTA EXPIRA EM 47:23:16 ⏰</span>
                <Clock className="h-6 w-6 text-white animate-magnetic-pull" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-playfair mb-8 leading-tight">
              <span className="block text-white">Sua Última</span>
              <span className="block magnetic-text">CHANCE</span>
              <span className="block hypnotic-text">de Ficar RICO!</span>
            </h2>
            
            <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enquanto você <span className="text-red-400 font-bold animate-urgent-glow">hesita</span>, 
              seus concorrentes estão <span className="magnetic-text font-black">FATURANDO!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <Link to="/contato">
                <Button size="lg" className="btn-irresistible text-white px-16 py-8 text-2xl font-black hover-magnetic rounded-xl shadow-2xl">
                  <Rocket className="mr-4 h-8 w-8" />
                  SIM! QUERO FICAR RICO!
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-bold text-yellow-400">ENTREGA RÁPIDA</div>
                <div className="text-sm text-gray-400">7-14 dias úteis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <div className="font-bold text-green-400">GARANTIA TOTAL</div>
                <div className="text-sm text-gray-400">30 dias ou dinheiro de volta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👑</div>
                <div className="font-bold text-purple-400">SUPORTE VIP</div>
                <div className="text-sm text-gray-400">24/7 para sempre</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
