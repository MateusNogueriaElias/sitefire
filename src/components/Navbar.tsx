
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Define se o navbar deve ter fundo ou não
      setIsScrolled(currentScrollY > 20);
      
      // Define se o navbar deve estar visível ou não
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & not at top
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism shadow-2xl py-2' : 'bg-transparent py-4'
    } ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Enhanced */}
          <Link to="/" className="flex items-center space-x-3 hover-glow group">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Dominios" 
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fire-primary to-fire-accent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-poppins fire-text-gradient group-hover:scale-105 transition-transform duration-300">
                Fire Dominios
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">Digital Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation Enhanced */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold transition-all duration-300 relative group px-4 py-2 rounded-full ${
                  isActive(item.path)
                    ? 'text-fire-primary bg-fire-gradient-soft'
                    : 'text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-fire-primary to-fire-accent transition-all duration-300 ${
                  isActive(item.path) ? 'w-8' : 'w-0 group-hover:w-8'
                }`}></span>
              </Link>
            ))}
            <Link to="/contato">
              <button className="fire-gradient text-white px-8 py-3 rounded-full font-semibold hover-lift hover-glow transition-all duration-300 shadow-lg relative overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap size={18} className="group-hover:animate-bounce-subtle" />
                  <span>Começar Projeto</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-fire-accent to-fire-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-fire-primary transition-all duration-300 p-2 rounded-full hover:bg-fire-gradient-soft"
            >
              {isMenuOpen ? 
                <X size={28} className="animate-scale-in" /> : 
                <Menu size={28} className="animate-scale-in" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass-card rounded-2xl mt-4 p-6 border border-white/30">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl mb-2 ${
                    isActive(item.path)
                      ? 'text-fire-primary bg-fire-gradient-soft'
                      : 'text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full fire-gradient text-white px-6 py-4 rounded-xl text-lg font-semibold mt-4 hover-glow transition-all duration-300 flex items-center justify-center space-x-2">
                  <Zap size={20} />
                  <span>Começar Projeto</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
