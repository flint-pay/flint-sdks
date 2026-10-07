export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreditNote } from '../declarations/CreditNote.js';
import type { CreditNoteAllocation } from '../declarations/CreditNoteAllocation.js';
import type { CreditNoteAllocationListResponse } from '../declarations/CreditNoteAllocationListResponse.js';
import type { CreditNoteAllocationResponse } from '../declarations/CreditNoteAllocationResponse.js';
import type { CreditNoteAllocationResultResponse } from '../declarations/CreditNoteAllocationResultResponse.js';
import type { CreditNoteLineRequestInput } from '../declarations/CreditNoteLineRequestInput.js';
import type { CreditNoteListResponse } from '../declarations/CreditNoteListResponse.js';
import type { CreditNoteRefundListResponse } from '../declarations/CreditNoteRefundListResponse.js';
import type { CreditNoteRefundRequestInput } from '../declarations/CreditNoteRefundRequestInput.js';
import type { CreditNoteResponse } from '../declarations/CreditNoteResponse.js';
import type { CreditNotesCreateAllocationInput } from '../declarations/CreditNotesCreateAllocationInput.js';
import type { CreditNotesCreateAllocationResponse } from '../declarations/CreditNotesCreateAllocationResponse.js';
import type { CreditNotesCreateInput } from '../declarations/CreditNotesCreateInput.js';
import type { CreditNotesCreateRefundInput } from '../declarations/CreditNotesCreateRefundInput.js';
import type { CreditNotesCreateRefundResponse } from '../declarations/CreditNotesCreateRefundResponse.js';
import type { CreditNotesCreateResponse } from '../declarations/CreditNotesCreateResponse.js';
import type { CreditNotesGetAllocationInput } from '../declarations/CreditNotesGetAllocationInput.js';
import type { CreditNotesGetAllocationResponse } from '../declarations/CreditNotesGetAllocationResponse.js';
import type { CreditNotesGetInput } from '../declarations/CreditNotesGetInput.js';
import type { CreditNotesGetPDFInput } from '../declarations/CreditNotesGetPDFInput.js';
import type { CreditNotesGetPDFResponse } from '../declarations/CreditNotesGetPDFResponse.js';
import type { CreditNotesGetResponse } from '../declarations/CreditNotesGetResponse.js';
import type { CreditNotesIssueInput } from '../declarations/CreditNotesIssueInput.js';
import type { CreditNotesIssueResponse } from '../declarations/CreditNotesIssueResponse.js';
import type { CreditNotesListAllocationsInput } from '../declarations/CreditNotesListAllocationsInput.js';
import type { CreditNotesListAllocationsResponse } from '../declarations/CreditNotesListAllocationsResponse.js';
import type { CreditNotesListInput } from '../declarations/CreditNotesListInput.js';
import type { CreditNotesListRefundsInput } from '../declarations/CreditNotesListRefundsInput.js';
import type { CreditNotesListRefundsResponse } from '../declarations/CreditNotesListRefundsResponse.js';
import type { CreditNotesListResponse } from '../declarations/CreditNotesListResponse.js';
import type { CreditNotesReverseAllocationInput } from '../declarations/CreditNotesReverseAllocationInput.js';
import type { CreditNotesReverseAllocationResponse } from '../declarations/CreditNotesReverseAllocationResponse.js';
import type { CreditNotesUpdateInput } from '../declarations/CreditNotesUpdateInput.js';
import type { CreditNotesUpdateResponse } from '../declarations/CreditNotesUpdateResponse.js';
import type { CreditNotesVoidResourceInput } from '../declarations/CreditNotesVoidResourceInput.js';
import type { CreditNotesVoidResourceResponse } from '../declarations/CreditNotesVoidResourceResponse.js';
import type { IssueCreditNoteResponse } from '../declarations/IssueCreditNoteResponse.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Refund } from '../declarations/Refund.js';
import type { RefundResponse } from '../declarations/RefundResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CreditNotesResource {
    /**
 * Creates a draft credit note against an invoice that has been issued and not voided. Include credit_note_lines for initial corrections or omit them for an empty draft. The draft uses the invoice currency and receives a credit note number when issued.
 * POST /v1/credit-notes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.create({invoice_id: "example", reason: "returned_goods"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "external_reference_id"?: string; "invoice_id": string; "memo"?: string; "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "external_reference_id"?: string; "invoice_id": string; "memo"?: string; "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesCreateResponse>>;
    /**
 * Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's unallocated_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to credited. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.
 * POST /v1/credit-notes/{credit_note_id}/allocations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createAllocation("example", {amount_money: {amount: "0", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    createAllocation(credit_note_id: InputValue<string>, params: (InputValue<{ "amount_money": MoneyValueInput; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreditNoteAllocationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAllocationWithResponse(credit_note_id: InputValue<string>, params: (InputValue<{ "amount_money": MoneyValueInput; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesCreateAllocationResponse>>;
    /**
 * Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund all available credit. Refunds use the source invoice's original payments and do not reopen its balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped to merchant, environment, credit note, and key. Reusing it with another request conflicts. Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder can be requested with a new key after its outcome is definitive.
 * POST /v1/credit-notes/{credit_note_id}/refunds
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createRefund("example", {reason: "duplicate"}, { idempotencyKey: idempotencyKey })
 */
    createRefund(credit_note_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "expected_version"?: string; "reason": "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RefundResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createRefundWithResponse(credit_note_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "expected_version"?: string; "reason": "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesCreateRefundResponse>>;
    /**
 * Returns one credit note with its lines, total, and the credit still available to allocate.
 * GET /v1/credit-notes/{credit_note_id}
 * @example
 * client.creditNotes.get("example")
 */
    get(credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNotesGetResponse>>;
    /**
 * Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.
 * GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}
 * @example
 * client.creditNotes.getAllocation("example", "example")
 */
    getAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreditNoteAllocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getAllocationWithResponse(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNotesGetAllocationResponse>>;
    /**
 * Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.
 * GET /v1/credit-notes/{credit_note_id}/pdf
 * @example
 * client.creditNotes.getPDF("example")
 */
    getPDF(credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Result<CreditNotesGetPDFResponse>>;
    /**
 * Issues a draft credit note and freezes its PDF. Optionally provide refund to initiate a linked refund on a paid invoice. With refund, Idempotency-Key is required and retained for the lifetime of the refund command, scoped to merchant, environment, credit note, and key. Reuse the key with the identical request to recover the original result. Use the credit note refunds list filtered by idempotency_key after a lost response. A pending refund is accepted, not completed. Without refund, issuance does not move money.
 * POST /v1/credit-notes/{credit_note_id}/issue
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.issue("example", undefined, { idempotencyKey: idempotencyKey })
 */
    issue(credit_note_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; "refund"?: CreditNoteRefundRequestInput; }> | { "expected_version"?: never; "refund"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<IssueCreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    issueWithResponse(credit_note_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; "refund"?: CreditNoteRefundRequestInput; }> | { "expected_version"?: never; "refund"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesIssueResponse>>;
    /**
 * Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced.
 * GET /v1/credit-notes/{credit_note_id}/allocations
 * @example
 * client.creditNotes.listAllocations("example")
 */
    listAllocations(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteAllocationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listAllocationsWithResponse(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNotesListAllocationsResponse>>;
    listAllocationsPages(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteAllocationListResponse>;
    listAllocationsPagesWithResponse(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CreditNotesListAllocationsResponse>>;
    listAllocationsItems(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteAllocation>;
    /**
 * Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to recover a refund after a lost response.
 * GET /v1/credit-notes/{credit_note_id}/refunds
 * @example
 * client.creditNotes.listRefunds("example")
 */
    listRefunds(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteRefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listRefundsWithResponse(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNotesListRefundsResponse>>;
    listRefundsPages(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteRefundListResponse>;
    listRefundsPagesWithResponse(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CreditNotesListRefundsResponse>>;
    listRefundsItems(credit_note_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Refund>;
    /**
 * Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.
 * GET /v1/credit-notes
 * @example
 * client.creditNotes.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNotesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CreditNotesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "invoice_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"draft" | "issued" | "void">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNote>;
    /**
 * Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.
 * POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.reverseAllocation("example", "example", undefined, { idempotencyKey: idempotencyKey })
 */
    reverseAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; }> | { "expected_version"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreditNoteAllocationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    reverseAllocationWithResponse(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; }> | { "expected_version"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesReverseAllocationResponse>>;
    /**
 * Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and credit_note_lines requires expected_version. Issued and void credit notes are frozen.
 * PATCH /v1/credit-notes/{credit_note_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(credit_note_id: InputValue<string>, params: (InputValue<({ "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "expected_version"?: string; "external_reference_id"?: string; "memo"?: string | null; "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; }) & (((({ "credit_note_lines"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(credit_note_id: InputValue<string>, params: (InputValue<({ "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "expected_version"?: string; "external_reference_id"?: string; "memo"?: string | null; "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; }) & (((({ "credit_note_lines"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesUpdateResponse>>;
    /**
 * Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.
 * POST /v1/credit-notes/{credit_note_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.voidResource("example", undefined, { idempotencyKey: idempotencyKey })
 */
    voidResource(credit_note_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; }> | { "expected_version"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    voidResourceWithResponse(credit_note_id: InputValue<string>, params?: (InputValue<{ "expected_version"?: string; }> | { "expected_version"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNotesVoidResourceResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly creditNotes: CreditNotesResource;
}
export type { CreditNoteLineRequestInput } from '../declarations/CreditNoteLineRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreditNoteResponse } from '../declarations/CreditNoteResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CreditNotesCreateResponse } from '../declarations/CreditNotesCreateResponse.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { CreditNoteAllocationResultResponse } from '../declarations/CreditNoteAllocationResultResponse.js';
export type { CreditNotesCreateAllocationResponse } from '../declarations/CreditNotesCreateAllocationResponse.js';
export type { RefundResponse } from '../declarations/RefundResponse.js';
export type { CreditNotesCreateRefundResponse } from '../declarations/CreditNotesCreateRefundResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { CreditNotesGetResponse } from '../declarations/CreditNotesGetResponse.js';
export type { CreditNoteAllocationResponse } from '../declarations/CreditNoteAllocationResponse.js';
export type { CreditNotesGetAllocationResponse } from '../declarations/CreditNotesGetAllocationResponse.js';
export type { CreditNotesGetPDFResponse } from '../declarations/CreditNotesGetPDFResponse.js';
export type { CreditNoteRefundRequestInput } from '../declarations/CreditNoteRefundRequestInput.js';
export type { IssueCreditNoteResponse } from '../declarations/IssueCreditNoteResponse.js';
export type { CreditNotesIssueResponse } from '../declarations/CreditNotesIssueResponse.js';
export type { CreditNoteAllocationListResponse } from '../declarations/CreditNoteAllocationListResponse.js';
export type { CreditNotesListAllocationsResponse } from '../declarations/CreditNotesListAllocationsResponse.js';
export type { CreditNoteAllocation } from '../declarations/CreditNoteAllocation.js';
export type { CreditNoteRefundListResponse } from '../declarations/CreditNoteRefundListResponse.js';
export type { CreditNotesListRefundsResponse } from '../declarations/CreditNotesListRefundsResponse.js';
export type { Refund } from '../declarations/Refund.js';
export type { CreditNoteListResponse } from '../declarations/CreditNoteListResponse.js';
export type { CreditNotesListResponse } from '../declarations/CreditNotesListResponse.js';
export type { CreditNote } from '../declarations/CreditNote.js';
export type { CreditNotesReverseAllocationResponse } from '../declarations/CreditNotesReverseAllocationResponse.js';
export type { CreditNotesUpdateResponse } from '../declarations/CreditNotesUpdateResponse.js';
export type { CreditNotesVoidResourceResponse } from '../declarations/CreditNotesVoidResourceResponse.js';
export type { CreditNotesCreateInput } from '../declarations/CreditNotesCreateInput.js';
export type { CreditNotesCreateAllocationInput } from '../declarations/CreditNotesCreateAllocationInput.js';
export type { CreditNotesCreateRefundInput } from '../declarations/CreditNotesCreateRefundInput.js';
export type { CreditNotesGetInput } from '../declarations/CreditNotesGetInput.js';
export type { CreditNotesGetAllocationInput } from '../declarations/CreditNotesGetAllocationInput.js';
export type { CreditNotesGetPDFInput } from '../declarations/CreditNotesGetPDFInput.js';
export type { CreditNotesIssueInput } from '../declarations/CreditNotesIssueInput.js';
export type { CreditNotesListAllocationsInput } from '../declarations/CreditNotesListAllocationsInput.js';
export type { CreditNotesListRefundsInput } from '../declarations/CreditNotesListRefundsInput.js';
export type { CreditNotesListInput } from '../declarations/CreditNotesListInput.js';
export type { CreditNotesReverseAllocationInput } from '../declarations/CreditNotesReverseAllocationInput.js';
export type { CreditNotesUpdateInput } from '../declarations/CreditNotesUpdateInput.js';
export type { CreditNotesVoidResourceInput } from '../declarations/CreditNotesVoidResourceInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { CreditNoteCorrectionRequestInput } from '../declarations/CreditNoteCorrectionRequestInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CreditNoteAllocationResult } from '../declarations/CreditNoteAllocationResult.js';
export type { Invoice } from '../declarations/Invoice.js';
export type { InvoiceLateFee } from '../declarations/InvoiceLateFee.js';
export type { InvoiceLateFeePolicy } from '../declarations/InvoiceLateFeePolicy.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { InvoicePaymentPolicy } from '../declarations/InvoicePaymentPolicy.js';
export type { InvoicePaymentOptionLimit } from '../declarations/InvoicePaymentOptionLimit.js';
export type { InvoicePaymentTermsSnapshot } from '../declarations/InvoicePaymentTermsSnapshot.js';
export type { InvoicePaymentTermCalculation } from '../declarations/InvoicePaymentTermCalculation.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { InvoiceScheduleEntry } from '../declarations/InvoiceScheduleEntry.js';
export type { InvoiceScheduleAmountSpecification } from '../declarations/InvoiceScheduleAmountSpecification.js';
export type { InvoiceScheduleDue } from '../declarations/InvoiceScheduleDue.js';
export type { InvoiceSnapshot } from '../declarations/InvoiceSnapshot.js';
export type { DocumentTaxID } from '../declarations/DocumentTaxID.js';
export type { OrderCharge } from '../declarations/OrderCharge.js';
export type { OrderCalculatedChargeTax } from '../declarations/OrderCalculatedChargeTax.js';
export type { TaxCalculationRequest } from '../declarations/TaxCalculationRequest.js';
export type { TaxComponentRequest } from '../declarations/TaxComponentRequest.js';
export type { TaxJurisdiction } from '../declarations/TaxJurisdiction.js';
export type { InvoiceDiscount } from '../declarations/InvoiceDiscount.js';
export type { InvoiceLineItem } from '../declarations/InvoiceLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { BundleComponentVariantSummary } from '../declarations/BundleComponentVariantSummary.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { Image } from '../declarations/Image.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { InvoiceTip } from '../declarations/InvoiceTip.js';
export type { IssuedCreditNote } from '../declarations/IssuedCreditNote.js';
export type { TaxIdentity } from '../declarations/TaxIdentity.js';
export type { CreditNoteLine } from '../declarations/CreditNoteLine.js';
export type { RefundLineItemAllocation } from '../declarations/RefundLineItemAllocation.js';
export type { RefundLineItemAdjustmentRefund } from '../declarations/RefundLineItemAdjustmentRefund.js';
export type { RefundLineItemAdjustment } from '../declarations/RefundLineItemAdjustment.js';
export type { RefundAdjustmentReason } from '../declarations/RefundAdjustmentReason.js';
export type { RefundLineItemAutomaticRefund } from '../declarations/RefundLineItemAutomaticRefund.js';
export type { RefundLineItemModifierAllocation } from '../declarations/RefundLineItemModifierAllocation.js';
export type { RefundTaxBreakdownRefund } from '../declarations/RefundTaxBreakdownRefund.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { PaymentRefund } from '../declarations/PaymentRefund.js';
export type { RefundTenderAllocation } from '../declarations/RefundTenderAllocation.js';
export type { RefundGiftCardDestination } from '../declarations/RefundGiftCardDestination.js';
export type { RefundUnissuedGiftCardRecovery } from '../declarations/RefundUnissuedGiftCardRecovery.js';
export type { CreateCreditNoteRequestInput } from '../declarations/CreateCreditNoteRequestInput.js';
export type { CreateCreditNoteAllocationRequestInput } from '../declarations/CreateCreditNoteAllocationRequestInput.js';
export type { CreateCreditNoteRefundRequestInput } from '../declarations/CreateCreditNoteRefundRequestInput.js';
export type { IssueCreditNoteRequestInput } from '../declarations/IssueCreditNoteRequestInput.js';
export type { ResourceVersionRequestInput } from '../declarations/ResourceVersionRequestInput.js';
export type { UpdateCreditNoteRequestInput } from '../declarations/UpdateCreditNoteRequestInput.js';
export { makeCreditNoteResponse } from '../declarations/makeCreditNoteResponse.js';
export { makeCreditNoteAllocationResultResponse } from '../declarations/makeCreditNoteAllocationResultResponse.js';
export { makeRefundResponse } from '../declarations/makeRefundResponse.js';
export { makeCreditNoteAllocationResponse } from '../declarations/makeCreditNoteAllocationResponse.js';
export { makeIssueCreditNoteResponse } from '../declarations/makeIssueCreditNoteResponse.js';
export { makeCreditNoteAllocationListResponse } from '../declarations/makeCreditNoteAllocationListResponse.js';
export { makeCreditNoteAllocation } from '../declarations/makeCreditNoteAllocation.js';
export { makeCreditNoteRefundListResponse } from '../declarations/makeCreditNoteRefundListResponse.js';
export { makeRefund } from '../declarations/makeRefund.js';
export { makeCreditNoteListResponse } from '../declarations/makeCreditNoteListResponse.js';
export { makeCreditNote } from '../declarations/makeCreditNote.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeCreditNoteAllocationResult } from '../declarations/makeCreditNoteAllocationResult.js';
export { makeInvoice } from '../declarations/makeInvoice.js';
export { makeInvoiceLateFee } from '../declarations/makeInvoiceLateFee.js';
export { makeInvoiceLateFeePolicy } from '../declarations/makeInvoiceLateFeePolicy.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makeInvoicePaymentPolicy } from '../declarations/makeInvoicePaymentPolicy.js';
export { makeInvoicePaymentOptionLimit } from '../declarations/makeInvoicePaymentOptionLimit.js';
export { makeInvoicePaymentTermsSnapshot } from '../declarations/makeInvoicePaymentTermsSnapshot.js';
export { makeInvoicePaymentTermCalculation } from '../declarations/makeInvoicePaymentTermCalculation.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeInvoiceScheduleEntry } from '../declarations/makeInvoiceScheduleEntry.js';
export { makeInvoiceScheduleAmountSpecification } from '../declarations/makeInvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleDue } from '../declarations/makeInvoiceScheduleDue.js';
export { makeInvoiceSnapshot } from '../declarations/makeInvoiceSnapshot.js';
export { makeDocumentTaxID } from '../declarations/makeDocumentTaxID.js';
export { makeOrderCharge } from '../declarations/makeOrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../declarations/makeOrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../declarations/makeTaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../declarations/makeTaxComponentRequest.js';
export { makeTaxJurisdiction } from '../declarations/makeTaxJurisdiction.js';
export { makeInvoiceDiscount } from '../declarations/makeInvoiceDiscount.js';
export { makeInvoiceLineItem } from '../declarations/makeInvoiceLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeBundleComponentVariantSummary } from '../declarations/makeBundleComponentVariantSummary.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeInvoiceTip } from '../declarations/makeInvoiceTip.js';
export { makeIssuedCreditNote } from '../declarations/makeIssuedCreditNote.js';
export { makeTaxIdentity } from '../declarations/makeTaxIdentity.js';
export { makeCreditNoteLine } from '../declarations/makeCreditNoteLine.js';
export { makeRefundLineItemAllocation } from '../declarations/makeRefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../declarations/makeRefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../declarations/makeRefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../declarations/makeRefundAdjustmentReason.js';
export { makeRefundLineItemAutomaticRefund } from '../declarations/makeRefundLineItemAutomaticRefund.js';
export { makeRefundLineItemModifierAllocation } from '../declarations/makeRefundLineItemModifierAllocation.js';
export { makeRefundTaxBreakdownRefund } from '../declarations/makeRefundTaxBreakdownRefund.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makePaymentRefund } from '../declarations/makePaymentRefund.js';
export { makeRefundTenderAllocation } from '../declarations/makeRefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../declarations/makeRefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../declarations/makeRefundUnissuedGiftCardRecovery.js';
