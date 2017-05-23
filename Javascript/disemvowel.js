function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  str = str.split("")
        .filter( x => !vowels.includes(x.toLowerCase()) )
        .join("");

  return str;
}

console.log(disemvowel("This website is for losers LOL!"));