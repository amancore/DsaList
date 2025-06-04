import { useParams } from "react-router-dom";
import QuestIcon from "../assets/focus.png";
import ok from "../assets/check.png";
import cross from "../assets/letter-x.png";
import { useState, useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
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
function QuestionList({ QuesList }: Props) {
	const { topicName } = useParams();
	const header = topicName ? topicName.replace(/-/g, " ") : "";
	const [ql, setql] = useState(
		JSON.parse(localStorage.getItem(`QuesList-${header}`) as string) ||
			QuesList[header] ||
			[]
	);
	// Save to localStorage on any change
	useEffect(() => {
		localStorage.setItem(`QuesList-${header}`, JSON.stringify(ql));
	}, [ql, header]);

	const toggleDone = (idx: number) => {
		ql[idx].done = !ql[idx].done;
		ql[idx].status = ql[idx].done ? "Solved" : "Unsolved";
		setql([...ql]);
	};
	return (
		<>
			<ScrollToTop />
			<h1 className="text-3xl font-bold flex flex-row items-center justify-center m-5 gap-3">
				<img
					src={QuestIcon}
					alt="Quest Icon"
					className="flex flex-col w-10 h-10 items-center justify-center"
				/>
				{header}
			</h1>
			{ql.length ? (
				<table className="w-full font-bold text-md text-left text-gray-500 border-collapse">
					<thead>
						<tr className="text-white font-bold text-md bg-black text-center">
							<th className="border-1 font-normal text-center p-3 w-10 border-2 border-white-500">
								ID
							</th>
							<th className="border-1 font-normal text-center p-3 border-2 border-white-500">
								Question(s)
							</th>
							<th className="border-1 font-normal text-center p-3 w-36 border-2 border-white-500">
								Status
							</th>
							<th className="border-1 font-normal text-center p-3 w-20 border-2 border-white-500">
								Done
							</th>
						</tr>
					</thead>
					<tbody>
						{ql.map((item: props, key: number) => (
							<tr
								key={item.id}
								className={
									item.done
										? "bg-green-400":
										"bg-white"
								}>
								<td className="text-md text-white-700 font-medium border-2 p-3 w-10">
									{key + 1}
								</td>
								<td className="text-md text-left text-white-700 font-medium border-2 p-3">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="no-underline text-black hover:text-blue-500 hover:underline font-bold opacity-80">
										{item.name}
									</a>
								</td>
								<td className="text-md text-white-700 font-medium text-center border-2 w-36">
									{item.done ? (
										<img
											className="w-5 h-5 inline"
											src={ok}
											alt="Done"
										/>
									) : (
										<img
											className="w-5 h-5 inline"
											src={cross}
											alt="Not Done"
										/>
									)}
								</td>
								<td className="text-md text-white-700 font-medium border-2 p-3 w-20 text-center">
									<input
										type="checkbox"
										onChange={() => toggleDone(key)}
										checked={item.done}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="font-bold text-2xl">No questions for this topic.</div>
			)}
		</>
	);
}
export default QuestionList;
