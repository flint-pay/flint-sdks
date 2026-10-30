import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    MerchantBillingInvoice,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoicesListParams
} from '../declarations/types-34.js';
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
export type {
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoice,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesListParams,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceLineItem
} from '../declarations/types-34.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface MerchantBillingInvoicesResource {
    /**
 * Returns one invoice issued by Flint for the authenticated merchant environment.
 *
 * `GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}`
 * @param merchant_billing_invoice_id Flint merchant billing invoice ID.
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#getMerchantBillingInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingInvoices.get("msinv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(merchant_billing_invoice_id: InputValue<string>, params?: MerchantBillingInvoicesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantBillingInvoice, MerchantBillingInvoiceResponse>>;
    /**
 * Returns invoices issued by Flint for the authenticated merchant environment. Default order:
 * merchant_billing_invoice_id descending; this key uniquely orders the results.
 *
 * `GET /v1/merchant-billing-invoices`
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingInvoices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingInvoices.list()
 */
    list(params?: MerchantBillingInvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantBillingInvoiceListResponse, MerchantBillingInvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingInvoices
     */
    listPages(params?: MerchantBillingInvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<MerchantBillingInvoiceListResponse, MerchantBillingInvoiceListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingInvoices
     */
    listItems(params?: MerchantBillingInvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<MerchantBillingInvoice>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantBillingInvoices: MerchantBillingInvoicesResource;
}
