import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { InvoicePaymentTerm } from '../declarations/types-30.js';
import type {
    InvoicePaymentTermListResponse,
    InvoicePaymentTermResponse,
    InvoicePaymentTermsCreateParams,
    InvoicePaymentTermsDeleteParams,
    InvoicePaymentTermsGetParams,
    InvoicePaymentTermsListParams,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermsUpdateParams
} from '../declarations/types-31.js';
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
    InvoicePaymentTermsCreateParams,
    InvoicePaymentTermResponse,
    InvoicePaymentTermsDeleteParams,
    InvoicePaymentTermsGetParams,
    InvoicePaymentTermsListParams,
    InvoicePaymentTermListResponse,
    InvoicePaymentTermsUpdateParams,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculationOnReceiptInput,
    InvoicePaymentTermCalculationOnReceipt
} from '../declarations/types-31.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    InvoicePaymentTerm,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentTermCalculationNetDaysInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndInput,
    InvoicePaymentTermCalculationDayOfMonthInput,
    InvoicePaymentTermCalculationDayOfNextMonthInput,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-30.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateInvoicePaymentTermRequestInput } from '../declarations/types-8.js';
export type {
    InvoiceLateFeePolicyInput,
    InvoiceLateFeePolicyFixedInput,
    InvoiceLateFeePolicyPercentageInput,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage
} from '../declarations/types-29.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateInvoicePaymentTermRequestInput } from '../declarations/types-58.js';
export { makeCreateInvoicePaymentTermRequest } from '../declarations/types-64.js';
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
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInvoicePaymentTermRequest } from '../declarations/types-74.js';
export interface InvoicePaymentTermsResource {
    /**
 * Create invoice payment term for the authenticated merchant.
 *
 * `POST /v1/invoice-payment-terms`
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.create({name: "example", calculation: {type: "on_receipt"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: InvoicePaymentTermsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentTerm, InvoicePaymentTermResponse>>;
    /**
 * Retires an invoice payment term by setting its status to archived. A default payment term cannot
 * be retired.
 *
 * `DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`
 * @param invoice_payment_term_id Flint invoice payment term ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#deleteInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.delete("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(invoice_payment_term_id: InputValue<string>, params?: InvoicePaymentTermsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentTerm, InvoicePaymentTermResponse>>;
    /**
 * Returns one invoice payment term for the authenticated merchant.
 *
 * `GET /v1/invoice-payment-terms/{invoice_payment_term_id}`
 * @param invoice_payment_term_id Flint invoice payment term ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoicePaymentTerms.get("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(invoice_payment_term_id: InputValue<string>, params?: InvoicePaymentTermsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoicePaymentTerm, InvoicePaymentTermResponse>>;
    /**
 * Returns a paginated list of invoice payment terms for the authenticated merchant. Default order:
 * created_at descending, then invoice_payment_term_id descending.
 *
 * `GET /v1/invoice-payment-terms`
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentTerms
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoicePaymentTerms.list()
 */
    list(params?: InvoicePaymentTermsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoicePaymentTermListResponse, InvoicePaymentTermListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentTerms
     */
    listPages(params?: InvoicePaymentTermsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoicePaymentTermListResponse, InvoicePaymentTermListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentTerms
     */
    listItems(params?: InvoicePaymentTermsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoicePaymentTerm>;
    /**
 * Update invoice payment term for the authenticated merchant. Null is rejected for name,
 * calculation, and expected_version; omit them to leave them unchanged. Null clears
 * late_fee_policy or external_reference_id.
 *
 * `PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`
 * @param invoice_payment_term_id Flint invoice payment term ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#updateInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.update("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Net 30"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(invoice_payment_term_id: InputValue<string>, params: InvoicePaymentTermsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentTerm, InvoicePaymentTermResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly invoicePaymentTerms: InvoicePaymentTermsResource;
}
