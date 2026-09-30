

export type _SdkPayloadAt<T, P extends readonly string[]> = P extends readonly [infer K extends string, ...infer R extends string[]] ? T extends Record<K, infer V> ? _SdkPayloadAt<V, R> : unknown : T;
