
import { useState, useEffect } from 'react';
import { Menu, X, Zap, Crown, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Elegante */}
          <Link to="/" className="flex items-center space-x-3 hover-glow group magnetic-effect">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Dominios" 
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-playfair fire-text-gradient group-hover:scale-105 transition-transform duration-300">
                Fire Dominios
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">DIGITAL EXCELLENCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                  isActive(item.path)
                    ? 'text-fire-primary'
                    : 'text-gray-700 hover:text-fire-primary'
                } magnetic-effect`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 fire-gradient transition-all duration-300 ${
                  isActive(item.path) ? 'w-8' : 'w-0 group-hover:w-8'
                } rounded-full`}></span>
              </Link>
            ))}
            <Link to="/contato">
              <button className="btn-fire text-white px-6 py-3 rounded-lg font-medium hover-lift transition-all duration-300 shadow-lg magnetic-effect">
                <span className="flex items-center space-x-2">
                  <Crown size={16} />
                  <span>Começar Agora</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-fire-primary transition-colors duration-300 p-2 rounded-lg magnetic-effect"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass-card rounded-2xl mt-4 p-6 border border-white/30">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg mb-2 magnetic-effect ${
                    isActive(item.path)
                      ? 'text-fire-primary fire-gradient-soft'
                      : 'text-gray-700 hover:text-fire-primary hover:fire-gradient-soft'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full btn-fire text-white px-6 py-4 rounded-lg text-lg font-medium mt-4 hover-glow transition-all duration-300 flex items-center justify-center space-x-2 magnetic-effect">
                  <Crown size={20} />
                  <span>Começar Agora</span>
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
