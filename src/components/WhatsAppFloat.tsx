
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "5511999999999"; // Substitua pelo número real do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre os serviços da Fire Dominios.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 mr-2 bg-white rounded-xl shadow-2xl p-4 max-w-xs animate-fade-in glass-card">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Fire Dominios</h3>
                <p className="text-xs text-gray-500">Online agora</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Olá! 👋 Como podemos ajudar você hoje?
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2"
          >
            Iniciar Conversa
          </Button>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl hover-lift animate-pulse-glow"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
