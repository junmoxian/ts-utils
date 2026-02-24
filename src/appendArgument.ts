type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> // 期望是 (a: number, b: string, x: boolean) => number

/**
 * AppendArgument
 * Fn: 目标函数类型
 * A: 要追加的参数类型
 *
 * 原理:
 * 1. infer Args: 提取原函数的参数列表 [number, string]
 * 2. infer R: 提取原函数的返回值 number
 * 3. [...Args, A]: 利用元组展开，将新参数 A 加到末尾 -> [number, string, boolean]
 * 4. 重新组装成新函数: (...args: [number, string, boolean]) => number
 */
type AppendArgument<Fn extends (...args: any[]) => any, A> =
  Fn extends (...args: infer Args) => infer R ? (...args: [...Args, A]) => R : never
