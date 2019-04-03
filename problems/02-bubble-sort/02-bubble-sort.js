/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let sorted = false;
    let changed = false;
    let temp;
    while(!sorted){
        changed = false;
        for(let i = 0; i < (numArray.length)-1; i++){
            if(numArray[i] >= numArray[i+1]){
                temp = numArray[i];                         // Storing value at current position
                numArray[i] = numArray[i+1];                // Swapping value at next position to current
                numArray[i+1] = temp;                       // Storing value at next position to stored value
                changed = true;
            }
        }
        if(!changed){
            sorted = true;
        }
    }
    return numArray;
}

let worstArr = [900,800,700,600,500,400,300,200,100];
let bestArr = [1,2,3,4,5,6,7,8,9];
let avgArr = [80,50,10,20,90,70,60,40,30];

console.log(bubbleSort(worstArr));
console.log(bubbleSort(bestArr));
console.log(bubbleSort(avgArr));