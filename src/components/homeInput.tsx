type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({label, type = 'text', ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">{label}</span>
      <input
      type={type}
      {...rest}
      className="w-122.5 h-12.5 border-1 border-slate-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-1"
    />
    </div>
    
  )
}
