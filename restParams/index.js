//arguments object is not an array, its an object -> ERROR
// function sum(){
//     return arguments.reduce((total, el) => total + el);
// }

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
  //nums is an array
}

function raceResults(gold, silver, ...everyoneElse) {
  //everoneelse is a array
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);

  console.log(`everyone else: ${everyoneElse}`);
}

//spread -> spread the elements of an iterable to another iterable

// restParams -> collect the individual elements into a single parameter

// syntax for both are same -> ...