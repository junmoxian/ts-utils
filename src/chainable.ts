/**
 * TypeScript 类型挑战：实现 Chainable 类型
 * 创建一个可链式调用的配置对象类型
 * 支持通过 option() 方法添加属性，get() 方法获取最终配置
 * 相同 key 时，新值会覆盖旧值（通过 Omit 实现）
 */

declare const config: Chainable

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .option('bar', { value: 34234 })
    .get()
// result.bar.value =  '3434'  // error: Type 'number' is not assignable to type 'string'.
result.bar.value =  3434
// 期望 result 的类型是：
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}
// 在 TypeScript 里用交叉类型 A & B 合并对象时，如果有同名属性，不是“后者覆盖前者”，而是同名属性类型会被交叉，通常变成更窄甚至 never。
type A = { bar: { value: string } }
type B = { bar: string }

type C = A & B
// 后者覆盖前者”，需要先把旧的 key 去掉：
type Merge<A,B> = Omit<A, keyof B> & B
type D = Merge<A,B>
const test: D = {
    bar: 'Hello World'
}

// 1. 使用T={} 作为默认类型参数，再通过递归传递T即可实现递归全局记录
// 2. option方法中接受两个参数：key和value，key约束为字符串，value可以是任意类型
//   type Chainable<T = {}> = {
//     option<K extends string,V>(key: K, value: V): Chainable<T & Record<K, V>>
//     get(): T
//   }

// 3.验证相同的key,实现传入相同的key报错
// type Chainable<T = {}> = {
//     option<K extends string, V>(
//         // k 是 T 的键，报错，否则返回 K
//         key: K extends keyof T ?  never : K,
//         value: V
//     ): Chainable<T & Record<K, V>>
//     get(): T
// }

// 4. 案例3无法通过，案例三是传入相同的key，但类型不同，需要在K extends keyof T 后面增加验证，只有类型相同才返回never
// type Chainable<T = {}> = {
//     option<K extends string, V>(
//         // k 是 T 的键且 V 是 T[K] 的值时，报错，否则返回 K
//         key: K extends keyof T ? (V extends T[K] ? never : K) : K,
//         value: V
//     ): Chainable<T & Record<K, V>>
//     get(): T
// }

// 5. 最后直接 & 联合并不能将相同key的类型覆盖,需要用omit去掉前一个类型中相同的key
type Chainable<T = {}> = {
    option<K extends string, V>(
        // k 是 T 的键且 V 是 T[K] 的值时，报错，否则返回 K
        key: K extends keyof T ? (V extends T[K] ? never : K) : K,
        value: V
    ): Chainable<Omit<T, K> & Record<K, V>> // Omit 去掉前一个类型中相同的 key
    get(): T
}
// type Chainable<T = {}> = {
//     // K 约束为字符串val 任意内容，返回一个新的 Chainable 类型，类型参数 T 与新属性合并
//     option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
//     get(): T
// }
