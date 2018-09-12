var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  const element =  array[index]
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift();
  return array;
=======
  return array.shift();
>>>>>>> 7c39fbca4bc45cc0ea8983001cec2a48f5c72b3a
}

function removeElementFromBeginningOfArray(array) {
  const test = array.slice(1)
  return test;
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array
=======
  array.unshift();
}

function removeElementFromEndOfArray(array) {
  const test = array.slice(-1);
  return test;
>>>>>>> 7c39fbca4bc45cc0ea8983001cec2a48f5c72b3a
}