import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

// we explicitly add <string> to Set's since we know we'll include strings 
const guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});

const integers = new Set<number>(); 

integers.add(5); 
integers.add(10); 

it("Should contain integers 5 and 10", () => {
  expect(integers.has(5)).toEqual(true); 
});

