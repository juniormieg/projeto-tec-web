import logo from "../assets/esquerda.png";
import Input from "../components/homeInput";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.svg";
import Apple from "../assets/Apple.svg";
import CellInput from "../components/cellInput";

export default function Register() {
	const navigate = useNavigate();
	return (
		<div className="flex h-screen w-full">
			<div className="h-screen w-full">
				<img src={logo} alt="Logo" className="w-full h-full object-cover" />
			</div>
			<div className="flex items-center justify-center w-full flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-2">
					<h1 className="text-5xl font-bold">Crie sua conta</h1>
					<span className="text-slate-500 text-xl">
						já tem uma conta?{" "}
						<Link to="/" className="text-[#005F6B]">
							entre aqui
						</Link>
					</span>
				</div>
				<div className="flex-col flex gap-10">
					<Input type="email" label="Email" />
					<CellInput></CellInput>
          <Input type="password" label="Sua senha" />
          <Input type="date" label="Data de nascimento"></Input>
				</div>
				<button
					onClick={() => navigate("/")}
					className="bg-[#005F6B] text-white px-4 py-2 rounded-xl w-122.5 h-12.5 font-bold"
				>
					Cadastrar
				</button>
				<div className="flex justify-between w-122.5">
					<label className="flex items-center justify-center gap-2">
						{" "}
						<input type="checkbox" /> Li e aceito  os termos de uso
					</label>
				</div>
				<div className="flex flex-col w-122.5 gap-4">
					<h2>ou cadastre-se com</h2>
					<div className="flex gap-4">
						<button className="w-[155px] h-9 flex items-center justify-center border-1 border-slate-500 rounded-md ">
							<img src={Google} alt="Google" className="w-6 h-6" />
						</button>
						<button className="w-[155px] h-9 flex items-center justify-center border-1 border-slate-500 rounded-md ">
							<img src={Facebook} alt="Facebook" className="w-6 h-6" />
						</button>
						<button className="w-[155px] h-9 flex items-center justify-center border-1 border-slate-500 rounded-md ">
							<img src={Apple} alt="Apple" className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
