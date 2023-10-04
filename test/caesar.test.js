// Write your tests here!
const expect  = require("chai").expect; 
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    it("happy path - should encode or decode a string using a variety of ciphers", () => {  
        const input = "thinkful";

        const expected = "wklqnixo";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });
    it("edge case - if shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {

        const input = "thinkful";

        const expected = false;
        const actual = caesar(input);
        expect(actual).to.equal(expected);
    });
    it("edge case - spaces should be maintained throughout, as should other nonalphabetic symbols.", () => {

        const input = "This is a secret Message!";

        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, 8);
        expect(actual).to.equal(expected);
    });
    it("edge case - Capital letters are ignored.", () => {

        const input ="BPQA qa I amkzmb umaaiom!";

        const expected = "this is a secret message!";
        const actual = caesar(input, 8, false);
        expect(actual).to.equal(expected);
    });
    it("edge case - when encoding, it handles shifts that go past the end of the alphabet.", () => {

        const input ="You guessed it!";

        const expected = "brx jxhvvhg lw!";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });
});

