// Original
// String.prototype.toJadenCase = function() {
//     let temp = this.split(" ")
//     for(var x = 0; x < temp.length; x++){
//         temp[x] = temp[x][0].toUpperCase() + temp[x].slice(1);
//     }
//     return temp.join(" ");
// };

String.prototype.toJadenCase = function(){
    return this.split(" ").map(function(x){
        return x[0].toUpperCase() + x.slice(1);
    }).join(" ");
}

var str = "How can mirrors be real if our eyes aren't real";
console.log("" + str.toJadenCase());