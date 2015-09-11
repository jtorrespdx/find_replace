
describe('findReplace', function() {

    it("finds a word and replaces it with another word", function() {
        expect(findReplace("tacos", "tacos", "taquitos")).to.equal("taquitos");
    })

    it("takes a phrase and replaces it with the new phrase", function() {
        expect(findReplace("I like tacos", "tacos", "taquitos")).to.equal("I like taquitos");
    })

    it("ignores mixed use of caps throughout the phrase", function () {
        expect(findReplace("I like taCos", "tacos", "taquitos")).to.equal("I like taquitos");
    })

    // it("returns an error message if the search word is not found", function () {
    //     expect(finReplace("I like tacos", "computer", "taquitos")).to.equal("Sorry, that word is not found.");
    // })


})
