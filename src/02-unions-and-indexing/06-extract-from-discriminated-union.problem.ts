import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// Extract<Type, Union>
// We only have to define one type which is the click - but we could do event: MouseEvent
type ClickEvent = Extract<Event, { type: "click"}>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
