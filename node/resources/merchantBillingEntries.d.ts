import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { MerchantBillingEntriesListParams, MerchantBillingEntry, MerchantBillingEntryListResponse } from '../declarations/types-37.js';
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
export type { MerchantBillingEntriesListParams, MerchantBillingEntryListResponse, MerchantBillingEntry } from '../declarations/types-37.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface MerchantBillingEntriesResource {
    /**
 * Returns immutable merchant billing entries for the authenticated merchant environment, newest
 * occurred_at first. Entries in the same second are ordered by type rank, then
 * merchant_billing_entry_id; all three keys are descending. Type ranks are 10 for event_fee,
 * custom_domain, and invoice; 20 for correction; 30 for credit_issued; 40 for credit_applied and
 * credit_refunded; 50 for collection and custom_domain_collection; and 60 for collection_reversal
 * and write_off. An entry can be recorded after entries that occurred later, such as a collection
 * whose bank outcome arrives late. created_at is set when Flint records an entry and never changes
 * or uses a source event timestamp. To pick up new entries, filter on created_after. Overlap
 * successive passes by a few minutes and deduplicate by merchant_billing_entry_id because
 * concurrent commits can become visible after a pass finishes. Re-reading the same entry always
 * returns the same values. To export an interval, use merchant_billing_itemized_v1. It fails with
 * data_unavailable when billing projections or membership history are inconsistent, collection
 * outcome or balance transaction evidence is missing, or an entry is invalid. This list does not
 * run the report interval preflights. Default order: occurred_at descending, then the entry type's
 * rank (descending), then merchant_billing_entry_id descending.
 *
 * `GET /v1/merchant-billing-entries`
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingEntries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingEntries.list()
 */
    list(params?: MerchantBillingEntriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantBillingEntryListResponse, MerchantBillingEntryListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingEntries
     */
    listPages(params?: MerchantBillingEntriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<MerchantBillingEntryListResponse, MerchantBillingEntryListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingEntries
     */
    listItems(params?: MerchantBillingEntriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<MerchantBillingEntry>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantBillingEntries: MerchantBillingEntriesResource;
}
