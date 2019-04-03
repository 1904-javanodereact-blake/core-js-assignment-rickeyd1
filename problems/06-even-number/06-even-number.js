/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let diff;

    while(someNum > -1){           
        if(someNum === 0){
            return true;
        }
        someNum -= 2;
    }
    return false;
}