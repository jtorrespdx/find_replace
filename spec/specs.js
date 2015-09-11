
describe('findReplace', function() {
    it("finds words made of a single letter and replaces it with the same word", function() {
        expect(findReplace("i")).to.equal("i");
    })

    it("takes a phrase and replaces it with the same phrase", function() {
        expect(findReplace("I like tacos")).to.equal("I like tacos");
    })

})
