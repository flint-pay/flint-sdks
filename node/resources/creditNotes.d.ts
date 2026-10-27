import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput,
    CreateCreditNoteRequestInput
} from '../declarations/types-5.js';
import type {
    CreditNote,
    CreditNoteAllocation,
    CreditNoteAllocationListResponse,
    CreditNoteAllocationResponse,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNoteListResponse
} from '../declarations/types-9.js';
import type {
    CreditNoteResponse,
    CreditNotesCreateAllocationInput,
    CreditNotesCreateInput,
    CreditNotesCreateRefundInput,
    CreditNotesGetAllocationInput,
    CreditNotesGetInput,
    CreditNotesGetPDFInput,
    CreditNotesGetPDFResponse,
    CreditNotesIssueInput,
    CreditNotesListAllocationsInput,
    CreditNotesListInput,
    CreditNotesListRefundsInput,
    CreditNotesReverseAllocationInput,
    CreditNotesUpdateInput,
    CreditNotesVoidResourceInput
} from '../declarations/types-10.js';
import type { IssueCreditNoteRequestInput, IssueCreditNoteResponse, IssueCreditNoteResult } from '../declarations/types-28.js';
import type { Refund, RefundListResponse, RefundResponse } from '../declarations/types-39.js';
import type { RequestOptions, ResourceVersionRequestInput } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateCreditNoteRequestInput } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type {
    CreateCreditNoteRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput,
    ConfirmReturnResolutionRequestInput
} from '../declarations/types-5.js';
export type { RequestOptions, ResourceVersionRequestInput, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    CreditNote,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNoteAllocation,
    CreditNoteAllocationResponse,
    CreditNoteAllocationListResponse,
    CreditNoteListResponse,
    CreditNoteLineItemRequestInput,
    CreditNoteCorrectionRequestInput,
    CreditNoteCorrectionRequestQuantityInput,
    CreditNoteCorrectionRequestAmountInput,
    Credentials,
    CreditNoteLineItem,
    CreditNoteCorrectionRequest,
    CreditNoteCorrectionRequestQuantity,
    CreditNoteCorrectionRequestAmount,
    CreditNoteIssueAllocationRequestInput
} from '../declarations/types-9.js';
export type { SdkResponse, SelectedProductOption } from '../declarations/types-43.js';
export type {
    CreditNoteResponse,
    CreditNotesGetPDFResponse,
    CreditNotesCreateInput,
    CreditNotesCreateAllocationInput,
    CreditNotesCreateRefundInput,
    CreditNotesGetInput,
    CreditNotesGetAllocationInput,
    CreditNotesGetPDFInput,
    CreditNotesIssueInput,
    CreditNotesListAllocationsInput,
    CreditNotesListRefundsInput,
    CreditNotesListInput,
    CreditNotesReverseAllocationInput,
    CreditNotesUpdateInput,
    CreditNotesVoidResourceInput,
    CreditNoteRefundRequestInput
} from '../declarations/types-10.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    Refund,
    RefundResponse,
    RefundListResponse,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-39.js';
export type {
    IssueCreditNoteRequestInput,
    IssueCreditNoteResult,
    IssueCreditNoteResponse,
    InvoiceSnapshot,
    InvoiceTip
} from '../declarations/types-28.js';
export type { UpdateCreditNoteRequestInput, TextModifierRequest } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode, Address, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-0.js';
export type { TaxIdentity, TaxBreakdown, TaxJurisdiction, TaxBreakdownPercentage, TaxBreakdownFlatAmount } from '../declarations/types-46.js';
export type {
    DocumentTaxID,
    ExpandedInvoiceSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary
} from '../declarations/types-16.js';
export type {
    Invoice,
    InvoiceCollection,
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionAutomatic,
    InvoiceCollectionExternal,
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-26.js';
export type {
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentDue,
    InvoicePaymentDueNone,
    InvoicePaymentDueDate,
    InvoicePaymentDuePaymentTerms,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate
} from '../declarations/types-27.js';
export type { CheckoutBuyerContact, CategoryReference } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { SettlementAmounts } from '../declarations/types-44.js';
export type { OrderCharge, OrderCalculatedChargeTax, OrderLineItemModifier, OrderGiftCardAllocation } from '../declarations/types-32.js';
export type { Image } from '../declarations/types-19.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary, PaymentRefund } from '../declarations/types-36.js';
export {
    makeConfirmReturnResolutionRequest,
    makeCreateCreditNoteAllocationRequest,
    makeCreateCreditNoteRefundRequest
} from '../declarations/types-62.js';
export { makeCreateCreditNoteRequest } from '../declarations/types-63.js';
export {
    makeCreditNoteCorrectionRequest,
    makeCreditNoteCorrectionRequestAmount,
    makeCreditNoteCorrectionRequestQuantity,
    makeCreditNoteIssueAllocationRequest,
    makeCreditNoteLineItemRequest,
    makeCreditNoteRefundRequest
} from '../declarations/types-65.js';
export { makeDocumentTaxID } from '../declarations/types-66.js';
export {
    makeInvoiceLateFeePolicy,
    makeInvoiceLateFeePolicyFixed,
    makeInvoiceLateFeePolicyPercentage,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoicePaymentTermCalculation,
    makeInvoicePaymentTermCalculationDayOfMonth,
    makeInvoicePaymentTermCalculationDayOfNextMonth,
    makeInvoicePaymentTermCalculationDaysAfterMonthEnd,
    makeInvoicePaymentTermCalculationNetDays,
    makeInvoicePaymentTermCalculationOnReceipt
} from '../declarations/types-67.js';
export {
    makeInvoiceScheduleAmountSpecification,
    makeInvoiceScheduleAmountSpecificationFixed,
    makeInvoiceScheduleAmountSpecificationPercentage,
    makeInvoiceScheduleAmountSpecificationRemainingBalance,
    makeIssueCreditNoteRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax
} from '../declarations/types-68.js';
export { makeResourceVersionRequest } from '../declarations/types-70.js';
export { makeTaxJurisdiction, makeTextModifierRequest } from '../declarations/types-71.js';
export { makeUpdateCreditNoteRequest } from '../declarations/types-72.js';
export interface CreditNotesResource {
    /**
 * Creates a draft credit note against an invoice that has been issued and not voided. Include
 * line_items for initial corrections or omit them for an empty draft. The draft uses frozen
 * invoice economics and the remaining pools shared by issued, non-void notes. Drafts reserve no
 * credit. It receives a credit note number when issued.
 * @see reference/creditNotes.md#creditnotescreate
 * POST /v1/credit-notes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.create({invoice_id: "example", reason: "returned_goods"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateCreditNoteRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<CreditNote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotescreate
     */
    createWithResponse(params: (InputValue<CreateCreditNoteRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNoteResponse>>;
    /**
 * Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount
 * cannot exceed the credit note's available_money or the invoice's outstanding balance. Closing
 * the balance with credit sets the invoice to paid when positive net collection remains, or
 * credited when there is no positive net collection. Returns the allocation, the credit note, and
 * the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's
 * identity.
 * @see reference/creditNotes.md#creditnotescreateallocation
 * POST /v1/credit-notes/{credit_note_id}/allocations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createAllocation("example", {amount_money: {amount: "100", currency: "USD"}},
 * { idempotencyKey: idempotencyKey })
 */
    createAllocation(credit_note_id: InputValue<string>, params: (InputValue<CreateCreditNoteAllocationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteAllocationResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotescreateallocation
     */
    createAllocationWithResponse(credit_note_id: InputValue<string>, params: (InputValue<CreateCreditNoteAllocationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNoteAllocationResultResponse>>;
    /**
 * Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund
 * all available credit. Refunds use the source invoice's original payments and do not reopen its
 * balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped
 * to merchant, environment, credit note, and key. Reusing it with another request conflicts.
 * Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder
 * can be requested with a new key after its outcome is definitive.
 * @see reference/creditNotes.md#creditnotescreaterefund
 * POST /v1/credit-notes/{credit_note_id}/refunds
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createRefund("example", {reason: "duplicate"}, { idempotencyKey:
 * idempotencyKey })
 */
    createRefund(credit_note_id: InputValue<string>, params: (InputValue<CreateCreditNoteRefundRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Refund>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotescreaterefund
     */
    createRefundWithResponse(credit_note_id: InputValue<string>, params: (InputValue<CreateCreditNoteRefundRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RefundResponse>>;
    /**
 * Returns one credit note with its lines, total, and the credit still available to allocate.
 * @see reference/creditNotes.md#creditnotesget
 * GET /v1/credit-notes/{credit_note_id}
 * @example
 * client.creditNotes.get("example")
 */
    get(credit_note_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesget
     */
    getWithResponse(credit_note_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNoteResponse>>;
    /**
 * Returns one allocation. A non-null reversed_at means the credit was returned to the credit note
 * and the invoice balance reopened.
 * @see reference/creditNotes.md#creditnotesgetallocation
 * GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}
 * @example
 * client.creditNotes.getAllocation("example", "example")
 */
    getAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteAllocation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesgetallocation
     */
    getAllocationWithResponse(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNoteAllocationResponse>>;
    /**
 * Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists
 * from issue onward and carries your branding, the credited lines, and the invoice it corrects.
 * @see reference/creditNotes.md#creditnotesgetpdf
 * GET /v1/credit-notes/{credit_note_id}/pdf
 * @example
 * client.creditNotes.getPDF("example")
 */
    getPDF(credit_note_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Result<CreditNotesGetPDFResponse>>;
    /**
 * Issues a draft credit note and freezes its PDF. Provide allocation to issue and apply credit to
 * its invoice atomically, or refund to initiate a linked refund on a paid invoice. Allocation and
 * refund cannot be combined. Omit allocation.amount_money to apply the smaller of the credit
 * available after issue and the invoice's outstanding balance. An explicit amount must be
 * positive, use the invoice's currency, and fit both balances. The result includes
 * credit_note_allocation when allocation is requested. Idempotency-Key is required and is retained
 * for as long as the issue's effects exist, scoped to merchant, environment, credit note, and key.
 * Reuse the key with the identical request to recover the original credit note and allocation.
 * Recover an allocation after a lost response by listing this note's allocations with
 * idempotency_key=issue:<issue key>. For refunds, list this note's refunds filtered by the
 * original idempotency_key. A pending refund is accepted but has not completed. Without allocation
 * or refund, issuance leaves the invoice balance unchanged. Issue validates the stored preview
 * against current shared creditable pools. A fitting correction whose preview changed returns
 * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed: replace its existing
 * corrections with PATCH using the current expected_version, review the recalculated amounts, and
 * issue again. A correction exceeding the remaining pool returns
 * CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE. Affected historical tax allocations return
 * ACTION_NOT_ALLOWED with reason credit_note_tax_reconciliation_required.
 * @see reference/creditNotes.md#creditnotesissue
 * POST /v1/credit-notes/{credit_note_id}/issue
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.issue("example", undefined, { idempotencyKey: idempotencyKey })
 */
    issue(credit_note_id: InputValue<string>, params: (InputValue<IssueCreditNoteRequestInput>
        | {
        "allocation"?: never;
        "expected_version"?: never;
        "refund"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }
        | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<IssueCreditNoteResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesissue
     */
    issueWithResponse(credit_note_id: InputValue<string>, params: (InputValue<IssueCreditNoteRequestInput>
        | {
        "allocation"?: never;
        "expected_version"?: never;
        "refund"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }
        | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<IssueCreditNoteResponse>>;
    /**
 * Returns every allocation made from a credit note, including reversed ones. Filter by
 * idempotency_key to find the allocation a given request produced.
 * @see reference/creditNotes.md#creditnoteslistallocations
 * GET /v1/credit-notes/{credit_note_id}/allocations
 * @example
 * client.creditNotes.listAllocations("example")
 */
    listAllocations(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteAllocationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnoteslistallocations
     */
    listAllocationsWithResponse(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNoteAllocationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/creditNotes.md#creditnoteslistallocations
     */
    listAllocationsPages(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteAllocationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/creditNotes.md#creditnoteslistallocations
     */
    listAllocationsPagesWithResponse(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CreditNoteAllocationListResponse>>;
    /** Iterate items lazily.
     * @see reference/creditNotes.md#creditnoteslistallocations
     */
    listAllocationsItems(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteAllocation>;
    /**
 * Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to
 * recover a refund after a lost response.
 * @see reference/creditNotes.md#creditnoteslistrefunds
 * GET /v1/credit-notes/{credit_note_id}/refunds
 * @example
 * client.creditNotes.listRefunds("example")
 */
    listRefunds(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<RefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnoteslistrefunds
     */
    listRefundsWithResponse(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RefundListResponse>>;
    /** Iterate pages lazily.
     * @see reference/creditNotes.md#creditnoteslistrefunds
     */
    listRefundsPages(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RefundListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/creditNotes.md#creditnoteslistrefunds
     */
    listRefundsPagesWithResponse(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<RefundListResponse>>;
    /** Iterate items lazily.
     * @see reference/creditNotes.md#creditnoteslistrefunds
     */
    listRefundsItems(credit_note_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Refund>;
    /**
 * Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see
 * everything credited against one invoice.
 * @see reference/creditNotes.md#creditnoteslist
 * GET /v1/credit-notes
 * @example
 * client.creditNotes.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "invoice_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "issued" | "void">>;
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnoteslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "invoice_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "issued" | "void">>;
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreditNoteListResponse>>;
    /** Iterate pages lazily.
     * @see reference/creditNotes.md#creditnoteslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "invoice_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "issued" | "void">>;
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/creditNotes.md#creditnoteslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "invoice_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "issued" | "void">>;
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CreditNoteListResponse>>;
    /** Iterate items lazily.
     * @see reference/creditNotes.md#creditnoteslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "invoice_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "reason"?: InputValue<Array<"returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "issued" | "void">>;
        "expand"?: InputValue<Array<"invoice">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNote>;
    /**
 * Reverses an allocation and reopens that much of the invoice balance. The original allocation
 * keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation
 * that closed an invoice moves it from credited back to open or partially_paid.
 * @see reference/creditNotes.md#creditnotesreverseallocation
 * POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.reverseAllocation("example", "example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    reverseAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<CreditNoteAllocationResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesreverseallocation
     */
    reverseAllocationWithResponse(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNoteAllocationResultResponse>>;
    /**
 * Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a
 * null memo clears it, and line_items requires expected_version. Replacing lines recalculates
 * their amounts from current remaining creditable pools. Scalar edits preserve stored line values.
 * Issued and void credit notes are frozen.
 * @see reference/creditNotes.md#creditnotesupdate
 * PATCH /v1/credit-notes/{credit_note_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(credit_note_id: InputValue<string>, params: (InputValue<UpdateCreditNoteRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<CreditNote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesupdate
     */
    updateWithResponse(credit_note_id: InputValue<string>, params: (InputValue<UpdateCreditNoteRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNoteResponse>>;
    /**
 * Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an
 * invoice cannot be voided while an issued credit note stands against it.
 * @see reference/creditNotes.md#creditnotesvoidresource
 * POST /v1/credit-notes/{credit_note_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.voidResource("example", undefined, { idempotencyKey: idempotencyKey })
 */
    voidResource(credit_note_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<CreditNote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/creditNotes.md#creditnotesvoidresource
     */
    voidResourceWithResponse(credit_note_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreditNoteResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly creditNotes: CreditNotesResource;
}
