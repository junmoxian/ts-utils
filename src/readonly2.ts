/**
 * Readonly2类型工具 - 部分属性只读
 * 将对象类型的指定属性设置为只读，其他属性保持可变
 */

interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}
// const todo: MyReadonly2<Todo> = {
//     title: "Hey",
//     description: "foobar",
//     completed: false,
// }

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
// K in T 设置K只读
// 如没有提供k 全部属性只读
// type MyReadonly2<T,K extends keyof T = keyof T> = {
//     readonly [P in K]: T[P]
// } & {
//     [P in Exclude<keyof T, K>]: T[P]
// }
// 通过 Omit<T, K> 排除 K 中的属性，保留其他属性的类型不变
type MyReadonly2<T,K extends keyof T = keyof T> = Omit<T, K> & {
    readonly [P in K]: T[P]
}