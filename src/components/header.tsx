export default function Header() {
  return (
    <header className="w-full bg-white border-b-[0.5px] border-ciza-medio/50 px-18.75 py-4">
      
      <div className="w-full flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img 
            src="/imgs/coracao.svg" 
            alt="Logo Heart" 
            className="w-8 h-8" 
          />
          <span className="text-[30px] font-bold text-primary-pink tracking-tight">
            at heart
          </span>
        </div>

        <nav className="flex items-center gap-8 text-[16px] text-primary-blue font-normal">
          <a href="#" className="hover:text-primary-pink transition-colors">Início</a>
          <a href="/eventProfile" className="hover:text-primary-pink transition-colors">Criar Perfil</a>
          <a href="/wellnessCheck" className="hover:text-primary-pink transition-colors">Verificação de bem-estar</a>
          <a href="#" className="hover:text-primary-pink transition-colors">Verificação Cardíaca</a>
          <a href="/wellnessLibrary" className="hover:text-primary-pink transition-colors">Biblioteca</a>
          <a href="#" className="hover:text-primary-pink transition-colors">Meu Histórico</a>
        </nav>

        <div className="flex items-center gap-6">
          
          <button className="text-primary-blue hover:opacity-80 transition-opacity relative">
             <img src="/imgs/header/sino.svg" alt="Notificações" className="w-7 h-7" />
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-primary-pink"></span>
          </button>

          <button className="bg-primary-pink text-white font-bold text-base px-8 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-sm">
            Compartilhar Dados
          </button>

          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-gray cursor-pointer">
             <img src="/imgs/header/profile.svg" alt="Perfil" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </header>
  );
}