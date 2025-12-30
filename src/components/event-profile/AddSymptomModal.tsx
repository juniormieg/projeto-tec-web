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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] p-8 w-full max-w-md shadow-2xl transform transition-all scale-100">
        <h3 className="text-[20px] font-bold text-[#2D2D2D] mb-4">Adicionar novo sintoma</h3>
        <p className="text-[#005F6B] text-sm mb-4">Descreva o que você sentiu em poucas palavras:</p>
        
        <input 
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleConfirm(); }}
          placeholder="Ex: Formigamento"
          className="w-full bg-[#F4E6EE] border border-[#E4007C] border-opacity-30 rounded-2xl p-4 text-[#2D2D2D] outline-none focus:border-[#E4007C] mb-6"
          autoFocus
        />

        <div className="flex gap-4 justify-end">
          <button onClick={onClose} className="text-[#E4007C] font-bold text-sm px-4 py-2 hover:bg-[#F4E6EE] rounded-full transition-colors">
            Cancelar
          </button>
          <button onClick={handleConfirm} className="bg-[#E4007C] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-md">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}