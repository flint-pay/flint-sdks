import type { Json, Schema } from './contract.js';
/** Data-only execution contract. This module is also bundled for dynamic schema APIs. */
export type ValueInstruction = {
    kind: 'dynamic';
} | {
    kind: 'null';
} | {
    kind: 'null-array';
} | {
    kind: 'boolean';
} | {
    kind: 'string';
} | {
    kind: 'safe-integer';
} | {
    kind: 'exact-integer';
} | {
    kind: 'decimal';
} | {
    kind: 'object';
} | {
    kind: 'array';
} | {
    kind: 'opaque';
    label: string;
};
export interface CodecPlan {
    readonly value: ValueInstruction;
    readonly nullable: boolean;
    /** Unmatched alternatives require objects only for the legacy literal type: 'object' form. */
    readonly objectOnlyAlternative?: boolean;
    readonly modelObjectInput: boolean;
    readonly requiredInput: readonly string[];
    readonly requiredOutput: readonly string[];
    readonly rejectInput: boolean;
    readonly hiddenOutput: boolean;
    readonly sensitive: boolean;
    readonly fields?: Readonly<Record<string, CodecPlan>>;
    readonly element?: CodecPlan;
    readonly extra?: boolean | CodecPlan;
    readonly members?: readonly Json[];
    /** JSON text preserves object/list identity through associative PHP plan loading. */
    readonly literal?: string;
    readonly range?: readonly [string, string];
    readonly checks: Readonly<Pick<Schema, 'minimum' | 'maximum' | 'exclusiveMinimum' | 'exclusiveMaximum' | 'multipleOf' | 'minLength' | 'maxLength' | 'minItems' | 'maxItems' | 'minProperties' | 'maxProperties' | 'uniqueItems' | 'pattern'>>;
    readonly numberInput?: 'explicit';
    readonly phpPattern?: string;
    readonly constraints?: boolean;
    readonly every?: readonly CodecPlan[];
    readonly some?: readonly CodecPlan[];
    readonly exactlyOne?: readonly CodecPlan[];
    readonly exclude?: CodecPlan;
    readonly includes?: CodecPlan;
    readonly when?: {
        readonly test: CodecPlan;
        readonly then?: CodecPlan;
        readonly else?: CodecPlan;
    };
    readonly tag?: string;
    readonly tagValues?: readonly string[];
    readonly reference?: string;
    readonly definitions?: Readonly<Record<string, CodecPlan>>;
}
export declare const CODEC_FORMAT = 1;
export declare const CODEC_SEMANTICS = "3";
export declare function valueInstruction(type: string | undefined, format?: string): ValueInstruction;
export declare function wireKind(value: ValueInstruction): string | undefined;
export declare function exactValue(value: ValueInstruction): boolean;
/** Pure direction derivation, shared with public-type compilation. */
export declare function directionalSchema(schema: Schema, response: boolean): Schema;
/** Compile both direction policies without discarding facts hidden by a public type. */
export declare function compileCodec(schema: Schema): CodecPlan;
/** Proven tag routing only. A discriminator hint never creates schema constraints. */
export declare function discriminatorBindings(schema: Schema): Record<string, number> | undefined;
export declare const ANY_CODEC: CodecPlan;
/** Validate serialized instructions at an ingestion boundary, without executing values. */
export declare function assertCodecPlan(value: unknown, path?: string, depth?: number): asserts value is CodecPlan;
