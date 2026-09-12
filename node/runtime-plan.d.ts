export declare const AUTH_SHORTCUT_RESERVED: Set<string>;
import type { Operation, Schema, Auth, Webhook, Config, IncomingWebhook, AuthenticationMode, AuthShortcuts } from './contract.js';
import { CODEC_FORMAT, type CodecPlan } from './codec-plan.js';
/** Declared success statuses; default remains a runtime fallback, never an implicit redirect. */
export declare function successStatus(status: string): boolean;
export interface RuntimeContract {
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
export interface CompiledOperation extends Omit<Operation, 'parameters' | 'body' | 'responses' | 'streamEventSchemas'> {
    streamEventCodecs?: Record<string, CodecPlan>;
    parameters: (Omit<Operation['parameters'][number], 'schema'> & {
        codec: CodecPlan;
    })[];
    body?: CodecPlan;
    responses: Record<string, Omit<Operation['responses'][string], 'schema'> & {
        codec?: CodecPlan;
        model?: string;
        variants?: Record<string, string>;
    }>;
}
export interface CompiledRuntimePlan extends Omit<RuntimeContract, 'operations' | 'definitions' | 'webhook' | 'incoming'> {
    format: typeof CODEC_FORMAT;
    semantics: string;
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
export declare function assertRuntimePlan(value: unknown): asserts value is CompiledRuntimePlan;
