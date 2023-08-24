import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// distributive conditional types
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// convert this to a new type that uses generics
type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

// reference that generic with the original Fruit type to get our new type
type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
