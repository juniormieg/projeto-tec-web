import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function WellnessCheck() {
	const [mood, setMood] = useState(0);
	const [sleep, setSleep] = useState(0);
	const [activity, setActivity] = useState(0);

	const getMoodText = (val: number) =>
		val >= 8 ? "Estou ótimo!" : val >= 5 ? "Tudo bem" : "Não estou muito bem";
	const getSleepText = (val: number) =>
		val >= 8
			? "Dormi muito bem"
			: val >= 4
			? "Poderia ser melhor"
			: "Dormi mal";
	const getActivityText = (val: number) =>
		val >= 8 ? "Muito ativo" : val >= 5 ? "Como chegar" : "Pouca atividade";

	return (
		<div>
			<Header />
			<div className="w-full min-h-screen bg-[#FCF8FA] font-sans">
				<div className="max-w-360 mx-auto px-5 lg:px-18.75 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-4 flex flex-col gap-6">
						<div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F4E6EE]">
							<div className="flex items-center gap-3 mb-4 border-b border-[#F4F4F4] pb-4">
								<img
									src="/imgs/traceyProfile.svg"
									alt="Tracey"
									className="w-12 h-12 rounded-full border-2 border-[#E4007C]"
								/>
								<div>
									<h3 className="text-[16px] font-bold text-[#2D2D2D]">
										Tracey
									</h3>
									<p className="text-[14px] text-[#E4007C]">
										Assistente de saúde
									</p>
								</div>
							</div>
							<div className="bg-[#F4E6EE] p-5 rounded-3xl rounded-tl-none min-h-30 flex items-center">
								<p className="text-[16px] text-[#2D2D2D] leading-relaxed">
									Gostaria de lhe fazer algumas perguntas para saber como você
									está hoje.
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-span-8 flex flex-col gap-8">
						<div>
							<h1 className="text-[32px] md:text-[40px] font-extrabold text-[#2D2D2D] leading-tight mb-3">
								Sua avaliação semanal
							</h1>
							<p className="text-[#2D2D2D] text-lg font-medium opacity-80">
								Nas últimas 24 horas, como você se saiu?
							</p>
						</div>

						<div className="flex flex-col gap-6">
							<div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-[#F4E6EE] hover:shadow-md transition-shadow">
								<div className="flex flex-col md:flex-row gap-6 items-center">
									<div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-[#FCE5F2]">
										<img
											src="/imgs/wellnessCheck/smileIcon.svg"
											alt="Humor"
											className="w-8 h-8"
										/>
									</div>
									<div className="flex-1 w-full flex flex-col gap-4">
										<div className="flex justify-between items-end">
											<div>
												<p className="text-sm font-bold uppercase tracking-wide mb-1 text-[#E4007C]">
													Humor
												</p>
												<h3 className="text-xl font-bold text-[#2D2D2D]">
													{getMoodText(mood)}
												</h3>
											</div>
											<div className="text-2xl font-black text-[#E4007C]">
												{mood}
												<span className="text-lg text-gray-400">/10</span>
											</div>
										</div>

										<div className="relative h-6 flex items-center slider-mood">
											<style>{`
                      .slider-mood .bg-primary { background-color: #E4007C !important; }
                      .slider-mood .border-primary { border-color: #E4007C !important; }
                      .slider-mood span[role="slider"] { background-color: white !important; border-width: 4px !important; width: 24px !important; height: 24px !important; }
                    `}</style>
											<Slider
												value={[mood]}
												max={10}
												step={1}
												onValueChange={val => setMood(val[0])}
												className="cursor-pointer slider-mood"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-[#F4E6EE] hover:shadow-md transition-shadow">
								<div className="flex flex-col md:flex-row gap-6 items-center">
									<div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0E5]">
										<img
											src="/imgs/wellnessCheck/moonIcon.svg"
											alt="Dormir"
											className="w-8 h-8"
										/>
									</div>
									<div className="flex-1 w-full flex flex-col gap-4">
										<div className="flex justify-between items-end">
											<div>
												<p className="text-sm font-bold uppercase tracking-wide mb-1 text-[#FB8235]">
													Dormir
												</p>
												<h3 className="text-xl font-bold text-[#2D2D2D]">
													{getSleepText(sleep)}
												</h3>
											</div>
											<div className="text-2xl font-black text-[#FB8235]">
												{sleep}
												<span className="text-lg text-gray-400">/10</span>
											</div>
										</div>

										<div className="relative h-6 flex items-center slider-sleep">
											<style>{`
                      .slider-sleep .bg-primary { background-color: #FB8235 !important; }
                      .slider-sleep .border-primary { border-color: #FB8235 !important; }
                      .slider-sleep span[role="slider"] { background-color: white !important; border-width: 4px !important; width: 24px !important; height: 24px !important; }
                    `}</style>
											<Slider
												value={[sleep]}
												max={10}
												step={1}
												onValueChange={val => setSleep(val[0])}
												className="cursor-pointer slider-sleep"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-[#F4E6EE] hover:shadow-md transition-shadow">
								<div className="flex flex-col md:flex-row gap-6 items-center">
									<div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-[#E0EFF1]">
										<img
											src="/imgs/wellnessCheck/runIcon.svg"
											alt="Atividade"
											className="w-8 h-8"
										/>
									</div>
									<div className="flex-1 w-full flex flex-col gap-4">
										<div className="flex justify-between items-end">
											<div>
												<p className="text-sm font-bold uppercase tracking-wide mb-1 text-[#005F6B]">
													Atividade
												</p>
												<h3 className="text-xl font-bold text-[#2D2D2D]">
													{getActivityText(activity)}
												</h3>
											</div>
											<div className="text-2xl font-black text-[#005F6B]">
												{activity}
												<span className="text-lg text-gray-400">/10</span>
											</div>
										</div>

										<div className="relative h-6 flex items-center slider-activity">
											<style>{`
                      .slider-activity .bg-primary { background-color: #005F6B !important; }
                      .slider-activity .border-primary { border-color: #005F6B !important; }
                      .slider-activity span[role="slider"] { background-color: white !important; border-width: 4px !important; width: 24px !important; height: 24px !important; }
                    `}</style>
											<Slider
												value={[activity]}
												max={10}
												step={1}
												onValueChange={val => setActivity(val[0])}
												className="cursor-pointer slider-activity"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-end pt-4">
							<Button className="bg-[#E4007C] hover:bg-[#C00068] text-white text-base font-bold py-6 px-10 rounded-full shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1">
								Enviar verificação de bem estar
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
