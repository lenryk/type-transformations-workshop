import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// map through the keys of the Attributes interface and store in K
// the as allows us to rename the key value
// in this example we use a template literal to add a prefix and capitalize
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
