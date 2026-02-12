/**
 * TypeScript 类型挑战：实现 TrimLeft 类型
 * 移除字符串左侧的空白字符（空格、换行符、制表符）
 * 使用递归和条件类型实现
 */

type trimmed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '

type TrimLeft<T extends string> = T extends `${infer L}${infer R}`
    ? L extends ' ' | '\n' | '\t' // 判断首字符是否为空白字符
        ? TrimLeft<R> // 递归处理剩余字符串
        : T // 首字符不是空白，返回原字符串
    : T // 空字符串直接返回