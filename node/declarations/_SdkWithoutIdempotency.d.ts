

export type _SdkWithoutIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & { idempotencyKey?: never } : never;
