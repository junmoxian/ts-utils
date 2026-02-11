/**
 * Awaited类型工具 - 展开Promise类型获取其内部类型
 * 支持递归展开嵌套Promise和thenable对象
 */

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

// 更通用的 Awaited：支持 thenable，递归展开嵌套 Promise。
type MyAwaited<T> =
  T extends null | undefined
    ? T
    : T extends { then: (onfulfilled: (value: infer V) => any) => any }
      ? MyAwaited<V>
      : T

// 额外示例：嵌套 Promise 会被递归展开。
type Nested = MyAwaited<Promise<Promise<number>>> // number

let p: ExampleType = Promise.resolve("Hello, World!");

p.then(result => {
    // result 的类型被推断为 string
    console.log(result.toUpperCase()); // 输出: "HELLO, WORLD!"
}  )