import { type RequestStyle } from './request-style.js';
import { type ResponseReturn } from './response-return.js';
import { Diagnostic } from './diagnostic.js';
export type Json = null | boolean | number | string | Json[] | {
    [key: string]: Json;
};
export type Schema = {
    'x-sdk-integer-mode'?: 'number' | 'exact';
    'x-sdk-query-array-items'?: Schema;
    'x-sdk-ref'?: string;
    /** Source component name for Node declarations; codecs retain their shared reference. */
    'x-sdk-type-name'?: string;
    'x-sdk-definitions'?: Record<string, Schema>;
    type?: string | string[];
    properties?: Record<string, Schema>;
    propertyNames?: Schema;
    required?: string[];
    items?: Schema;
    enum?: Json[];
    const?: Json;
    oneOf?: Schema[];
    anyOf?: Schema[];
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
    [key: string]: unknown;
};
export interface Parameter {
    'x-flint-request-option'?: string;
    description?: string;
    name: string;
    in: 'path' | 'query' | 'header';
    required?: boolean;
    schema: Schema;
    style?: string;
    explode?: boolean;
}
export interface Retry {
    maxAttempts: number;
    statuses: number[];
    /** Retry only these provider error codes at a given status. */
    errors?: {
        status: number;
        codes: string[];
    }[];
    transport: boolean;
    baseDelayMs: number;
    maxDelayMs?: number;
}
export interface OperationDefaults {
    timeoutMs?: number;
    deadlineMs?: number;
}
export interface Capability {
    defaults?: OperationDefaults;
    request?: RequestStyle;
    response?: ResponseReturn;
    stream?: {
        events?: Record<string, string>;
        idleTimeoutMs?: number;
        maxEventBytes?: number;
    };
    requestMediaType?: string;
    namingReason?: string;
    resource?: string;
    method?: string;
    audiences?: string[];
    hidden?: boolean;
    aliases?: string[];
    retry?: Retry;
    idempotency?: {
        header: string;
        retention: string;
        scope: string;
        auto?: boolean;
        autoKeyPrefix?: string;
    };
    pagination?: {
        kind: 'cursor' | 'offset' | 'link';
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
    example?: Record<string, unknown>;
    exampleIdempotencyKey?: {
        prefix: string;
        variable: string;
        example: string;
    };
    deprecated?: string;
}
export interface Operation extends Capability {
    streamEventSchemas?: Record<string, Schema>;
    id: string;
    resource: string;
    method: string;
    verb: string;
    path: string;
    parameters: Parameter[];
    body?: Schema;
    bodyRequired: boolean;
    mediaType?: string;
    responses: Record<string, {
        schema?: Schema;
        mediaType?: string;
        bodyKind?: 'empty' | 'json' | 'binary' | 'sse';
        classification?: 'success' | 'error' | 'redirect';
        locationRequired?: boolean;
    }>;
    authenticated: boolean;
    authModes?: string[];
    optionalAuthentication?: boolean;
    description: string;
}
export interface Auth {
    type: 'bearer' | 'apiKey';
    header: string;
}
export interface DefaultCredentials {
    mode: string;
    scheme: string;
    environment: {
        apiKey: string;
        token: string;
    };
    workloadIdentity: {
        tokenPath: string;
        credentialParameter: string;
        envPrefix: string;
    };
}
export type AuthShortcuts = Record<string, {
    mode: string;
    scheme: string;
}>;
export interface AuthenticationMode {
    schemes: (Auth & {
        name: string;
    })[];
    operations?: string[];
}
export interface WebhookJwt {
    header: string;
    scheme: 'Bearer';
    algorithm: 'ES256';
    typ: string;
    issuer: string;
    jwksPath: string;
    bodyHashClaim: string;
    bodyHashEncoding: 'base64url';
    lifetimeSeconds: number;
    leewaySeconds: number;
}
export interface WebhookHmac {
    algorithm: 'hmac-sha256';
    format?: 'hex' | 'standard-webhooks' | 'timestamped-hex';
    idHeader?: string;
    header: string;
    timestampHeader?: string;
    separator: string;
    toleranceSeconds: number;
}
export type WebhookSigning = (WebhookHmac & {
    jwt?: WebhookJwt;
})
    | ({
    jwt: WebhookJwt;
} & {
    [K in keyof WebhookHmac]?: never;
});
export type Webhook = WebhookSigning & {
    events: Record<string, Schema>;
    typeField: string;
};
type DefaultCapability = 'idempotency' | 'retry' | 'pagination';
export type CapabilityOverride = Omit<Capability, DefaultCapability | 'request'>
    & {
    request?: {
        style?: 'positional';
    };
}
    & {
    [K in DefaultCapability]?: {
        [P in keyof NonNullable<Capability[K]>]?: NonNullable<Capability[K]>[P] | null;
    }
        | false;
};
export type ErrorField = 'code'
    | 'message'
    | 'type'
    | 'param'
    | 'details'
    | 'remediation'
    | 'errorSource'
    | 'docUrl'
    | 'requestId'
    | 'requestLogUrl';
export interface Config {
    integers?: 'exact' | 'number' | {
        mode: 'exact' | 'number';
        exactComponents?: string[];
    };
    operationNames?: 'tags' | 'path';
    queryArrays?: 'scalar-or-array';
    $schema?: string;
    defaults?: {
        [K in DefaultCapability]?: Partial<NonNullable<Capability[K]>>;
    };
    requests?: RequestStyle;
    responses?: ResponseReturn;
    profiles?: string[];
    /** @deprecated Exact-number/string alternatives are supported automatically. */
    numericUnions?: 'explicit';
    /** @deprecated Named schema sharing is automatic. */
    schemaSharing?: 'named';
    validation?: 'encoding' | 'schema';
    auth?: {
        scheme: string;
    }
        | {
        modes: Record<string, {
            schemes: string[];
            operations?: string[];
        }>;
        shortcuts?: AuthShortcuts;
        defaultCredentials?: DefaultCredentials;
    };
    targets?: ('node' | 'php')[];
    version: string;
    npm: {
        name: string;
        registry?: string;
        access?: 'public' | 'restricted';
        homepage?: string;
        repository?: {
            type: 'git';
            url: string;
            directory?: string;
        };
    };
    composer: {
        name: string;
        namespace: string;
    };
    operations?: Record<string, CapabilityOverride>;
    models?: Record<string, string>;
    phpFieldClasses?: Record<string, Record<string, string>>;
    include?: string[];
    audiences?: string[];
    overrides?: Record<string, Json | Schema>;
    webhook?: Webhook;
    money?: {
        currencies: Record<string, number>;
    };
    apiVersion?: {
        value: string;
        header: string;
    };
    license?: string;
    errors?: {
        objectPath?: string;
        fields?: Partial<Record<ErrorField, string>>;
        inProgressCodes?: string[];
        retry?: {
            path: string;
            retryValues: string[];
        };
        requestIdHeader?: string;
    };
    documentation?: {
        overview?: string;
        guides?: Record<string, string>;
        examples?: string[];
        /** Auth shortcut shown in README and operation examples where the operation permits it. */
        authShortcut?: string;
        /** Noun phrase naming the described API in generated prose. Defaults to "the API". */
        apiName?: string;
        /**
         * Absolute HTTPS URL template for each operation's `@see` link. Placeholders:
         * `{operationId}`,
         * `{tag}` (the operation's first OpenAPI tag) and `{tagSlug}` (that tag looked up in
         * `tagSlugs`).
         */
        operationUrl?: string;
        /**
         * OpenAPI tag to documentation slug. Required for `{tagSlug}`; every included tag must be
         * mapped.
         */
        tagSlugs?: Record<string, string>;
        exampleValues?: Record<string, string>;
    };
    release?: {
        baseUrl?: string;
        policy?: 'review' | 'semver';
    };
}
export interface Contract {
    webhookTypeNames?: Record<string, string>;
    webhookAudienceModels?: string[];
    /** Private compatibility proof captured before reference/composition inlining. */
    schemaUsage?: {
        fingerprint: string;
        responseOnlyModels: string[];
    };
    /**
     * Private publication provenance; excluded from compiled compatibility facts and effective
     * output.
     */
    exampleProtection?: {
        locations: string[];
        schemas: string[];
    };
    defaultBaseUrl?: string;
    /** Absolute documentation URL per operation ID, from `documentation.operationUrl`. */
    referenceUrls?: Record<string, string>;
    title: string;
    apiVersion: string;
    operations: Operation[];
    incoming?: IncomingWebhook[];
    models: Record<string, Schema>;
    definitions?: Record<string, Schema>;
    modelDependencies?: Record<string, string[]>;
    auth?: Auth;
    authentication?: Record<string, AuthenticationMode>;
    authShortcuts?: AuthShortcuts;
    config: Config;
    sources: Record<string, string>;
    hash: string;
}
export interface IncomingWebhook {
    name: string;
    method: string;
    pointer: string;
    model: string;
    schema: Schema;
    dependencies: string[];
}
export { Diagnostic } from './diagnostic.js';
export { stable } from './canonical.js';
export declare const hash: (value: string) => string;
export declare function loadContract(definitionPath: string, configPath: string, options?: {
    collectDiagnostics?: boolean;
    onWarning?: (warning: Diagnostic) => void;
}): Contract;
