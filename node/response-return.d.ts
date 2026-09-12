import type { Operation, Schema } from './contract.js';
export interface ResponseReturn {
    return?: 'result' | 'payload';
    payloadPath?: string | null;
}
export declare function validateResponseReturn(value: unknown, path: string): asserts value is ResponseReturn;
/** Require a declared, present path in every alternative. Never infer envelopes by name. */
export declare function payloadSchemas(op: Operation, definitions?: Record<string, Schema>): Schema[];
/** Future alternatives may expose values outside the known payload schemas. */
export declare function payloadHasAlternatives(op: Operation, definitions?: Record<string, Schema>): boolean;
