
describe('findReplace', function() {

    it("finds a word and replaces it with another word", function() {
        expect(findReplace("tacos", "tacos", "taquitos")).to.equal("taquitos");
    })

    // it("takes a phrase and replaces it with the same phrase", function() {
    //     expect(findReplace("I like tacos")).to.equal("I like tacos");
    // })


})
