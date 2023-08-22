import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

// we use the Parameters utility to return a tuple of the types for the parameters in makeQuery
// this is ideal for functions that you don't have control of
type MakeQueryParameters = Parameters<typeof makeQuery>;
// we can pick just one of the parameters e.g. just the 1st one (url which is type string)
type MakeQueryParametersOne = MakeQueryParameters[0]

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
