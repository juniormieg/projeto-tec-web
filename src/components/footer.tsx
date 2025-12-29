export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-[0.5px] border-[#66666680] font-sans">
      
      <div className="px-18.75 py-12 flex items-start justify-between gap-12">
        
        <div className="max-w-100">
          {/* Logo (Reutilizando do Header) */}
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/imgs/coracao.svg" 
              alt="Logo Heart" 
              className="w-8 h-8" 
            />
            <span className="text-[30px] font-bold text-[#E4007C] tracking-tight">
              at heart
            </span>
          </div>
          
          <p className="text-[16px] leading-7 text-[#005F6B]">
            Capacitando mulheres a assumirem o controle da saúde do seu coração por meio de informações baseadas na ciência, monitoramento proativo e uma comunidade global de apoio. Seu coração importa, e você também.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-bold text-[#005F6B] mb-2">Plataforma</h3>
          
          <a href="#" className="text-[#005F6B] hover:text-[#E4007C] transition-colors">Sobre Nós</a>
          <a href="#" className="text-[#005F6B] hover:text-[#E4007C] transition-colors">Parceiros Certificados</a>
          <a href="#" className="text-[#005F6B] hover:text-[#E4007C] transition-colors">Biblioteca</a>
          <a href="#" className="text-[#005F6B] hover:text-[#E4007C] transition-colors">Carreiras</a>
        </div>

        <div className="max-w-105 flex flex-col gap-6">
          
          <div>
            <h3 className="text-[18px] font-bold text-[#005F6B] mb-4">Conectar</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src="/imgs/footer/mundo.svg" alt="Site" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src="/imgs/footer/email.svg" alt="Email" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <img src="/imgs/footer/chat.svg" alt="Chat" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#F4F4F4] rounded-[20px] p-5 flex gap-4 items-start">
             <div className="min-w-6">
               <img src="/imgs/footer/i.svg" alt="Informação" className="w-6 h-6" />
             </div>
             <p className="text-[13px] text-[#005F6B] leading-tight">
               <span className="font-bold">Aviso:</span> Este produto não é um dispositivo médico. O conteúdo deste site tem caráter meramente informativo e não substitui a consulta, o diagnóstico ou o tratamento médico profissional.
             </p>
          </div>

        </div>

      </div>

      
      <div className="border-t-[0.5px] border-[#66666680] mx-18.75"></div>
      
      <div className="px-18.75 py-6 flex items-center justify-between text-[14px] text-[#005F6B]">
        <span>© 2024 at heart. Todos os direitos reservados.</span>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#E4007C] transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-[#E4007C] transition-colors">Termos de Serviço</a>
          <a href="#" className="hover:text-[#E4007C] transition-colors">Configurações de Cookies</a>
        </div>
      </div>

    </footer>
  );
}