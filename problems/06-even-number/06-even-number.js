/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let diff;
    while(someNum > -1){           
        someNum -= 2;
        if(someNum === 0){
            return true;
        }
    }
    return false;
}