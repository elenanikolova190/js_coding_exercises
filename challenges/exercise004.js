function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  var arrOut = []
  nums.forEach(function(item) {
    if(item < 1){
      arrOut.push(item)
    }
  })
 return arrOut
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  var namesOut = []
  names.forEach(function(item){
    if( item[0] == char){
      namesOut.push(item)
    } 
  })
  return namesOut
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  var wordsOut = []
  words.forEach(function(item){
    if(item.substring(0,3) == "to "){
      wordsOut.push(item)
    }
  })
return wordsOut
} 

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  var arrOut = []
  nums.forEach(function(item) {
    if(item % 1 === 0){
      arrOut.push(item)
    }
  })
return arrOut  
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  var cities = [];
  users.forEach(function(item) {
    cities.push(item.data.city.displayName)
  });
return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  var numsOut = []
  nums.forEach(function(item) {
    numsOut.push(Math.round(Math.sqrt(item) * 100) / 100 )
  });
  return numsOut
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  var strOut = [];
  sentences.forEach(function(item) {
    if(item.toLowerCase().indexOf(str.toLowerCase()) != -1){
      strOut.push(item)
    }
  })
  return strOut
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  var arrOut = []
  triangles.forEach(function(item) {
    arrOut.push( Math.max(...item))
  });
  return arrOut
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
