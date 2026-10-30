import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { GiftCardTransaction, GiftCardTransactionListResponse, GiftCardTransactionsListParams } from '../declarations/types-24.js';
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
export type { GiftCardTransactionsListParams, GiftCardTransactionListResponse, GiftCardTransaction } from '../declarations/types-24.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface GiftCardTransactionsResource {
    /**
 * Lists immutable financial entries across the merchant in ascending merchant_sequence order.
 * Per-card sequences and balance snapshots support reconciliation. Reservations and code
 * replacement never create financial debits. Default order: merchant_sequence ascending; this key
 * uniquely orders the results.
 *
 * `GET /v1/gift-card-transactions`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardTransactions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardTransactions.list()
 */
    list(params?: GiftCardTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardTransactionListResponse, GiftCardTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardTransactions
     */
    listPages(params?: GiftCardTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardTransactionListResponse, GiftCardTransactionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardTransactions
     */
    listItems(params?: GiftCardTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardTransaction>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardTransactions: GiftCardTransactionsResource;
}
