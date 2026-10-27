import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInvoicePaymentTermRequestInput } from '../declarations/types-7.js';
import type {
    InvoicePaymentTerm,
    InvoicePaymentTermListResponse,
    InvoicePaymentTermResponse,
    InvoicePaymentTermsCreateInput,
    InvoicePaymentTermsGetInput,
    InvoicePaymentTermsListInput,
    InvoicePaymentTermsRemoveInput,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermsUpdateInput
} from '../declarations/types-27.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateInvoicePaymentTermRequestInput } from '../declarations/types-48.js';
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
export type { CreateInvoicePaymentTermRequestInput } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InvoicePaymentTerm,
    InvoicePaymentTermResponse,
    InvoicePaymentTermListResponse,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermsCreateInput,
    InvoicePaymentTermsRemoveInput,
    InvoicePaymentTermsGetInput,
    InvoicePaymentTermsListInput,
    InvoicePaymentTermsUpdateInput,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentTermCalculationOnReceiptInput,
    InvoicePaymentTermCalculationNetDaysInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndInput,
    InvoicePaymentTermCalculationDayOfMonthInput,
    InvoicePaymentTermCalculationDayOfNextMonthInput,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-27.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { UpdateInvoicePaymentTermRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    InvoiceLateFeePolicyInput,
    InvoiceLateFeePolicyFixedInput,
    InvoiceLateFeePolicyPercentageInput,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage
} from '../declarations/types-26.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export { makeCreateInvoicePaymentTermRequest } from '../declarations/types-63.js';
export {
    makeInvoiceLateFeePolicy,
    makeInvoiceLateFeePolicyFixed,
    makeInvoiceLateFeePolicyPercentage,
    makeInvoicePaymentTermCalculation,
    makeInvoicePaymentTermCalculationDayOfMonth,
    makeInvoicePaymentTermCalculationDayOfNextMonth,
    makeInvoicePaymentTermCalculationDaysAfterMonthEnd,
    makeInvoicePaymentTermCalculationNetDays,
    makeInvoicePaymentTermCalculationOnReceipt
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateInvoicePaymentTermRequest } from '../declarations/types-72.js';
export interface InvoicePaymentTermsResource {
    /**
 * Create invoice payment term for the authenticated merchant.
 * @see reference/invoicePaymentTerms.md#invoicepaymenttermscreate
 * POST /v1/invoice-payment-terms
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.create({name: "example", calculation: {type: "on_receipt"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInvoicePaymentTermRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<InvoicePaymentTerm>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermscreate
     */
    createWithResponse(params: (InputValue<CreateInvoicePaymentTermRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermResponse>>;
    /**
 * Retires an invoice payment term by setting its status to archived. A default payment term cannot
 * be retired.
 * @see reference/invoicePaymentTerms.md#invoicepaymenttermsremove
 * DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(invoice_payment_term_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<number>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<InvoicePaymentTerm>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermsremove
     */
    removeWithResponse(invoice_payment_term_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<number>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermResponse>>;
    /**
 * Returns one invoice payment term for the authenticated merchant.
 * @see reference/invoicePaymentTerms.md#invoicepaymenttermsget
 * GET /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * client.invoicePaymentTerms.get("example")
 */
    get(invoice_payment_term_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InvoicePaymentTerm>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermsget
     */
    getWithResponse(invoice_payment_term_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InvoicePaymentTermResponse>>;
    /**
 * Returns a paginated list of invoice payment terms for the authenticated merchant.
 * @see reference/invoicePaymentTerms.md#invoicepaymenttermslist
 * GET /v1/invoice-payment-terms
 * @example
 * client.invoicePaymentTerms.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InvoicePaymentTermListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InvoicePaymentTermListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InvoicePaymentTermListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InvoicePaymentTermListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InvoicePaymentTerm>;
    /**
 * Update invoice payment term for the authenticated merchant. Null is rejected for name,
 * calculation, and expected_version; omit them to leave them unchanged. Null clears
 * late_fee_policy or external_reference_id.
 * @see reference/invoicePaymentTerms.md#invoicepaymenttermsupdate
 * PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.update("example", {calculation: {type: "on_receipt"}}, {
 * idempotencyKey: idempotencyKey })
 */
    update(invoice_payment_term_id: InputValue<string>, params: (InputValue<UpdateInvoicePaymentTermRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<InvoicePaymentTerm>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoicePaymentTerms.md#invoicepaymenttermsupdate
     */
    updateWithResponse(invoice_payment_term_id: InputValue<string>, params: (InputValue<UpdateInvoicePaymentTermRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly invoicePaymentTerms: InvoicePaymentTermsResource;
}
