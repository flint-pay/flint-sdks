import type { Operation, Schema } from './contract.js';
export interface ResponseReturn {
    return?: 'result' | 'payload';
    payloadPath?: string | null;
}
/** Untagged payload alternatives with source component identities. */
export declare function namedPayloadAlternatives(schema: Schema, definitions: Readonly<Record<string, Schema>>): {
    union: Schema;
    branches: Schema[];
    names: string[];
    composed: {
        allOf: {
            [key: string]: unknown;
            'x-sdk-integer-mode'?: "number" | "exact";
            'x-sdk-query-array-items'?: Schema;
            'x-sdk-ref'?: string;
            'x-sdk-type-name'?: string;
            'x-sdk-definitions'?: Record<string, Schema>;
            type?: string | string[];
            properties?: Record<string, Schema>;
            propertyNames?: Schema;
            required?: string[];
            items?: Schema;
            enum?: import("./contract.js").Json[];
            const?: import("./contract.js").Json;
            allOf?: Schema[];
            not?: Schema;
            contains?: Schema;
            if?: Schema;
            then?: Schema;
            else?: Schema;
            readOnly?: boolean;
            writeOnly?: boolean;
            discriminator?: {
                propertyName: string;
                mapping?: Record<string, string>;
            };
            'x-sdk-discriminator-mapping'?: Record<string, number>;
            additionalProperties?: boolean | Schema;
            format?: string;
            minimum?: number;
            maximum?: number;
            multipleOf?: number;
            exclusiveMinimum?: number;
            exclusiveMaximum?: number;
            minLength?: number;
            maxLength?: number;
            minItems?: number;
            maxItems?: number;
            minProperties?: number;
            maxProperties?: number;
            uniqueItems?: boolean;
            pattern?: string;
            'x-sdk-pattern-php'?: string;
            description?: string;
            'x-sensitive'?: boolean;
        }[];
    }[]
        | undefined;
}
    | undefined;
export declare function validateResponseReturn(value: unknown, path: string): asserts value is ResponseReturn;
/** Require a declared, present path in every alternative. Never infer envelopes by name. */
export declare function payloadSchemas(op: Operation, definitions?: Record<string, Schema>): Schema[];
/** Future alternatives may expose values outside the known payload schemas. */
export declare function payloadHasAlternatives(op: Operation, definitions?: Record<string, Schema>): boolean;
