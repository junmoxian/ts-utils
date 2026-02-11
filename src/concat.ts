/**
 * Concat类型工具 - 连接两个元组类型
 * 将两个元组类型合并为一个新的元组类型
 */

type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<T extends any[], U extends any[]> = [...T, ...U]