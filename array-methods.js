var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
var el2 = document.getElementById("planets2");
var el3 = document.getElementById("planets3");
var el4 = document.getElementById("planets4");

//// 1 Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
el.innerHTML += "1 "; //for DOM numbering only
planets.forEach(function(listMe) {
  console.log("Our Planets =",listMe);
  el.innerHTML += `${listMe + " "}`
});

//// 2 Use the map method to create a new array where the first letter of each planet is capitalized
var newPlanets = planets.map(function(toCAPS){
	return " " + toCAPS.charAt(0).toUpperCase() + toCAPS.slice(1);	// " " is used to put a space after the , in each iteration 
});
console.log("Uppercased Planets =",newPlanets );
el2.innerHTML = `2 Uppercased = ${newPlanets}`

//// 3 Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = newPlanets.filter(function(planetsWithE){
	return planetsWithE.indexOf("e") != -1 || planetsWithE.indexOf("E") != -1 ;
});
console.log("Planets containing 'e' =",ePlanets );
el3.innerHTML = `3 Planets containing 'e' = ${ePlanets}`

//// 4 Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var wormsNCheese = words.reduce(function (previousValue, currentValue) {
	return `${previousValue} ${currentValue}`; //if .reduce(function(previousValue, current)) does NOT have an "e" or "E"... != kicks it back as FALSE
});
console.log("Our NEW Phrase =",wormsNCheese );
document.getElementById("wormsNCheese").innerHTML = `4 Our NEW Phrase = ${wormsNCheese}!`;



/////////////////////// ALTERNATE WAYS ///////////////////////
//// 4 Use the reduce method to create a sentence from the words in the following array
///////////// This method just writes the sentence out without .replace...
// var sentence = "";
// function sentenceMe(thingy) {
// 	sentence += `${thingy} `;		//added the space for the words here. Should probably figure out array method for this as well...
// }
// words.forEach(sentenceMe);
// wormsNCheese.innerHTML = sentence;
// console.log("Our sentence is =", sentence);

//// 2 Use the map method to create a new array where the first letter of each planet is capitalized
////////////// This method is isolated from the rest of the JS file... 
// planets.map(function(upperCaseMe) {
// 	var fixCase = upperCaseMe.charAt(0).toUpperCase() + upperCaseMe.slice(1);
// 	console.log("Uppercased  =", fixCase);
//   el2.innerHTML += `${fixCase + " "}`; 
// });