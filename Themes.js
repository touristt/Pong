/*
	colors : Array(3) [R,G,B] or Array(1) for grayscale
	trailLength : number between 0, 100
	trailType: 'fading' or 'decreasing'

*/
const themes = [
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
		ballColor: [255, 152, 0],
		trailType: 'decreasing',
		trailLength: 20,
		trailColor: [255, 193, 7],
		background: [11],
		textColor: [255, 152, 0],
		paddleColor: [255, 193, 7],
	},
];
