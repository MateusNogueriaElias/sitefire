
import { ArrowRight, Zap, Target, Rocket, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-fire-primary" />,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão que transformam visitantes em clientes"
    },
    {
      icon: <Target className="h-8 w-8 text-fire-primary" />,
      title: "Sites WordPress",
      description: "Sites profissionais e responsivos com sistema de gerenciamento fácil"
    },
    {
      icon: <Rocket className="h-8 w-8 text-fire-primary" />,
      title: "Desenvolvimento Custom",
      description: "Soluções personalizadas para necessidades específicas do seu negócio"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      content: "O site que a Fire Dominios criou superou todas as nossas expectativas. As conversões aumentaram 300%!",
      rating: 5
    },
    {
      name: "Ana Santos",
      company: "Boutique Elegance",
      content: "Profissionalismo e qualidade excepcionais. Nosso e-commerce está performando incrivelmente bem.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      company: "Consultoria Plus",
      content: "A landing page desenvolvida trouxe resultados desde o primeiro dia. Recomendo 100%!",
      rating: 5
    }
  ];

  const benefits = [
    "Design moderno e responsivo",
    "Otimização para conversões",
    "SEO otimizado",
    "Suporte completo",
    "Entrega rápida",
    "Preços competitivos"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center fire-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
              Sua Presença Digital
              <span className="block text-yellow-300">Extraordinária</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Criamos sites e landing pages que não apenas impressionam, mas convertem visitantes em clientes fiéis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift">
                  Começar Meu Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-fire-primary px-8 py-4 text-lg font-semibold hover-lift">
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Zap className="h-12 w-12 text-yellow-300 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Target className="h-16 w-16 text-white opacity-40" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
              <span className="fire-text-gradient">Serviços que</span> Fazem a Diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos suas ideias em experiências digitais poderosas que geram resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-full mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-poppins">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-fire-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Por que escolher a <span className="fire-text-gradient">Fire Dominios?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Não somos apenas uma agência digital. Somos parceiros do seu sucesso, 
                comprometidos em entregar resultados que superam expectativas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-fire-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/sobre" className="inline-block mt-8">
                <Button className="fire-gradient text-white hover:shadow-lg hover-lift">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="fire-gradient rounded-2xl p-8 text-white text-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4">Resultados Comprovados</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">300%</div>
                    <div className="text-sm opacity-90">Aumento em Conversões</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Projetos Entregues</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">48h</div>
                    <div className="text-sm opacity-90">Tempo Médio de Entrega</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              O que nossos <span className="fire-text-gradient">clientes dizem</span>
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fire-gradient-reverse text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
              Pronto para Revolucionar sua Presença Online?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não perca mais tempo com sites mediocres. Vamos criar algo extraordinário juntos!
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift">
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
