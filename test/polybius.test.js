const expect  = require("chai").expect; 
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("happy path - should encode or decode an input string. ", () => {  

        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input, true);
        expect(actual).to.equal(expected);

        const input2 = "4432423352125413";
        const expected2 = "th(i/j)nkful";
        const actual2 = polybius(input2, false);
        expect(actual2).to.equal(expected2);
    });
    it("edge case - capital letters can be ignored.", () => {

        const input = "Hello";
        const expected = "3251131343";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("edge case - it should maintain spaces in the message, before and after encoding or decoding.", () => {

        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);

        const input2 = "3251131343 2543241341";
        const expected2 = "hello world";
        const actual2 = polybius(input2, false);
        expect(actual2).to.equal(expected2);

    });
    it("edge case - when decoding, it translates 42 to (i/j).", () => {

        const input = "4432423352125413";
        const expected = "th(i/j)nkful"
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
});



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