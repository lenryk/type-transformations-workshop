import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

// this lets us select all the props on the obj
// we simply reference the keys using the typeof from the obj
type BackendModuleEnum = typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >,
];
