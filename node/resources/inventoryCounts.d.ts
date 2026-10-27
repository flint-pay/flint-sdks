import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryCountRequestInput } from '../declarations/types-7.js';
import type {
    InventoryCount,
    InventoryCountListResponse,
    InventoryCountResponse,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsCreateInput,
    InventoryCountsGetInput,
    InventoryCountsListInput,
    InventoryCountsTransitionInput,
    InventoryCountsUpdateInput
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateInventoryCountRequestInput } from '../declarations/types-48.js';
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
export type { CreateInventoryCountRequestInput, CreateInventoryCountRequest } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryCount,
    InventoryCountResponse,
    InventoryCountListResponse,
    InventoryCountsTransitionInput,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsCreateInput,
    InventoryCountsGetInput,
    InventoryCountsListInput,
    InventoryCountsUpdateInput,
    InventoryCountLine,
    InventoryCountObservationProvenance,
    InventoryCountTransitionRequestInput,
    InventoryCountTransitionRequestApplyInput,
    InventoryCountTransitionRequestCancelInput,
    InventoryLevel,
    InventoryItem,
    InventoryCountObservationRequestInput
} from '../declarations/types-24.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateInventoryCountRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { InventorySourceSystem, InventorySourceSystemRequestInput } from '../declarations/types-25.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateInventoryCountRequest } from '../declarations/types-64.js';
export {
    makeInventoryCountObservationRequest,
    makeInventoryCountTransitionRequest,
    makeInventoryCountTransitionRequestApply,
    makeInventoryCountTransitionRequestCancel,
    makeInventorySourceSystemRequest
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateInventoryCountRequest } from '../declarations/types-72.js';
export interface InventoryCountsResource {
    /**
 * Open a physical count for selected inventory items at one Location. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the relevant resource
 * or inventory movement list.
 * @see reference/inventoryCounts.md#inventorycountscreate
 * POST /v1/inventory-counts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.create({inventory_item_ids: ["example"], location_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryCountRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryCount>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryCounts.md#inventorycountscreate
     */
    createWithResponse(params: (InputValue<CreateInventoryCountRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryCountResponse>>;
    /**
 * Retrieve an inventory count and its saved observations by ID.
 * @see reference/inventoryCounts.md#inventorycountsget
 * GET /v1/inventory-counts/{inventory_count_id}
 * @example
 * client.inventoryCounts.get("example")
 */
    get(inventory_count_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryCount>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryCounts.md#inventorycountsget
     */
    getWithResponse(inventory_count_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryCountResponse>>;
    /**
 * List inventory counts.
 * @see reference/inventoryCounts.md#inventorycountslist
 * GET /v1/inventory-counts
 * @example
 * client.inventoryCounts.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
        "idempotency_key"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "applied_after"?: InputValue<string | globalThis.Date>;
        "applied_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryCountListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryCounts.md#inventorycountslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
        "idempotency_key"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "applied_after"?: InputValue<string | globalThis.Date>;
        "applied_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryCountListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryCounts.md#inventorycountslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
        "idempotency_key"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "applied_after"?: InputValue<string | globalThis.Date>;
        "applied_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryCountListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryCounts.md#inventorycountslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
        "idempotency_key"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "applied_after"?: InputValue<string | globalThis.Date>;
        "applied_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryCountListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryCounts.md#inventorycountslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
        "idempotency_key"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "applied_after"?: InputValue<string | globalThis.Date>;
        "applied_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryCount>;
    /**
 * Set action to apply or cancel an open physical count. The apply action sets inventory levels to
 * the counted quantities and needs an observation on every line. The cancel action closes the
 * count without changing stock. VERSION_CONFLICT on apply also covers a stale saved physical
 * observation with no corresponding field in this request; these details omit param. Recount
 * affected items and save the complete observations before applying again. Physical changes after
 * observation require recounts, including at a trading location; holds and commitments alone do
 * not invalidate observations. Stock-moving transitions return a result with inventory_count as
 * its primary resource and inventory_levels for the levels changed. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the relevant resource
 * or inventory movement list.
 * @see reference/inventoryCounts.md#inventorycountstransition
 * POST /v1/inventory-counts/{inventory_count_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.transition({inventory_count_id: "example", body: {action: "apply"}}, {
 * idempotencyKey: idempotencyKey })
 */
    transition(input: InventoryCountsTransitionInput, options?: RequestOptions<"merchant">): Promise<InventoryCountResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryCounts.md#inventorycountstransition
     */
    transitionWithResponse(input: InventoryCountsTransitionInput, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryCountResultResponse>>;
    /**
 * Replace a count's complete observation set atomically. expected_version is required when
 * replacing observations. Send every item exactly once with the count's current expected_version
 * and each observation's required expected_physical_version. Read the level before physically
 * counting; zero is valid for a missing level. Every assertion must match locked current stock or
 * the whole save is refused. Preserve saved quantities and fences for unchanged lines. Recount
 * affected items before supplying fresh fences, even when quantities are unchanged. Omitted
 * condition quantities retain the matching level snapshot's values. occurred_at records provenance
 * and does not reconstruct historical stock. Idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. Its fingerprint includes the canonical request body. To recover the
 * command's effects after a lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryCounts.md#inventorycountsupdate
 * PATCH /v1/inventory-counts/{inventory_count_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.update("example", {expected_version: "2", observations:
 * [{counted_damaged_quantity: "0", counted_on_hand_quantity: "12",
 * counted_quality_control_quantity: "0", counted_quarantined_quantity: "0",
 * expected_physical_version: "0", inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"}],
 * source_system: {type: "manual"}}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_count_id: InputValue<string>, params: (InputValue<UpdateInventoryCountRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryCount>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryCounts.md#inventorycountsupdate
     */
    updateWithResponse(inventory_count_id: InputValue<string>, params: (InputValue<UpdateInventoryCountRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryCountResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryCounts: InventoryCountsResource;
}
