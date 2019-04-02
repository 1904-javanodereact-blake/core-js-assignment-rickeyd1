/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let temp = 1;
    let secondTemp;
    var result = 1;
    if(n < 3){
        return result;
    } else {
        for(let i = 3; i < n+1; i++){
            secondTemp = temp;
            temp = result;
            result = temp + secondTemp;
        }
        return result;   
    }
}
