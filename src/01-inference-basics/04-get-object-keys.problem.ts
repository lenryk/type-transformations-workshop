import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};
// easier to read from right to left
// we get the types from the testingFrameworks object
// we then grab the key names which make our union literal
type TestingFramework = keyof typeof testingFrameworks

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
