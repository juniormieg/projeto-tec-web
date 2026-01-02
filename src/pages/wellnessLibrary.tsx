import Footer from "@/components/footer";
import Header from "@/components/header";
import Search from "@/assets/Search.svg";
import HumanHeart from "@/assets/humanHeart.png";
import Sleep from "@/assets/sleep.png";
import Meditate from "@/assets/meditate.png";
import Food from "@/assets/food.png";
import Running from "@/assets/running.png";
import Talking from "@/assets/talking.png";
import SetaRosa from "@/assets/setarosa.png";

import ArticleCard from "@/components/wellness-library/articleCard";
import FilterCard from "@/components/wellness-library/filterCard";

export default function WellnessLibrary() {
  const myArticles = [
    {
      id: 1,
      tittle: "Doença Arterial Coronariana",
      category: "Medicina",
      description:
        "Entenda os sintomas, causas e opções de tratamentos para o tipo de doença mais comum no coração. ",
      image: HumanHeart,
      time: "lido há 5min",
      icon: SetaRosa,
    },

    {
      id: 2,
      tittle: "Higiene do Sono",
      category: "Saúde",
      description:
        "Por quê dormir bem é crucial para a saúde do coração e dicas práticas para melhorar sua qualidade do sono.",
      image: Sleep,
      time: "lido há 7min",
      icon: SetaRosa,
    },
    {
      id: 3,
      tittle: "Treinando o relaxamento ",
      category: "Saúde",
      description:
        "Exercícios físicos de respiração e técnicas de meditação para diminuir a pressão sanguínea imediatamente.",
      image: Meditate,
      time: "lido há 15min",
      icon: SetaRosa,
    },
    {
      id: 4,
      tittle: "Dieta para a Saúde do Coração",
      category: "Nutrição",
      description:
        "Por que dorUm guia de comidas que ajudam a manter a saúde do sistema cardiovascular forte.mir bem é crucial para o coração...",
      image: Food,
      time: "lido há 25min",
      icon: SetaRosa,
    },
    {
      id: 5,
      tittle: "Movimento como Remédio",
      category: "Saúde",
      description:
        "Por que Como incorporar apenas 20 minutos de caminhada na rotina diária pode mudar a sua saúde cardiovascular. bem é crucial para o coração...",
      image: Running,
      time: "lido há 47min",
      icon: SetaRosa,
    },
    {
      id: 6,
      tittle: "Perguntas para seu Médico",
      category: "Saúde",
      description:
        "Por que dormir bem é crucial para o cSe prepare para seu próximo checkup com essa checklist de perguntas vitais sobre seu coração.oração...",
      image: Talking,
      time: "lido há 46min",
      icon: SetaRosa,
    },
  ];
  const categories = ["Todos", "Medicina", "Saúde", "Nutrição"];

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col bg-primary-gray">
        <div className="flex flex-col gap-12 m-14">
          <span className="flex gap-1">
            Bibioteca /<h2 className="text-primary-pink"> Saúde Cardiaca</h2>
          </span>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-extrabold text-4xl text-black">Biblioteca</h1>
              <h2 className="font-semibold text-xl text-primary-pink">
                Artigos selecionados e guias para sua trajetória de saúde e
                bem-estar.
              </h2>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Procure artigos, tópicos..."
                className="
                  text-primary-blue
                  bg-white
                  w-112.5
                  h-10
                  rounded-2xl
                  pl-9
                  pr-3
                  drop-shadow-xl
                  focus:outline-none
                "
              />

              <img
                src={Search}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="flex flex-wrap gap-4 px-14 pb-8">
            {categories.map((cat) => (
              <FilterCard key={cat} label={cat} isActive={cat === "Todos"} />
            ))}
          </div>

          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="min-h-screen bg-primary-gray pb-10">
          <div className="grid grid-cols-4 justify-center gap-4">
            {myArticles.map((artigo) => (
              <div key={artigo.id} className="w-full rounded-2xl">
                <ArticleCard
                  image={artigo.image}
                  category={artigo.category}
                  tittle={artigo.tittle}
                  description={artigo.description}
                  time={artigo.time}
                  icon={artigo.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
