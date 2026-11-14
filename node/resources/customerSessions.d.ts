import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
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
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkRequiredIdempotency } from '../declarations/types-70.js';
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
} from '../declarations/types-16.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkRequiredIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateCustomerSessionRequestInput, CreateCustomerSessionRequest } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession, RefreshCustomerSessionRequest } from '../declarations/types-52.js';
export type { RefreshCustomerSessionRequestInput } from '../declarations/types-53.js';
export { makeCreateCustomerSessionRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeRefreshCustomerSessionRequest } from '../declarations/types-81.js';
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
 * client.customerSessions.create({customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE",
 * expires_in_seconds: 3600, refresh_expires_in_seconds: 604800}, { idempotencyKey: idempotencyKey
 * })
 */
    create(params: CustomerSessionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerSessionWithSecret, CustomerSessionWithSecretResponse>>;
    /**
 * Rotates a customer session secret and refresh token without a merchant API key. Reusing a
 * rotated refresh token revokes the session family. Use one fixed idempotency key per session:
 * Flint scopes the key to the refresh token, so concurrent refreshes replay the same pair. On
 * `IDEMPOTENCY_KEY_IN_PROGRESS`, retry with the same key and token.
 *
 * `POST /v1/customer-sessions/refresh`
 * @see https://developers.withflintpay.com/docs/api/customer-sessions#refreshCustomerSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * const customerSessionId = "cses_01ARZ3NDEKTSV4RRFFQ69G5FAV";
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = `refresh-${customerSessionId}`;
 * client.customerSessions.refresh({refresh_token:
 * "flint_cref_YmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmI"}, { idempotencyKey: idempotencyKey })
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
 * client.customerSessions.revoke("cses_01KEZF7C00FBVRP25FZTW7KWZV", {}, { idempotencyKey:
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
