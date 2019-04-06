/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let endArr = someStr.length - 1;
    for(let i = 0; i < Math.floor((someStr.length)/2); i++){
        if(someStr[i] != someStr[endArr]){
            return false;
        } else {
            endArr--;
        }
    }
    return true;
}