import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryAllocationPoliciesCreateParams,
    InventoryAllocationPoliciesDeleteParams,
    InventoryAllocationPoliciesGetParams,
    InventoryAllocationPoliciesGetRevisionParams,
    InventoryAllocationPoliciesListParams,
    InventoryAllocationPoliciesListRevisionsParams,
    InventoryAllocationPoliciesUpdateParams,
    InventoryAllocationPolicy,
    InventoryAllocationPolicyListResponse,
    InventoryAllocationPolicyResponse,
    InventoryAllocationPolicyRevision,
    InventoryAllocationPolicyRevisionListResponse
} from '../declarations/types-25.js';
import type { InventoryAllocationPolicyRevisionResponse } from '../declarations/types-26.js';
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
    InventoryAllocationPoliciesCreateParams,
    InventoryAllocationPolicy,
    InventoryAllocationPolicyResponse,
    InventoryAllocationPoliciesDeleteParams,
    InventoryAllocationPoliciesGetParams,
    InventoryAllocationPoliciesGetRevisionParams,
    InventoryAllocationPolicyRevision,
    InventoryAllocationPoliciesListParams,
    InventoryAllocationPolicyListResponse,
    InventoryAllocationPoliciesListRevisionsParams,
    InventoryAllocationPolicyRevisionListResponse,
    InventoryAllocationPoliciesUpdateParams,
    InventoryAllocationConfigurationValueInput,
    InventoryAllocationPolicyLocationInput,
    InventoryAllocationPolicyLocation,
    InventoryAllocationConfigurationValue
} from '../declarations/types-25.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { InventoryAllocationPolicyRevisionResponse } from '../declarations/types-26.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateInventoryAllocationPolicyRequestInput } from '../declarations/types-8.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateInventoryAllocationPolicyRequestInput } from '../declarations/types-58.js';
export { makeCreateInventoryAllocationPolicyRequest } from '../declarations/types-64.js';
export { makeInventoryAllocationConfigurationValue, makeInventoryAllocationPolicyLocation } from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInventoryAllocationPolicyRequest } from '../declarations/types-73.js';
export interface InventoryAllocationPoliciesResource {
    /**
 * Create an allocation policy with its routing configuration. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, list inventory allocation
 * policies and identify the matching policy.
 *
 * `POST /v1/inventory-allocation-policies`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryAllocationPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.create({configuration: {location_groups: [{group_priority: 1,
 * location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"}], maximum_locations_per_assignment: 3,
 * splitting_behavior: "split_when_required", within_group_order: "location_id_ascending"}, name:
 * "US retail routing", status: "active"}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryAllocationPoliciesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryAllocationPolicy, InventoryAllocationPolicyResponse>>;
    /**
 * Retire an allocation policy. The policy is archived: it stays readable by ID and appears in
 * lists only when you filter by status archived.
 *
 * `DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`
 * @param inventory_allocation_policy_id Flint inventory allocation policy ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#deleteInventoryAllocationPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.delete("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    delete(inventory_allocation_policy_id: InputValue<string>, params?: InventoryAllocationPoliciesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryAllocationPolicy, InventoryAllocationPolicyResponse>>;
    /**
 * Retrieve an allocation policy by ID, including archived policies.
 *
 * `GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`
 * @param inventory_allocation_policy_id Flint inventory allocation policy ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryAllocationPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAllocationPolicies.get("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_allocation_policy_id: InputValue<string>, params?: InventoryAllocationPoliciesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAllocationPolicy, InventoryAllocationPolicyResponse>>;
    /**
 * Retrieve the immutable routing configuration captured by one allocation policy revision.
 *
 * `GET
 * /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions/{inventory_allocation_policy_revision_id}`
 * @param inventory_allocation_policy_id Flint inventory allocation policy ID.
 * @param inventory_allocation_policy_revision_id Flint inventory allocation policy revision ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryAllocationPolicyRevision
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAllocationPolicies.getRevision("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "invpv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getRevision(inventory_allocation_policy_id: InputValue<string>, inventory_allocation_policy_revision_id: InputValue<string>, params?: InventoryAllocationPoliciesGetRevisionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAllocationPolicyRevision, InventoryAllocationPolicyRevisionResponse>>;
    /**
 * List allocation policies. Archived policies are excluded unless you filter by status archived.
 * Default order: inventory_allocation_policy_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/inventory-allocation-policies`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicies
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAllocationPolicies.list()
 */
    list(params?: InventoryAllocationPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAllocationPolicyListResponse, InventoryAllocationPolicyListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicies
     */
    listPages(params?: InventoryAllocationPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryAllocationPolicyListResponse, InventoryAllocationPolicyListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicies
     */
    listItems(params?: InventoryAllocationPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicy>;
    /**
 * List immutable revisions of an allocation policy, newest first by default. Default order:
 * inventory_allocation_policy_revision_id descending; this key uniquely orders the results.
 *
 * `GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions`
 * @param inventory_allocation_policy_id Flint inventory allocation policy ID.
 * @see
 * https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicyRevisions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAllocationPolicies.listRevisions("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listRevisions(inventory_allocation_policy_id: InputValue<string>, params?: InventoryAllocationPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAllocationPolicyRevisionListResponse, InventoryAllocationPolicyRevisionListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicyRevisions
     */
    listRevisionsPages(inventory_allocation_policy_id: InputValue<string>, params?: InventoryAllocationPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryAllocationPolicyRevisionListResponse, InventoryAllocationPolicyRevisionListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/inventory#listInventoryAllocationPolicyRevisions
     */
    listRevisionsItems(inventory_allocation_policy_id: InputValue<string>, params?: InventoryAllocationPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicyRevision>;
    /**
 * Update policy fields, availability, or atomically replace its routing configuration.
 * expected_version is optional and enforced when sent, and is required when replacing
 * configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint.
 * Its fingerprint includes the canonical request body. To recover the command's effects after a
 * lost response, read the inventory allocation policy by ID.
 *
 * `PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`
 * @param inventory_allocation_policy_id Flint inventory allocation policy ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryAllocationPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.update("invp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Warehouse
 * allocation"}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_allocation_policy_id: InputValue<string>, params: InventoryAllocationPoliciesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryAllocationPolicy, InventoryAllocationPolicyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryAllocationPolicies: InventoryAllocationPoliciesResource;
}
