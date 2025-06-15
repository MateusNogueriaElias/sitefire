
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'glass-morphism-ultra shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Ultra Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 hover-glow-mega group magnetic-effect">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Dominios" 
                className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-125 animate-pulse-rainbow"
              />
              <div className="absolute inset-0 fire-gradient opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-500 animate-rotate-glow"></div>
              <div className="absolute -inset-2 fire-gradient opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black font-playfair fire-text-mega group-hover:scale-110 transition-transform duration-500 neon-glow">
                Fire Dominios
              </span>
              <span className="text-sm text-gray-500 font-bold tracking-wide fire-text-gradient">DIGITAL SUPREMACY</span>
            </div>
          </Link>

          {/* Ultra Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-black transition-all duration-500 relative group px-6 py-3 rounded-full text-lg ${
                  isActive(item.path)
                    ? 'text-fire-primary fire-gradient-soft shadow-lg'
                    : 'text-gray-700 hover:text-fire-primary hover:fire-gradient-soft hover:shadow-lg'
                } magnetic-effect`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 fire-gradient transition-all duration-500 ${
                  isActive(item.path) ? 'w-10' : 'w-0 group-hover:w-10'
                } rounded-full`}></span>
                <div className="absolute inset-0 fire-gradient opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
              </Link>
            ))}
            <Link to="/contato">
              <button className="btn-fire-mega text-white px-10 py-4 rounded-full font-black hover-lift-mega hover-glow-mega transition-all duration-500 shadow-lg relative overflow-hidden group magnetic-effect text-lg">
                <span className="relative z-10 flex items-center space-x-3">
                  <Crown size={20} className="group-hover:animate-bounce-glow" />
                  <span>DOMINAR AGORA</span>
                  <Flame size={20} className="group-hover:animate-bounce-glow" />
                </span>
                <div className="absolute inset-0 fire-gradient-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </Link>
          </div>

          {/* Ultra Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-fire-primary transition-all duration-500 p-3 rounded-full hover:fire-gradient-soft magnetic-effect"
            >
              {isMenuOpen ? 
                <X size={32} className="animate-scale-in-bounce" /> : 
                <Menu size={32} className="animate-scale-in-bounce" />
              }
            </button>
          </div>
        </div>

        {/* Ultra Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up-delayed">
            <div className="glass-card-ultra rounded-3xl mt-6 p-8 border-2 border-white/40">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-xl font-black transition-all duration-500 rounded-2xl mb-3 magnetic-effect ${
                    isActive(item.path)
                      ? 'text-fire-primary fire-gradient-soft shadow-lg'
                      : 'text-gray-700 hover:text-fire-primary hover:fire-gradient-soft hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full btn-fire-mega text-white px-8 py-6 rounded-2xl text-xl font-black mt-6 hover-glow-mega transition-all duration-500 flex items-center justify-center space-x-3 magnetic-effect">
                  <Crown size={24} className="animate-bounce-glow" />
                  <span>DOMINAR AGORA</span>
                  <Flame size={24} className="animate-bounce-glow" />
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
