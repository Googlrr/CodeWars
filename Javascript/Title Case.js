function titleCase(title, minorWords) {
    minorWords = typeof(minorWords) != 'undefined' ? minorWords.split(" ").map(x => x.toLowerCase()) : [''];

    title = title.split(" ")
                .map( (word, index) => {
                    word = minorWords.includes( word.toLowerCase() ) ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase();
                    word = index == 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
                    return word;
                }).join(" ");

    return title;
}

console.log(titleCase(''), '');
console.log(titleCase('a clash OF KINGS', 'a an the of'));
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
// console.log(titleCase('the quick brown fox'));