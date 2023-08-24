import { Equal, Expect } from "../helpers/type-utils";

// using nested ternaries we can add more if else logic
// this check uses a union to check if the T input is "hello" or "goodbye"
// if so we return our "hello" or "goodbye" logic
// else we just return never
type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye" ? T extends "hello" ? "goodbye" : "hello" : never

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
