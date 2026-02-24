type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
type A = ReplaceAll<'foobar', 'bar', 'aaa'> // 期望是 'fooaaa'

/**
 * ReplaceAll
 * S: 源字符串
 * From: 要被替换的子串
 * To: 用于替换的新子串
 * 
 * 大白话解释 infer (切蛋糕):
 * 比如 S 如果是 "苹果核桃酥"，From 是 "核桃"。
 * 
 * S extends `${infer F}${From}${infer R}`
 * 这句话就是在问：能不能把 "苹果核桃酥"，按 "核桃" 为中心切开？
 * 
 * 如果能切开：
 * 1. infer F (左边推断) 拿到了 "苹果"
 * 2. 中间是 "核桃" (这就扔掉了)
 * 3. infer R (右边推断) 拿到了 "酥"
 * 
 * 最后我们把 F("苹果") + To("杏仁") + R("酥") 拼起来，就变成了 "苹果杏仁酥"。
 */
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? `${F}${To}${ReplaceAll<R, From, To>}`
  : S;
