export type Json = null | boolean | number | string | Json[] | {
    [key: string]: Json;
};
export type Schema = {
    'x-sdk-ref'?: string;
    'x-sdk-definitions'?: Record<string, Schema>;
    type?: string | string[];
    properties?: Record<string, Schema>;
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
}
export interface Capability {
    stream?: {
        events?: Record<string, string>;
        idleTimeoutMs?: number;
        maxEventBytes?: number;
    };
    requestMediaType?: string;
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
export interface AuthenticationMode {
    schemes: (Auth & {
        name: string;
    })[];
    operations?: string[];
}
export interface Webhook {
    algorithm: 'hmac-sha256';
    format?: 'hex' | 'standard-webhooks' | 'timestamped-hex';
    idHeader?: string;
    header: string;
    timestampHeader?: string;
    separator: string;
    toleranceSeconds: number;
    events: Record<string, Schema>;
    typeField: string;
}
export interface Config {
    profiles?: string[];
    numericUnions?: 'explicit';
    schemaSharing?: 'named';
    validation?: 'encoding' | 'schema';
    auth?: {
        scheme: string;
    } | {
        modes: Record<string, {
            schemes: string[];
            operations?: string[];
        }>;
    };
    targets?: ('node' | 'php')[];
    version: string;
    npm: {
        name: string;
        registry?: string;
        access?: 'public' | 'restricted';
    };
    composer: {
        name: string;
        namespace: string;
    };
    operations?: Record<string, Capability>;
    models?: Record<string, string>;
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
        codePath?: string;
        detailsPath?: string;
        requestIdHeader?: string;
    };
    documentation?: {
        overview?: string;
        guides?: Record<string, string>;
        examples?: string[];
    };
    release?: {
        baseUrl?: string;
        policy?: 'review' | 'semver';
    };
}
export interface Contract {
    title: string;
    apiVersion: string;
    operations: Operation[];
    incoming?: IncomingWebhook[];
    models: Record<string, Schema>;
    definitions?: Record<string, Schema>;
    modelDependencies?: Record<string, string[]>;
    auth?: Auth;
    authentication?: Record<string, AuthenticationMode>;
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
export declare function loadContract(definitionPath: string, configPath: string): Contract;
