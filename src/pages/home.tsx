import logo from "../assets/esquerda.png";
import Input from "../components/homeInput";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.svg";
import Apple from "../assets/Apple.svg";

export default function Home() {
  const navigate = useNavigate();   
	return (
		<div className="flex h-screen w-full">
			<div className="h-screen w-full">
				<img src={logo} alt="Logo" className="w-full h-full object-cover" />
			</div>
			<div className="flex items-center justify-center w-full flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-2">
					<h1 className="text-5xl font-bold">Bem vindo de volta!</h1>
					<span className="text-slate-500 text-xl">
						novo por aqui?{" "}
						<Link to="/register" className="text-primary-blue">
							Cadastre-se
						</Link>
					</span>
				</div>
				<div className="flex-col flex gap-10">
					<Input type="email" label="Email" />
					<Input type="password" label="Sua senha" />
				</div>
				<button onClick={()=> navigate("/inicio")} className="bg-primary-blue text-white px-4 py-2 rounded-xl w-122.5 h-12.5 font-bold">
					Entrar
				</button>
				<div className="flex justify-between w-122.5">
					<label className="flex items-center justify-center gap-2">
						{" "}
						<input type="checkbox" /> Lembrar de mim
					</label>
					<Link to="/forgot-password" className="text-primary-blue">
						Esqueceu sua senha?
					</Link>
				</div>
				<div className="flex flex-col w-122.5 gap-4">
					<h2>ou entre com</h2>
					<div className="flex gap-4">
						<button className="w-38.75 h-9 flex items-center justify-center border border-slate-500 rounded-md ">
							<img src={Google} alt="Google" className="w-6 h-6" />
						</button>
						<button className="w-38.75 h-9 flex items-center justify-center border border-slate-500 rounded-md ">
							<img src={Facebook} alt="Facebook" className="w-6 h-6" />
						</button>
						<button className="w-38.75 h-9 flex items-center justify-center border border-slate-500 rounded-md ">
							<img src={Apple} alt="Apple" className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
