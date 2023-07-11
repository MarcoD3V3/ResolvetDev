"use client";
import React from "react";
import styles from "./pageH.module";
import ScrollToTop from "react-scroll-up";
import { Problem } from "@/components";

export default function Home() {
	return (
		<div className={styles.all}>
			<div className={styles.Home}>
				<div className={styles.tittleSearch}>SearchProject</div>
				<Problem />
			</div>
			<div className={styles.ScrollToTop}>
				<ScrollToTop showUnder={160}>
					<span>UP</span>
				</ScrollToTop>
			</div>
		</div>
	);
}
