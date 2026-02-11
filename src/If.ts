/**
 * If类型工具 - 条件类型判断
 * 根据布尔类型条件返回不同的类型
 */

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

type If<T extends boolean, U, V> = T extends true ? U : V