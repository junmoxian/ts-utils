/**
 * MyOmit 工具类型
 * 
 * 功能：从对象类型中排除指定的属性，创建一个新的对象类型
 * 
 * 示例：
 * type Obj = { a: number; b: number; c: number; }
 * type NewObj = MyOmit<Obj, 'a' | 'b'> // { c: number; }
 * 
 * 实现原理：
 * 1. K extends keyof T 约束 K 必须是 T 的键的子集
 * 2. [P in keyof T as P extends K ? never : P]: T[P] 使用映射类型和 as 子句
 * 3. as P extends K ? never : P 如果键 P 在 K 中，映射为 never（排除该键），否则保留原键
 * 4. T[P] 保持原有的类型不变
 * 
 * 与内置 Omit<T, K> 的区别：
 * 这是内置 Omit<T, K> 工具类型的自定义实现，功能完全一致
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
// 通过 in 遍历 T 中的每个元素 P，使用条件类型判断 P 是否在 K 中，如果在则返回 never，否则返回 P
// 最后使用 T[P] 获取对应的类型，并将其作为新对象的属性类型
type MyOmit<T,K extends keyof T> = {
    // 在 as P extends K ? never : P 里：
    // 如果 P 在 K 里 → 映射成 never → 这个键被去掉
    // 如果 P 不在 K 里 → 保留原键 P
    [P in keyof T as P extends K ? never : P]: T[P]
}
type NewObj = MyOmit<Obj, 'a' | 'b'>;

const obj2: NewObj = {
    c: 2,
}

