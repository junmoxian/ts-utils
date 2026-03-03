type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"

type KebabCase<S extends string> = 
  S extends `${infer S1}${infer S2}` // 1. 模式匹配:拆分字符串
  ? S2 extends Uncapitalize<S2>      // 2. 判断:S2 是否以小写字母开头
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`     // 3a. 是:不加连字符
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`    // 3b. 否:加连字符
  : S;  // 4. 递归终止:字符串为空或单字符
