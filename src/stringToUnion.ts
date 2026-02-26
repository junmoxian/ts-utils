type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"


type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;
