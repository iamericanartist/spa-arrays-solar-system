var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
var el2 = document.getElementById("planets2");
var el3 = document.getElementById("planets3");



// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
planets.forEach(function(listMe) {
  console.log("Our Planets =",listMe);
  el.innerHTML += `${listMe + " "}`
});


// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function(upperCaseMe) {
	fixCase = upperCaseMe.charAt(0).toUpperCase() + upperCaseMe.slice(1);
	console.log("Uppercased  =", fixCase);
  el2.innerHTML += `${fixCase + " "}`

});

// console.log("1111", planets);

// 3. Multiply each remaining number by 1.5 and then subtract 1.
// added map results
// var mapped = filtered.map(function(y){return (y* 1.5)-1;});



// Use the filter method to create a new array that contains planets with the letter 'e'



// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = "";



// ////////////// Another way ////////////////
// function sentenceMe(thingy) {
// 	sentence += `${thingy} `;		//added the space for the words here. Should probably figure out array method for this as well...
// }

// words.forEach(sentenceMe);
// el.innerHTML = sentence;
// console.log("sentence is ", sentence);