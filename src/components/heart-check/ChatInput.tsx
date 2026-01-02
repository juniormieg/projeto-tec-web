import type { ChatOption } from "../../data/heartCheckData";

interface ChatInputProps {
  isTyping: boolean;
  showOptions: boolean;
  currentOptions: ChatOption[];
  onToggleOptions: () => void;
  onOptionSelect: (option: ChatOption) => void;
}

export function ChatInput({ 
  isTyping, 
  showOptions, 
  currentOptions, 
  onToggleOptions, 
  onOptionSelect 
}: ChatInputProps) {
  
  return (
    <div className="w-full bg-primary-blue py-6 px-5 mt-4">
      <div className="max-w-3xl mx-auto w-full">
        
        {showOptions && currentOptions.length > 0 && (
          <div className="flex flex-wrap justify-end gap-3 mb-3 animate-in slide-in-from-bottom-5 fade-in">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionSelect(option)}
                className="bg-white border border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white font-medium py-3 px-6 rounded-2xl shadow-sm transition-all text-sm md:text-base text-right"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <div className="relative flex items-center mb-3">
          <button className="absolute left-2 w-8 h-8 rounded-full bg-primary-pink flex items-center justify-center text-white font-bold hover:scale-105 transition-transform z-10">
            <img src="/imgs/heartCheck/plus.svg" alt="Mais" className="w-4 h-4 invert brightness-0" />
          </button>

          <div 
              onClick={onToggleOptions}
              className={`w-full bg-white h-12 rounded-full pl-12 pr-12 flex items-center text-preto-suave cursor-pointer transition-all ${isTyping || currentOptions.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:ring-2 ring-primary-pink/50'}`}
          >
              <span className={`${showOptions ? 'text-primary-pink font-medium' : 'text-gray-400'}`}>
                  {showOptions ? "Selecione uma opção acima..." : "Toque aqui para responder..."}
              </span>
          </div>

          <button className="absolute right-2 w-8 h-8 rounded-full bg-primary-pink flex items-center justify-center hover:bg-pink-600 transition-colors">
            <img src="/imgs/heartCheck/arrowUp.svg" alt="Enviar" className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-white/60 text-xs">
          {currentOptions.length === 0 && !isTyping ? "Conversa finalizada" : "O bate-papo é assistido por IA"}
        </p>
      </div>
    </div>
  );
}