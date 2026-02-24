

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

/**
 * Replace
 * S: 源字符串
 * F: 要被替换的子串
 * T: 用于替换的新子串
 * 
 * 实现原理:
 * 1. 如果 S 是空字符串，直接返回 S
 * 2. 使用模板字面量类型匹配模式 `${infer L}${F}${infer R}`
 *    - L: 匹配 F 之前的部分
 *    - F: 要替换的目标子串
 *    - R: 匹配 F 之后的部分
 * 3. 如果能匹配成功，返回 `${L}${T}${R}`
 * 4. 如果不能匹配，返回原字符串 S
 */
type Replace<S extends string, F extends string, T extends string> =
  S extends '' ? S : S extends `${infer L}${F}${infer R}` ? `${L}${T}${R}` : S;
