import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateReturnReceiptResponse } from '../declarations/types-13.js';
import type { GetReturnReceiptResponse } from '../declarations/types-28.js';
import type { ListReturnReceiptsResponse } from '../declarations/types-40.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type {
    ReturnReceipt,
    ReturnReceiptsCreateParams,
    ReturnReceiptsGetParams,
    ReturnReceiptsListParams,
    ReturnReceiptsVerifyLineItemParams
} from '../declarations/types-65.js';
import type { VerifyReturnReceiptLineItemResponse } from '../declarations/types-79.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-81.js';
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
    ReturnReceiptsCreateParams,
    ReturnReceipt,
    ReturnReceiptsGetParams,
    ReturnReceiptsListParams,
    ReturnReceiptsVerifyLineItemParams,
    ReturnReceiptLineItemRequestInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItem
} from '../declarations/types-65.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-81.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-62.js';
export type { CreateReturnReceiptResponse, CreateReturnReceiptRequestInput } from '../declarations/types-13.js';
export type { GetReturnReceiptResponse } from '../declarations/types-28.js';
export type { ListReturnReceiptsResponse } from '../declarations/types-40.js';
export type { VerifyReturnReceiptLineItemResponse, VerifyReturnReceiptLineItemRequestInput } from '../declarations/types-79.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    ReturnUnverifiedItemInput,
    ReturnSourceSystemRequestInput,
    ReturnUnverifiedItem,
    ReturnSourceSystem
} from '../declarations/types-66.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { ReturnDisposition, ReturnActor, ResponseMeta, ResponseWarning } from '../declarations/types-63.js';
export type { MetadataMap } from '../declarations/types-43.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export { makeCreateReturnReceiptRequest } from '../declarations/types-85.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export { makeReturnReceiptLineItemInputExcess } from '../declarations/types-92.js';
export {
    makeReturnReceiptLineItemInputMatched,
    makeReturnReceiptLineItemInputUnverified,
    makeReturnReceiptLineItemRequest,
    makeReturnSourceSystemRequest,
    makeReturnUnverifiedItem
} from '../declarations/types-93.js';
export { makeVerifyReturnReceiptLineItemRequest } from '../declarations/types-96.js';
export interface ReturnReceiptsResource {
    /**
 * Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt
 * instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or
 * expand `return_receipts` on `client.returns.get`.
 *
 * `POST /v1/return-receipts`
 * @see https://developers.withflintpay.com/docs/api/return-receipts#createReturnReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReceipts.create({line_items: [{quantity: 1, return_line_item_id:
 * "retli_01KEZF7C001NHF6JPD83VD0MRK", type: "matched"}], received_at: "2026-09-08T14:00:00Z",
 * receiving_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", return_id:
 * "ret_01KEZF7C00VDTZH2NK73DBK2HZ", source_system: {source_system_type: "manual"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: ReturnReceiptsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnReceipt, CreateReturnReceiptResponse>>;
    /**
 * Retrieve one merchandise receipt with its line items and its current or superseded observation
 * status.
 *
 * `GET /v1/return-receipts/{return_receipt_id}`
 * @param return_receipt_id Flint return receipt id. Must be a valid ID with prefix retrc_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/return-receipts#getReturnReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnReceipts.get("retrc_01KEZF7C0052GWDW41D9AJAVJZ")
 */
    get(return_receipt_id: InputValue<string>, params?: ReturnReceiptsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnReceipt, GetReturnReceiptResponse>>;
    /**
 * List merchandise receipts. Omitting return_id lists receipts across every Return for the
 * merchant. Default order: created_at descending, then return_receipt_id descending.
 *
 * `GET /v1/return-receipts`
 * @see https://developers.withflintpay.com/docs/api/return-receipts#listReturnReceipts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnReceipts.list()
 */
    list(params?: ReturnReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnReceiptsResponse, ListReturnReceiptsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-receipts#listReturnReceipts
     */
    listPages(params?: ReturnReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnReceiptsResponse, ListReturnReceiptsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-receipts#listReturnReceipts
     */
    listItems(params?: ReturnReceiptsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnReceipt>;
    /**
 * Establish the Return line identity for receipt quantity that arrived without one.
 * expected_version compares against the receipt version. Unverified quantity counts toward no line
 * and releases no release timing gate until it is verified.
 *
 * `POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`
 * @param return_receipt_id Flint return receipt id. Must be a valid ID with prefix retrc_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @param return_receipt_line_item_id Flint return receipt line item id. Must be a valid ID with
 * prefix retrcli_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed
 * IDs that do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/return-receipts#verifyReturnReceiptLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReceipts.verifyLineItem("retrc_01KEZF7C0052GWDW41D9AJAVJZ",
 * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE", {expected_version: 1, return_line_item_id:
 * "retli_01KEZF7C001NHF6JPD83VD0MRK", verification_reason: "sku_match_confirmed"}, {
 * idempotencyKey: idempotencyKey })
 */
    verifyLineItem(return_receipt_id: InputValue<string>, return_receipt_line_item_id: InputValue<string>, params: ReturnReceiptsVerifyLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnReceipt, VerifyReturnReceiptLineItemResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnReceipts: ReturnReceiptsResource;
}
