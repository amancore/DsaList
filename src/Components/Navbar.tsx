
import icon from '../assets/icon1.png';
import { useNavigate } from "react-router-dom";
function Navbar() {
	const navigate = useNavigate();
	return (
		<>
			<div
				onClick={() => navigate("/")}
				className="flex w-full h-[60px] bg-yellow-500 bg-opacity-30 backdrop-blur-lg shadow-lg shadow-gray-200 items-center justify-start">
				<img src={icon} alt="icon" className="w-15 h-15 ml-5" />
				<h1 className="text-3xl font-bold text-black p-3 cursor-pointer">
					Dsa List
				</h1>
			</div>
		</>
	);
}

export default Navbar