import type { CodecPlan } from './codec-plan.js';
import type { CompiledRuntimePlan } from './runtime-plan.js';
/** Runtime data dependencies, independent of either target's file layout. */
export declare function codecReferences(value: unknown): string[];
export declare function codecClosure(value: unknown, definitions: Readonly<Record<string, CodecPlan>>): string[];
export declare function packagePlan(runtime: CompiledRuntimePlan): {
    webhook?: {
        webhook: Omit<import("./contract.js").Webhook, "events"> & {
            events: Record<string, CodecPlan>;
            eventModels?: Record<string, string>;
        };
        dependencies: string[];
    };
    settings: {
        operations: never[];
        format: typeof import("./codec-plan.js").CODEC_FORMAT;
        semantics: string;
        retrySemantics?: typeof import("./runtime-plan.js").RETRY_SEMANTICS;
        validation?: "schema" | "encoding" | undefined;
        errors?: {
            codePath?: string;
            messagePath?: string;
            detailsPath?: string;
            requestIdHeader?: string;
        } | undefined;
        defaultBaseUrl?: string;
        userAgent?: string;
        auth?: import("./contract.js").Auth;
        authentication?: Record<string, import("./contract.js").AuthenticationMode>;
        authShortcuts?: import("./contract.js").AuthShortcuts;
        apiVersion?: {
            header: string;
            value: string;
        };
        money?: {
            currencies: Record<string, number>;
        };
    };
    compatibility: {
        operations: {
            [k: string]: {
                deprecated?: string;
                aliases?: string[];
                example?: Record<string, unknown>;
                description: string;
            };
        };
        incoming?: (Omit<import("./contract.js").IncomingWebhook, "schema"> & {
            codec: CodecPlan;
        })[];
        definitions: string[];
        includeDefinitions: boolean;
    };
    definitions: Record<string, CodecPlan>;
    resources: {
        [k: string]: {
            operations: {
                description: string;
                retry: import("./contract.js").Retry;
                replay: "safe" | "idempotency";
                streamEventCodecs?: Record<string, CodecPlan>;
                parameters: (Omit<import("./contract.js").Operation["parameters"][number], "schema"> & {
                    codec: CodecPlan;
                })[];
                body?: CodecPlan;
                successJsonFallback?: string;
                responses: Record<string, Omit<import("./contract.js").Operation["responses"][string], "schema"> & {
                    codec?: CodecPlan;
                    phpRepresentation?: import("./php-value-plan.js").PhpRepresentation;
                    model?: string;
                    variants?: Record<string, string>;
                }>;
                verb: string;
                id: string;
                resource: string;
                method: string;
                path: string;
                bodyRequired: boolean;
                mediaType?: string;
                authenticated: boolean;
                authModes?: string[];
                optionalAuthentication?: boolean;
                request?: import("./request-style.js").RequestStyle;
                response?: import("./response-return.js").ResponseReturn;
                stream?: {
                    events?: Record<string, string>;
                    idleTimeoutMs?: number;
                    maxEventBytes?: number;
                };
                requestMediaType?: string;
                audiences?: string[];
                hidden?: boolean;
                idempotency?: {
                    header: string;
                    retention: string;
                    scope: string;
                    auto?: boolean;
                };
                pagination?: {
                    kind: "cursor" | "offset" | "link";
                    items: string;
                    next: string;
                    parameter?: string;
                };
                polling?: {
                    state: string;
                    success: string[];
                    failure: string[];
                    intervalMs: number;
                };
                conditional?: {
                    header: string;
                };
            }[];
            dependencies: string[];
        };
    };
};
