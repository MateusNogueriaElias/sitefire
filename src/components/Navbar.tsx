
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <img 
              src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
              alt="Fire Dominios" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold font-poppins fire-text-gradient">
              Fire Dominios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-fire-primary'
                    : 'text-gray-700 hover:text-fire-primary'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contato"
              className="fire-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Começar Projeto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-fire-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                    isActive(item.path)
                      ? 'text-fire-primary bg-fire-light'
                      : 'text-gray-700 hover:text-fire-primary hover:bg-fire-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="block fire-gradient text-white px-3 py-2 rounded-md text-base font-medium text-center mt-4"
              >
                Começar Projeto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
