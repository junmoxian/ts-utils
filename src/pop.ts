/**
 * TypeScript 类型挑战：实现 Pop 类型
 * 移除元组/数组的最后一个元素，返回剩余部分
 * 使用条件类型和 infer 关键字实现：T extends [...infer R, infer _] ? R : never
 */

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
// 它约束 T 必须能匹配“至少一个元素的元组/数组”。
// 含义是：如果 T 可以拆成“前面若干元素 R + 最后一个元素 _”，就返回 R；否则不匹配。
// R：除最后一项外的所有元素（元组前缀）。
// _：最后一项，只是占位不使用。
// 空元组 [] 不匹配，所以会走 never。
// 对普通数组 string[] 也能匹配，但 R 会退化成 string[]，失去精确长度信息
type Pop<T extends any[]> = T extends [...infer R,infer _] ? R : never

