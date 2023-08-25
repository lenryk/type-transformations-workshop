import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

// we use a usual map type
// for the value we use a string literal to make the format key:value
// we then use keyof FruitMap to turn the interface into a union of values
type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
