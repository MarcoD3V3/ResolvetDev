import React, { useState } from "react";
import styles from "./Problem.module.scss";
import { InputProblem } from "@/components";
import { ResultProblem } from "@/components";

const Problem: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [tagNpm, setTagNpm] = useState(false);

	return (
		<>
			<div className={styles.Problem}>
				<InputProblem setSearchTerm={setSearchTerm} setTagNpm={setTagNpm} />
				<ResultProblem searchTerm={searchTerm} setTagNpm={tagNpm} />
			</div>
			<div className={styles.ProblemResult}></div>
		</>
	);
};

export default Problem;
