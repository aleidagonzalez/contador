import React, { useState, useEffect } from "react";
import { Card } from "./card.js";
import { style } from "./style.css";
//include images into your bundle;

//create your first component

export function Home() {
	const [unit, setUnit] = useState("0");
	const [tens, setTens] = useState("0");
	const [hundreds, setHundreds] = useState("0");
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		let intervalId;

		if (isActive) {
			intervalId = setInterval(() => {
				const unitCounter = counter % 10;
				const tensCounter = Math.floor(counter / 10);
				const hundredsCounter = Math.floor(counter / 99);

				const computedUnit =
					String(unitCounter).length === 1
						? `${unitCounter}`
						: unitCounter;
				const computedTens =
					String(tensCounter).length === 1
						? `${tensCounter}`
						: tensCounter;
				const computedhundreds =
					String(hundredsCounter).length === 1
						? `${hundredsCounter}`
						: hundredsCounter;

				setUnit(computedUnit);
				setTens(computedTens);
				setHundreds(computedhundreds);

				setCounter(counter => counter + 1);
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isActive, counter]);

	return (
		<div className="container">
			<Card image className="far fa-clock"></Card>
			<Card time={hundreds} />
			<Card time={tens} />
			<Card time={unit} />
			<div className="buttons">
				<button
					onClick={() => setIsActive(!isActive)}
					className="start">
					{isActive ? "Pause" : "Start"}
				</button>
			</div>
		</div>
	);
}
