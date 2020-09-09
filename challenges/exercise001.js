function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
  return word.substring(0,1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.substring(0,1).toUpperCase() + "." + lastName.substring(0,1).toUpperCase(); 
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  finalPrice = originalPrice + originalPrice * vatRate / 100;
  return Math.round(finalPrice*100)/100;
  }

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  finalPrice = originalPrice - originalPrice*reduction/100;
  return Math.round(finalPrice*100)/100;
``}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;
  
  if((str.length % 2) == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  var outWords = new Array(words.length);
  for(var i = 0, j = 0; i <= words.length - 1; i++, j++){
    outWords[j] = words[i].split('').reverse().join('');
  }
  return outWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  var numLinuxUsers = 0;
  for (var i = 0; i < users.length; i ++ ){
    if(users[i].type.localeCompare("Linux") == 0 ){
      numLinuxUsers++;
    }
  }
  return numLinuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  var total = 0;
  for(var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return Math.round(total/scores.length*100)/100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  if ( n % 3 === 0 && n % 5 === 0) { 
    return "fizzbuzz"; }
  // if the number is divisible by 5, write "Buzz"
  else if ( n % 3 === 0) {
    return "fizz"; }
    // otherwise, write just the number
  else if ( n % 5 === 0) {
      return "buzz"; }
  else {
    return n; }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
