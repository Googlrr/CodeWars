// Works but ugly
// function nbDig(n, d) {
//     let nums = [];
//     let count = 0;
//     for( let x = 0; x <= n; x++){
//       nums.push(x**2);
//     }  
//     for( let x = 0; x < nums.length; x++){
//         nums[x].toString().split("").forEach( el => {
//             if (el == ""+d){
//                 count++;
//             }
//         });
//     };
//     return count;
// }

function nbDig(n, d) {
    let count = 0;

    for( let x = 0; x <= n; x++ ){
      (x*x).toString().split("").forEach( el => el == d ? count++ : null );
    }

    return count;
}

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
