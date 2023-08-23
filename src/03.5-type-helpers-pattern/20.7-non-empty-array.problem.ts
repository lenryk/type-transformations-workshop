// since the array cant be empty it needs to be a tuple so we can define a length
// we pass T inside our tuple for the first arg
// the second arg is a rest param so we can have unlimited length array of type T
type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
