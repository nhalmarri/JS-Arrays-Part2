//Task 1

/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 !== 0) {
    return true;
  } else return false;
}

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

//Task2
/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 === 0) {
    return true;
  } else return false;
}

console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

//Task 3
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

const instructors = ["Mshary", "Hasan"];

function addLailaToArray(instructors) {
  const newInstructors = instructors.slice(0);
  newInstructors.push("Laila");

  return newInstructors;
}

console.log(addLailaToArray(instructors));

//Task 4

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

function eliminateTeam(teams) {
  const lastElement = teams.pop();

  return lastElement;
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

// CHALLENGE 1
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    const half = fruits.length / 2;

    const newArray = fruits.slice(half);

    return newArray;
  }
}

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));

// CHALLENGE 2
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

function youGottaCalmDown(shout) {
  let calmDown = shout.indexof("!");

  let imFine = shout.slice(0, calmDown - 1);

  return imFine;
} //end of function :)

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));
