import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { GiftCardTransaction, GiftCardTransactionListResponse, GiftCardTransactionsListInput } from '../declarations/types-19.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference, ResourceType } from '../declarations/types-40.js';
export type { GiftCardTransactionListResponse, GiftCardTransaction, GiftCardTransactionsListInput } from '../declarations/types-19.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface GiftCardTransactionsResource {
    /**
 * Lists immutable financial entries across the merchant in ascending merchant_sequence order.
 * Per-card sequences and balance snapshots support reconciliation. Reservations and code
 * replacement never create financial debits.
 * @see reference/giftCardTransactions.md#giftcardtransactionslist
 * GET /v1/gift-card-transactions
 * @example
 * client.giftCardTransactions.list()
 */
    list(params?: {
        "cash_out_reference"?: InputValue<string>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "posted_after"?: InputValue<string | globalThis.Date>;
        "posted_before"?: InputValue<string | globalThis.Date>;
        "source_id"?: InputValue<string>;
        "source_type"?: InputValue<Array<"gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_redemption"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation">>;
        "transaction_type"?: InputValue<Array<"load"
            | "import"
            | "redeem"
            | "refund"
            | "refund_transfer"
            | "adjustment"
            | "cash_out"
            | "purchase_reversal"
            | "funding_loss_accepted"
            | "purchase_refund_recovery"
            | "purchase_refund_recovery_transfer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardTransactions.md#giftcardtransactionslist
     */
    listWithResponse(params?: {
        "cash_out_reference"?: InputValue<string>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "posted_after"?: InputValue<string | globalThis.Date>;
        "posted_before"?: InputValue<string | globalThis.Date>;
        "source_id"?: InputValue<string>;
        "source_type"?: InputValue<Array<"gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_redemption"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation">>;
        "transaction_type"?: InputValue<Array<"load"
            | "import"
            | "redeem"
            | "refund"
            | "refund_transfer"
            | "adjustment"
            | "cash_out"
            | "purchase_reversal"
            | "funding_loss_accepted"
            | "purchase_refund_recovery"
            | "purchase_refund_recovery_transfer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCardTransactions.md#giftcardtransactionslist
     */
    listPages(params?: {
        "cash_out_reference"?: InputValue<string>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "posted_after"?: InputValue<string | globalThis.Date>;
        "posted_before"?: InputValue<string | globalThis.Date>;
        "source_id"?: InputValue<string>;
        "source_type"?: InputValue<Array<"gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_redemption"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation">>;
        "transaction_type"?: InputValue<Array<"load"
            | "import"
            | "redeem"
            | "refund"
            | "refund_transfer"
            | "adjustment"
            | "cash_out"
            | "purchase_reversal"
            | "funding_loss_accepted"
            | "purchase_refund_recovery"
            | "purchase_refund_recovery_transfer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardTransactionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCardTransactions.md#giftcardtransactionslist
     */
    listPagesWithResponse(params?: {
        "cash_out_reference"?: InputValue<string>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "posted_after"?: InputValue<string | globalThis.Date>;
        "posted_before"?: InputValue<string | globalThis.Date>;
        "source_id"?: InputValue<string>;
        "source_type"?: InputValue<Array<"gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_redemption"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation">>;
        "transaction_type"?: InputValue<Array<"load"
            | "import"
            | "redeem"
            | "refund"
            | "refund_transfer"
            | "adjustment"
            | "cash_out"
            | "purchase_reversal"
            | "funding_loss_accepted"
            | "purchase_refund_recovery"
            | "purchase_refund_recovery_transfer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardTransactionListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCardTransactions.md#giftcardtransactionslist
     */
    listItems(params?: {
        "cash_out_reference"?: InputValue<string>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "posted_after"?: InputValue<string | globalThis.Date>;
        "posted_before"?: InputValue<string | globalThis.Date>;
        "source_id"?: InputValue<string>;
        "source_type"?: InputValue<Array<"gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_redemption"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation">>;
        "transaction_type"?: InputValue<Array<"load"
            | "import"
            | "redeem"
            | "refund"
            | "refund_transfer"
            | "adjustment"
            | "cash_out"
            | "purchase_reversal"
            | "funding_loss_accepted"
            | "purchase_refund_recovery"
            | "purchase_refund_recovery_transfer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardTransaction>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardTransactions: GiftCardTransactionsResource;
}
