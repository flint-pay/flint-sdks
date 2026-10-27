import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { MerchantBillingEntriesListInput, MerchantBillingEntry, MerchantBillingEntryListResponse } from '../declarations/types-30.js';
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
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { MerchantBillingEntryListResponse, MerchantBillingEntry, MerchantBillingEntriesListInput } from '../declarations/types-30.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface MerchantBillingEntriesResource {
    /**
 * Returns immutable merchant billing entries for the authenticated merchant environment, newest
 * occurred_at first. Entries in the same second are ordered by type rank, then
 * merchant_billing_entry_id; all three keys are descending. Type ranks are 10 for event_fee,
 * custom_domain, and invoice; 20 for correction; 30 for credit_issued; 40 for credit_applied and
 * credit_refunded; 50 for collection and custom_domain_collection; and 60 for collection_reversal
 * and write_off. An entry can be recorded after entries that occurred later, such as a collection
 * whose bank outcome arrives late. To pick up new entries, filter on created_after. Re-reading the
 * same entry always returns the same values. To export an interval, use
 * merchant_billing_itemized_v1. It fails with data_unavailable when billing projections or
 * membership history are inconsistent, collection outcome or balance transaction evidence is
 * missing, or an entry is invalid. This list does not run the report interval preflights.
 * @see reference/merchantBillingEntries.md#merchantbillingentrieslist
 * GET /v1/merchant-billing-entries
 * @example
 * client.merchantBillingEntries.list()
 */
    list(params?: {
        "type"?: InputValue<Array<"event_fee"
            | "invoice"
            | "custom_domain"
            | "custom_domain_collection"
            | "correction"
            | "credit_issued"
            | "credit_applied"
            | "credit_refunded"
            | "collection"
            | "collection_reversal"
            | "write_off">>;
        "currency"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "dispute_id"?: InputValue<string>;
        "merchant_billing_invoice_id"?: InputValue<string>;
        "balance_transaction_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<MerchantBillingEntryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantBillingEntries.md#merchantbillingentrieslist
     */
    listWithResponse(params?: {
        "type"?: InputValue<Array<"event_fee"
            | "invoice"
            | "custom_domain"
            | "custom_domain_collection"
            | "correction"
            | "credit_issued"
            | "credit_applied"
            | "credit_refunded"
            | "collection"
            | "collection_reversal"
            | "write_off">>;
        "currency"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "dispute_id"?: InputValue<string>;
        "merchant_billing_invoice_id"?: InputValue<string>;
        "balance_transaction_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantBillingEntryListResponse>>;
    /** Iterate pages lazily.
     * @see reference/merchantBillingEntries.md#merchantbillingentrieslist
     */
    listPages(params?: {
        "type"?: InputValue<Array<"event_fee"
            | "invoice"
            | "custom_domain"
            | "custom_domain_collection"
            | "correction"
            | "credit_issued"
            | "credit_applied"
            | "credit_refunded"
            | "collection"
            | "collection_reversal"
            | "write_off">>;
        "currency"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "dispute_id"?: InputValue<string>;
        "merchant_billing_invoice_id"?: InputValue<string>;
        "balance_transaction_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantBillingEntryListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/merchantBillingEntries.md#merchantbillingentrieslist
     */
    listPagesWithResponse(params?: {
        "type"?: InputValue<Array<"event_fee"
            | "invoice"
            | "custom_domain"
            | "custom_domain_collection"
            | "correction"
            | "credit_issued"
            | "credit_applied"
            | "credit_refunded"
            | "collection"
            | "collection_reversal"
            | "write_off">>;
        "currency"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "dispute_id"?: InputValue<string>;
        "merchant_billing_invoice_id"?: InputValue<string>;
        "balance_transaction_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<MerchantBillingEntryListResponse>>;
    /** Iterate items lazily.
     * @see reference/merchantBillingEntries.md#merchantbillingentrieslist
     */
    listItems(params?: {
        "type"?: InputValue<Array<"event_fee"
            | "invoice"
            | "custom_domain"
            | "custom_domain_collection"
            | "correction"
            | "credit_issued"
            | "credit_applied"
            | "credit_refunded"
            | "collection"
            | "collection_reversal"
            | "write_off">>;
        "currency"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "dispute_id"?: InputValue<string>;
        "merchant_billing_invoice_id"?: InputValue<string>;
        "balance_transaction_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantBillingEntry>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantBillingEntries: MerchantBillingEntriesResource;
}
