module.exports = function solveEquation(equation) {
	var tempArr=equation.split(" ").join("").split("*");
	var a=tempArr[0];
	var b=tempArr[1].substring(3);
	var c=tempArr[2].substring(1);
	var discriminant=b*b-4*a*c;
	var ansver=[Math.round((-b+Math.sqrt(discriminant))/(2*a)),Math.round((-b-Math.sqrt(discriminant))/(2*a))];
 	return ansver.sort((left, right) => left - right);
}
