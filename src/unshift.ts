/**
 * Unshift类型工具 - 向元组开头添加元素
 * 扩展元组类型，在开头添加新类型
 */

type Result = Unshift<[1, 2], 0> // [0, 1, 2]


type Unshift<T extends any[], U> = [U, ...T]