let arr = [200, 100, 300];

const solution = (arr) => {
  arr.splice(2, 0, 10000);
  return arr;
};

// const solution = (arr) => {
//   arr[2] = 10000;
//   arr[3] = 300;
//   return arr;
// };





export default solution;
