import { useState } from "react";
import { ChatAssistant } from "../components/event-profile/ChatAssistant";
import { BodyMap } from "../components/event-profile/BodyMap";
import { AddSymptomModal } from "../components/event-profile/AddSymptomModal";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function EventProfile() {
	const [selectedSymptom, setSelectedSymptom] = useState("Apertado");
	const [symptomsList, setSymptomsList] = useState([
		"Apertado",
		"Ardente",
		"Pesado",
	]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAddSymptom = (newText: string) => {
		setSymptomsList([...symptomsList, newText]);
		setSelectedSymptom(newText);
		setIsModalOpen(false);
	};

	return (
		<div>
      <Header />
			<div className="w-full min-h-screen bg-[#FCF8FA] font-sans relative">
				<AddSymptomModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onConfirm={handleAddSymptom}
				/>

				<div className="max-w-360 mx-auto px-5 lg:px-18.75 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-4 flex flex-col gap-8">
						<div>
							<h1 className="text-[36px] font-extrabold text-[#2D2D2D] leading-tight mb-4">
								Criação de perfil <br /> de evento
							</h1>
							<p className="text-[18px] text-[#E4007C] font-normal leading-relaxed">
								Documente com precisão os detalhes dos seus eventos de saúde
								recentes para o seu médico.
							</p>
						</div>

						<ChatAssistant />
					</div>

					<div className="lg:col-span-8 bg-white rounded-[32px] p-8 shadow-sm border border-[#F4E6EE]">
						<div className="flex justify-between items-center mb-6">
							<div className="flex items-center gap-2">
								<img
									src="/imgs/eventProfile/peopleIcon.svg"
									alt="Icon"
									className="w-6 h-6"
								/>
								<h2 className="text-[20px] font-bold text-[#2D2D2D]">
									Toque no local da dor
								</h2>
							</div>
							<button className="text-[14px] font-bold text-[#E4007C] hover:underline">
								Redefinir Mapa
							</button>
						</div>

						<BodyMap />

						<div className="mb-8">
							<label className="block text-[16px] font-bold text-[#2D2D2D] mb-3">
								Onde você sentiu dor?
							</label>
							<div className="relative">
								<div className="absolute left-4 top-1/2 transform -translate-y-1/2">
									<img
										src="/imgs/eventProfile/locationIcon.svg"
										alt="Location"
										className="w-5 h-5 opacity-60"
									/>
								</div>
								<input
									type="text"
									defaultValue="Área do lado esquerdo do peito, costelas superiores"
									className="w-full bg-[#F4E6EE] bg-opacity-50 border border-[#E4007C] border-opacity-20 rounded-2xl py-4 pl-12 pr-4 text-[#2D2D2D] focus:outline-none focus:border-[#E4007C]"
								/>
							</div>
						</div>

						<div className="mb-12">
							<label className="flex items-center gap-2 text-[16px] font-bold text-[#2D2D2D] mb-3">
								<img
									src="/imgs/eventProfile/heartIcon.svg"
									alt="Heart"
									className="w-5 h-5"
								/>
								Como você descreveria a sensação?
							</label>
							<div className="flex flex-wrap gap-3">
								{symptomsList.map(tag => (
									<button
										key={tag}
										onClick={() => setSelectedSymptom(tag)}
										className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
											selectedSymptom === tag
												? "bg-[#005F6B] text-white border-[#005F6B]"
												: "bg-white text-[#2D2D2D] border-[#E4007C] border-opacity-30 hover:border-[#005F6B]"
										}`}
									>
										{tag}
									</button>
								))}
								<button
									onClick={() => setIsModalOpen(true)}
									className="px-6 py-2 rounded-full font-bold text-sm bg-[#F4E6EE] bg-opacity-30 text-[#E4007C] border border-dashed border-[#E4007C] hover:bg-opacity-50 transition-all"
								>
									+ Adicionar personalizado
								</button>
							</div>
						</div>

						<div className="flex justify-end border-t border-[#F4F4F4] pt-6">
							<button className="bg-[#E4007C] text-white font-bold text-[16px] px-10 py-3 rounded-full hover:bg-opacity-90 shadow-lg shadow-pink-200 transition-all transform hover:scale-105">
								Salvar
							</button>
						</div>
					</div>
				</div>
			</div>
      <Footer />
		</div>
	);
}
