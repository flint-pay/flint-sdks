export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CustomerSessionResponse } from '../declarations/CustomerSessionResponse.js';
import type { CustomerSessionRevocationResponse } from '../declarations/CustomerSessionRevocationResponse.js';
import type { CustomerSessionsCreateInput } from '../declarations/CustomerSessionsCreateInput.js';
import type { CustomerSessionsCreateResponse } from '../declarations/CustomerSessionsCreateResponse.js';
import type { CustomerSessionsRefreshInput } from '../declarations/CustomerSessionsRefreshInput.js';
import type { CustomerSessionsRefreshResponse } from '../declarations/CustomerSessionsRefreshResponse.js';
import type { CustomerSessionsRevocation } from '../declarations/CustomerSessionsRevocation.js';
import type { CustomerSessionsRevocationInput } from '../declarations/CustomerSessionsRevocationInput.js';
import type { CustomerSessionsRevocationResponse } from '../declarations/CustomerSessionsRevocationResponse.js';
import type { CustomerSessionsRevocationResponseInput } from '../declarations/CustomerSessionsRevocationResponseInput.js';
import type { CustomerSessionsRevokeInput } from '../declarations/CustomerSessionsRevokeInput.js';
import type { CustomerSessionsRevokeResponse } from '../declarations/CustomerSessionsRevokeResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface CustomerSessionsResource {
    /**
 * Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Secret and refresh_token are returned only in this response. Flint-hosted merchants also receive a separately expiring one-time account_url.
 * POST /v1/customer-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.create({customer_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "account_url_expires_in_seconds"?: string; "customer_id": string; "expires_in_seconds"?: string; "refresh_expires_in_seconds"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "account_url_expires_in_seconds"?: string; "customer_id": string; "expires_in_seconds"?: string; "refresh_expires_in_seconds"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomerSessionsCreateResponse>>;
    /**
 * Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family.
 * POST /v1/customer-sessions/refresh
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.refresh({refresh_token: "example"}, { idempotencyKey: idempotencyKey })
 */
    refresh(params: (InputValue<{ "refresh_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<_SdkPayloadAt<CustomerSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    refreshWithResponse(params: (InputValue<{ "refresh_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<SdkResponse<CustomerSessionsRefreshResponse>>;
    /**
 * Revokes one customer session. This does not revoke an independent Flint Account buyer session.
 * POST /v1/customer-sessions/{customer_session_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerSessions.revoke("example", {}, { idempotencyKey: idempotencyKey })
 */
    revoke(customer_session_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerSessionRevocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokeWithResponse(customer_session_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomerSessionsRevokeResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly customerSessions: CustomerSessionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CustomerSessionResponse } from '../declarations/CustomerSessionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CustomerSessionsCreateResponse } from '../declarations/CustomerSessionsCreateResponse.js';
export type { CustomerSessionsRefreshResponse } from '../declarations/CustomerSessionsRefreshResponse.js';
export type { CustomerSessionRevocationResponse } from '../declarations/CustomerSessionRevocationResponse.js';
export type { CustomerSessionsRevokeResponse } from '../declarations/CustomerSessionsRevokeResponse.js';
export type { CustomerSessionsRevocation } from '../declarations/CustomerSessionsRevocation.js';
export type { CustomerSessionsRevocationInput } from '../declarations/CustomerSessionsRevocationInput.js';
export type { CustomerSessionsRevocationResponse } from '../declarations/CustomerSessionsRevocationResponse.js';
export type { CustomerSessionsRevocationResponseInput } from '../declarations/CustomerSessionsRevocationResponseInput.js';
export type { CustomerSessionsCreateInput } from '../declarations/CustomerSessionsCreateInput.js';
export type { CustomerSessionsRefreshInput } from '../declarations/CustomerSessionsRefreshInput.js';
export type { CustomerSessionsRevokeInput } from '../declarations/CustomerSessionsRevokeInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { CustomerSession } from '../declarations/CustomerSession.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CustomerSessionRevocation } from '../declarations/CustomerSessionRevocation.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { CreateCustomerSessionRequestInput } from '../declarations/CreateCustomerSessionRequestInput.js';
export type { RefreshCustomerSessionRequestInput } from '../declarations/RefreshCustomerSessionRequestInput.js';
export { makeCustomerSessionResponse } from '../declarations/makeCustomerSessionResponse.js';
export { makeCustomerSessionRevocationResponse } from '../declarations/makeCustomerSessionRevocationResponse.js';
export { makeCustomerSessionsRevocation } from '../declarations/makeCustomerSessionsRevocation.js';
export { makeCustomerSessionsRevocationResponse } from '../declarations/makeCustomerSessionsRevocationResponse.js';
export { makeCustomerSession } from '../declarations/makeCustomerSession.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeCustomerSessionRevocation } from '../declarations/makeCustomerSessionRevocation.js';
