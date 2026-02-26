type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

type AppendToObject<T extends Record<string, any>, K extends string, V> = {
  [P in keyof T | K]: P extends K ? V : P extends keyof T ? T[P] : never
}
