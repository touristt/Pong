/*
	colors : Array(3) [R,G,B] or Array(1) for grayscale
	trailLength : number between 0, 100
	trailType: 'fading' or 'decreasing'

*/
const themes = [
	{
	    	ballColor: [13, 71, 161],
	    	trailType: 'fading',
	    	trailLength: 10,
	    	trailColor: [255, 1, 5],
	    	background: [16],
	    	textColor: [2, 98, 255],
	    	paddleColor: [2, 98, 255],
	},
	{
		ballColor: [1, 255, 25],
		trailType: 'decreasing',
		trailLength: 50,
		trailColor: [185, 255, 6],
		background: [1],
		textColor: [1, 255, 51],
		paddleColor: [1, 255, 51],
	},
	{
		ballColor: [255, 152, 0],
		trailType: 'decreasing',
		trailLength: 20,
		trailColor: [255, 193, 7],
		background: [11],
		textColor: [255, 152, 0],
		paddleColor: [255, 193, 7],
	},
	{
		ballColor: [20],
		trailType: 'decreasing',
		trailLength: 100,
		trailColor: [7],
		background: [196],
		textColor: [20],
		paddleColor: [49, 27, 146],
	},
	{
		ballColor: [3, 207, 252],
		trailType: 'fading',
		trailLength: 70,
		trailColor: [3, 207, 252],
		background: [15, 68, 153],
		textColor: [205],
		paddleColor: [255],
	},

	{
		ballColor: [20],
		trailType: 'decreasing',
		trailLength: 10,
		trailColor: [197],
		background: [49, 27, 146],
		textColor: [200],
		paddleColor: [255],
	},

	{
		ballColor: [255, 152, 0],
		trailType: 'fading',
		trailLength: 100,
		trailColor: [255, 193, 7],
		background: [11],
		textColor: [255, 152, 0],
		paddleColor: [255, 193, 7],
	},
];
