import { useState, useEffect } from 'react';
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export function ChatAssistant() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const messages = [
    "Vamos configurar o seu perfil com base no seu último evento. Por favor, indique no mapa corporal onde você sentiu desconforto.",
    "Por 'evento cardíaco', refiro-me aos sinais e sintomas que você sentiu na última vez que precisou ser atendida na emergência ou consultou um médico.",
    "E como você descreveria essa sensação? Selecione as opções abaixo que melhor explicam o que você sentiu (ex: Aperto, Peso, Queimação)."
  ];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F4E6EE]">
      <div className="flex items-center gap-3 mb-4 border-b border-[#F4F4F4] pb-4">
        <img src="/imgs/traceyProfile.svg" alt="Tracey" className="w-12 h-12 rounded-full border-2 border-[#E4007C]" />
        <div>
          <h3 className="text-[16px] font-bold text-[#2D2D2D]">Tracey</h3>
          <p className="text-[14px] text-[#E4007C]">Assistente de saúde</p>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 60 }}
        plugins={[
          Autoplay({ delay: 6000, stopOnInteraction: false }),
          Fade(),
        ]}
        className="w-full mb-6"
      >
        <CarouselContent>
          {messages.map((msg, index) => (
            <CarouselItem key={index}>
              <div className="bg-[#F4E6EE] p-5 rounded-3xl rounded-tl-none min-h-30 flex items-center animate-in fade-in duration-700">
                <p className="text-[16px] text-[#2D2D2D] leading-relaxed">{msg}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-2">
        {messages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ease-in-out ${
              current === index ? 'bg-[#E4007C]' : 'bg-[#E4007C] opacity-20 hover:opacity-40'
            }`}
            aria-label={`Ir para mensagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}