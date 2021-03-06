function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map(function (x) {
    return Math.pow(x, 2);
  });
    
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  var outWord = words[0].toLowerCase();
  
  for(i = 1; i < words.length; i++){
    outWord += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return outWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var numSubjects = 0;
  
  for(i = 0; i < people.length; i++){
    numSubjects += people[i].subjects.length;
  }
  return numSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  var found = false;

  for(i = 0; i<menu.length; i++){
    if( menu[i].ingredients.includes(ingredient)){
      found = true; 
      break;
    }
  }
  return found;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const intersection = arr1.filter(element => arr2.includes(element));
  var arrOut = intersection.sort()

  for(i = 0; i < arrOut.length; i++ ){
    if(arrOut[i]==arrOut[i+1]){
      var removed = arrOut.splice(i+1, 1)
      i--;
    }
  }
  return arrOut;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
