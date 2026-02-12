/**
 * TypeScript 类型挑战：实现 Last 类型
 * 获取元组/数组的最后一个元素的类型
 * 使用 [never, ...T][T['length']] 技巧实现
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // 应推导出 'c'
type tail2 = Last<arr2> // 应推导出 1

// 1. [any, ...T] 将数组 T 的元素展开，并在前面添加一个任意类型的元素
// 2. [T['length']] 通过访问数组 T 的长度属性，获取最后一个元素的类型
// [any, ...T] 的作用是在元组前面塞一个占位元素，让最后一个元素的索引刚好等于 T['length']。
type Last <T extends any[]> = [never, ...T] [T['length']]

let a: tail1 = 'c'