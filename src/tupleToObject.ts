/**
 * TupleToObject 工具类型
 * 
 * 功能：将元组类型转换为对象类型，其中元组的每个元素成为对象的键，键的值与键名相同
 * 
 * 示例：
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * type Result = TupleToObject<typeof tuple> // { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }
 * 
 * 实现原理：
 * 1. T extends readonly PropertyKey[] 约束 T 必须是只读的 PropertyKey 数组
 * 2. [P in T[number]]: P 遍历元组的所有元素，将每个元素作为键和值
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleToObject<T extends readonly PropertyKey[]> = {
    [P in T[number]]: P
}
type result = TupleToObject<typeof tuple>

