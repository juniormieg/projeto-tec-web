import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (text: string) => void;
}

export function AddSymptomModal({ isOpen, onClose, onConfirm }: ModalProps) {
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (text.trim() !== '') {
      onConfirm(text);
      setText(''); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] p-8 w-full max-w-md shadow-2xl transform transition-all scale-100">
        <h3 className="text-[20px] font-bold text-preto-suave mb-4">Adicionar novo sintoma</h3>
        <p className="text-primary-blue text-sm mb-4">Descreva o que você sentiu em poucas palavras:</p>
        
        <input 
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleConfirm(); }}
          placeholder="Ex: Formigamento"
          className="w-full bg-violeta-claro border border-primary-pink/30 rounded-2xl p-4 text-preto-suave outline-none focus:border-primary-pink mb-6"
          autoFocus
        />

        <div className="flex gap-4 justify-end">
          <button onClick={onClose} className="text-primary-pink font-bold text-sm px-4 py-2 hover:bg-violeta-claro rounded-full transition-colors">
            Cancelar
          </button>
          <button onClick={handleConfirm} className="bg-primary-pink text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-md">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}