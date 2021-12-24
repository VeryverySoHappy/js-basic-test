import solution from "../../src/toOneFromTen/problemThree";

let arr = [100, 200, 300];

console.log(typeof arr);

// 정답 작성
test("Array value same as [object].", () => {
  expect(solution(arr)).toEqual("object");
});
