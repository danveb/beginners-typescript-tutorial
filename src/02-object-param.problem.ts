import { expect, it } from "vitest";

// option #1
// destructure first, second params and define as number type
// export const addTwoNumbers = (params: { first: number, second: number }) => {
//   return params.first + params.second;
// };

// option #2 
// use type NumberParams where we define first, second as number type 
type NumberParams = {
  first: number, 
  second: number, 
}; 

export const addTwoNumbers = (params: NumberParams) => {
  return params.first + params.second; 
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
