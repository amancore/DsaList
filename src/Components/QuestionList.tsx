import { useParams } from "react-router-dom";
import QuestIcon from "../assets/focus.png";
import ok from "../assets/check.png";
import cross from "../assets/letter-x.png";
import { useState, useEffect } from "react";
import ScrollToTop from "../ScrollToTop";

interface QuestionProps {
	id: number;
	name: string;
	link: string;
	status: string;
	done: boolean;
}

interface Props {
	QuesList: {
		[topicName: string]: QuestionProps[];
	};
}

function QuestionList({ QuesList }: Props) {
	const { topicName } = useParams();
	const header = topicName ? topicName.replace(/-/g, " ") : "";

	// Safe retrieval of stored data
	const stored =
		typeof window !== "undefined"
			? localStorage.getItem(`QuesList-${header}`)
			: null;

	const initialList: QuestionProps[] = stored
		? JSON.parse(stored)
		: QuesList[header] || [];

	const [ql, setql] = useState<QuestionProps[]>(initialList);

	// Save to localStorage on change
	useEffect(() => {
		localStorage.setItem(`QuesList-${header}`, JSON.stringify(ql));
	}, [ql, header]);

	const toggleDone = (idx: number) => {
		const updated = [...ql];
		updated[idx].done = !updated[idx].done;
		updated[idx].status = updated[idx].done ? "Solved" : "Unsolved";
		setql(updated);
	};

	return (
		<>
			<ScrollToTop />
			<h1 className="text-3xl font-bold flex items-center justify-center m-5 gap-3">
				<img src={QuestIcon} alt="Quest Icon" className="w-10 h-10" />
				{header}
			</h1>

			{ql.length > 0 ? (
				<table className="w-full font-bold text-md text-left text-gray-700 border-collapse">
					<thead>
						<tr className="text-white bg-black text-center">
							<th className="font-normal p-3 w-10 border-2 border-white">ID</th>
							<th className="font-normal p-3 border-2 border-white">
								Question(s)
							</th>
							<th className="font-normal p-3 w-36 border-2 border-white">
								Status
							</th>
							<th className="font-normal p-3 w-20 border-2 border-white">
								Done
							</th>
						</tr>
					</thead>
					<tbody>
						{ql.map((item, idx) => (
							<tr
								key={item.id}
								className={item.done ? "bg-green-400" : "bg-white"}>
								<td className="text-md text-gray-700 font-medium border-2 p-3 text-center">
									{idx + 1}
								</td>
								<td className="text-md text-gray-700 font-medium border-2 p-3">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="no-underline text-black hover:text-blue-500 hover:underline font-bold opacity-80">
										{item.name}
									</a>
								</td>
								<td className="text-md text-gray-700 font-medium text-center border-2">
									<img
										className="w-5 h-5 inline"
										src={item.done ? ok : cross}
										alt={item.done ? "Done" : "Not Done"}
									/>
								</td>
								<td className="text-md text-gray-700 font-medium text-center border-2 p-3">
									<input
										type="checkbox"
										onChange={() => toggleDone(idx)}
										checked={item.done}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="font-bold text-2xl text-center mt-10">
					No questions for this topic.
				</div>
			)}
		</>
	);
}

export default QuestionList;
