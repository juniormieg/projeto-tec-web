import Header from "@/components/header";
import Footer from "@/components/footer";
import CardList from "@/components/historico/cardList";
import Bastao from "../assets/bastao.svg";

export default function Historico() {
	return (
		<div className="bg-primary-gray">
			<Header />
			<div >
				<div className="m-14 flex flex-col gap-8">
					<h1 className="font-extrabold text-4xl text-preto-suave">Meu Histórico</h1>
					<h2 className="font-semibold text-xl text-primary-pink">Rastreamento de Sintomas</h2>
				</div>
				<div className="flex gap-8 m-14">
					<img src={Bastao} alt="ícone" />
					<CardList />
				</div>
			</div>
			<Footer />
		</div>
	);
}
