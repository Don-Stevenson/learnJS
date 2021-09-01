// use map to multiply the elements in an array by 2 if even only

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoX = (array) => {
  return array.map((e) => {
    if (e % 2 === 0) return 2 * e;
    else return e;
  });
};
console.log(twoX(arr));
