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
    type events = typeof Event

type ClickEvent =Extract<Event,{type:"click"}> ;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
