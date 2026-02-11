/**
 * Push类型工具 - 向元组末尾添加元素
 * 扩展元组类型，在末尾添加新类型
 */

type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends any[], U> = [...T, U]

const a: Result = [1, 2, '3'] // 正确
const b: Result = [1, 2] // 错误，缺少 '3'
const c: Result = [1, 2, '4'] // 错误，'4' 不符合类型 '3'