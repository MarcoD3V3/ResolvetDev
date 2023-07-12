import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useRouter } from "next/navigation";
import styles from "./ResultProblem.module.scss";
import ProblemsAPI from "@/api/Problems";

interface Problem {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
	code?: any;
}

interface ResultProblemProps {
	searchTerm: string;
	setTagNpm: boolean;
}

const ResultProblem: React.FC<ResultProblemProps> = ({
	searchTerm,
	setTagNpm,
}) => {
	const router = useRouter();
	const [problemResults, setProblemResults] = React.useState<Problem[]>([]);

	useEffect(() => {
		const fetchData = () => {
			let filteredResults = ProblemsAPI;

			if (searchTerm.trim() !== "") {
				filteredResults = filteredResults.filter((problem: Problem) =>
					problem.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
			} else if (setTagNpm) {
				filteredResults = filteredResults.filter((problem) => problem.isNpm);
			}

			setProblemResults(filteredResults);
		};

		fetchData();
	}, [searchTerm, setTagNpm]);

	return (
		<div className={styles.ResultProblem}>
			{problemResults.map((result: Problem) => (
				<div key={result.id} className={styles.Problem}>
					<h1
						className={styles.Name}
						onClick={() => {
							router.push(`/problem/${result.id}`);
						}}
					>
						{result.name}
					</h1>
					<h1 className={styles.lorem}>{result.email}</h1>
					<div className={styles.Code}>
						<SyntaxHighlighter language="javascript" style={atomDark}>
							{result.code}
						</SyntaxHighlighter>
					</div>
				</div>
			))}
		</div>
	);
};

export default ResultProblem;
