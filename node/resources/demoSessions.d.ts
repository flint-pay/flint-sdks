import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DemoSession, DemoSessionResponse, DemoSessionsCreateParams, DemoSessionsResetParams } from '../declarations/types-20.js';
import type { RequestOptions } from '../declarations/types-47.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    DemoSessionsCreateParams,
    DemoSession,
    DemoSessionResponse,
    DemoSessionsResetParams,
    DemoSessionAPIKey
} from '../declarations/types-20.js';
export type { RequestOptions, ResetDemoSessionRequestInput } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateDemoSessionRequestInput } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateDemoSessionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeResetDemoSessionRequest } from '../declarations/types-71.js';
export interface DemoSessionsResource {
    /**
 * Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is
 * displayed only at creation time and for a short idempotent retry window. Omit template to use
 * quickstart; an explicit empty or unsupported value is invalid.
 *
 * `POST /v1/demo-sessions`
 * @see https://developers.withflintpay.com/docs/api/demo-sessions#createDemoSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.demoSessions.create({template: "quickstart", "Flint-Challenge-Token": "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: DemoSessionsCreateParams, options?: RequestOptions<never>): Promise<WithResponseInfo<DemoSession, DemoSessionResponse>>;
    /**
 * Ends the active or provisioning demo session identified by demo_session_id for this client and
 * provisions a fresh one. A client that lost its create response gets the current session ID from
 * current_resource.resource_id on ALREADY_EXISTS. A retry with the same Idempotency-Key and body
 * replays the replacement before checking the current session, including its secret during the
 * secret delivery window. After that window, the retry returns ALREADY_EXISTS with the current
 * session reference. The daily cap applies only to fresh executions. Omit template to use
 * quickstart; an explicit empty or unsupported value is invalid.
 *
 * `POST /v1/demo-sessions/{demo_session_id}/reset`
 * @param demo_session_id The active or provisioning demo session to reset for this client.
 * @see https://developers.withflintpay.com/docs/api/demo-sessions#resetDemoSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.demoSessions.reset("demo_01ARZ3NDEKTSV4RRFFQ69G5FAV", {template: "quickstart",
 * "Flint-Challenge-Token": "example"}, { idempotencyKey: idempotencyKey })
 */
    reset(demo_session_id: InputValue<string>, params: DemoSessionsResetParams, options?: RequestOptions<never>): Promise<WithResponseInfo<DemoSession, DemoSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly demoSessions: DemoSessionsResource;
}
