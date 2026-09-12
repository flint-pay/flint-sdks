import type { Operation, Schema } from './contract.js';
export interface RequestStyle {
    style?: 'object' | 'positional';
}
export declare function validateRequestStyle(value: unknown, path: string): void;
export declare function pathParameters(op: Operation): import("./contract.js").Parameter[];
export declare const positional: (op: Operation) => boolean;
export declare const hasParams: (op: Operation) => boolean;
export declare function validatePositional(op: Operation, definitions: Record<string, Schema>): void;
/** Fixture and example inputs retain the canonical wire-oriented input shape. */
export declare function requestArguments(op: Operation, value: unknown): unknown[];
