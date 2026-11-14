import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    InventoryReceipt,
    InventoryReceiptListResponse,
    InventoryReceiptResponse,
    InventoryReceiptResult,
    InventoryReceiptResultResponse,
    InventoryReceiptsCreateParams,
    InventoryReceiptsGetParams,
    InventoryReceiptsListParams
} from '../declarations/types-29.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    InventoryReceiptsCreateParams,
    InventoryReceiptResult,
    InventoryReceiptResultResponse,
    InventoryReceiptsGetParams,
    InventoryReceipt,
    InventoryReceiptResponse,
    InventoryReceiptsListParams,
    InventoryReceiptListResponse,
    InventoryReceiptLineRequestInput,
    InventoryLevel,
    InventoryItem,
    InventoryReceiptLine
} from '../declarations/types-29.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateInventoryReceiptRequestInput } from '../declarations/types-10.js';
export type { InventorySourceSystemRequestInput, InventorySourceSystem } from '../declarations/types-30.js';
export type { AuthMode, BackorderPolicy } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCreateInventoryReceiptRequest } from '../declarations/types-73.js';
export { makeInventoryReceiptLineRequest, makeInventorySourceSystemRequest } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface InventoryReceiptsResource {
    /**
 * Record returned units against a consumed inventory reservation and their disposition. For
 * supplier deliveries, use `client.inventoryAdjustments.create` with reason: received. This is a
 * downstream stock effect, not the customer Return lifecycle. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, list inventory receipts
 * with the same idempotency_key, or list inventory movements with that idempotency_key.
 *
 * `POST /v1/inventory-receipts`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReceipts.create({external_actor_id: "receiver_204", lines: [{disposition:
 * "sellable", inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM", inventory_reservation_id:
 * "invr_01K0P7W6A4N9F3J2T8Q5R1C6XM", inventory_reservation_line_id:
 * "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", quantity: 1, receiving_location_id:
 * "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"}], occurred_at: "2026-07-21T14:18:00Z", source_system:
 * {external_source_id: "east-coast-wms", type: "wms"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryReceiptsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReceiptResult, InventoryReceiptResultResponse>>;
    /**
 * Retrieve a completed inventory receipt and its disposition lines by ID.
 *
 * `GET /v1/inventory-receipts/{inventory_receipt_id}`
 * @param inventory_receipt_id Flint inventory receipt ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryReceipts.get("invrec_01KEZF7C00JXXCYA06SH8RCM2N")
 */
    get(inventory_receipt_id: InputValue<string>, params?: InventoryReceiptsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReceipt, InventoryReceiptResponse>>;
    /**
 * List completed inventory receipt effects. Use typed Return filters for reconciliation when the
 * receipt was created by Returns. Default order: inventory_receipt_id ascending; this key uniquely
 * orders the results.
 *
 * `GET /v1/inventory-receipts`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReceipts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryReceipts.list()
 */
    list(params?: InventoryReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReceiptListResponse, InventoryReceiptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReceipts
     */
    listPages(params?: InventoryReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryReceiptListResponse, InventoryReceiptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReceipts
     */
    listItems(params?: InventoryReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReceipt>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryReceipts: InventoryReceiptsResource;
}
