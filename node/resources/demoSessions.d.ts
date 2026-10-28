import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDemoSessionRequestInput } from '../declarations/types-6.js';
import type { DemoSession, DemoSessionResponse, DemoSessionsCreateInput, DemoSessionsResetInput } from '../declarations/types-17.js';
import type { RequestOptions, ResetDemoSessionRequestInput } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateDemoSessionRequestInput } from '../declarations/types-6.js';
export type { RequestOptions, ResetDemoSessionRequestInput, ResponseMeta } from '../declarations/types-42.js';
export type {
    DemoSession,
    DemoSessionResponse,
    DemoSessionsCreateInput,
    DemoSessionsResetInput,
    DemoSessionAPIKey
} from '../declarations/types-17.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeCreateDemoSessionRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeResetDemoSessionRequest } from '../declarations/types-75.js';
export interface DemoSessionsResource {
    /**
 * Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is
 * displayed only at creation time and for a short idempotent retry window. Omit template to use
 * quickstart; an explicit empty or unsupported value is invalid.
 * @see reference/demoSessions.md#demosessionscreate
 * POST /v1/demo-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.demoSessions.create({"Flint-Challenge-Token": "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateDemoSessionRequestInput>)
        & {
        "Flint-Challenge-Token": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<DemoSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/demoSessions.md#demosessionscreate
     */
    createWithResponse(params: (InputValue<CreateDemoSessionRequestInput>)
        & {
        "Flint-Challenge-Token": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<SdkResponse<DemoSessionResponse>>;
    /**
 * Ends the active or provisioning demo session identified by demo_session_id for this client and
 * provisions a fresh one. A client that lost its create response gets the current session ID from
 * current_resource.resource_id on ALREADY_EXISTS. A retry with the same Idempotency-Key and body
 * replays the replacement before checking the current session, including its secret during the
 * secret delivery window. After that window, the retry returns ALREADY_EXISTS with the current
 * session reference. The daily cap applies only to fresh executions. Omit template to use
 * quickstart; an explicit empty or unsupported value is invalid.
 * @see reference/demoSessions.md#demosessionsreset
 * POST /v1/demo-sessions/{demo_session_id}/reset
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.demoSessions.reset("example", {"Flint-Challenge-Token": "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    reset(demo_session_id: InputValue<string>, params: (InputValue<ResetDemoSessionRequestInput>)
        & {
        "Flint-Challenge-Token": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<DemoSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/demoSessions.md#demosessionsreset
     */
    resetWithResponse(demo_session_id: InputValue<string>, params: (InputValue<ResetDemoSessionRequestInput>)
        & {
        "Flint-Challenge-Token": InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<SdkResponse<DemoSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly demoSessions: DemoSessionsResource;
}
