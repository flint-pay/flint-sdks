import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    InventoryAdjustment,
    InventoryAdjustmentListResponse,
    InventoryAdjustmentResponse,
    InventoryAdjustmentResult
} from '../declarations/types-23.js';
import type {
    InventoryAdjustmentResultResponse,
    InventoryAdjustmentsCreateInput,
    InventoryAdjustmentsGetInput,
    InventoryAdjustmentsListInput
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type {
    InventoryAdjustmentsCreateInput,
    InventoryAdjustmentResultResponse,
    InventoryAdjustmentsGetInput,
    InventoryAdjustmentsListInput,
    InventoryAdjustmentSetLineRequestInput,
    InventoryLevel,
    InventoryItem
} from '../declarations/types-24.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryAdjustmentResult,
    InventoryAdjustment,
    InventoryAdjustmentResponse,
    InventoryAdjustmentListResponse,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentLine
} from '../declarations/types-23.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    CreateInventoryAdjustmentRequestInput,
    CreateInventoryAdjustmentQuantityRequestInput,
    CreateInventoryAdjustmentCountedRequestInput,
    CreateInventoryAdjustmentCorrectionRequestInput
} from '../declarations/types-7.js';
export type { InventorySourceSystemRequestInput, InventorySourceSystem } from '../declarations/types-25.js';
export type { CreateInventoryAdjustmentConditionChangeRequestInput } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export {
    makeCreateInventoryAdjustmentConditionChangeRequest,
    makeCreateInventoryAdjustmentCorrectionRequest,
    makeCreateInventoryAdjustmentCountedRequest,
    makeCreateInventoryAdjustmentQuantityRequest,
    makeCreateInventoryAdjustmentRequest
} from '../declarations/types-63.js';
export {
    makeInventoryAdjustmentConditionChangeLineRequest,
    makeInventoryAdjustmentQuantityLineRequest,
    makeInventoryAdjustmentSetLineRequest,
    makeInventorySourceSystemRequest
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface InventoryAdjustmentsResource {
    /**
 * Record a stock change by what happened: stock received, returned, sold, stolen, lost, or moved
 * between conditions, or an absolute count or correction. Flint computes the change against the
 * current level. Returns the adjustment, its movement IDs, and the resulting level for every level
 * touched. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body. To recover the command's effects after a lost
 * response, read the relevant resource or inventory movement list.
 * @see reference/inventoryAdjustments.md#inventoryadjustmentscreate
 * POST /v1/inventory-adjustments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAdjustments.create({body: {reason: "received", lines: [{inventory_item_id:
 * "example", location_id: "example", quantity: "1"}]}}, { idempotencyKey: idempotencyKey })
 */
    create(input: InventoryAdjustmentsCreateInput, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryAdjustmentResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentscreate
     */
    createWithResponse(input: InventoryAdjustmentsCreateInput, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAdjustmentResultResponse>>;
    /**
 * Retrieve an inventory adjustment and its lines by ID.
 * @see reference/inventoryAdjustments.md#inventoryadjustmentsget
 * GET /v1/inventory-adjustments/{inventory_adjustment_id}
 * @example
 * client.inventoryAdjustments.get("example")
 */
    get(inventory_adjustment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryAdjustment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentsget
     */
    getWithResponse(inventory_adjustment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAdjustmentResponse>>;
    /**
 * List inventory adjustments.
 * @see reference/inventoryAdjustments.md#inventoryadjustmentslist
 * GET /v1/inventory-adjustments
 * @example
 * client.inventoryAdjustments.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryAdjustmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAdjustmentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAdjustmentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryAdjustmentListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryAdjustments.md#inventoryadjustmentslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAdjustment>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryAdjustments: InventoryAdjustmentsResource;
}
