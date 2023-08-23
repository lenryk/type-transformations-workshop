import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

// by using Extract we only allow strings that match the format
// this is like regex expression for extracting template literals
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
