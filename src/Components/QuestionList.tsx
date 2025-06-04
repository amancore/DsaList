import { useParams } from "react-router-dom";
import QuestIcon from "../assets/focus.png";
import { useState } from "react";
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


	const [ql, setql] = useState(QuesList[header] || []);
	const toggleDone = (idx: number) => {
		ql[idx].done = !ql[idx].done;
		ql[idx].status = ql[idx].done ? "Solved" : "Unsolved";
		setql([...ql]);
	};
	return (
		<>
			<h1 className="text-3xl font-bold flex flex-row items-center justify-center m-5 gap-3">
				<img
					src={QuestIcon}
					alt="Quest Icon"
					className="flex flex-col w-10 h-10 items-center justify-center"
				/>
				{header}
			</h1>
			{ql.length ? (
				<ul className="px-8">
					{ql.map((item, key) => (
						<li key={item.id}>
							<span className="text-sm text-gray-500 ml-2">
								{key + 1}.{" "}
							</span>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="no-underline text-black">
								{item.name}
							</a>
							{item.done}
							<span className="text-sm text-gray-500 ml-2">
								({item.status})
							</span>
							<span onClick={() => toggleDone(key)} className="text-sm text-gray-500 ml-2 cursor-pointer">
								{item.done ? "✅ Done" : "❌ Not Done"}
								</span>
						</li>
					))}
				</ul>
			) : (
				<div>No questions for this topic.</div>
			)}
		</>
	);
}

export default QuestionList;
