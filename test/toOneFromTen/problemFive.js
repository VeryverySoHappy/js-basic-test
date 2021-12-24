import solution from "../../src/toOneFromTen/problemFive";

let a = 10;
let b = 2;

// for (const i = 1; i < 5; i += 2) {
//   a += i;
// }

// let a+b = 16;

test("a+b value is [16].", () => {
  expect(solution(a,b)).toEqual("16");
});