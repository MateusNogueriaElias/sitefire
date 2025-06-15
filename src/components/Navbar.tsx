
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
      isScrolled ? 'glass-elegant shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Elegante */}
          <Link to="/" className="flex items-center space-x-3 hover-premium group">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Dominios" 
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 animate-soft-pulse"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black font-playfair premium-text group-hover:scale-105 transition-transform duration-300">
                Fire Dominios
              </span>
              <span className="text-xs text-amber-400 font-semibold tracking-wide animate-elegant-glow">AGÊNCIA PREMIUM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover-premium ${
                  isActive(item.path)
                    ? 'premium-text'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 premium-gradient transition-all duration-300 ${
                  isActive(item.path) ? 'w-6' : 'w-0 group-hover:w-6'
                } rounded-full`}></span>
              </Link>
            ))}
            <Link to="/contato">
              <button className="btn-premium text-white px-6 py-3 rounded-xl font-semibold hover-premium transition-all duration-300 shadow-lg">
                <span className="flex items-center space-x-2">
                  <Crown size={18} className="animate-soft-pulse" />
                  <span>COMEÇAR AGORA</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-400 transition-colors duration-300 p-2 rounded-lg hover-premium"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass-premium rounded-2xl mt-4 p-6 border border-amber-500/20 elegant-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg mb-2 hover-premium ${
                    isActive(item.path)
                      ? 'premium-text elegant-gradient'
                      : 'text-white hover:text-amber-400 hover:elegant-gradient'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full btn-premium text-white px-6 py-4 rounded-xl text-base font-semibold mt-4 hover-premium transition-all duration-300 flex items-center justify-center space-x-2">
                  <Crown size={20} className="animate-soft-pulse" />
                  <span>COMEÇAR AGORA</span>
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
