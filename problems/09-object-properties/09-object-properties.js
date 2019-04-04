/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (let k in someObj) {
        console.log(`${k}: ${someObj[k]}`);
    }
}

 let myCake = {
    name: 'Ice Cream',
    layers: 5,
    rating: 10
 }

 objectProperties(myCake);