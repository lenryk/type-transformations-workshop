import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// in this case we reference all as TResult
// we use a union to check if it matches any of the 3 functions
// if so we return the TResult as they all have the save var name
// else return never
type GetParserResult<T> =  T extends
  | {
  parse: () => infer TResult;
}
  | {
  extract: () => infer TResult;
}
  | (() => infer TResult)
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
