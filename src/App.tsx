import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Box from "./Components/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionList from "./Components/QuestionList";
function App() {
	const QuesList = {
		"Array and String": [
			{
				id: 1,
				name: "Search in a sorted 2D matrix",
				link: "https://leetcode.com/problems/search-a-2d-matrix/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Grid Unique Paths | Count paths from left-top to the right bottom of a matrix",
				link: "https://leetcode.com/problems/unique-paths/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Two Sum : Check if a pair with given sum exists in Array",
				link: "https://leetcode.com/problems/two-sum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Longest Consecutive Sequence in an Array",
				link: "https://leetcode.com/problems/longest-consecutive-sequence/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Length of the longest subarray with zero Sum",
				link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Length of Longest Substring without any Repeating Character",
				link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Count the number of subarrays with given xor K",
				link: "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 8,
				name: "Merge Overlapping Sub-intervals",
				link: "https://leetcode.com/problems/merge-intervals/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 9,
				name: "Merge two Sorted Arrays Without Extra Space",
				link: "https://leetcode.com/problems/merge-sorted-array/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 10,
				name: "Program to generate Pascal’s Triangle",
				link: "https://leetcode.com/problems/pascals-triangle/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 11,
				name: "Next_permutation : find next lexicographically greater permutation",
				link: "https://leetcode.com/problems/next-permutation/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 12,
				name: "Kadane’s Algorithm : Maximum Subarray Sum in an Array",
				link: "https://leetcode.com/problems/maximum-subarray/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 13,
				name: "Sort an array of 0s, 1s and 2s",
				link: "https://leetcode.com/problems/sort-colors/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 14,
				name: "Grid Unique Paths",
				link: "https://leetcode.com/problems/unique-paths/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 15,
				name: "Reverse Pairs",
				link: "https://leetcode.com/problems/reverse-pairs/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 16,
				name: "Pow(x,n) : Find X raised to the power N",
				link: "https://leetcode.com/problems/powx-n/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 17,
				name: "4 Sum problem",
				link: "https://leetcode.com/problems/4sum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 18,
				name: "Max consecutive Ones",
				link: "https://leetcode.com/problems/max-consecutive-ones/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 19,
				name: "Reverse Words in a String",
				link: "https://leetcode.com/problems/reverse-words-in-a-string/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 20,
				name: "Longest Palindrome in a string",
				link: "https://leetcode.com/problems/longest-palindromic-substring/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 21,
				name: "Longest Common Prefix",
				link: "https://leetcode.com/problems/longest-common-prefix/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 22,
				name: "Minimum characters needed to be inserted in the beginning to make it palindromic",
				link: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 23,
				name: "Check for Anagrams",
				link: "https://leetcode.com/problems/valid-anagram/",
				status: "Unsolved",
				done: false,
			},
		],

		Greedy: [
			{
				id: 1,
				name: "N meetings in one room",
				link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Minimum number of platforms required for a railway",
				link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Job Sequencing Problem",
				link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Fractional Knapsack Problem",
				link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Find minimum number of coins",
				link: "https://leetcode.com/problems/coin-change/",
				status: "Unsolved",
				done: false,
			},
		],
		"Dynamic Programming": [
			{
				id: 1,
				name: "Maximum Product Subarray in an Array",
				link: "https://leetcode.com/problems/maximum-product-subarray/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Longest Common Subsequence",
				link: "https://leetcode.com/problems/longest-common-subsequence/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "0/1 Knapsack",
				link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Edit Distance",
				link: "https://leetcode.com/problems/edit-distance/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Rod Cutting Problem",
				link: "https://practice.geeksforgeeks.org/problems/rod-cutting0840/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Subset sum equal to target",
				link: "https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Coin Change 2",
				link: "https://leetcode.com/problems/coin-change-ii/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 8,
				name: "Minimum Path Sum In a Grid",
				link: "https://leetcode.com/problems/minimum-path-sum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 9,
				name: "Longest Increasing Subsequence",
				link: "https://leetcode.com/problems/longest-increasing-subsequence/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 10,
				name: "Maximum sum increasing subsequence",
				link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 11,
				name: "Matrix Chain Multiplication",
				link: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 12,
				name: "Minimum sum path in the matrix, (count paths and similar type do, also backtrack to find the Minimum path)",
				link: "https://leetcode.com/problems/minimum-path-sum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 13,
				name: "Maximum profit in Job scheduling",
				link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
				status: "Unsolved",
				done: false,
			},
		],

		"Binary Search": [
			{
				id: 1,
				name: "Nth Root of a Number using Binary Search",
				link: "https://leetcode.com/problems/nth-root-of-x/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Search Single Element in a sorted array",
				link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Search Element in a Rotated Sorted Array",
				link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Median of Two Sorted Arrays of different sizes",
				link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "K-th Element of two sorted arrays",
				link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Allocate Minimum Number of Pages",
				link: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Aggressive Cows",
				link: "https://practice.geeksforgeeks.org/problems/aggressive-cows/0",
				status: "Unsolved",
				done: false,
			},
		],

		Heaps: [
			{
				id: 1,
				name: "Maximum Sum Combination",
				link: "https://www.geeksforgeeks.org/k-maximum-sum-combinations-two-arrays/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Kth Largest Element in an Array",
				link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Top K frequent elements",
				link: "https://leetcode.com/problems/top-k-frequent-elements/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Merge K sorted arrays",
				link: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Find Median from Data Stream",
				link: "https://leetcode.com/problems/find-median-from-data-stream/",
				status: "Unsolved",
				done: false,
			},
		],

		Recursion: [
			{
				id: 1,
				name: "Subset Sum : Sum of all Subsets",
				link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Subset – II | Print all the Unique Subsets",
				link: "https://leetcode.com/problems/subsets-ii/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Combination Sum – 1",
				link: "https://leetcode.com/problems/combination-sum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Combination Sum II – Find all unique combinations",
				link: "https://leetcode.com/problems/combination-sum-ii/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Palindrome Partitioning",
				link: "https://leetcode.com/problems/palindrome-partitioning/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Find K-th Permutation Sequence",
				link: "https://leetcode.com/problems/permutation-sequence/",
				status: "Unsolved",
				done: false,
			},
		],
		"Linked List": [
			{
				id: 1,
				name: "Check if given Linked List is Palindrome",
				link: "https://leetcode.com/problems/palindrome-linked-list/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Reverse Linked List in groups of Size K",
				link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Detect a Cycle in a Linked List",
				link: "https://leetcode.com/problems/linked-list-cycle/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Find intersection of Two Linked Lists",
				link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Starting point of loop in a Linked List",
				link: "https://leetcode.com/problems/linked-list-cycle-ii/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Flattening a Linked List",
				link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Merge two sorted Linked Lists",
				link: "https://leetcode.com/problems/merge-two-sorted-lists/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 8,
				name: "Remove N-th node from the end of a Linked List",
				link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
				status: "Unsolved",
				done: false,
			},
		],
		"Binary Tree": [
			{
				id: 1,
				name: "Level Order Traversal of a Binary Tree",
				link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Maximum Depth of a Binary Tree",
				link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Calculate the Diameter of a Binary Tree",
				link: "https://leetcode.com/problems/diameter-of-binary-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Check if the Binary Tree is Balanced Binary Tree",
				link: "https://leetcode.com/problems/balanced-binary-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Lowest Common Ancestor for two given Nodes",
				link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Check if two trees are identical",
				link: "https://leetcode.com/problems/same-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Boundary Traversal of a Binary Tree",
				link: "https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 8,
				name: "Zig Zag Traversal Of Binary Tree",
				link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
				status: "Unsolved",
				done: false,
			},
		],
		"Binary Search Tree": [
			{
				id: 1,
				name: "Size of the largest BST in a Binary Tree",
				link: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Find a pair with a given sum in BST",
				link: "https://practice.geeksforgeeks.org/problems/find-a-pair-with-given-target-in-bst/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Populate Next Right pointers of Tree",
				link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Find LCA of two nodes in BST",
				link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Find the inorder predecessor/successor of a given Key in BST.",
				link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Kth largest element in Binary Search Tree",
				link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
				status: "Unsolved",
				done: false,
			},
		],

		"Stack and Queue": [
			{
				id: 1,
				name: "Implement Min Stack : O(2N) and O(N) Space Complexity",
				link: "https://leetcode.com/problems/min-stack/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Sliding Window Maximum",
				link: "https://leetcode.com/problems/sliding-window-maximum/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Area of largest rectangle in Histogram",
				link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Implement LRU Cache",
				link: "https://leetcode.com/problems/lru-cache/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Implement Stack using single Queue",
				link: "https://www.geeksforgeeks.org/implement-a-stack-using-single-queue/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Check for Balanced Parentheses",
				link: "https://leetcode.com/problems/valid-parentheses/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 7,
				name: "Next Greater Element Using Stack",
				link: "https://leetcode.com/problems/next-greater-element-i/",
				status: "Unsolved",
				done: false,
			},
		],

		Backtracking: [
			{
				id: 1,
				name: "Rat in a Maze",
				link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "M – Coloring Problem",
				link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Sudoku Solver",
				link: "https://leetcode.com/problems/sudoku-solver/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle",
				link: "https://leetcode.com/problems/n-queens/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Print All Permutations of a String/Array",
				link: "https://leetcode.com/problems/permutations/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Word Break (print all ways)",
				link: "https://leetcode.com/problems/word-break-ii/",
				status: "Unsolved",
				done: false,
			},
		],

		Graphs: [
			{
				id: 1,
				name: "Detect Cycle in an Undirected Graph (using BFS)",
				link: "https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-bfs/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 2,
				name: "Topological Sort (BFS)",
				link: "https://leetcode.com/problems/course-schedule-ii/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 3,
				name: "Number of Distinct Islands",
				link: "https://leetcode.com/problems/number-of-distinct-islands/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 4,
				name: "Bipartite Graph",
				link: "https://leetcode.com/problems/is-graph-bipartite/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 5,
				name: "Detect a Cycle in Directed Graph | Topological Sort | Kahn’s Algorithm",
				link: "https://leetcode.com/problems/course-schedule/",
				status: "Unsolved",
				done: false,
			},
			{
				id: 6,
				name: "Print Shortest Path – Dijkstra’s Algorithm",
				link: "https://www.geeksforgeeks.org/printing-paths-dijkstras-shortest-path-algorithm/",
				status: "Unsolved",
				done: false,
			},
		],
	};
	function HomePage() {
		return (
			<>
				<Hero />
				{/* <ScrollToTop /> */}
				<div className="grid grid-cols-5 ">
					{Object.keys(QuesList).map((item) => (
						<Box
							key={item}
							QuesList={{ [item]: QuesList[item as keyof typeof QuesList] }}
						/>
					))}
				</div>
			</>
		);
	}
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/topic/:topicName"
						element={<QuestionList QuesList={QuesList} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
