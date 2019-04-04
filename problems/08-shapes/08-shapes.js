/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let resStr = "";
  if((height % 2) === 0){
    console.log("Please enter an odd number.");
  } else { 
    switch(shape)
    {
      case 'Square':
        for(let i = 0; i < height; i++){
          resStr = "";
          for(let j = 0; j < height; j++){
            resStr += character;
          }
          console.log(resStr);
        }
        break;
      case 'Triangle':
        for(let i = 0; i < height; i++){
          resStr = "";
          for(let j = 0; j <= i; j++){
            resStr += character;
          }
          console.log(resStr);
        }
        break;
      case 'Diamond':
        let resStrUp;
        let resStrDown;
        let counter = 0;
        let halfLen = Math.floor(height/2);
        for(let i = 1; i < height; i += 2){1
          resStrUp = "";

          for(let a = 0; a < halfLen; a++){
            resStrUp += " ";
          }

          halfLen--;
          for(let u = 0; u < i; u++){
            resStrUp += character;
          }
          console.log(resStrUp);
        }
        for(let j = height; j > 0; j -= 2){
          resStrDown = "";
          for(let b = 0; b < counter; b++){
            resStrDown += " ";
          }
          counter++;
          for(let d = 0; d < j; d++){
            resStrDown += character;
          }
          console.log(resStrDown);
        }
        break;
      default:
        console.log("Incorrect input entered");
    }
  }
}