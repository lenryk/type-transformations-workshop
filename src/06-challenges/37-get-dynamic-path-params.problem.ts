import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// add a constraint so we can only pass strings
type ExtractPathParams<T extends string> = {
  // split the string via / so we can access the inner values
  // if the individual section has a colon at the start then return that
  // if it doesn't match exclude it
  [K in S.Split<T, "/">[number] as K extends `:${infer P}` ? P : never]: string
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
