let a = 10;
let b = 2;

// for (const i = 1; i < 5; i += 2) {
//   a += i;
// }

// console.log(a + b);

const solution = (a,b) => {
  for (const i = 1; i < 5; i += 2) {
    a += i;
  }  
  return a+b;
}

export default solution;