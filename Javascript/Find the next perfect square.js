function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));

console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
