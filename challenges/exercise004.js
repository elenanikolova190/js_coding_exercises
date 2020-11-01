function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  var arrOut = nums.filter(function(item) {
    if(item < 1){
      return true;
    } else {
      return false; 
    }
  })
 return arrOut;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  var namesOut = names.filter(function(item){
    if( item[0] == char){
      return true;
    } else{
      return false;
    }
  })
  return namesOut;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  var wordsOut = words.filter(function(item){
    if(item.substring(0,3) == "to "){
      return true;
    } else{
      return false;
    }
  })
return wordsOut;
} 

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  var arrOut = nums.filter(function(item) {
    if(item % 1 === 0){
      return true;
    } else{
      return false;
    }
  })
return arrOut;  
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  let cities = [];
  users.forEach(function(item) {
    cities.push(item.data.city.displayName);
  });
return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const numsOut = nums.map(function(item) {
    return Math.round(Math.sqrt(item) * 100) / 100; 
  });
  return numsOut;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  let strOut = sentences.filter(function(item) {
    if(item.toLowerCase().indexOf(str.toLowerCase()) != -1){
      return true;
    } else {
      return false;
    }
  })
  return strOut;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  var arrOut = triangles.map(function(item) {
    return Math.max(...item);
  });
  return arrOut;
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
