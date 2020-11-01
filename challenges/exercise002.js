function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city == "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return people % 40 ? Math.floor(people / 40) + 1 : people / 40;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  var number = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "sheep") {
      number++;
    }
  }
  return number;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  if (
    person.address.city == "Manchester" &&
    person.address.postCode.substring(0, 1) == "M"
  ) {
    return true;
  } else return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
