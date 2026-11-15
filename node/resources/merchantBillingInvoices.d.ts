import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    MerchantBillingInvoice,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoicesListParams
} from '../declarations/types-37.js';
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
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoice,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesListParams,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceLineItem
} from '../declarations/types-37.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface MerchantBillingInvoicesResource {
    /**
 * Returns one invoice issued by Flint for the authenticated merchant environment.
 *
 * `GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}`
 * @param merchant_billing_invoice_id Flint merchant billing invoice ID.
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#getMerchantBillingInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingInvoices.get("msinv_01KEZF7C00MB754KPEPACGRMNP")
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
