import React, { useState } from "react";


const Home = (props) => {
	const [ selectedColor, setSelectedColor ] = useState ("green");
	const [ show, setShow ] = useState (false);
	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedColor("red")} className={"light red"+(selectedColor === "red" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("yellow")} className={"light yellow"+(selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("green")} className={"light green"+(selectedColor === "green" ? " glow" : "")}></div>
			{ show && <div onClick={() => setSelectedColor("purple")} className={"light purple"+(selectedColor === "purple" ? " glow" : "")}></div>}
			<button onClick={()=>setShow(!show)}>
				{show === true ? "Hide" : "Purple Rain"}</button>		
	</div>

		
	);
};

export default Home;
