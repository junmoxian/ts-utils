/**
 * Parameters类型工具 - 提取函数参数类型
 * 获取函数类型的参数元组类型
 */

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

// T extends (...args: any) => any 约束 T 必须是一个函数类型
// T extends (...args: infer P) => any ? P : never 使用 infer 关键字推断函数参数类型，如果 T 是一个函数类型，则返回参数类型 P，否则返回 never
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never