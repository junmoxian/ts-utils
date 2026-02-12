/**
 * TypeScript 类型挑战：实现 PromiseAll 函数类型
 * 接收一个包含 Promise 和非 Promise 值的元组
 * 返回一个 Promise，其值为所有输入值解析后的元组
 * 使用条件类型和 infer 关键字提取 Promise 内部类型
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// 应推导出 `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

// T 表示传入的元组类型；readonly [...T] 保留字面量和顺序
// 映射遍历每一项：如果是 Promise 就取出内部类型，否则保持原类型
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
    Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>
