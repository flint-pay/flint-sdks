import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CustomerDeletionRequest,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestResponse,
    CustomerDeletionRequestsCreateParams,
    CustomerDeletionRequestsGetParams,
    CustomerDeletionRequestsListParams,
    CustomerDeletionRequestsResolveParams
} from '../declarations/types-13.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    CustomerDeletionRequestsCreateParams,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerDeletionRequestsGetParams,
    CustomerDeletionRequestsListParams,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestsResolveParams
} from '../declarations/types-13.js';
export type { RequestOptions, ResolveCustomerDeletionRequestInput } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateCustomerDeletionRequestInput, CreateCustomerDeletionRequest } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateCustomerDeletionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeResolveCustomerDeletionRequest } from '../declarations/types-71.js';
export interface CustomerDeletionRequestsResource {
    /**
 * Creates a deletion request for merchant review, or returns the customer's open request
 * unchanged. No deletion work starts until approval.
 *
 * `POST /v1/customer-deletion-requests`
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerDeletionRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerDeletionRequests.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: CustomerDeletionRequestsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerDeletionRequest, CustomerDeletionRequestResponse>>;
    /**
 * Returns the current status of a tracked deletion request.
 *
 * `GET /v1/customer-deletion-requests/{customer_deletion_request_id}`
 * @param customer_deletion_request_id Flint customer deletion request ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomerDeletionRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customerDeletionRequests.get("cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(customer_deletion_request_id: InputValue<string>, params?: CustomerDeletionRequestsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerDeletionRequest, CustomerDeletionRequestResponse>>;
    /**
 * Lists deletion requests across the selected merchant environment so a merchant can discover and
 * review buyer-created requests. Default order: requested_at descending, then
 * customer_deletion_request_id descending.
 *
 * `GET /v1/customer-deletion-requests`
 * @see https://developers.withflintpay.com/docs/api/customers#listCustomerDeletionRequests
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customerDeletionRequests.list()
 */
    list(params?: CustomerDeletionRequestsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerDeletionRequestListResponse, CustomerDeletionRequestListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerDeletionRequests
     */
    listPages(params?: CustomerDeletionRequestsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomerDeletionRequestListResponse, CustomerDeletionRequestListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerDeletionRequests
     */
    listItems(params?: CustomerDeletionRequestsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Approves or rejects a pending deletion request. Approval returns processing while account data
 * and buyer credentials are deleted asynchronously. A failed deletion can be approved again but
 * cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or
 * usable saved payment methods.
 *
 * `POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`
 * @param customer_deletion_request_id Flint customer deletion request ID.
 * @see https://developers.withflintpay.com/docs/api/customers#resolveCustomerDeletionRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerDeletionRequests.resolve("cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", {decision:
 * "approve"}, { idempotencyKey: idempotencyKey })
 */
    resolve(customer_deletion_request_id: InputValue<string>, params: CustomerDeletionRequestsResolveParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerDeletionRequest, CustomerDeletionRequestResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerDeletionRequests: CustomerDeletionRequestsResource;
}
