import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { InvoicePaymentTerm } from '../declarations/types-36.js';
import type {
    InvoicePaymentTermListResponse,
    InvoicePaymentTermResponse,
    InvoicePaymentTermsCreateParams,
    InvoicePaymentTermsDeleteParams,
    InvoicePaymentTermsGetParams,
    InvoicePaymentTermsListParams,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermsSnapshotPreviousAttributes,
    InvoicePaymentTermsUpdateParams
} from '../declarations/types-37.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    InvoicePaymentTermsSnapshotPreviousAttributes,
    InvoicePaymentTermCalculationRequestInput,
    InvoicePaymentTermCalculationOnReceiptRequestInput,
    InvoicePaymentTermCalculationNetDaysRequestInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput,
    InvoicePaymentTermCalculationDayOfNextMonthRequestInput,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationPreviousAttributes,
    InvoicePaymentTermCalculationOnReceiptPreviousAttributes,
    InvoicePaymentTermCalculationNetDaysPreviousAttributes,
    InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes,
    InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes
} from '../declarations/types-37.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type {
    InvoicePaymentTerm,
    InvoicePaymentTermCalculationDayOfMonthRequestInput,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth,
    InvoicePaymentTermCalculationDayOfMonthPreviousAttributes
} from '../declarations/types-36.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { CreateInvoicePaymentTermRequestInput } from '../declarations/types-10.js';
export type {
    InvoiceLateFeePolicyRequestInput,
    InvoiceLateFeePolicyFixedRequestInput,
    InvoiceLateFeePolicyPercentageRequestInput,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceLateFeePolicyPreviousAttributes,
    InvoiceLateFeePolicyFixedPreviousAttributes,
    InvoiceLateFeePolicyPercentagePreviousAttributes
} from '../declarations/types-35.js';
export type { MoneyValueInput, MoneyValue, NextAction, MoneyValuePreviousAttributes } from '../declarations/types-44.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { UpdateInvoicePaymentTermRequestInput } from '../declarations/types-76.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export { makeCreateInvoicePaymentTermRequest } from '../declarations/types-82.js';
export {
    makeInvoiceLateFeePolicyFixedRequest,
    makeInvoiceLateFeePolicyPercentageRequest,
    makeInvoiceLateFeePolicyRequest,
    makeInvoicePaymentTermCalculationDayOfMonthRequest,
    makeInvoicePaymentTermCalculationDayOfNextMonthRequest,
    makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest,
    makeInvoicePaymentTermCalculationNetDaysRequest,
    makeInvoicePaymentTermCalculationOnReceiptRequest,
    makeInvoicePaymentTermCalculationRequest
} from '../declarations/types-87.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export { makeUpdateInvoicePaymentTermRequest } from '../declarations/types-93.js';
export interface InvoicePaymentTermsResource {
    /**
 * Creates a reusable payment term that decides when an invoice is due, for example on receipt, net
 * days, or a day of the month. Send `name` and `calculation`. A late fee policy is optional; it
 * applies to overdue invoices and is frozen on an invoice when the invoice is issued.
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
 * @param invoice_payment_term_id Flint invoice payment term ID. Must be a valid ID with prefix
 * ipt_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that
 * do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/invoices#deleteInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.delete("ipt_01KEZF7C0064N1V301BBMQ37R4", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(invoice_payment_term_id: InputValue<string>, params?: InvoicePaymentTermsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentTerm, InvoicePaymentTermResponse>>;
    /**
 * Returns one invoice payment term for the authenticated merchant.
 *
 * `GET /v1/invoice-payment-terms/{invoice_payment_term_id}`
 * @param invoice_payment_term_id Flint invoice payment term ID. Must be a valid ID with prefix
 * ipt_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that
 * do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoicePaymentTerm
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoicePaymentTerms.get("ipt_01KEZF7C0064N1V301BBMQ37R4")
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
 * @param invoice_payment_term_id Flint invoice payment term ID. Must be a valid ID with prefix
 * ipt_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that
 * do not exist return 404 RESOURCE_NOT_FOUND.
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
