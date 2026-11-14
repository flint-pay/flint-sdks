import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    CustomerDeletionRequest,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestResponse,
    CustomerDeletionRequestsCreateParams,
    CustomerDeletionRequestsGetParams,
    CustomerDeletionRequestsListParams,
    CustomerDeletionRequestsResolveParams
} from '../declarations/types-15.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
} from '../declarations/types-15.js';
export type {
    RequestOptions,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ResolveCustomerDeletionRequestInput
} from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateCustomerDeletionRequestInput, CreateCustomerDeletionRequest } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ErrorResourceReference } from '../declarations/types-24.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeCreateCustomerDeletionRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export { makeResolveCustomerDeletionRequest } from '../declarations/types-81.js';
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
 * client.customerDeletionRequests.create({customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE"}, {
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
 * client.customerDeletionRequests.get("cdel_01KEZF7C009P94WEXW5RMRFXAY")
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
 * client.customerDeletionRequests.resolve("cdel_01KEZF7C009P94WEXW5RMRFXAY", {decision:
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
