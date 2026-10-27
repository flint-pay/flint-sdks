import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateCustomerSessionRequestInput } from '../declarations/types-5.js';
import type {
    CustomerSession,
    CustomerSessionResponse,
    CustomerSessionWithSecret,
    CustomerSessionWithSecretResponse,
    CustomerSessionsCreateInput,
    CustomerSessionsRefreshInput,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerSessionsRevokeInput
} from '../declarations/types-10.js';
import type { RefreshCustomerSessionRequestInput } from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkRequiredIdempotency } from '../declarations/types-62.js';
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
export type { CreateCustomerSessionRequestInput } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    CustomerSessionWithSecret,
    CustomerSessionWithSecretResponse,
    CustomerSession,
    CustomerSessionResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerSessionsCreateInput,
    CustomerSessionsRefreshInput,
    CustomerSessionsRevokeInput
} from '../declarations/types-10.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { RefreshCustomerSessionRequestInput, RefreshCustomerSessionRequest } from '../declarations/types-39.js';
export type { _SdkRequiredIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateCustomerSessionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeRefreshCustomerSessionRequest } from '../declarations/types-70.js';
export interface CustomerSessionsResource {
    /**
 * Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer.
 * Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link
 * instead.
 * @see reference/customerSessions.md#customersessionscreate
 * POST /v1/customer-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.create({customer_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateCustomerSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerSessions.md#customersessionscreate
     */
    createWithResponse(params: (InputValue<CreateCustomerSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerSessionWithSecretResponse>>;
    /**
 * Rotates a customer session secret and refresh token without a merchant API key. Reusing a
 * rotated refresh token revokes the session family. Send one fixed Idempotency-Key per session:
 * Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On
 * IDEMPOTENCY_KEY_IN_PROGRESS, retry the same key and token.
 * @see reference/customerSessions.md#customersessionsrefresh
 * POST /v1/customer-sessions/refresh
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.refresh({refresh_token: "example"}, { idempotencyKey: idempotencyKey })
 */
    refresh(params: (InputValue<RefreshCustomerSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<never>>): Promise<CustomerSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerSessions.md#customersessionsrefresh
     */
    refreshWithResponse(params: (InputValue<RefreshCustomerSessionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<never>>): Promise<SdkResponse<CustomerSessionWithSecretResponse>>;
    /**
 * Revokes one customer session in the selected merchant environment. This does not revoke an
 * independent Flint Account buyer session.
 * @see reference/customerSessions.md#customersessionsrevoke
 * POST /v1/customer-sessions/{customer_session_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.revoke("example", {}, { idempotencyKey: idempotencyKey })
 */
    revoke(customer_session_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerSessions.md#customersessionsrevoke
     */
    revokeWithResponse(customer_session_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerSessions: CustomerSessionsResource;
}
