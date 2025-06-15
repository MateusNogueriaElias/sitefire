
import { ArrowRight, Zap, Target, Rocket, CheckCircle, Star, Sparkles, TrendingUp, Users, Award, Crown, Gem, Shield, Clock, DollarSign, AlertTriangle, Trophy, Eye, Heart, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Landing Pages Profissionais",
      description: "Páginas elegantes que convertem visitantes em clientes através de design inteligente e estratégico",
      highlight: "Alta Conversão",
      urgency: "Vagas Limitadas",
      color: "premium-gradient"
    },
    {
      icon: <Crown className="h-10 w-10 text-white" />,
      title: "Sites WordPress Premium", 
      description: "Websites sofisticados que elevam sua marca e estabelecem autoridade no mercado",
      highlight: "Design Premium",
      urgency: "Oferta Especial",
      color: "premium-gradient"
    },
    {
      icon: <Gem className="h-10 w-10 text-white" />,
      title: "Desenvolvimento Personalizado",
      description: "Soluções exclusivas desenvolvidas especificamente para as necessidades do seu negócio",
      highlight: "100% Personalizado",
      urgency: "Poucas Vagas",
      color: "premium-gradient"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "TechStart Solutions",
      content: "Resultado fantástico! Em 30 dias consegui triplicar meu faturamento. O design ficou incrível e a funcionalidade superou todas as expectativas.",
      rating: 5,
      avatar: "👨‍💼",
      result: "300% Crescimento",
      timeframe: "30 dias"
    },
    {
      name: "Marina Silva",
      company: "Boutique Elegance",
      content: "Simplesmente perfeito! O site ficou elegante e as vendas aumentaram significativamente. Agora sou referência no meu segmento.",
      rating: 5,
      avatar: "👩‍💼",
      result: "500% Vendas",
      timeframe: "45 dias"
    },
    {
      name: "Pedro Oliveira",
      company: "Consultoria Premium",
      content: "Excelente trabalho! Minha credibilidade aumentou muito e agora sou visto como especialista na área. Recomendo sem dúvidas.",
      rating: 5,
      avatar: "👨‍🎓",
      result: "400% Leads",
      timeframe: "60 dias"
    }
  ];

  const stats = [
    { number: "847%", label: "Aumento Médio em Vendas", icon: TrendingUp, color: "text-emerald-400" },
    { number: "2.3M", label: "Faturamento Gerado", icon: DollarSign, color: "text-amber-400" },
    { number: "24h", label: "Para Começar SEU Projeto", icon: Clock, color: "text-blue-400" },
    { number: "100%", label: "Satisfação Garantida", icon: Trophy, color: "text-purple-400" }
  ];

  const benefits = [
    "Design elegante e profissional",
    "Tecnologia de ponta", 
    "SEO otimizado para resultados",
    "Suporte técnico especializado",
    "Entrega dentro do prazo",
    "ROI comprovado"
  ];

  const urgencyElements = [
    { icon: <Eye className="h-4 w-4" />, text: "247 pessoas interessadas", color: "text-blue-400" },
    { icon: <Clock className="h-4 w-4" />, text: "Oferta por tempo limitado", color: "text-amber-400" },
    { icon: <Heart className="h-4 w-4" />, text: "Vagas limitadas este mês", color: "text-rose-400" }
  ];

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Elementos Flutuantes Elegantes */}
        <div className="absolute top-20 left-10 animate-gentle-float opacity-20">
          <Sparkles className="h-16 w-16 text-amber-400 animate-soft-pulse" />
        </div>
        <div className="absolute top-1/3 right-20 animate-gentle-float opacity-15" style={{ animationDelay: '2s' }}>
          <Crown className="h-20 w-20 text-yellow-500 animate-soft-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-gentle-float opacity-20" style={{ animationDelay: '4s' }}>
          <DollarSign className="h-14 w-14 text-emerald-400 animate-soft-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Elementos de Urgência Suaves */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {urgencyElements.map((element, index) => (
                <div key={index} className={`glass-elegant rounded-full px-4 py-2 flex items-center space-x-2 animate-elegant-glow ${element.color}`}>
                  {element.icon}
                  <span className="text-sm font-medium">{element.text}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-premium rounded-full px-8 py-4 mb-12 inline-block elegant-border">
              <div className="flex items-center space-x-3">
                <Crown className="h-5 w-5 text-amber-400 animate-soft-pulse" />
                <span className="text-lg font-bold premium-text">🏆 AGÊNCIA PREMIUM DO BRASIL 🏆</span>
                <Trophy className="h-5 w-5 text-amber-400 animate-soft-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-playfair mb-8 leading-tight">
              <span className="block text-white">Transforme Seu</span>
              <span className="block elegant-text text-8xl">NEGÓCIO</span>
              <span className="block text-gray-200">Com Design Premium</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Desenvolvemos <span className="premium-text font-semibold">sites profissionais</span> que 
              <br />elevam sua marca e <span className="elegant-text font-semibold">geram resultados reais!</span>
            </p>

            <div className="glass-premium p-6 rounded-2xl mb-12 max-w-3xl mx-auto elegant-border">
              <div className="text-3xl font-bold mb-3">
                <span className="premium-text">R$ 2.347.892</span>
              </div>
              <p className="text-lg text-gray-400">Faturamento gerado para nossos clientes nos últimos 30 dias</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contato">
                <Button size="lg" className="btn-premium text-white px-12 py-6 text-xl font-bold hover-premium rounded-xl shadow-xl">
                  <Rocket className="mr-3 h-6 w-6" />
                  COMEÇAR AGORA
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <div className="text-center">
                <div className="text-amber-400 font-semibold text-base animate-elegant-glow">⭐ Vagas Limitadas</div>
                <div className="text-sm text-gray-500">Aproveite nossa oferta especial</div>
              </div>
            </div>

            {/* Stats Elegantes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-premium p-6 rounded-2xl hover-elegant elegant-border" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 premium-gradient rounded-xl mb-4 animate-soft-pulse`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-3 ${stat.color} animate-success-glow`}>{stat.number}</div>
                  <div className="text-base text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="success-elegant rounded-full px-6 py-3 mb-8 inline-block animate-success-glow">
              <div className="flex items-center space-x-2">
                <Gem className="h-5 w-5 text-white animate-soft-pulse" />
                <span className="text-lg font-bold text-white">SOLUÇÕES PREMIUM</span>
                <Gem className="h-5 w-5 text-white animate-soft-pulse" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black font-playfair mb-6">
              <span className="block text-white">Serviços que</span>
              <span className="block premium-text">TRANSFORMAM</span>
              <span className="block elegant-shine">Seu Negócio!</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Criamos experiências digitais que <span className="premium-text font-semibold">impressionam</span> e 
              <span className="elegant-text font-semibold"> convertem!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elegant border-0 shadow-xl h-full glass-premium group overflow-hidden elegant-border" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-0">
                  <div className={`${service.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute top-3 right-3 urgency-soft px-3 py-1 rounded-full text-xs font-semibold">
                      {service.urgency}
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-sm rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500 animate-soft-pulse">
                        {service.icon}
                      </div>
                      <div className="success-elegant px-4 py-2 rounded-full text-sm font-bold mb-4 animate-success-glow">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 font-playfair premium-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-8 text-base leading-relaxed">{service.description}</p>
                    <Link to="/contato">
                      <Button className="w-full btn-premium text-white hover-premium rounded-xl py-4 text-lg font-semibold">
                        SAIBA MAIS
                        <ArrowRight className="ml-2 h-5 w-5" />
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
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="success-elegant rounded-full px-6 py-3 mb-8 inline-block animate-success-glow">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-white animate-soft-pulse" />
                <span className="text-lg font-bold text-white">CLIENTES SATISFEITOS</span>
                <Heart className="h-5 w-5 text-white animate-soft-pulse" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black font-playfair mb-6">
              <span className="block premium-text">Resultados</span>
              <span className="block elegant-shine">Comprovados!</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja como ajudamos nossos clientes a <span className="premium-text font-semibold">alcançar o sucesso</span> com 
              <span className="elegant-text font-semibold"> design premium!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elegant border-0 shadow-xl glass-premium group elegant-border" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current animate-soft-pulse" />
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="success-elegant text-white px-3 py-1 rounded-full text-sm font-semibold animate-success-glow">
                      {testimonial.result}
                    </div>
                    <div className="text-amber-400 text-sm font-medium">
                      em {testimonial.timeframe}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-base leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-700/50 pt-4 flex items-center space-x-3">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center text-2xl animate-soft-pulse">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">{testimonial.name}</div>
                      <div className="premium-text font-medium text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-premium p-10 rounded-3xl elegant-border">
            <div className="urgency-soft rounded-full px-6 py-3 mb-10 inline-block">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-white animate-soft-pulse" />
                <span className="text-lg font-bold text-white">⏰ OFERTA POR TEMPO LIMITADO ⏰</span>
                <Clock className="h-5 w-5 text-white animate-soft-pulse" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black font-playfair mb-6 leading-tight">
              <span className="block text-white">Pronto Para</span>
              <span className="block premium-text">TRANSFORMAR</span>
              <span className="block elegant-shine">Seu Negócio?</span>
            </h2>
            
            <p className="text-xl mb-10 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Não deixe para amanhã o que pode <span className="premium-text font-semibold">revolucionar</span> 
              seu negócio <span className="elegant-text font-semibold">hoje mesmo!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <Link to="/contato">
                <Button size="lg" className="btn-premium text-white px-12 py-6 text-xl font-bold hover-premium rounded-xl shadow-xl">
                  <Rocket className="mr-3 h-6 w-6" />
                  COMEÇAR AGORA
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-amber-400">ENTREGA RÁPIDA</div>
                <div className="text-sm text-gray-500">7-14 dias úteis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-semibold text-emerald-400">GARANTIA TOTAL</div>
                <div className="text-sm text-gray-500">30 dias ou dinheiro de volta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👑</div>
                <div className="font-semibold text-purple-400">SUPORTE PREMIUM</div>
                <div className="text-sm text-gray-500">Atendimento especializado</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
