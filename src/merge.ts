type foo = {
  name: string;
  age: number;
}

type coo = {
  age: string;
  sex: string
}

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
// 1. 先把 F 中 S 有的属性去掉
// 2. 再把 S 中的属性加上
// type Merge<F, S> = Omit<F, keyof S> & S


type Merge<F, S> = {
  // 遍历 F 和 S 类型的所有属性键的并集
  [K in keyof F | keyof S]: K extends keyof S
  ? S[K]
  : K extends keyof F 
  ? F[K]
  : never
} 
