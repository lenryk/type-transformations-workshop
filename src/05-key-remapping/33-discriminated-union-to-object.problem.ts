import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// we map through all the unions of Route and access the route prop for the key name (as each has one)
// we then access the object which is K and use index props to access the search object
// in this case K is the object in the union so we can access props with K["search"]
type RoutesObject = {
  [K in Route as K["route"]]: K["search"]
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
