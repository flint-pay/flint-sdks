import { inspect } from 'node:util';
import type { Schema } from './contract.js';
import { type RuntimeContract, type CompiledRuntimePlan } from './runtime-plan.js';
export type { RuntimeContract } from './runtime-plan.js';
export type { Operation, Schema } from './contract.js';
import { type CodecPlan } from './codec-plan.js';
export { directionalSchema } from './codec-plan.js';
export type ErrorKind = 'transport' | 'authentication' | 'validation' | 'rate_limit' | 'api' | 'conflict' | 'protocol' | 'cancelled' | 'deadline' | 'destination';
export interface Metadata {
    status: number;
    headers: Record<string, string>;
    requestId?: string;
    attempts: number;
    durationMs: number;
    url?: string;
}
export interface Result<T> {
    data: T;
    meta: Metadata;
    raw: T extends Uint8Array ? Uint8Array : string;
}
export declare class SdkError extends Error {
    kind: ErrorKind;
    outcome: 'unknown' | 'response' | 'not_sent';
    retryAllowed: boolean;
    meta?: Metadata | undefined;
    code?: string | undefined;
    details?: unknown | undefined;
    raw?: string | undefined;
    constructor(kind: ErrorKind, message: string, outcome?: 'unknown' | 'response' | 'not_sent', retryAllowed?: boolean, meta?: Metadata | undefined, code?: string | undefined, details?: unknown | undefined, options?: ErrorOptions, raw?: string | undefined);
    [inspect.custom](): {
        name: string;
        kind: ErrorKind;
        message: string;
        outcome: "response" | "unknown" | "not_sent";
        retryAllowed: boolean;
        requestId: string | undefined;
        status: number | undefined;
    };
}
export interface DiagnosticEvent {
    operation: string;
    attempt: number;
    status?: number;
    requestId?: string;
    durationMs: number;
    errorKind?: ErrorKind;
}
export interface RequestOptions {
    streamIdleTimeoutMs?: number;
    streamLifetimeMs?: number;
    authMode?: string;
    credentials?: Record<string, string>;
    headers?: Record<string, string>;
    idempotencyKey?: string;
    ifMatch?: string;
    timeoutMs?: number;
    deadlineMs?: number;
    maxAttempts?: number;
    signal?: AbortSignal;
    maxPages?: number;
    maxItems?: number;
}
export interface ClientOptions {
    baseUrl: string;
    token?: string;
    authMode?: string;
    credentials?: Record<string, Record<string, string>>;
    allowedOrigins?: string[];
    allowInsecureHttp?: boolean;
    timeoutMs?: number;
    deadlineMs?: number;
    maxAttempts?: number;
    transport?: typeof fetch;
    diagnostics?: (event: DiagnosticEvent) => void;
    redactFields?: string[];
}
export interface ServerSentEvent {
    event: string;
    id: string;
    data: unknown;
    rawData: string;
    retry?: number;
}
/** A single-consumer stream. Breaking iteration releases the response connection. */
export declare class EventStream implements AsyncIterable<ServerSentEvent> {
    private readonly reader;
    readonly meta: Metadata;
    private readonly settings;
    private readonly decodeEvent;
    private readonly released;
    private closed;
    private started;
    private failure;
    private lifetime;
    private readonly abort;
    constructor(reader: ReadableStreamDefaultReader<Uint8Array>, meta: Metadata, settings: {
        idleTimeoutMs: number;
        maxEventBytes: number;
        lifetimeMs?: number;
        signal?: AbortSignal;
    }, decodeEvent?: (event: string, data: string) => unknown, released?: () => void);
    close(): Promise<void>;
    [inspect.custom](): {
        meta: {
            status: number;
            requestId: string | undefined;
            attempts: number;
            durationMs: number;
        };
        closed: boolean;
    };
    [Symbol.asyncIterator](): AsyncGenerator<ServerSentEvent>;
}
declare class ParsedNumber {
    readonly value: string;
    constructor(value: string);
}
/** An explicit JSON number for inputs whose schema also permits JSON strings. */
export declare class ExactNumber extends ParsedNumber {
    constructor(value: string);
}
/** Parse JSON without rounding integers or decimal tokens. Unknown numeric tokens remain exact strings. */
export declare function parseExact(text: string): unknown;
export declare function normalize(value: unknown, s: Schema, path?: string, response?: boolean, redactFields?: string[], matching?: boolean, definitions?: Record<string, Schema>, depth?: number, validateConstraints?: boolean, allowUnknownResponseFields?: boolean): any;
type CodecMode = {
    mode: 'request' | 'response';
    direction?: never;
} | {
    mode: 'match';
    direction: 'request' | 'response';
};
export type CodecContext = CodecMode & {
    path?: string;
    redactFields?: string[];
    definitions?: Readonly<Record<string, CodecPlan>>;
    depth?: number;
    validateConstraints?: boolean;
    allowUnknownResponseFields?: boolean;
};
/** Internal descriptor entry point. Raw schemas are accepted only by the adapter above. */
export declare function executeCodec(value: unknown, s: CodecPlan, context: CodecContext): unknown;
export declare function serialize(value: unknown, schema: Schema): string;
export declare function isKnownVariant(value: unknown, schema: Schema): boolean;
export declare function isKnownCodec(value: unknown, codec: CodecPlan): boolean;
export declare function redact(value: unknown, schema?: Schema, fields?: string[], definitions?: Record<string, Schema>, depth?: number): unknown;
export declare function redactCodec(value: unknown, schema?: CodecPlan, fields?: string[], definitions?: Readonly<Record<string, CodecPlan>>, depth?: number): unknown;
/** Plain inputs and validated model factories may be composed at any depth. */
export type InputValue<T> = T | Model<T> | (T extends readonly (infer Item)[] ? InputValue<Item>[] : T extends object ? {
    [Key in keyof T]: InputValue<T[Key]>;
} : never);
export declare class Model<T = unknown> {
    private readonly value;
    private readonly codec;
    private readonly dynamicSchema;
    constructor(value: InputValue<T>, schema: Schema);
    toJSON(): T;
    [inspect.custom](): unknown;
}
/** Internal factory; does not expand the public Model class method surface. */
export declare function modelFromCodec<T>(value: InputValue<T>, codec: CodecPlan): Model<T>;
export declare class Runtime {
    private readonly streams;
    close(): Promise<void>;
    private readonly options;
    private readonly base;
    private readonly allowed;
    private readonly compiledContract;
    private readonly dynamicContract;
    private get contract();
    constructor(contract: RuntimeContract, options: ClientOptions);
    [inspect.custom](): {
        baseUrl: string;
        credentials: string;
    };
    private decode;
    private checkUrl;
    request<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions, continuation?: string): Promise<Result<T>>;
    pages<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions): AsyncGenerator<Result<T>>;
    items<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions): AsyncGenerator<T>;
    wait<T = unknown>(id: string, input: Record<string, unknown>, options?: RequestOptions): Promise<Result<T>>;
    verifyWebhook(rawBody: Uint8Array, headers: Record<string, string>, secrets: string[], nowSeconds?: number): {
        event: unknown;
        known: boolean;
    };
    money(currency: string, major: string): {
        currency: string;
        amount: string;
    };
}
/** Internal factory for generated clients; public Runtime construction remains schema-based. */
export declare function runtimeFromPlan(contract: CompiledRuntimePlan, options: ClientOptions): Runtime;
