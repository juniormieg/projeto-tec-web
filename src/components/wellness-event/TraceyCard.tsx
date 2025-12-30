export function TraceyCard() {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F4E6EE]">
      <div className="flex items-center gap-3 mb-4 border-b border-[#F4F4F4] pb-4">
        <img 
          src="/imgs/traceyProfile.svg" 
          alt="Tracey" 
          className="w-12 h-12 rounded-full border-2 border-[#E4007C]"
        />
        <div>
          <h3 className="text-[16px] font-bold text-[#2D2D2D]">Tracey</h3>
          <p className="text-[14px] text-[#E4007C]">Assistente de saúde</p>
        </div>
      </div>
      
      <div className="bg-[#F4E6EE] p-5 rounded-3xl rounded-tl-none min-h-30 flex items-center">
        <p className="text-[16px] text-[#2D2D2D] leading-relaxed">
          Gostaria de lhe fazer algumas perguntas para saber como você está hoje.
        </p>
      </div>
    </div>
  );
}