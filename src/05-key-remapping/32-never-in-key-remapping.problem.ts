import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// here we map our Example interface and grab all the keys into K
// we also add a conditional that checks if the key contains id or Id
// if so we keep the key and just return the normal value
// if it doesn't we remove it from the type with setting it to never
type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}` ? K : never]: T[K]
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
