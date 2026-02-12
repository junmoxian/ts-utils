
/**
 * TypeScript 类型挑战：实现 TupleToUnion 类型
 * 将元组类型转换为联合类型
 * 两种实现方式：T[number] 或 T extends (infer U)[] ? U : never
 */

type Arr = ['1', '2', '3',3]

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

// type TupleToUnion<T extends any[]> = T[number]
type TupleToUnion<T extends any[]> = T extends (infer U)[] ? U : never