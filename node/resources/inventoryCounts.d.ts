import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { InventoryCount } from '../declarations/types-28.js';
import type {
    InventoryCountListResponse,
    InventoryCountResponse,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsApplyParams,
    InventoryCountsCancelParams,
    InventoryCountsCreateParams,
    InventoryCountsGetParams,
    InventoryCountsListParams,
    InventoryCountsUpdateParams
} from '../declarations/types-29.js';
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
    InventoryCountsApplyParams,
    InventoryCountResult,
    InventoryCountResultResponse,
    InventoryCountsCancelParams,
    InventoryCountsCreateParams,
    InventoryCountResponse,
    InventoryCountsGetParams,
    InventoryCountsListParams,
    InventoryCountListResponse,
    InventoryCountsUpdateParams,
    InventoryLevel,
    InventoryItem,
    InventoryCountLine,
    InventoryCountObservationProvenance,
    InventoryCountObservationRequestInput,
    InventoryCountObservationRequest
} from '../declarations/types-29.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { InventoryCount } from '../declarations/types-28.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { ApplyInventoryCountRequestInput } from '../declarations/types-0.js';
export type { AuthMode, BackorderPolicy } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CancelInventoryCountRequestInput } from '../declarations/types-4.js';
export type { CreateInventoryCountRequestInput, CreateInventoryCountRequest } from '../declarations/types-10.js';
export type { InventorySourceSystem, InventorySourceSystemRequestInput } from '../declarations/types-30.js';
export type { UpdateInventoryCountRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeApplyInventoryCountRequest } from '../declarations/types-70.js';
export { makeCancelInventoryCountRequest } from '../declarations/types-71.js';
export { makeCreateInventoryCountRequest } from '../declarations/types-73.js';
export { makeInventoryCountObservationRequest, makeInventorySourceSystemRequest } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateInventoryCountRequest } from '../declarations/types-84.js';
export interface InventoryCountsResource {
    /**
 * Sets inventory levels to the counted quantities of an open physical count. Every line needs an
 * observation. VERSION_CONFLICT also covers a stale saved physical observation with no
 * corresponding field in this request; these details omit param. Recount affected items and save
 * the complete observations before applying again. Physical changes after observation require
 * recounts, including at a trading location; holds and commitments alone do not invalidate
 * observations. Call it only when apply is in supported_actions. Returns a result with
 * inventory_count as its primary resource and inventory_levels for the levels changed. Idempotency
 * is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the
 * canonical request body. To recover the command's effects after a lost response, read the
 * inventory count by ID.
 *
 * `POST /v1/inventory-counts/{inventory_count_id}/apply`
 * @param inventory_count_id Flint inventory count ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#applyInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.apply("invc_01KEZF7C00B47NXRE3ET37QQ59", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    apply(inventory_count_id: InputValue<string>, params?: InventoryCountsApplyParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryCountResult, InventoryCountResultResponse>>;
    /**
 * Closes an open physical count without changing stock. Call it only when cancel is in
 * supported_actions. Returns a result with inventory_count as its primary resource and
 * inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. Its fingerprint includes the canonical request body. To recover the
 * command's effects after a lost response, read the inventory count by ID.
 *
 * `POST /v1/inventory-counts/{inventory_count_id}/cancel`
 * @param inventory_count_id Flint inventory count ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#cancelInventoryCount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.cancel("invc_01KEZF7C00B47NXRE3ET37QQ59", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(inventory_count_id: InputValue<string>, params?: InventoryCountsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryCountResult, InventoryCountResultResponse>>;
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
 * client.inventoryCounts.get("invc_01KEZF7C00B47NXRE3ET37QQ59")
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
