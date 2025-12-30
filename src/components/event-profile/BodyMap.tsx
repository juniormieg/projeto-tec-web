
export function BodyMap() {
  return (
    <div className="bg-[#F4E6EE] bg-opacity-40 rounded-[24px] p-8 mb-8 flex justify-center items-center gap-8 md:gap-12">
      <div className="flex flex-col items-center">
        <img src="/imgs/eventProfile/imgFront.svg" alt="Frente" className="h-75 object-contain" />
        <span className="text-[#E4007C] text-sm mt-4 font-medium">Visão Frontal</span>
      </div>
      <div className="h-62.5 border-l-2 border-dashed border-[#E4007C] opacity-30"></div>
      <div className="flex flex-col items-center">
        <img src="/imgs/eventProfile/imgBack.svg" alt="Trás" className="h-75 object-contain" />
        <span className="text-[#E4007C] text-sm mt-4 font-medium">Visão Traseira</span>
      </div>
    </div>
  );
}