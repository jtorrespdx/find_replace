var findReplace = function(string, searchWord, replaceWord){
    var searchWord = new RegExp(searchWord, 'gi')
    var replacePhrase = string.replace(searchWord, replaceWord);

    return replacePhrase;

}
