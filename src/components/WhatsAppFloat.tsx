import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "5511972492813"; // Número atualizado do footer, sem formatação
  const message = "Olá! Gostaria de saber mais sobre os serviços da Fire Domínios.";
  
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
              <div className="w-8 h-8 fire-gradient rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Fire Domínios</h3>
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
            className="w-full fire-gradient text-white text-sm py-2"
          >
            Iniciar Conversa
          </Button>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 text-white rounded-full w-24 h-24 shadow-2xl hover-lift animate-pulse-subtle flex items-center justify-center"
        size="icon"
      >
        {isOpen ? (
          <X className="h-16 w-16" />
        ) : (
          <MessageCircle className="h-16 w-16" strokeWidth={1.5} />
        )}
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
