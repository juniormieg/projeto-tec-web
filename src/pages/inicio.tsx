import Header from "@/components/header";
import Footer from "@/components/footer";

import { Link } from "react-router-dom";

import run from "../assets/run.png";
import beat from "../assets/beat.png";
import seta from "../assets/seta.png";

export function Inicio() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans flex flex-col">
      <Header />

      <main className=" flex items-center justify-center px-6 py-12 lg:py-10">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col items-start space-y-10">
            <div className="flex items-center gap-4 bg-[#FDE7F3] px-4 py-2 rounded-full">
              <img src={beat} alt="ícone" className="w-4 h-4" />
              <span className="text-primary-pink text-1xl font-bold uppercase tracking-widest">
                Bem-estar comprovado pela ciência
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary-blue leading-[1.1]">
              Empoderando a <br />
              <span className="text-primary-pink">Saúde Cardíaca Feminina</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
              Assuma o controle da sua saúde cardiovascular com informações
              personalizadas, acompanhamento diário e uma comunidade de apoio.
            </p>

            <Link
              to="/wellnessCheck"
              className="inline-flex items-center gap-4 bg-primary-pink hover:bg-[#D81B60] text-white px-10 
              py-4 rounded-full font-bold text-lg transition-transform
               hover:scale-105 shadow-md"
            >
              Iniciar verificação cardíaca
              <img
                src={seta}
                alt="seta"
                className="w-5 h-5 brightness-0 invert"
              />
            </Link>

            <div className="w-full border-t border-gray-800 mt-4"></div>
            <div className="flex flex-row gap-16">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary-blue">
                  10k+
                </span>
                <span className="text-gray-500 font-medium">
                  Membros ativos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary-blue">
                  50k+
                </span>
                <span className="text-gray-500 font-medium">
                  Parceiros médicos
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-225">
              <img
                src={run}
                alt="Mulher correndo"
                className="w-full h-auto rounded-2rem] shadow-sm"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
