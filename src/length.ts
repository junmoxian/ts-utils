/**
 * Length类型工具 - 获取元组的长度类型
 * 通过索引访问获取元组的长度字面量类型
 */

// `as const` 使数组成为只读元组，这样元素和长度就保持为字面量类型。
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

// `readonly` 既支持只读元组和数组；又能保留元组长度的字面量。
type Length<T extends readonly any[]> = T['length']

// Hover `teslaLength`/`spaceXLength` to see 4/5 in the editor.
type teslaLength = Length<typeof tesla> // expected 4

type spaceXLength = Length<typeof spaceX> // expected 5

let i: teslaLength = 4 // ok; assigning 5 should error
