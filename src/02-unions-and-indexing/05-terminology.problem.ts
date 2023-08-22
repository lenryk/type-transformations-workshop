/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// discriminated union
// each option needs something in common which in this case is the type
// by doing a conditional on this type property (as it is present on all)
// TS will only autocomplete other props from that type
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// union type
// the syntax is T1 OR T2 OR T3
type B = "a" | "b" | "c";

// enum type - the keyword gives it away
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
