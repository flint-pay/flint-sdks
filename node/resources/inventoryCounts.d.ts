import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryCount,
    InventoryCountListResponse,
    InventoryCountResponse,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsCreateParams,
    InventoryCountsGetParams,
    InventoryCountsListParams,
    InventoryCountsTransitionParams,
    InventoryCountsUpdateParams
} from '../declarations/types-26.js';
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
    InventoryCountsCreateParams,
    InventoryCount,
    InventoryCountResponse,
    InventoryCountsGetParams,
    InventoryCountsListParams,
    InventoryCountListResponse,
    InventoryCountsTransitionParams,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsUpdateParams,
    InventoryCountLine,
    InventoryCountObservationProvenance,
    InventoryCountTransitionRequestInput,
    InventoryCountTransitionRequestApplyInput,
    InventoryCountTransitionRequestCancelInput,
    InventoryLevel,
    InventoryItem,
    InventoryCountObservationRequestInput,
    InventoryCountObservationRequest
} from '../declarations/types-26.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateInventoryCountRequestInput, CreateInventoryCountRequest } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { InventorySourceSystem, InventorySourceSystemRequestInput } from '../declarations/types-28.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { UpdateInventoryCountRequestInput } from '../declarations/types-58.js';
export { makeCreateInventoryCountRequest } from '../declarations/types-64.js';
export {
    makeInventoryCountObservationRequest,
    makeInventoryCountTransitionRequest,
    makeInventoryCountTransitionRequestApply,
    makeInventoryCountTransitionRequestCancel,
    makeInventorySourceSystemRequest
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInventoryCountRequest } from '../declarations/types-73.js';
export interface InventoryCountsResource {
    /**
 * Open a physical count for selected inventory items at one Location. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, list inventory counts with
 * the same idempotency_key.
 *
 * `POST /v1/inventory-counts`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.create({inventory_item_ids: ["invi_01K1P6G4M7H2N8Q9R3S5T6V7WX"],
 * location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX"}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryCountsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryCount, InventoryCountResponse>>;
    /**
 * Retrieve an inventory count and its saved observations by ID.
 *
 * `GET /v1/inventory-counts/{inventory_count_id}`
 * @param inventory_count_id Flint inventory count ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryCounts.get("invc_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_count_id: InputValue<string>, params?: InventoryCountsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryCount, InventoryCountResponse>>;
    /**
 * List inventory counts. Default order: inventory_count_id ascending; this key uniquely orders the
 * results.
 *
 * `GET /v1/inventory-counts`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryCounts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryCounts.list()
 */
    list(params?: InventoryCountsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryCountListResponse, InventoryCountListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryCounts
     */
    listPages(params?: InventoryCountsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryCountListResponse, InventoryCountListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryCounts
     */
    listItems(params?: InventoryCountsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryCount>;
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
 * request body. To recover the command's effects after a lost response, read the inventory count
 * by ID.
 *
 * `POST /v1/inventory-counts/{inventory_count_id}/transitions`
 * @param inventory_count_id Flint inventory count ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#transitionInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.transition("invc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "apply",
 * expected_version: 2}, { idempotencyKey: idempotencyKey })
 */
    transition(inventory_count_id: InputValue<string>, params: InventoryCountsTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryCountResult, InventoryCountResultResponse>>;
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
 * command's effects after a lost response, read the inventory count by ID.
 *
 * `PATCH /v1/inventory-counts/{inventory_count_id}`
 * @param inventory_count_id Flint inventory count ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.update("invc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 2,
 * observations: [{counted_damaged_quantity: 0, counted_on_hand_quantity: 12,
 * counted_quality_control_quantity: 0, counted_quarantined_quantity: 0, expected_physical_version:
 * 0, inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"}], source_system: {type: "manual"}}, {
 * idempotencyKey: idempotencyKey })
 */
    update(inventory_count_id: InputValue<string>, params: InventoryCountsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryCount, InventoryCountResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryCounts: InventoryCountsResource;
}
