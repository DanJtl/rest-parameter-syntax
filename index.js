let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let sorted = [...arr, ...letters].sort().reverse();
    return sorted;
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);