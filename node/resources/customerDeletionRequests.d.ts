import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    CustomerDeletionRequest,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestResponse,
    CustomerDeletionRequestsListInput,
    CustomerDeletionRequestsResolveInput
} from '../declarations/types-10.js';
import type { RequestOptions, ResolveCustomerDeletionRequestInput } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResolveCustomerDeletionRequestInput, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerDeletionRequestsListInput,
    CustomerDeletionRequestsResolveInput
} from '../declarations/types-10.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeResolveCustomerDeletionRequest } from '../declarations/types-70.js';
export interface CustomerDeletionRequestsResource {
    /**
 * Lists deletion requests across the selected merchant environment so a merchant can discover and
 * review buyer-created requests.
 * @see reference/customerDeletionRequests.md#customerdeletionrequestslist
 * GET /v1/customer-deletion-requests
 * @example
 * client.customerDeletionRequests.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomerDeletionRequestListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerDeletionRequests.md#customerdeletionrequestslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomerDeletionRequestListResponse>>;
    /** Iterate pages lazily.
     * @see reference/customerDeletionRequests.md#customerdeletionrequestslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerDeletionRequestListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/customerDeletionRequests.md#customerdeletionrequestslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CustomerDeletionRequestListResponse>>;
    /** Iterate items lazily.
     * @see reference/customerDeletionRequests.md#customerdeletionrequestslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Approves or rejects a pending deletion request. Approval returns processing while account data
 * and buyer credentials are deleted asynchronously. A failed deletion can be approved again but
 * cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or
 * usable saved payment methods.
 * @see reference/customerDeletionRequests.md#customerdeletionrequestsresolve
 * POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerDeletionRequests.resolve("example", {decision: "approve"}, { idempotencyKey:
 * idempotencyKey })
 */
    resolve(customer_deletion_request_id: InputValue<string>, params: (InputValue<ResolveCustomerDeletionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerDeletionRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerDeletionRequests.md#customerdeletionrequestsresolve
     */
    resolveWithResponse(customer_deletion_request_id: InputValue<string>, params: (InputValue<ResolveCustomerDeletionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerDeletionRequestResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerDeletionRequests: CustomerDeletionRequestsResource;
}
