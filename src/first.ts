/**
 * First类型工具 - 获取元组的第一个元素类型
 * 多种实现方式展示不同的类型推导技巧
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
// 1
// type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
// 2
// type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never
// 3
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 4
 type First<T extends any[]> = T extends [] ? never : T[0]
type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3