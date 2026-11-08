import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { GetReturnReceiptResponse } from '../declarations/types-25.js';
import type { ListReturnReceiptsResponse } from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { ReturnReceipt, ReturnReceiptsGetParams } from '../declarations/types-53.js';
import type { ReturnReceiptsListParams, ReturnReceiptsVerifyLineItemParams } from '../declarations/types-54.js';
import type { VerifyReturnReceiptLineItemResponse } from '../declarations/types-65.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
export type { ReturnReceiptsGetParams, ReturnReceipt, ReturnReceiptLineItem } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { GetReturnReceiptResponse } from '../declarations/types-25.js';
export type {
    ReturnReceiptsListParams,
    ReturnReceiptsVerifyLineItemParams,
    ReturnUnverifiedItem,
    ReturnSourceSystem
} from '../declarations/types-54.js';
export type { ListReturnReceiptsResponse } from '../declarations/types-34.js';
export type { VerifyReturnReceiptLineItemResponse, VerifyReturnReceiptLineItemRequestInput } from '../declarations/types-65.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { ReturnDisposition, ReturnActor } from '../declarations/types-52.js';
export type { MetadataMap } from '../declarations/types-36.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makeReturnUnverifiedItem } from '../declarations/types-78.js';
export { makeVerifyReturnReceiptLineItemRequest } from '../declarations/types-80.js';
export interface ReturnReceiptsResource {
    /**
 * Retrieve one merchandise receipt with its line items and its current or superseded observation
 * status.
 *
 * `GET /v1/return-receipts/{return_receipt_id}`
 * @param return_receipt_id Flint return receipt id.
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
 * @param return_receipt_id Flint return receipt id.
 * @param return_receipt_line_item_id Flint return receipt line item id.
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
