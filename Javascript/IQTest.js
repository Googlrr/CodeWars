//Code
//Original
// function iqTest(numbers){  
//     let evens = [];
//     let odds = [];
//     numbers = numbers.split(" ");
//     for (x in numbers){
//         if (numbers[x] % 2 === 0){
//             evens.push(numbers[x]);
//         } else {
//             odds.push(numbers[x]);
//         }
//     }
//     if(evens.length === 1){
//         return numbers.indexOf(evens[0]) + 1
//     } else {
//         return numbers.indexOf(odds[0]) + 1
//     }
// }

function iqTest(numbers){
    //Splits string by space, conversts to an ind
    numbers = numbers.split(" ").map(function(x){ return parseInt(x); });

    //Gets an array containing the evens and odds.
    let evens = numbers.filter(function(x){ return x % 2 == 0; });
    let odds = numbers.filter(function(x){ return x % 2 != 0; });
    
    //Returns index of first even if there are less evens, index of first odd if less odds.
    return evens.length < odds.length ? (numbers.indexOf(evens[0]) + 1) : (numbers.indexOf(odds[0]) + 1);
}

//Test

console.log(iqTest("2 4 7 8 10")); // should be 3
console.log(iqTest("1 2 2")); //should be 1