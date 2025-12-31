type CardArtigoProps = {
  image: string;
  category: string;
  tittle: string;
  description: string;
  time: string;
  icon: string;
};

export default function ArticleCard({
  image,
  category,
  tittle,
  description,
  time,
  icon,
}: CardArtigoProps) {
  return (
    <div className="bg-white rounded-32px border border-gray-100 shadow-sm p-10 flex flex-col gap-2 relative max-w-sm">
      <div className="flex justify-center items-center h-40">
        <img src={image} alt={tittle} className="max-h-full object-contain" />
      </div>
      <div>
        <span className="px-2 py-1 rounded-full bg-primary-gray text-primary-pink text-xs font-bold border border-gray-100">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-primary-blue leading-tight">
        {tittle}
      </h3>
      <p className="text-sm text-teal-800 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
        <span className="text-xs text-gray-500">{time}</span>
        <img src={icon} alt="seta" className="w-4 h-4" />
      </div>
    </div>
  );
}
