const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  for(i = 0; i<nums.length; i++){
    if( (nums[i] == n) && (i < nums.length-1) ){
      return nums[i+1]
    }
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {
    '0': 0,
    '1': 0
  };
  for (let i = 0; i<str.length; i++){
    if(str[i] == '0'){
      frequencies["0"] += 1; 
    } else if(str[i] == '1'){
      frequencies["1"] += 1;
    }
  }
  return frequencies
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  return parseInt(n.toString().split('').reverse().join(''), 10)
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  var output = 0
  arrs.forEach(function(item){
    output += item.reduce(function(acc, val) { 
      return acc  + val;
    })
  })
  return output
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
 
  var newArr = [];

  if(arr.length <2 ){
    return arr;
  } else {
    var firstElement = arr[0]
    newArr = arr.copyWithin(0, arr.length-1)
    newArr.pop()
    newArr.push(firstElement)
    return newArr;
  }

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  function isString (obj) {
    return (Object.prototype.toString.call(obj) === '[object String]');
  }

  for(let key in haystack){
    if(isString(haystack[key])){
      var interStr = haystack[key].toLowerCase()
      if(interStr.includes(searchTerm.toLowerCase())){
        return true;
      }
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  const frequencies = {};
  var prevPointer = 0;
  str = str.toLowerCase();
 
  for(let i = 0; i <= str.length; i++){
    if ((str[i] === " ") || (punctuation.indexOf(str[i]) != -1) || (i===str.length)) 
    {
      var word = str.slice(prevPointer, i)
    //  console.log(prevPointer)
      prevPointer = i+1
    //  console.log(prevPointer)
      if(punctuation.indexOf(word)==-1){ 
        if(frequencies[word] === undefined){
          frequencies[word] = 1;
          
        } else{
          frequencies[word] += 1;
        }
      } 
    } 
  }
 // console.log(frequencies[word])
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
