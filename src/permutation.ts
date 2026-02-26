type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// 递归实现

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<U, T>>]
  : never;
