import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryReceiptRequestInput } from '../declarations/types-7.js';
import type {
    InventoryReceipt,
    InventoryReceiptListResponse,
    InventoryReceiptResponse,
    InventoryReceiptResult,
    InventoryReceiptResultResponse,
    InventoryReceiptsCreateInput,
    InventoryReceiptsGetInput,
    InventoryReceiptsListInput
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateInventoryReceiptRequestInput } from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryReceiptResult,
    InventoryReceiptResultResponse,
    InventoryReceipt,
    InventoryReceiptResponse,
    InventoryReceiptListResponse,
    InventoryReceiptsCreateInput,
    InventoryReceiptsGetInput,
    InventoryReceiptsListInput,
    InventoryReceiptLineRequestInput,
    InventorySourceSystemRequestInput,
    InventoryReceiptLine,
    InventorySourceSystem
} from '../declarations/types-25.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { InventoryLevel, InventoryItem } from '../declarations/types-24.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateInventoryReceiptRequest } from '../declarations/types-64.js';
export { makeInventoryReceiptLineRequest, makeInventorySourceSystemRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface InventoryReceiptsResource {
    /**
 * Record a completed inventory receipt and disposition. This is a downstream stock effect, not the
 * customer Return lifecycle. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryReceipts.md#inventoryreceiptscreate
 * POST /v1/inventory-receipts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReceipts.create({lines: []}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryReceiptRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<InventoryReceiptResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReceipts.md#inventoryreceiptscreate
     */
    createWithResponse(params: (InputValue<CreateInventoryReceiptRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReceiptResultResponse>>;
    /**
 * Retrieve a completed inventory receipt and its disposition lines by ID.
 * @see reference/inventoryReceipts.md#inventoryreceiptsget
 * GET /v1/inventory-receipts/{inventory_receipt_id}
 * @example
 * client.inventoryReceipts.get("example")
 */
    get(inventory_receipt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryReceipt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReceipts.md#inventoryreceiptsget
     */
    getWithResponse(inventory_receipt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReceiptResponse>>;
    /**
 * List completed inventory receipt effects. Use typed Return filters for reconciliation when the
 * receipt was created by Returns.
 * @see reference/inventoryReceipts.md#inventoryreceiptslist
 * GET /v1/inventory-receipts
 * @example
 * client.inventoryReceipts.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "inventory_reservation_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryReceiptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReceipts.md#inventoryreceiptslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "inventory_reservation_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReceiptListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryReceipts.md#inventoryreceiptslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "inventory_reservation_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReceiptListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryReceipts.md#inventoryreceiptslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "inventory_reservation_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryReceiptListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryReceipts.md#inventoryreceiptslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "inventory_reservation_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReceipt>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryReceipts: InventoryReceiptsResource;
}
