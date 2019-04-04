/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let newStr = "";
    if((startIndex > endIndex) || (startIndex < 0) || (startIndex > someStr.length) || (endIndex > someStr.length) || (endIndex < 0)){
        return console.log("Incorrect Index entered");
    } else {
        for(let i = startIndex; i < endIndex; i++){

            newStr += someStr[i];
        }
        return newStr;
    }
}

console.log(substring('hello', 0, 3));