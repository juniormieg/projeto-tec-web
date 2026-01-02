import Alta from "../../assets/alta.svg";
import Media from "../../assets/media.svg";
import Baixa from "../../assets/baixa.svg"
import Coracao from "../../assets/coracao.svg"
import Estomago from "../../assets/estomago.svg"
import Cerebro from "../../assets/cerebro.svg"
import Arrow from "../../assets/arrow.svg"


export default function CardList() {
  return (
    <div className="gap-8 flex flex-col">
      <div className="w-262.5 h-25 bg-white rounded-4xl shadow-md flex items-center px-4 py-2 gap-4 justify-between">
        <div>
          <span className="text-primary-blue">28 de dezembro de 2025</span>
          <span className="flex gap-4 text-2xl font-bold justify-center items-center"><img src={Coracao} alt="ícone coração"/> Aperto no peito <img src={Alta} alt="alta" /></span>
        </div>
        <div className="flex items-center justify-center h-full gap-6">
          <span className="text-preto-suave">21:54</span>
          <button className="w-47.75 h-12 rounded-2xl bg-primary-gray flex items-center justify-center gap-1 border-1 border-ciza-medio cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out">Ver Detalhes <img src={Arrow} alt="flecha" /></button>
        </div>
      </div>
      <div className="w-262.5 h-25 bg-white rounded-4xl shadow-md flex items-center px-4 py-2 gap-4 justify-between">
        <div>
          <span className="text-primary-blue">25 de dezembro de 2025</span>
          <span className="flex gap-4 text-2xl font-bold justify-center items-center"><img src={Estomago} alt="ícone estomago"/> Náuseas <img src={Media} alt="media" /></span>
        </div>
        <div className="flex items-center justify-center h-full gap-6">
          <span className="text-preto-suave">23:15</span>
          <button className="w-47.75 h-12 rounded-2xl bg-primary-gray flex items-center justify-center gap-1 border-1 border-ciza-medio cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out">Ver Detalhes <img src={Arrow} alt="flecha" /></button>
        </div>
      </div>
      <div className="w-262.5 h-25 bg-white rounded-4xl shadow-md flex items-center px-4 py-2 gap-4 justify-between">
        <div>
          <span className="text-primary-blue">20 de dezembro de 2025</span>
          <span className="flex gap-4 text-2xl font-bold justify-center items-center"><img src={Cerebro} alt="ícone cerebro"/> Enxaqueca <img src={Baixa} alt="baixa" /></span>
        </div>
        <div className="flex items-center justify-center h-full gap-6">
          <span className="text-preto-suave">15:19</span>
          <button className="w-47.75 h-12 rounded-2xl bg-primary-gray flex items-center justify-center gap-1 border-1 border-ciza-medio cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out">Ver Detalhes <img src={Arrow} alt="flecha" /></button>
        </div>
      </div>
      <div className="w-262.5 h-25 bg-white rounded-4xl shadow-md flex items-center px-4 py-2 gap-4 justify-between">
        <div>
          <span className="text-primary-blue">15 de dezembro de 2025</span>
          <span className="flex gap-4 text-2xl font-bold justify-center items-center"><img src={Cerebro} alt="ícone cerebro"/> Dor de Cabeça <img src={Alta} alt="alta" /></span>
        </div>
        <div className="flex items-center justify-center h-full gap-6">
          <span className="text-preto-suave">21:54</span>
          <button className="w-47.75 h-12 rounded-2xl bg-primary-gray flex items-center justify-center gap-1 border-1 border-ciza-medio cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out">Ver Detalhes <img src={Arrow} alt="flecha" /></button>
        </div>
      </div>
    </div>
  )
}
