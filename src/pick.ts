/**
 * MyPick 工具类型
 * 
 * 功能：从对象类型中选择指定的属性，创建一个新的对象类型
 * 
 * 示例：
 * type Obj = { a: number; b: number; c: number; }
 * type NewObj = MyPick<Obj, 'a' | 'b'> // { a: number; b: number; }
 * 
 * 实现原理：
 * 1. K extends keyof T 约束 K 必须是 T 的键的子集
 * 2. [P in K]: T[P] 遍历 K 中的每个键 P
 * 3. T[P] 获取原对象类型中对应键的类型
 * 
 * 与内置 Pick<T, K> 的区别：
 * 这是内置 Pick<T, K> 工具类型的自定义实现，功能完全一致
 * 
 * 与 MyOmit 的关系：
 * MyPick 是选择指定属性，MyOmit 是排除指定属性，两者功能互补
 */

type Obj = {
    a: number,
    b: number,
    c: number,
}
const obj:Obj = {
    a: 1,
    b: 2,
    c: 3,
}
//  T 是源类型，K 是 T 的键集合(keyof T)
// 通过 in 遍历 K 中的每个元素 P，使用 T[P] 获取对应的类型，并将其作为新对象的属性类型
type MyPick<T,K extends keyof T> = {
    [P in K]: T[P]
}
type NewObj = MyPick<Obj, 'a' | 'b'>;

const obj2: NewObj = {
    a: 1,
    b: 2,
}

