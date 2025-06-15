
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
      isScrolled ? 'glass-morphism shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Magnético */}
          <Link to="/" className="flex items-center space-x-3 hover-magnetic group">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Dominios" 
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-125 animate-magnetic-pull"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-playfair magnetic-text group-hover:scale-105 transition-transform duration-300">
                Fire Dominios
              </span>
              <span className="text-xs text-yellow-400 font-bold tracking-wide animate-urgent-glow">AGÊNCIA #1 DO BRASIL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-bold transition-all duration-300 relative group px-4 py-2 rounded-lg hover-magnetic ${
                  isActive(item.path)
                    ? 'magnetic-text'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 fire-gradient-intense transition-all duration-300 ${
                  isActive(item.path) ? 'w-8' : 'w-0 group-hover:w-8'
                } rounded-full`}></span>
              </Link>
            ))}
            <Link to="/contato">
              <button className="btn-irresistible text-white px-8 py-4 rounded-xl font-black hover-magnetic transition-all duration-300 shadow-2xl">
                <span className="flex items-center space-x-2">
                  <Crown size={20} className="animate-magnetic-pull" />
                  <span>QUERO FATURAR!</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 rounded-lg hover-magnetic"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass-card rounded-2xl mt-4 p-6 border border-orange-500/30 pulsing-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-4 text-lg font-bold transition-all duration-300 rounded-lg mb-2 hover-magnetic ${
                    isActive(item.path)
                      ? 'magnetic-text fire-gradient-soft'
                      : 'text-white hover:text-yellow-400 hover:fire-gradient-soft'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full btn-irresistible text-white px-6 py-6 rounded-xl text-lg font-black mt-4 hover-magnetic transition-all duration-300 flex items-center justify-center space-x-2">
                  <Crown size={24} className="animate-magnetic-pull" />
                  <span>QUERO FATURAR!</span>
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
