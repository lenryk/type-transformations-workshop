import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

// by extending MyComplexInterface we have a constraint that checks if we have all the args
// we can also grab the type of any argument by inferring that argument
// we can then reference that type in the conditional to return it
// we could also infer every other argument
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint> ? TPoint : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
