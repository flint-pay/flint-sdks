export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InvoiceLateFeePolicyInput } from '../declarations/InvoiceLateFeePolicyInput.js';
import type { InvoicePaymentTerm } from '../declarations/InvoicePaymentTerm.js';
import type { InvoicePaymentTermCalculationInput } from '../declarations/InvoicePaymentTermCalculationInput.js';
import type { InvoicePaymentTermListResponse } from '../declarations/InvoicePaymentTermListResponse.js';
import type { InvoicePaymentTermResponse } from '../declarations/InvoicePaymentTermResponse.js';
import type { InvoicePaymentTermsCreateInput } from '../declarations/InvoicePaymentTermsCreateInput.js';
import type { InvoicePaymentTermsCreateResponse } from '../declarations/InvoicePaymentTermsCreateResponse.js';
import type { InvoicePaymentTermsGetInput } from '../declarations/InvoicePaymentTermsGetInput.js';
import type { InvoicePaymentTermsGetResponse } from '../declarations/InvoicePaymentTermsGetResponse.js';
import type { InvoicePaymentTermsListInput } from '../declarations/InvoicePaymentTermsListInput.js';
import type { InvoicePaymentTermsListResponse } from '../declarations/InvoicePaymentTermsListResponse.js';
import type { InvoicePaymentTermsRemoveInput } from '../declarations/InvoicePaymentTermsRemoveInput.js';
import type { InvoicePaymentTermsRemoveResponse } from '../declarations/InvoicePaymentTermsRemoveResponse.js';
import type { InvoicePaymentTermsSnapshot } from '../declarations/InvoicePaymentTermsSnapshot.js';
import type { InvoicePaymentTermsSnapshotInput } from '../declarations/InvoicePaymentTermsSnapshotInput.js';
import type { InvoicePaymentTermsUpdateInput } from '../declarations/InvoicePaymentTermsUpdateInput.js';
import type { InvoicePaymentTermsUpdateResponse } from '../declarations/InvoicePaymentTermsUpdateResponse.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InvoicePaymentTermsResource {
    /**
 * Create invoice payment term for the authenticated merchant.
 * POST /v1/invoice-payment-terms
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.create({name: "example", calculation: {type: "on_receipt"}, "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "calculation": InvoicePaymentTermCalculationInput; "external_reference_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InvoicePaymentTermResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "calculation": InvoicePaymentTermCalculationInput; "external_reference_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermsCreateResponse>>;
    /**
 * Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.
 * DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(invoice_payment_term_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InvoicePaymentTermResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(invoice_payment_term_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermsRemoveResponse>>;
    /**
 * Returns one invoice payment term for the authenticated merchant.
 * GET /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * client.invoicePaymentTerms.get("example", {})
 */
    get(invoice_payment_term_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<InvoicePaymentTermResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(invoice_payment_term_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InvoicePaymentTermsGetResponse>>;
    /**
 * Returns a paginated list of invoice payment terms for the authenticated merchant.
 * GET /v1/invoice-payment-terms
 * @example
 * client.invoicePaymentTerms.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InvoicePaymentTermListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InvoicePaymentTermsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InvoicePaymentTermListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InvoicePaymentTermsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InvoicePaymentTerm>;
    /**
 * Update invoice payment term for the authenticated merchant.
 * PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoicePaymentTerms.update("example", {calculation: {type: "on_receipt"}, "Idempotency-Key": idempotencyKey})
 */
    update(invoice_payment_term_id: InputValue<string>, params: (InputValue<{ "calculation"?: InvoicePaymentTermCalculationInput; "expected_version"?: number; "external_reference_id"?: string; "late_fee_policy"?: ((({ "amount_money"?: MoneyValueInput; "application_mode"?: "manual" | "automatic"; "grace_period_days": number; "percent"?: number; "type": "fixed" | "percentage"; }) & ((({ "type": "fixed"; "grace_period_days": unknown; "amount_money": unknown; }) & ({ "percent"?: never })) | (({ "type": "percentage"; "grace_period_days": unknown; "percent": unknown; }) & ({ "amount_money"?: never })))) | (null)); "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InvoicePaymentTermResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(invoice_payment_term_id: InputValue<string>, params: (InputValue<{ "calculation"?: InvoicePaymentTermCalculationInput; "expected_version"?: number; "external_reference_id"?: string; "late_fee_policy"?: ((({ "amount_money"?: MoneyValueInput; "application_mode"?: "manual" | "automatic"; "grace_period_days": number; "percent"?: number; "type": "fixed" | "percentage"; }) & ((({ "type": "fixed"; "grace_period_days": unknown; "amount_money": unknown; }) & ({ "percent"?: never })) | (({ "type": "percentage"; "grace_period_days": unknown; "percent": unknown; }) & ({ "amount_money"?: never })))) | (null)); "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InvoicePaymentTermsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly invoicePaymentTerms: InvoicePaymentTermsResource;
}
export type { InvoicePaymentTermCalculationInput } from '../declarations/InvoicePaymentTermCalculationInput.js';
export type { InvoiceLateFeePolicyInput } from '../declarations/InvoiceLateFeePolicyInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InvoicePaymentTermResponse } from '../declarations/InvoicePaymentTermResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InvoicePaymentTermsCreateResponse } from '../declarations/InvoicePaymentTermsCreateResponse.js';
export type { InvoicePaymentTermsRemoveResponse } from '../declarations/InvoicePaymentTermsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InvoicePaymentTermsGetResponse } from '../declarations/InvoicePaymentTermsGetResponse.js';
export type { InvoicePaymentTermListResponse } from '../declarations/InvoicePaymentTermListResponse.js';
export type { InvoicePaymentTermsListResponse } from '../declarations/InvoicePaymentTermsListResponse.js';
export type { InvoicePaymentTerm } from '../declarations/InvoicePaymentTerm.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { InvoicePaymentTermsUpdateResponse } from '../declarations/InvoicePaymentTermsUpdateResponse.js';
export type { InvoicePaymentTermsSnapshot } from '../declarations/InvoicePaymentTermsSnapshot.js';
export type { InvoicePaymentTermsSnapshotInput } from '../declarations/InvoicePaymentTermsSnapshotInput.js';
export type { InvoicePaymentTermsCreateInput } from '../declarations/InvoicePaymentTermsCreateInput.js';
export type { InvoicePaymentTermsRemoveInput } from '../declarations/InvoicePaymentTermsRemoveInput.js';
export type { InvoicePaymentTermsGetInput } from '../declarations/InvoicePaymentTermsGetInput.js';
export type { InvoicePaymentTermsListInput } from '../declarations/InvoicePaymentTermsListInput.js';
export type { InvoicePaymentTermsUpdateInput } from '../declarations/InvoicePaymentTermsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { InvoicePaymentTermCalculation } from '../declarations/InvoicePaymentTermCalculation.js';
export type { InvoiceLateFeePolicy } from '../declarations/InvoiceLateFeePolicy.js';
export type { CreateInvoicePaymentTermRequestInput } from '../declarations/CreateInvoicePaymentTermRequestInput.js';
export type { UpdateInvoicePaymentTermRequestInput } from '../declarations/UpdateInvoicePaymentTermRequestInput.js';
export { makeInvoicePaymentTermResponse } from '../declarations/makeInvoicePaymentTermResponse.js';
export { makeInvoicePaymentTermListResponse } from '../declarations/makeInvoicePaymentTermListResponse.js';
export { makeInvoicePaymentTerm } from '../declarations/makeInvoicePaymentTerm.js';
export { makeInvoicePaymentTermsSnapshot } from '../declarations/makeInvoicePaymentTermsSnapshot.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeInvoicePaymentTermCalculation } from '../declarations/makeInvoicePaymentTermCalculation.js';
export { makeInvoiceLateFeePolicy } from '../declarations/makeInvoiceLateFeePolicy.js';
