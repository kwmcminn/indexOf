function findIndexOf(string1, string2){
   // determine how long string 2 is
    var lastIndexSearch = string2.length;

    for (var i = 0; i < string1.length; i++){
      // set an index of string 1 to search
        var searchString1 = string1.slice(i, (lastIndexSearch + i));
        if (string2 === searchString1){
            return i;
        }
    }
    return -1;
}
