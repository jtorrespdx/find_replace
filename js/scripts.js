var findReplace = function(string, searchWord, replaceWord){
    var searchWord = new RegExp(searchWord, 'gi')
    var replacePhrase = string.replace(searchWord, replaceWord);

    return replacePhrase;

}

$(document).ready(function() {
       $("form#findReplace").submit(function(event){
           var string = ($("input#string").val());
           var searchWord = ($("input#searchWord").val());
           var replaceWord = ($("input#replaceWord").val());

           var result = findReplace(string, searchWord, replaceWord);


           $(".original").text(string);
           $(".replacePhrase").text(result);

           $("#results").show();
           event.preventDefault();
       });
   });
