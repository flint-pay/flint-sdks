export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CustomerDeletionRequest } from '../declarations/CustomerDeletionRequest.js';
import type { CustomerDeletionRequestListResponse } from '../declarations/CustomerDeletionRequestListResponse.js';
import type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
import type { CustomerDeletionRequestsListInput } from '../declarations/CustomerDeletionRequestsListInput.js';
import type { CustomerDeletionRequestsListResponse } from '../declarations/CustomerDeletionRequestsListResponse.js';
import type { CustomerDeletionRequestsResolveInput } from '../declarations/CustomerDeletionRequestsResolveInput.js';
import type { CustomerDeletionRequestsResolveResponse } from '../declarations/CustomerDeletionRequestsResolveResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CustomerDeletionRequestsResource {
    /**
 * Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.
 * GET /v1/customer-deletion-requests
 * @example
 * client.customerDeletionRequests.list()
 */
    list(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CustomerDeletionRequestListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CustomerDeletionRequestsListResponse>>;
    listPages(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CustomerDeletionRequestListResponse>;
    listPagesWithResponse(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CustomerDeletionRequestsListResponse>>;
    listItems(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.
 * POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerDeletionRequests.resolve("example", {decision: "approve"}, { idempotencyKey: idempotencyKey })
 */
    resolve(customer_deletion_request_id: InputValue<string>, params: (InputValue<{ "decision": "approve" | "reject"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerDeletionRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resolveWithResponse(customer_deletion_request_id: InputValue<string>, params: (InputValue<{ "decision": "approve" | "reject"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomerDeletionRequestsResolveResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly customerDeletionRequests: CustomerDeletionRequestsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { CustomerDeletionRequestListResponse } from '../declarations/CustomerDeletionRequestListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CustomerDeletionRequestsListResponse } from '../declarations/CustomerDeletionRequestsListResponse.js';
export type { CustomerDeletionRequest } from '../declarations/CustomerDeletionRequest.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
export type { CustomerDeletionRequestsResolveResponse } from '../declarations/CustomerDeletionRequestsResolveResponse.js';
export type { CustomerDeletionRequestsListInput } from '../declarations/CustomerDeletionRequestsListInput.js';
export type { CustomerDeletionRequestsResolveInput } from '../declarations/CustomerDeletionRequestsResolveInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ResolveCustomerDeletionRequestInput } from '../declarations/ResolveCustomerDeletionRequestInput.js';
export { makeCustomerDeletionRequestListResponse } from '../declarations/makeCustomerDeletionRequestListResponse.js';
export { makeCustomerDeletionRequest } from '../declarations/makeCustomerDeletionRequest.js';
export { makeCustomerDeletionRequestResponse } from '../declarations/makeCustomerDeletionRequestResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
