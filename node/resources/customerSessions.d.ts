import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CustomerSession,
    CustomerSessionResponse,
    CustomerSessionWithSecret,
    CustomerSessionWithSecretResponse,
    CustomerSessionsCreateParams,
    CustomerSessionsRefreshParams,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse,
    CustomerSessionsRevokeParams
} from '../declarations/types-13.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency } from '../declarations/types-61.js';
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
    CustomerSessionsCreateParams,
    CustomerSessionWithSecret,
    CustomerSessionWithSecretResponse,
    CustomerSessionsRefreshParams,
    CustomerSessionsRevokeParams,
    CustomerSession,
    CustomerSessionResponse,
    CustomerSessionsRevocation,
    CustomerSessionsRevocationResponse
} from '../declarations/types-13.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateCustomerSessionRequestInput, CreateCustomerSessionRequest } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type {
    ReadinessMerchantAccountSession,
    RefreshCustomerSessionRequestInput,
    RefreshCustomerSessionRequest
} from '../declarations/types-46.js';
export { makeCreateCustomerSessionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeRefreshCustomerSessionRequest } from '../declarations/types-71.js';
export interface CustomerSessionsResource {
    /**
 * Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer.
 * Keep secret and refresh_token on your server. For hosted sign-in, create a customer access link
 * instead.
 *
 * `POST /v1/customer-sessions`
 * @see https://developers.withflintpay.com/docs/api/customer-sessions#createCustomerSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: CustomerSessionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerSessionWithSecret, CustomerSessionWithSecretResponse>>;
    /**
 * Rotates a customer session secret and refresh token without a merchant API key. Reusing a
 * rotated refresh token revokes the session family. Send one fixed Idempotency-Key per session:
 * Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On
 * IDEMPOTENCY_KEY_IN_PROGRESS, retry the same key and token.
 *
 * `POST /v1/customer-sessions/refresh`
 * @see https://developers.withflintpay.com/docs/api/customer-sessions#refreshCustomerSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * const customerSessionId = "cses_01ARZ3NDEKTSV4RRFFQ69G5FAV";
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = `refresh-${customerSessionId}`;
 * client.customerSessions.refresh({refresh_token: "example"}, { idempotencyKey: idempotencyKey })
 */
    refresh(params: CustomerSessionsRefreshParams, options: _SdkRequiredIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<CustomerSessionWithSecret, CustomerSessionWithSecretResponse>>;
    /**
 * Revokes one customer session in the selected merchant environment. This does not revoke an
 * independent Flint Account buyer session.
 *
 * `POST /v1/customer-sessions/{customer_session_id}/revoke`
 * @param customer_session_id Flint customer session ID.
 * @see https://developers.withflintpay.com/docs/api/customer-sessions#revokeCustomerSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.revoke("cses_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revoke(customer_session_id: InputValue<string>, params?: CustomerSessionsRevokeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerSession, CustomerSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerSessions: CustomerSessionsResource;
}
