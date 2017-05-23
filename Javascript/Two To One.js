function longest(s1, s2) {
    return (s1 + s2)
    .split("")
    .sort()
    .filter( (el, index, arr) => arr.indexOf(el) === index )
    .join("");
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));