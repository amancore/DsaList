import hero from "../assets/hero.jpg";
function Hero() {
	return (
		<div className="flex flex-row items-center justify-between h-[80vh] px-40">
			<div className="max-w-3xl space-x-10">
				<h1 className="text-5xl font-extrabold mb-6">
					Master 100 Essential DSA Questions
				</h1>
				<p className="text-lg text-gray-500 font-bold mb-10 w-[700px]">
					Sharpen your coding skills and prepare for top tech interviews with
					our curated list of must-solve Data Structures and Algorithms
					questions. Tackle challenges across arrays, strings, trees, graphs,
					dynamic programming, and more—all organized by topic for focused
					learning
				</p>
				<button
					onClick={() =>
						window.scrollTo({
							top: document.body.scrollHeight,
							behavior: "smooth",
						})
					}
					className="cursor-pointer px-6 py-3 bg-yellow-500 text-white rounded-lg font-bold shadow-lg">
					Start Practicing Now
				</button>
			</div>
			<img
				src={hero}
				alt="Hand holding calculator"
				className="h-[600px] object-contain rounded-lg "
			/>
		</div>
	);
}

export default Hero;
