/**
 * DeepReadonly类型工具 - 深度只读类型
 * 递归地将对象的所有属性设置为只读
 */

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`

// type DeepReadonly<T> = {
//     // keyof T  获取对象 T 的所有键，in 遍历这些键
//     readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
// }

type DeepReadonly<T> = {
    // keyof T  获取对象 T 的所有键，in 遍历这些键
    // `keyof T[P] extends never` 用于判断该属性是否有可递归的键（如基础类型则为 never）。
    readonly [P in keyof T]: keyof T[P] extends never ?  T[P] : DeepReadonly<T[P]>
}

const obj: Todo = {
    x: {
        a: 1,
        b: 'hi'
    },
    y: 'hey'

}
obj.y = '344'
obj.x.a = '32323'