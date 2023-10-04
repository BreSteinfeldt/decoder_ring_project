// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let lookUp = {
    "a": 11,
    "b": 21,
    "c": 31, 
    "d": 41, 
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14, 
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15, 
    "w": 25, 
    "x": 35, 
    "y": 45,
    "z": 55
  };

  let reverseLookUp = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g", 
    "32": "h",
    "42": "(i/j)",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n", 
    "43": "o",
    "53": "p",
    "14": "q", 
    "24": "r", 
    "34": "s",
    "44": "t",
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y",
    "55": "z"
  };
  function polybius(input, encode = true) {
    //immediately change any input strings to lowercase and make empty result variable. 
    input = input.toLowerCase();
    let result = ""; 
    //if encode is true, begin by looping through the input string
    if(encode){
      for(let char of input){
        //create condition for spaces in the input string
        if(char === " ") result += " ";
        //add the value from lookUp key that matches the character from the input string to result
        else result += lookUp[char];
      };
      return result;

    } else {
      //check if input is an odd number, start by declaring a variable to iterate to
      let check = 0;  
      //loop through input string and create condition to only add up characters (no spaces)
      for(let letter in input){
        if(!(input[letter] === " ")) check ++};
      // use remainder opereator to determine if length is even or odd
      if(check % 2 != 0) return false; 
      
      //if encode is false and input is even #, begin by looping through the input string
      for(let i = 0; i < input.length; i += 2){
        //create condition for spaces in the input string
        if(input[i] === " ") {
          result += " ";
          //reduce i by 1 to prevent skipping characters
          i -= 1;
        } else {
          //declare variable to hold found key numbers and add the key value to result
          let inputChars = `${input[i]}${input[i+1]}`;
          result += reverseLookUp[inputChars]; 
        };
      };
      return result; 
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


// The polybius() function in the src/polybius.js file has two parameters:
// input refers to the inputted text to be encoded or decoded.
// encode refers to whether you should encode or decode the message. By default it is set to true.

// When building the function, keep the following constraints and rules in mind:
// You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
// When encoding, your output should still be a string.
// When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.