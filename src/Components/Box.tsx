import { Link } from "react-router-dom";
interface props {
	id: number;
	name: string;
	link: string;
	status: string;
	done: boolean;
}
interface Props {
	QuesList: {
		[topicName: string]: props[];
	};
}
function Box({ QuesList }: Props) {
	const title = Object.keys(QuesList)[0];
	const totalQuestion = QuesList[title].length;
	const started = QuesList[title][0].done;
	console.log(title,totalQuestion, started);
	return (
		<div className="flex flex-col items-center justify-around">
			<Link to={`/topic/${encodeURIComponent(title.replace(/\s+/g, "-"))}`}>
				<div className="my-8 bg-blue-200 bg-opacity-30 backdrop-blur-lg shadow-lg shadow-black/20 p-6 rounded-lg flex flex-col justify-between h-40 w-70 hover:scale-105 transition-transform duration-300 ease-in-out border-3 border-white cursor-pointer">
					<span className="font-bold text-xl">{title}</span>
					<p className="text-md mt-2 font-bold opacity-70">
						Total Questions: {totalQuestion}
					</p>
					<span className="mt-2 text-sm text-gray-700 font-bold opacity-50">
						{started ? "Started" : "Not Yet Started"}
					</span>
				</div>
			</Link>
		</div>
	);
}
export default Box;
