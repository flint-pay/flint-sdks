import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { PaymentSplit } from '../declarations/types-47.js';
import type { PaymentSplitListResponse, PaymentSplitResponse, PaymentSplitsGetParams, PaymentSplitsListParams } from '../declarations/types-48.js';
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
    PaymentSplitsGetParams,
    PaymentSplitResponse,
    PaymentSplitsListParams,
    PaymentSplitListResponse,
    PaymentSplitReversal
} from '../declarations/types-48.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { PaymentSplit } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface PaymentSplitsResource {
    /**
 * Read splits you collected or received, with your own credentials and
 * money_movement.payment_splits.read. Install tokens can't read splits. Test splits are in the
 * collecting merchant's sandbox and the seller's test grant's sandbox. Consumers include
 * marketplace payment pages and seller reconciliation.
 *
 * `GET /v1/payment-splits/{payment_split_id}`
 * @param payment_split_id Flint payment split ID.
 * @see https://developers.withflintpay.com/docs/api/payment-splits#getPaymentSplit
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentSplits.get("psplit_01KEZF7C00Y5HA4Z8D4KRA07K8")
 */
    get(payment_split_id: InputValue<string>, params?: PaymentSplitsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentSplit, PaymentSplitResponse>>;
    /**
 * Lists splits where you are either party, newest first, then by payment_split_id descending. Read
 * splits you collected or received, with your own credentials and
 * money_movement.payment_splits.read. Install tokens can't read splits. Test splits are in the
 * collecting merchant's sandbox and the seller's test grant's sandbox. Consumers include
 * marketplace payment pages and seller reconciliation. Default order: created_at descending, then
 * payment_split_id descending.
 *
 * `GET /v1/payment-splits`
 * @see https://developers.withflintpay.com/docs/api/payment-splits#listPaymentSplits
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentSplits.list()
 */
    list(params?: PaymentSplitsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentSplitListResponse, PaymentSplitListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-splits#listPaymentSplits
     */
    listPages(params?: PaymentSplitsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentSplitListResponse, PaymentSplitListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-splits#listPaymentSplits
     */
    listItems(params?: PaymentSplitsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentSplit>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentSplits: PaymentSplitsResource;
}
