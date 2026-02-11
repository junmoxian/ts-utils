/**
 * Includes类型工具 - 检查元组是否包含特定类型
 * 判断指定类型是否存在于元组类型中
 */

type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // FALSE
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // TRUE


// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type Includes<T extends readonly any[], U> = {
    [K in T[number]]: true
}[U] extends true ? true : false
