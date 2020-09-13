function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  var arrOut = []
  for(i = 0; i< nums.length; i++){
    if(nums[i] < 1){
      arrOut.push(nums[i])
    }
  }
 return arrOut
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  var namesOut = []
  for(let i = 0, j = 0; i < names.length; i++){
    if(names[i][0] == char){
      namesOut[j] = names[i]
      j++
    }
  }
  return namesOut
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  var wordsOut = []
  for(let i=0, j = 0; i<words.length; i++){
    if(words[i].substring(0,3) == "to "){
      wordsOut[j] = words[i]
      j++
    }
  }
return wordsOut
} 

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  var arrOut = []
  for(let i= 0, j = 0; i < nums.length; i++){
    if(nums[i] % 1 === 0){
      arrOut[j] = nums[i]
      j++
    }
  }
return arrOut  
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  var cities = [];
  for(let i = 0; i <users.length; i++){
    cities[i] = users[i].data.city.displayName
  }
return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  var numsOut = []
  for(let i = 0; i< nums.length; i++){
   numsOut[i] = Math.sqrt(nums[i])
   numsOut[i] = Math.round(numsOut[i] * 100) / 100 
  }
  return numsOut
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  var strOut = [];
  for(let i = 0, j = 0; i < sentences.length; i++){
    if(sentences[i].toLowerCase().indexOf(str.toLowerCase()) != -1){
      strOut[j] = sentences[i]
      j++
    }
  }
  return strOut
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var arrOut = []
  for(let i= 0; i<triangles.length; i++){
    arrOut[i] = Math.max(...triangles[i])
  }
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
