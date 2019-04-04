/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    if(index === 0){
        someArr.shift();
    } else if (index === (someArr.length) - 1){
        someArr.pop();
    } else if (index >= someArr.length) {
        console.log("Entered an index outside of the array.");      // Checks if index is outside of array and returns message.
    } else {
        for(let i = index; i < someArr.length; i++){
            someArr[i] = someArr[i+1];
        }
        someArr.pop();
    }
}