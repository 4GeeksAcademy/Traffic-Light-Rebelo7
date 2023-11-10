import React, { useState } from "react";


function ButtonCycle() {
    const [cycleColor, setCycleColor] = useState("green");
    const colors = ["green, yellow, red"];
       return (
        <div className="button-cycle"><button type="button" class="btn btn-dark">Cycle</button></div>
       
	);
};

export { ButtonCycle};