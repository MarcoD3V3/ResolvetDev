"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const id = () => {
	const para = useParams();
	console.log(para);
	return (
		<div>
			<div className="decoration-[#50d71e]">Prolmid</div>
		</div>
	);
};

export default id;
