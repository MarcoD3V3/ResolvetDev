import React from "react";
import styles from "./InputProblem.module.css";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface InputProblemProps {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	setTagNpm: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputProblem: React.FC<InputProblemProps> = ({
	setSearchTerm,
	setTagNpm,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handlerClick = () => {
		setTagNpm((prevValue) => !prevValue);
	};

	return (
		<div className={styles.InputProblem}>
			<div className={styles.iconSearch}>
				<BiSearchAlt2 />
			</div>
			<div>
				<input
					className={styles.inputSearch}
					type="text"
					onChange={handleInputChange}
					placeholder="Search..."
				/>
			</div>
			<div className={styles.iconFilter} onClick={handlerClick}>
				<FilterAltIcon />
			</div>
		</div>
	);
};

export default InputProblem;
