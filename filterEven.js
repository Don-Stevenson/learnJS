// filtering an array and return numbers that are even
//

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenFilter = array => array.filter(e => e % 2 === 0);

console.log("even numbers", evenFilter(numArray));

// filtering an array and return numbers that are odd
//

const oddFilter = array => array.filter(e => e % 2 !== 0);

console.log("odd numbers", oddFilter(numArray));