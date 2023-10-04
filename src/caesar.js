// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lookUp = "abcdefghijklmnopqrstuvwxyz"; 

  function caesar(input, shift, encode = true) {
    //create guard clauses for edge cases and encode check
    if(!encode) shift = shift * -1; 
    if(shift === undefined || shift === 0 || shift < -25 || shift > 25){
      return false;
    };
    //immediately change any input strings to lowercase and make empty result variable. 
    input = input.toLowerCase();
    let result = ""; 
    //loop through the input string
    for(let i = 0; i < input.length; i ++){
      //create condition for spaces and other nonalphabetic symbols
      if(!lookUp.includes(input[i])){
        result += input[i]
      } else {
        //use indexOf() to figure out the index # of the current character in the loop
        const charIndex = lookUp.indexOf(input[i]);
        //(happy path) condition for when charIndex + shift exists within lookUp
        if(lookUp[charIndex + shift]) result += lookUp[charIndex + shift];
        //condition for when charIndex + shift is > 25 (wrap to start of lookUp)
        if((charIndex + shift) > 25) result += lookUp[(charIndex + shift) - 26]; 
        //condition for when charIndex + shift is < 0 (wrap to end of lookUp)
        if((charIndex + shift) < 0) result += lookUp[(charIndex + shift) + 26];
      };
    };
    return result; 
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };



// The caesar() function in the src/caesar.js file has three parameters:
// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
// encode refers to whether you should encode or decode the message. By default it is set to true.

// When building the function, keep the following constraints and rules in mind:
// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other nonalphabetic symbols
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).