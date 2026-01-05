import { Slider } from "@/components/ui/slider";

interface WellnessCardProps {
  label: string;
  value: number;
  setValue: (val: number) => void;
  statusText: string;
  color: string;
  bgColor: string;
  iconPath: string;
  id: string;
}

export function WellnessCard({ 
  label, value, setValue, statusText, color, bgColor, iconPath, id 
}: WellnessCardProps) {
  
  return (
    <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-violeta-claro hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          <img src={iconPath} alt={label} className="w-8 h-8" />
        </div>

        <div className="flex-1 w-full flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: color }}>
                {label}
              </p>
              <h3 className="text-xl font-bold text-preto-suave">{statusText}</h3>
            </div>
            <div className="text-2xl font-black" style={{ color: color }}>
              {Math.round(value)}<span className="text-lg text-gray-400 font-medium">/10</span>
            </div>
          </div>

          <div className={`relative h-6 flex items-center slider-${id}`}>
            <style>{`
              .slider-${id} .bg-primary { background-color: ${color} !important; }
              .slider-${id} .border-primary { border-color: ${color} !important; }
              .slider-${id} span[role="slider"] { 
                  background-color: white !important; 
                  border-width: 4px !important; 
                  width: 24px !important; 
                  height: 24px !important;
              }
            `}</style>
            
            <Slider 
              value={[value]} 
              max={10} 
              step={0.1} 
              onValueChange={(val) => setValue(val[0])} 
              className={`cursor-pointer slider-${id}`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}