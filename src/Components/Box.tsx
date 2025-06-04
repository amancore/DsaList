import { Link } from "react-router-dom";
export interface props {
	id: number;
	name: string;
	link: string;
	status: string;
	done: boolean;
}
export interface Props {
	QuesList: {
		[topicName: string]: props[];
	};
}
function Box({ QuesList }: Props) {
	const title = Object.keys(QuesList)[0];
	const totalQuestion = QuesList[title].length;
	let started = QuesList[title][0].done;

	const local = localStorage.getItem(`QuesList-${title}`);
	const questions = local ? JSON.parse(local) : QuesList[title];

	const totalDone = questions.filter((q: props) => q.done).length;
	console.log(title,totalDone)
	if (totalDone) started = true;
	return (
		<div className="flex flex-col items-center justify-around">
			<Link to={`/topic/${encodeURIComponent(title.replace(/\s+/g, "-"))}`}>
				<div className="my-8 bg-blue-200 bg-opacity-30 backdrop-blur-lg shadow-lg shadow-black/20 p-6 rounded-lg flex flex-col justify-between h-40 w-85 hover:scale-105 transition-transform duration-300 ease-in-out border-3 border-white cursor-pointer text-center">
					<span className="font-bold text-2xl text-black">
						{title}
					</span>
					<p className="text-md mt-2 font-bold opacity-70">
						Total Questions: {totalQuestion}
					</p>
					<span className="mt-2 text-gray-700 font-bold">
						{started ? (
							<p className="text-green-500 text-l">
								Solved Total : {totalDone}
							</p>
						) : (
							<p className="opacity-50">Not Yet Started</p>
						)}
					</span>
				</div>
			</Link>
		</div>
	);
}export default Box;
