type FilterButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function FilterCard({
  label,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-2 rounded-full text-lg font-medium transition-all duration-200 shadow-sm border
        ${
          isActive
            ? "bg-primary-pink text-white border-primary-pink"
            : "bg-white text-teal-800 border-gray-100 hover:bg-gray-50"
        }
      `}
    >
      {label}
    </button>
  );
}
