/**
 * myReturnType 工具类型
 * 
 * 功能：提取函数类型的返回值类型
 * 
 * 示例：
 * function fn(v: boolean): 1 | '2323' { ... }
 * type Result = myReturnType<typeof fn> // 1 | '2323'
 * 
 * 实现原理：
 * 1. T extends (...args: never[]) => unknown 约束 T 必须是函数类型
 * 2. T extends (...args: never[]) => infer R ? R : never 使用条件类型和 infer 关键字
 * 3. infer R 推断函数的返回值类型并赋值给 R
 * 4. 如果 T 是函数类型，返回推断的返回值类型 R，否则返回 never
 * 
 * 与内置 ReturnType<T> 的区别：
 * 这是内置 ReturnType<T> 工具类型的自定义实现，功能完全一致
 */

function fn(v:boolean){
    // v 为 true 返回 1，否则返回 2，返回值类型会被推成 1 | 2
    if(v){
        return 1;
    }else{
        return '2323';
    }
}

function getuuid(len:number){
    const str = '123456789abcdef';
    let result = '';
    for(let i=0;i<len;i++){
        const randomIndex = Math.floor(Math.random() * str.length);
        result += str[randomIndex];
    }
    return result;
}
// 只允许传入“函数类型”，否则会报错
// 用条件类型 + infer 提取函数的返回值类型
// 这里 args 用 never[] 只是占位，不关心参数类型
//  【等号左边】类型别名的名字 + 泛型参数（带约束）
//  【等号右边】类型规则：如果 T 是函数，就提取返回值类型
type myReturnType<T extends (...args:never[]) => unknown> = T extends (...args:never[]) => infer R ? R : never;

// 取出 fn 的返回值类型，结果是 1 | 2
type a = myReturnType<typeof fn>;

type b = myReturnType<typeof getuuid>;
