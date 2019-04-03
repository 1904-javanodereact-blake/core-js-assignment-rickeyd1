/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let revStr = "";
    for(let i = someStr.length-1; i >= 0; i--){
        revStr += someStr[i];
    }
    return revStr;
}