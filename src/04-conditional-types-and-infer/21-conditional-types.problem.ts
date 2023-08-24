import { Equal, Expect } from "../helpers/type-utils";

// with the extends keyword we are checking if it can be compared to hello
// if so we return a literal type of "goodbye"
// anything that is not type "hello" returns "hello"
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
