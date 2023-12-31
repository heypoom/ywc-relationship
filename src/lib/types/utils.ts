export type MatchKey<T extends object, V> = {
	[K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]
