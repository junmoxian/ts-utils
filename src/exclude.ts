
/**
 * Exclude类型工具 - 从联合类型中排除指定类型
 * 条件类型实现类型排除功能
 */

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
// T in U → never 反之 T
type MyExclude<T, U> = T extends U ? never : T

const a: Result = 'b' // 正确
const b: Result = 'a' // 错误，'a' 已被排除
const c: Result = 'c'