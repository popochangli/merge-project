import { merge } from "../src/merge";

test("merges three sorted collections correctly", () => {
  const a = [1, 4, 7];
  const b = [2, 5, 8];
  const c = [9, 6, 3];

  const result = merge(a, b, c);

  expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
});

test("works with empty arrays", () => {
  expect(merge([], [], [])).toEqual([]);
});

test("handles different sizes", () => {
  const a = [1, 10];
  const b = [2, 3, 4];
  const c = [9, 8];

  expect(merge(a, b, c)).toEqual([1,2,3,4,8,9,10]);
});
