import type { Message } from "../../data/heartCheckData";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  if (message.type === "bot") {
    return (
      <div className="flex items-start gap-4 animate-in fade-in slide-in-from-left-5 duration-500">
        <img
          src="/imgs/traceyProfile.svg"
          alt="Tracey"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
        <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm max-w-[85%] border border-violeta-claro">
          <h3 className="text-primary-blue font-bold text-sm mb-1">Tracey</h3>
          <p className="text-preto-suave text-[16px] leading-relaxed">
            {message.text}
          </p>
        </div>
      </div>
    );
  }

  if (message.type === "user") {
    return (
      <div className="flex flex-col items-end gap-1 animate-in fade-in slide-in-from-right-5 duration-500">
        <div className="flex items-start gap-4 flex-row-reverse">
          <img
            src="/imgs/header/profile.svg"
            alt="Eu"
            className="w-10 h-10 rounded-full border border-primary-pink"
          />
          <div className="bg-primary-pink p-5 rounded-3xl rounded-tr-none shadow-md shadow-pink-200 max-w-[85%]">
            <p className="text-white text-[16px] leading-relaxed font-medium">
              {message.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (message.type === "alert") {
    return (
      <div className="w-full mt-4 rounded-3xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.01] animate-in zoom-in duration-500">
        <div className="bg-[#EF4444] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
          <div className="min-w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <img src="/imgs/heartCheck/alert.svg" alt="Alerta" className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase opacity-90">
              ALERTA CRÍTICO
            </h3>
            <h2 className="text-white font-extrabold text-xl md:text-2xl leading-snug">
              Você precisa procurar atendimento médico urgente imediatamente. Por favor, ligue para o 192 ou 911.
            </h2>
          </div>
        </div>

        <div className="bg-[#DC2626] p-4 px-8 flex justify-end items-center gap-4">
          <button className="px-6 py-2.5 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors">
            Eu entendi
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white text-[#DC2626] font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
            <img src="/imgs/heartCheck/phone.svg" alt="Telefone" className="w-4 h-4" />
            Contatar
          </button>
        </div>
      </div>
    );
  }

  return null;
}