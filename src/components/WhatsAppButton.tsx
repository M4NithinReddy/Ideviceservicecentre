import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 0 30px -5px rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
};

export default WhatsAppButton;
