import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    MerchantBillingInvoice,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantSubscriptionInvoicesGetInput,
    MerchantSubscriptionInvoicesListInput
} from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    MerchantBillingInvoice,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoiceListResponse,
    MerchantSubscriptionInvoicesGetInput,
    MerchantSubscriptionInvoicesListInput,
    MoneyValue,
    MerchantBillingInvoiceLineItem,
    NextAction,
    NextActionMerchantAccountSession
} from '../declarations/types-31.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface MerchantSubscriptionInvoicesResource {
    /**
 * Returns one invoice issued by Flint for the authenticated merchant environment.
 * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoicesget
 * GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}
 * @example
 * client.merchantSubscriptionInvoices.get("example")
 */
    get(merchant_billing_invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<MerchantBillingInvoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoicesget
     */
    getWithResponse(merchant_billing_invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<MerchantBillingInvoiceResponse>>;
    /**
 * Returns invoices issued by Flint for the authenticated merchant environment.
 * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoiceslist
 * GET /v1/merchant-billing-invoices
 * @example
 * client.merchantSubscriptionInvoices.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<MerchantBillingInvoiceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoiceslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<MerchantBillingInvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoiceslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<MerchantBillingInvoiceListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoiceslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<MerchantBillingInvoiceListResponse>>;
    /** Iterate items lazily.
     * @see reference/merchantSubscriptionInvoices.md#merchantsubscriptioninvoiceslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<MerchantBillingInvoice>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantSubscriptionInvoices: MerchantSubscriptionInvoicesResource;
}
