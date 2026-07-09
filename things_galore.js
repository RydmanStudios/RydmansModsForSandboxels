elements.reactive_powder = {
	color: ["#ff00f7","#006eff","#00a383"],
	behavior: behaviors.POWDER,
	reactions: {
		"sand": { elem1:"h_bomb", elem2:"bee", chance:0.5, oneway:true },
		"gold": { elem1:"sand", chance:0.1, tempMax:-273, oneway:true},
		"mulch": { elem1:"fire", chance:0.9, oneway:true},
		"rock": { elem1:"reactive_powder", elem2:"rock", chance:1},
	},
	tempHigh: 1000000,
	stateHigh: "magma",
	category: "powders",
	state: "solid",
	density: 2550,
	hardness: 0.5,
	breakInto: ["sand","gravel"]
};
