import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// we have a conditional that checks if we are returning a function that returns a promise with an object of props
// we grab the inferred type of the props key
// if true = return the type of the props key
// if not true return never
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer P }> ? P : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
