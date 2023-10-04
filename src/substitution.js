// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let lookUp = "abcdefghijklmnopqrstuvwxyz"; 
  function substitution(input, alphabet, encode = true){
    //create guardclauses for alaphabet parameter
    if(!alphabet || alphabet.length > 26 || alphabet.length < 26) return false; 
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] == alphabet[j]) {
              return false;
          };
      };
   };
    //immediately change any input strings to lowercase and make empty result variable. 
    input = input.toLowerCase();
    let result = ""; 
    //if encode is true, begin by looping through the input string
    if(encode){
      for(let i = 0; i < input.length; i++) {
        //create condition for spaces
        if(input[i] === " ") {
        result += " "} else {
        //use indexOf() to figure out the index # of the current character in the loop
        const lookUpIndex = lookUp.indexOf(input[i]);
        result += alphabet[lookUpIndex]}
      };
      return result; 

    } else {
      //if encode is false, begin by looping through the input string
      for(let i = 0; i < input.length; i++) {
        //create condition for spaces
        if(input[i] === " ") {
          result += " "} else {
            // use indexOf() to figure out the index # of the current character in the loop
            const alphabetIndex = alphabet.indexOf(input[i]); 
            result += lookUp[alphabetIndex]}
         
        };
        return result; 
      };

    };
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };



//The substitution() function in the src/substitution.js file has three parameters:
//input refers to the inputted text to be encoded or decoded.
//alphabet refers to substitution alphabet.
//encode refers to whether you should encode or decode the message. By default it is set to true

//When building the function, keep the following constraints and rules in mind:
//The input could include spaces and letters as well as special characters such as #, $, *, etc.
//Spaces should be maintained throughout.
//Capital letters can be ignored.
//The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
//All the characters in the alphabet parameter must be unique. Otherwise, it should return false.