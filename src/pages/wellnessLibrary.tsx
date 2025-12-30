import Footer from "@/components/footer";
import Header from "@/components/header";
import Search from "@/assets/Search.svg";

export default function WellnessLibrary() {
	return (
		<div>
			<Header />
			<div className="w-full h-screen flex flex-col bg-primary-gray">
				<div className="flex flex-col gap-12 m-14">
					<span className="flex gap-1">
						bibioteca<h2 className="text-primary-pink">/ Saúde Cardiaca</h2>
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
			</div>
			<Footer />
		</div>
	);
}
