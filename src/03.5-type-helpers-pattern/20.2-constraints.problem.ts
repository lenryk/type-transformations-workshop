import { Equal, Expect } from "../helpers/type-utils";

// the TRoute extends string constrains this generic
// this means it can only accept inputs of string type
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>,
];
