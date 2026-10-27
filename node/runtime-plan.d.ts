import { type TypeCertificate } from './type-certificate.js';
import { type PhpRepresentation } from './php-value-plan.js';
export declare const AUTH_SHORTCUT_RESERVED: Set<string>;
/** token reuses the legacy client field, but may explicitly select a composed mode. */
export declare function isAuthShortcutName(name: string): boolean;
/** Reject malformed authorities before URL parsers can repair them. */
export declare function isBaseUrlSyntax(value: unknown): value is string;
/** Static server defaults must be usable without an input-document origin or variables. */
export declare function isDefaultBaseUrl(value: unknown): value is string;
import type {
    Operation,
    Retry,
    Schema,
    Auth,
    Webhook,
    Config,
    IncomingWebhook,
    AuthenticationMode,
    AuthShortcuts,
    DefaultCredentials,
    Parameter
} from './contract.js';
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
    defaultCredentials?: DefaultCredentials;
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
/** Headers supplied by the client have no independent operation input value. */
export declare function parameterSource(op: Operation, parameter: Pick<Parameter, 'in' | 'name' | 'x-flint-request-option'>, settings: Pick<RuntimeContract, 'auth' | 'authentication' | 'apiVersion'>): 'input' | 'authentication' | 'api-version' | 'request-option';
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
export declare const RETRY_SEMANTICS = "budgets-2";
/** Required option typing follows the declared header, independently of retry policy. */
export declare function requiresIdempotencyKey(op: Pick<Operation, 'idempotency' | 'parameters'>): boolean;
export declare function compileRetry(op: Pick<Operation, 'verb' | 'retry'>): {
    retry: Retry;
    replay: 'safe' | 'idempotency';
};
export interface CompiledOperation extends Omit<Operation, 'parameters' | 'body' | 'responses' | 'streamEventSchemas' | 'retry'> {
    retry: Retry;
    replay: 'safe' | 'idempotency';
    streamEventCodecs?: Record<string, CodecPlan>;
    /** Node payload unions must decode to one of their declared projected shapes. */
    payloadCodecs?: CodecPlan[];
    outputCertificate?: TypeCertificate;
    payloadCertificate?: TypeCertificate;
    itemCertificate?: TypeCertificate;
    parameters: (Omit<Operation['parameters'][number], 'schema'>
        & {
        codec: CodecPlan;
        /** Absent in historical descriptors and for ordinary input parameters. */
        source?: 'authentication' | 'request-option';
        requestOption?: {
            node: string;
            php: string;
        };
    })[];
    body?: CodecPlan;
    /** Sole JSON 2xx declaration eligible for an otherwise undeclared success. */
    successJsonFallback?: string;
    responses: Record<string, Omit<Operation['responses'][string], 'schema'>
        & {
        codec?: CodecPlan;
        phpRepresentation?: PhpRepresentation;
        model?: string;
        variants?: Record<string, string>;
    }>;
}
export interface CompiledRuntimePlan extends Omit<RuntimeContract, 'operations' | 'definitions' | 'webhook' | 'incoming'> {
    errorDetailsCertificate?: TypeCertificate;
    format: typeof CODEC_FORMAT;
    semantics: string;
    retrySemantics?: typeof RETRY_SEMANTICS | 'budgets-1';
    operations: CompiledOperation[];
    incoming?: (Omit<IncomingWebhook, 'schema'> & {
        codec: CodecPlan;
    })[];
    definitions?: Record<string, CodecPlan>;
    webhook?: Omit<Webhook, 'events'>
        & {
        certificate?: TypeCertificate;
        events: Record<string, CodecPlan>;
        eventModels?: Record<string, string>;
    };
}
/** The registry supplies both executors with the same mandatory codec. */
export declare function compileRequestOption(value: unknown, path: string): {
    node: "clientRequestId";
    php: "client_request_id";
    codec: {
        readonly value: {
            readonly kind: "string";
        };
        readonly nullable: false;
        readonly checks: {
            readonly minLength: 1;
            readonly maxLength: 128;
            readonly pattern: "^[\\x21-\\x7E]+(?![\\s\\S])";
        };
        readonly phpPattern: "~^[\\x21-\\x7E]+(?![\\s\\S])~uD";
        readonly constraints: true;
        readonly objectOnlyAlternative?: boolean;
        readonly nullableAlternative?: 0 | 1;
        readonly modelObjectInput: boolean;
        readonly requiredInput: readonly string[];
        readonly requiredOutput: readonly string[];
        readonly rejectInput: boolean;
        readonly hiddenOutput: boolean;
        readonly sensitive: boolean;
        readonly fields?: Readonly<Record<string, CodecPlan>>;
        readonly element?: CodecPlan;
        readonly propertyNames?: CodecPlan;
        readonly extra?: boolean | CodecPlan;
        readonly members?: readonly import("./contract.js").Json[];
        readonly literal?: string;
        readonly range?: readonly [
            string,
            string
        ];
        readonly numberInput?: "explicit";
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
    };
};
/** Provider policy is resolved here; transports receive only explicit operation descriptors. */
export declare function compileRuntimePlan(contract: RuntimeContract): CompiledRuntimePlan;
/** Owns discovery declaration validation for configuration and serialized runtime plans. */
export declare function assertDefaultCredentials(value: unknown, authentication: unknown): asserts value is DefaultCredentials;
export declare function assertRuntimePlan(value: unknown, historical?: boolean): asserts value is CompiledRuntimePlan;
