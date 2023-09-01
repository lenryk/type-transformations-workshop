import { Equal, Expect } from "../helpers/type-utils";

// check if T is an array
type DeepPartial<T> = T extends Array<infer U>
  // if so then return an array with the inferred type (eventually this will not be an array and follow the 2nd path)
  ? Array<DeepPartial<U>>
  // if not an array grab the name as the key and call it recursively
  : { [K in keyof T]?: DeepPartial<T[K]> };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
