/**
 * MyReadonly 工具类型
 * 
 * 功能：将对象类型的所有属性设置为只读（readonly）
 * 
 * 示例：
 * interface Todo { title: string; description: string; }
 * type ReadonlyTodo = MyReadonly<Todo> // { readonly title: string; readonly description: string; }
 * 
 * 实现原理：
 * 1. [K in keyof T] 遍历对象 T 的所有键
 * 2. readonly [K in keyof T]: T[K] 为每个属性添加 readonly 修饰符
 * 3. T[K] 保持原有的类型不变
 * 
 * 与内置 Readonly<T> 的区别：
 * 这是内置 Readonly<T> 工具类型的自定义实现，功能完全一致
 */

interface Todo {
    title: string
    description: string
}
type  MyReadonly<T>= {
    readonly [K in keyof T]: T[K]
}
const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property