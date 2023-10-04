const expect  = require("chai").expect; 
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("happy path - correctly translates the given phrase, based on the alphabet given to the function.", () => {  

        const input = "thinkful";
        const expected = "jrufscpw";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.equal(expected);
    });
    it("edge case - if the alphabet parameter is not exactly 26 characters, should return false ", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input,"qoxoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.equal(expected);

        const input2 = "thinkful";
        const expected2 = false;
        const actual2 = substitution(input2,"waflnthdjpzibe");
        expect(actual2).to.equal(expected2);
    });
    it("edge case - All the characters in the alphabet parameter must be unique, otherwise return false ", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input,"abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });
    it("edge case - maintains spaces in the message, before and after encoding or decoding.", () => {
        const input = "You are an excellent spy";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);

        const input2 = "elp xhm xf mbymwwmfj dne";
        const expected2 = "you are an excellent spy";
        const actual2 = substitution(input2,"xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual2).to.equal(expected2);
    });
    it("edge case - it should ignore capital letters.", () => {
        const input = "You are an excellent spy";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    
});

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
