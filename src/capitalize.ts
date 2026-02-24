/**
 * TypeScript 类型挑战：实现 Capitalize 工具类型
 * 将字符串字面量类型的首字母转换为大写
 * 使用模板字面量类型和 infer 关键字提取首字符和剩余部分
 * 结合 Uppercase 内置类型进行转换
 *
 * infer 匹配机制说明：
 * 在 `${infer F}${infer R}` 中，F 是非贪婪的（只匹配第一个字符），R 是贪婪的（匹配剩余所有字符）。
 */

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type Capitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S
