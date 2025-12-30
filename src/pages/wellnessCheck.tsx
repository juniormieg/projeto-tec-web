import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { TraceyCard } from '../components/wellness-event/TraceyCard';
import { WellnessCard } from '../components/wellness-event/WellnessCard';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function WellnessCheck() {
  const [mood, setMood] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [activity, setActivity] = useState(0);

  const getMoodText = (v: number) => Math.round(v) >= 8 ? "Estou ótimo!" : Math.round(v) >= 5 ? "Tudo bem" : "Não estou muito bem";
  const getSleepText = (v: number) => Math.round(v) >= 8 ? "Dormi muito bem" : Math.round(v) >= 4 ? "Poderia ser melhor" : "Dormi mal";
  const getActivityText = (v: number) => Math.round(v) >= 8 ? "Muito ativo" : Math.round(v) >= 5 ? "Como chegar" : "Pouca atividade";

  return (
    <div className="w-full min-h-screen bg-[#FCF8FA] font-sans">
		<Header/>
      <div className="max-w-360 mx-auto px-5 lg:px-18.75 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-4 flex flex-col gap-6">
           <TraceyCard />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#2D2D2D] leading-tight mb-3">
              Sua avaliação semanal
            </h1>
            <p className="text-[#2D2D2D] text-lg font-medium opacity-80">
              Nas últimas 24 horas, como você se saiu?
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <WellnessCard 
              id="mood" label="Humor" value={mood} setValue={setMood} statusText={getMoodText(mood)}
              color="#E4007C" bgColor="#FCE5F2" iconPath="/imgs/wellnessCheck/smileIcon.svg"
            />
            <WellnessCard 
              id="sleep" label="Dormir" value={sleep} setValue={setSleep} statusText={getSleepText(sleep)}
              color="#FB8235" bgColor="#FFF0E5" iconPath="/imgs/wellnessCheck/moonIcon.svg"
            />
            <WellnessCard 
              id="activity" label="Atividade" value={activity} setValue={setActivity} statusText={getActivityText(activity)}
              color="#005F6B" bgColor="#E0EFF1" iconPath="/imgs/wellnessCheck/runIcon.svg"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-[#E4007C] hover:bg-[#C00068] text-white text-base font-bold py-6 px-10 rounded-full shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1">
              Enviar verificação de bem estar
            </Button>
          </div>
        </div>
      </div>
	  <Footer/>
    </div>
  );
}