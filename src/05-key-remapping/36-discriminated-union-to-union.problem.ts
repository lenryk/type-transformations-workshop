import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

// we map through the unions in fruit and define the name as the key
// we then construct our new values by taking the name and color of the individual unions
// we use Fruit["name"] to convert the interface object into a union of our values (this extracts the values)
type TransformedFruit = {
  [K in Fruit as K["name"]]: `${K["name"]}:${K["color"]}`
}[Fruit["name"]];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
