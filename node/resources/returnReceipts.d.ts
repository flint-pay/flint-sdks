import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { GetReturnReceiptResponse } from '../declarations/types-20.js';
import type { ListReturnReceiptsResponse } from '../declarations/types-30.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type {
    ReturnReceipt,
    ReturnReceiptsGetInput,
    ReturnReceiptsListInput,
    ReturnReceiptsVerifyLineItemInput
} from '../declarations/types-44.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { VerifyReturnReceiptLineItemRequestInput } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    ReturnReceipt,
    ReturnReceiptsGetInput,
    ReturnReceiptsListInput,
    ReturnReceiptsVerifyLineItemInput,
    ReturnReceiptLineItem
} from '../declarations/types-44.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { GetReturnReceiptResponse } from '../declarations/types-20.js';
export type { ListReturnReceiptsResponse } from '../declarations/types-30.js';
export type { VerifyReturnReceiptLineItemRequestInput } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ReturnDisposition, ReturnActor, ResponseWarning } from '../declarations/types-43.js';
export type { MetadataMap } from '../declarations/types-32.js';
export type { ReturnUnverifiedItem, ReturnSourceSystem } from '../declarations/types-45.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeReturnSourceSystem, makeReturnUnverifiedItem } from '../declarations/types-75.js';
export { makeVerifyReturnReceiptLineItemRequest } from '../declarations/types-78.js';
export interface ReturnReceiptsResource {
    /**
 * Retrieve one merchandise receipt with its line items and its current or superseded observation
 * status.
 * @see reference/returnReceipts.md#returnreceiptsget
 * GET /v1/return-receipts/{return_receipt_id}
 * @example
 * client.returnReceipts.get("example")
 */
    get(return_receipt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnReceipt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReceipts.md#returnreceiptsget
     */
    getWithResponse(return_receipt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnReceiptResponse>>;
    /**
 * List merchandise receipts. Omitting return_id lists receipts across every Return for the
 * merchant. Newest first: created_at descending, with return_receipt_id descending as the
 * tiebreak. Default order: created_at descending, then return_receipt_id descending.
 * @see reference/returnReceipts.md#returnreceiptslist
 * GET /v1/return-receipts
 * @example
 * client.returnReceipts.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
        "receiving_location_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnReceiptsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReceipts.md#returnreceiptslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
        "receiving_location_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnReceiptsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnReceipts.md#returnreceiptslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
        "receiving_location_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnReceiptsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnReceipts.md#returnreceiptslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
        "receiving_location_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnReceiptsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnReceipts.md#returnreceiptslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
        "receiving_location_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnReceipt>;
    /**
 * Establish the Return line identity for receipt quantity that arrived without one.
 * expected_version compares against the receipt version. Unverified quantity counts toward no line
 * and releases no release timing gate until it is verified.
 * @see reference/returnReceipts.md#returnreceiptsverifylineitem
 * POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReceipts.verifyLineItem("example", "example", {return_line_item_id: "example",
 * verification_reason: "order_match_confirmed"}, { idempotencyKey: idempotencyKey })
 */
    verifyLineItem(return_receipt_id: InputValue<string>, return_receipt_line_item_id: InputValue<string>, params: (InputValue<VerifyReturnReceiptLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnReceipt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReceipts.md#returnreceiptsverifylineitem
     */
    verifyLineItemWithResponse(return_receipt_id: InputValue<string>, return_receipt_line_item_id: InputValue<string>, params: (InputValue<VerifyReturnReceiptLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnReceiptResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnReceipts: ReturnReceiptsResource;
}
