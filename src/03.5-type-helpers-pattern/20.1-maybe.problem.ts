import { Equal, Expect } from "../helpers/type-utils";

// using a type helper / generic
// we add null and undefined as a union
type Maybe<T> = T | null | undefined;

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
