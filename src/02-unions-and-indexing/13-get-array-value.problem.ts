import { Equal, Expect } from "../helpers/type-utils";

// need to add as const or else they will all be inferred as string
const fruits = ["apple", "banana", "orange"] as const;

// since it's an array we pass index numbers instead of property names in the union
type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
