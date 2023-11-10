import React, { useState } from "react";
import { ButtonCycle } from "./buttoncycle";

const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState ("green");
	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedColor("red")} className={"light red"+(selectedColor === "red" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("yellow")} className={"light yellow"+(selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("green")} className={"light green"+(selectedColor === "green" ? " glow" : "")}></div>			
		<ButtonCycle />
	</div>

		
	);
};

export default Home;
