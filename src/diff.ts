// 获取两个接口类型中的差值属性。
type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

// 
// type Diff<T extends object, K extends object> = {
//  // as P extends keyof T           // P 是否在 T 中?
//  //  ? P extends keyof K          // 如果在 T 中,再判断是否在 K 中?
//   //   ? never                    // 如果在 T 和 K 中都存在 → 过滤掉(never)
//   //  : P                        // 如果只在 T 中 → 保留
//   // : P      
//   [P in keyof T | keyof K as P extends keyof T ? P extends keyof K ? never : P : P]: P extends keyof T ? T[P] : P extends keyof K ? K[P] : never
// }


type Diff<T, K> = Omit<T & K, keyof T & keyof K> // keyof T & keyof K → 取共同属性 (键的交集)
