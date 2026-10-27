import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryAllocationPolicyRequestInput } from '../declarations/types-7.js';
import type {
    InventoryAllocationPoliciesCreateInput,
    InventoryAllocationPoliciesGetInput,
    InventoryAllocationPoliciesGetRevisionInput,
    InventoryAllocationPoliciesListInput,
    InventoryAllocationPoliciesListRevisionsInput,
    InventoryAllocationPoliciesRemoveInput,
    InventoryAllocationPoliciesUpdateInput,
    InventoryAllocationPolicy,
    InventoryAllocationPolicyListResponse,
    InventoryAllocationPolicyResponse,
    InventoryAllocationPolicyRevision,
    InventoryAllocationPolicyRevisionListResponse,
    InventoryAllocationPolicyRevisionResponse
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateInventoryAllocationPolicyRequestInput } from '../declarations/types-48.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { CreateInventoryAllocationPolicyRequestInput } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryAllocationPolicy,
    InventoryAllocationPolicyResponse,
    InventoryAllocationPolicyRevision,
    InventoryAllocationPolicyRevisionResponse,
    InventoryAllocationPolicyListResponse,
    InventoryAllocationPolicyRevisionListResponse,
    InventoryAllocationPoliciesCreateInput,
    InventoryAllocationPoliciesRemoveInput,
    InventoryAllocationPoliciesGetInput,
    InventoryAllocationPoliciesGetRevisionInput,
    InventoryAllocationPoliciesListInput,
    InventoryAllocationPoliciesListRevisionsInput,
    InventoryAllocationPoliciesUpdateInput,
    InventoryAllocationConfigurationValueInput,
    InventoryAllocationPolicyLocationInput,
    InventoryAllocationPolicyLocation,
    InventoryAllocationConfigurationValue
} from '../declarations/types-24.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateInventoryAllocationPolicyRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateInventoryAllocationPolicyRequest } from '../declarations/types-64.js';
export { makeInventoryAllocationConfigurationValue, makeInventoryAllocationPolicyLocation } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateInventoryAllocationPolicyRequest } from '../declarations/types-72.js';
export interface InventoryAllocationPoliciesResource {
    /**
 * Create an allocation policy with its routing configuration. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the relevant resource
 * or inventory movement list.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciescreate
 * POST /v1/inventory-allocation-policies
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.create({configuration: {location_groups: [{group_priority: 1,
 * location_id: "example"}], splitting_behavior: "single_location"}, name: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryAllocationPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryAllocationPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciescreate
     */
    createWithResponse(params: (InputValue<CreateInventoryAllocationPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryAllocationPolicyResponse>>;
    /**
 * Retire an allocation policy. The policy is archived: it stays readable by ID and appears in
 * lists only when you filter by status archived.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesremove
 * DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(inventory_allocation_policy_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<number>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryAllocationPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesremove
     */
    removeWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<number>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryAllocationPolicyResponse>>;
    /**
 * Retrieve an allocation policy by ID, including archived policies.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesget
 * GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * client.inventoryAllocationPolicies.get("example")
 */
    get(inventory_allocation_policy_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryAllocationPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesget
     */
    getWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryAllocationPolicyResponse>>;
    /**
 * Retrieve the immutable routing configuration captured by one allocation policy revision.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesgetrevision
 * GET
 * /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions/{inventory_allocation_policy_revision_id}
 * @example
 * client.inventoryAllocationPolicies.getRevision("example", "example")
 */
    getRevision(inventory_allocation_policy_id: InputValue<string>, inventory_allocation_policy_revision_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryAllocationPolicyRevision>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesgetrevision
     */
    getRevisionWithResponse(inventory_allocation_policy_id: InputValue<string>, inventory_allocation_policy_revision_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryAllocationPolicyRevisionResponse>>;
    /**
 * List allocation policies. Archived policies are excluded unless you filter by status archived.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslist
 * GET /v1/inventory-allocation-policies
 * @example
 * client.inventoryAllocationPolicies.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryAllocationPolicyListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryAllocationPolicyListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicyListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryAllocationPolicyListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicy>;
    /**
 * List immutable revisions of an allocation policy, newest first by default.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslistrevisions
 * GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}/revisions
 * @example
 * client.inventoryAllocationPolicies.listRevisions("example")
 */
    listRevisions(inventory_allocation_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryAllocationPolicyRevisionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslistrevisions
     */
    listRevisionsWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryAllocationPolicyRevisionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslistrevisions
     */
    listRevisionsPages(inventory_allocation_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicyRevisionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslistrevisions
     */
    listRevisionsPagesWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryAllocationPolicyRevisionListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpolicieslistrevisions
     */
    listRevisionsItems(inventory_allocation_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAllocationPolicyRevision>;
    /**
 * Update policy fields, availability, or atomically replace its routing configuration.
 * expected_version is optional and enforced when sent, and is required when replacing
 * configuration. Idempotency is scoped to the authenticated merchant, environment, and endpoint.
 * Its fingerprint includes the canonical request body. To recover the command's effects after a
 * lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesupdate
 * PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_allocation_policy_id: InputValue<string>, params: (InputValue<UpdateInventoryAllocationPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryAllocationPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAllocationPolicies.md#inventoryallocationpoliciesupdate
     */
    updateWithResponse(inventory_allocation_policy_id: InputValue<string>, params: (InputValue<UpdateInventoryAllocationPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryAllocationPolicyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryAllocationPolicies: InventoryAllocationPoliciesResource;
}
