import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// we loop through the interface and grab all the keys in K
// once we have all the keys we can access the individual key types with signature indexing
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K]
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
