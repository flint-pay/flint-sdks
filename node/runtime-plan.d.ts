import { type PhpRepresentation } from './php-value-plan.js';
export declare const AUTH_SHORTCUT_RESERVED: Set<string>;
/** token reuses the legacy client field, but may explicitly select a composed mode. */
export declare function isAuthShortcutName(name: string): boolean;
/** Reject malformed authorities before URL parsers can repair them. */
export declare function isBaseUrlSyntax(value: unknown): value is string;
/** Static server defaults must be usable without an input-document origin or variables. */
export declare function isDefaultBaseUrl(value: unknown): value is string;
import type { Operation, Retry, Schema, Auth, Webhook, Config, IncomingWebhook, AuthenticationMode, AuthShortcuts } from './contract.js';
import { CODEC_FORMAT, type CodecPlan } from './codec-plan.js';
/** Declared success statuses; default remains a runtime fallback, never an implicit redirect. */
export declare function successStatus(status: string): boolean;
export interface RuntimeContract {
    defaultBaseUrl?: string;
    userAgent?: string;
    validation?: Config['validation'];
    operations: Operation[];
    incoming?: IncomingWebhook[];
    definitions?: Record<string, Schema>;
    auth?: Auth;
    authentication?: Record<string, AuthenticationMode>;
    authShortcuts?: AuthShortcuts;
    apiVersion?: {
        header: string;
        value: string;
    };
    webhook?: Webhook;
    money?: {
        currencies: Record<string, number>;
    };
    errors?: Config['errors'];
}
/** Shared defaults also rendered into the PHP dynamic-contract adapter. */
export declare const RETRY_DEFAULTS: {
    safeMethods: string[];
    read: {
        maxAttempts: number;
        statuses: number[];
        transport: boolean;
        baseDelayMs: number;
    };
    mutation: {
        maxAttempts: number;
        statuses: never[];
        transport: boolean;
        baseDelayMs: number;
    };
};
export declare const RETRY_SEMANTICS = "budgets-1";
export declare function compileRetry(op: Pick<Operation, 'verb' | 'retry'>): {
    retry: Retry;
    replay: 'safe' | 'idempotency';
};
export interface CompiledOperation extends Omit<Operation, 'parameters' | 'body' | 'responses' | 'streamEventSchemas' | 'retry'> {
    retry: Retry;
    replay: 'safe' | 'idempotency';
    streamEventCodecs?: Record<string, CodecPlan>;
    parameters: (Omit<Operation['parameters'][number], 'schema'> & {
        codec: CodecPlan;
    })[];
    body?: CodecPlan;
    /** Sole JSON 2xx declaration eligible for an otherwise undeclared success. */
    successJsonFallback?: string;
    responses: Record<string, Omit<Operation['responses'][string], 'schema'> & {
        codec?: CodecPlan;
        phpRepresentation?: PhpRepresentation;
        model?: string;
        variants?: Record<string, string>;
    }>;
}
export interface CompiledRuntimePlan extends Omit<RuntimeContract, 'operations' | 'definitions' | 'webhook' | 'incoming'> {
    format: typeof CODEC_FORMAT;
    semantics: string;
    retrySemantics?: typeof RETRY_SEMANTICS;
    operations: CompiledOperation[];
    incoming?: (Omit<IncomingWebhook, 'schema'> & {
        codec: CodecPlan;
    })[];
    definitions?: Record<string, CodecPlan>;
    webhook?: Omit<Webhook, 'events'> & {
        events: Record<string, CodecPlan>;
        eventModels?: Record<string, string>;
    };
}
/** Provider policy is resolved here; transports receive only explicit operation descriptors. */
export declare function compileRuntimePlan(contract: RuntimeContract): CompiledRuntimePlan;
export declare function assertRuntimePlan(value: unknown, historical?: boolean): asserts value is CompiledRuntimePlan;
