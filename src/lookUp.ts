/**
 * TypeScript 类型挑战：实现 LookUp 类型
 * 从联合类型中查找具有特定 type 属性的类型
 * 使用条件类型 T extends { type: U } ? T : never 实现
 */

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

type LookUp<T, U> =
    // 条件类型：从联合 T 中筛出 type 为 U 的成员
    T extends { type: U } ? T : never

let a: MyDog = {
    type: 'dog',
    breeds: 'Hound',
    color: 'brown'
} // 正确

let b: LookUp<Cat | Dog, 'cat'> = {
    type: 'cat',
    breeds: 'Abyssinian'
}
let c: LookUp<Cat | Dog, 'cat'> = {
    type: 'dog',
    breeds: 'Hound',
    color: 'brown'
}
