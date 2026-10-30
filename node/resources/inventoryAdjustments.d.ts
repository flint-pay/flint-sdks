import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryAdjustment,
    InventoryAdjustmentListResponse,
    InventoryAdjustmentResponse,
    InventoryAdjustmentResult,
    InventoryAdjustmentResultResponse,
    InventoryAdjustmentsCreateParams,
    InventoryAdjustmentsGetParams,
    InventoryAdjustmentsListParams
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    InventoryAdjustmentsCreateParams,
    InventoryAdjustmentResult,
    InventoryAdjustmentResultResponse,
    InventoryAdjustmentsGetParams,
    InventoryAdjustment,
    InventoryAdjustmentResponse,
    InventoryAdjustmentsListParams,
    InventoryAdjustmentListResponse,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAdjustmentLine
} from '../declarations/types-25.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    CreateInventoryAdjustmentRequestInput,
    CreateInventoryAdjustmentQuantityRequestInput,
    CreateInventoryAdjustmentConditionChangeRequestInput,
    CreateInventoryAdjustmentCountedRequestInput,
    CreateInventoryAdjustmentCorrectionRequestInput
} from '../declarations/types-8.js';
export type { InventorySourceSystemRequestInput, InventorySourceSystem } from '../declarations/types-28.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { InventoryLevel, InventoryItem } from '../declarations/types-26.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export {
    makeCreateInventoryAdjustmentConditionChangeRequest,
    makeCreateInventoryAdjustmentCorrectionRequest,
    makeCreateInventoryAdjustmentCountedRequest,
    makeCreateInventoryAdjustmentQuantityRequest,
    makeCreateInventoryAdjustmentRequest
} from '../declarations/types-64.js';
export {
    makeInventoryAdjustmentConditionChangeLineRequest,
    makeInventoryAdjustmentQuantityLineRequest,
    makeInventoryAdjustmentSetLineRequest,
    makeInventorySourceSystemRequest
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface InventoryAdjustmentsResource {
    /**
 * Record a stock change by what happened: stock received, returned, sold, stolen, lost, or moved
 * between conditions, or an absolute count or correction. Flint computes the change against the
 * current level. Returns the adjustment, its movement IDs, and the resulting level for every level
 * touched. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body. To recover the command's effects after a lost
 * response, list inventory adjustments with the same idempotency_key, or list inventory movements
 * with that idempotency_key.
 *
 * `POST /v1/inventory-adjustments`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryAdjustment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAdjustments.create({lines: [{expected_physical_version: 7, inventory_item_id:
 * "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM", location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * on_hand_quantity: 40}], reason: "counted"}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryAdjustmentsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAdjustmentResult, InventoryAdjustmentResultResponse>>;
    /**
 * Retrieve an inventory adjustment and its lines by ID.
 *
 * `GET /v1/inventory-adjustments/{inventory_adjustment_id}`
 * @param inventory_adjustment_id Flint inventory adjustment ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryAdjustment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAdjustments.get("invadj_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_adjustment_id: InputValue<string>, params?: InventoryAdjustmentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAdjustment, InventoryAdjustmentResponse>>;
    /**
 * List inventory adjustments. Default order: inventory_adjustment_id ascending; this key uniquely
 * orders the results.
 *
 * `GET /v1/inventory-adjustments`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAdjustments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryAdjustments.list()
 */
    list(params?: InventoryAdjustmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryAdjustmentListResponse, InventoryAdjustmentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAdjustments
     */
    listPages(params?: InventoryAdjustmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryAdjustmentListResponse, InventoryAdjustmentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryAdjustments
     */
    listItems(params?: InventoryAdjustmentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryAdjustment>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryAdjustments: InventoryAdjustmentsResource;
}
