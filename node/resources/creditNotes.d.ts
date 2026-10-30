import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CreditNote,
    CreditNoteAllocation,
    CreditNoteAllocationListResponse,
    CreditNoteAllocationResponse,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNoteListResponse,
    CreditNoteRefundListResponse,
    CreditNoteResponse,
    CreditNotesCreateAllocationParams,
    CreditNotesCreateParams,
    CreditNotesCreateRefundParams,
    CreditNotesGetAllocationParams,
    CreditNotesGetPDFParams,
    CreditNotesGetPDFResponse,
    CreditNotesGetParams,
    CreditNotesIssueParams,
    CreditNotesListAllocationsParams,
    CreditNotesListParams,
    CreditNotesListRefundsParams,
    CreditNotesReverseAllocationParams,
    CreditNotesUpdateParams,
    CreditNotesVoidParams
} from '../declarations/types-12.js';
import type { IssueCreditNoteResponse, IssueCreditNoteResult } from '../declarations/types-32.js';
import type { Refund, RefundListResponse, RefundResponse } from '../declarations/types-46.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    CreditNotesCreateParams,
    CreditNote,
    CreditNoteResponse,
    CreditNotesCreateAllocationParams,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNotesCreateRefundParams,
    CreditNotesGetParams,
    CreditNotesGetAllocationParams,
    CreditNoteAllocation,
    CreditNoteAllocationResponse,
    CreditNotesGetPDFParams,
    CreditNotesGetPDFResponse,
    CreditNotesIssueParams,
    CreditNotesListAllocationsParams,
    CreditNoteAllocationListResponse,
    CreditNotesListRefundsParams,
    CreditNoteRefundListResponse,
    CreditNotesListParams,
    CreditNoteListResponse,
    CreditNotesReverseAllocationParams,
    CreditNotesUpdateParams,
    CreditNotesVoidParams,
    CreditNoteLineItemRequestInput,
    CreditNoteCorrectionRequestInput,
    CreditNoteCorrectionRequestQuantityInput,
    CreditNoteCorrectionRequestAmountInput,
    Credentials,
    CreditNoteLineItem,
    CreditNoteCorrectionRequest,
    CreditNoteCorrectionRequestQuantity,
    CreditNoteCorrectionRequestAmount,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteRefundRequestInput
} from '../declarations/types-12.js';
export type { RequestOptions, RefundTaxBreakdownRefund, RefundTenderAllocation, RefundUnissuedGiftCardRecovery } from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    Refund,
    RefundResponse,
    RefundListResponse,
    ReadinessMerchantAccountSession,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation
} from '../declarations/types-46.js';
export type {
    IssueCreditNoteResult,
    IssueCreditNoteResponse,
    IssueCreditNoteRequestInput,
    InvoicesMarkUncollectibleParams
} from '../declarations/types-32.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    CreateCreditNoteRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput,
    ConfirmReturnResolutionRequestInput
} from '../declarations/types-6.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type {
    TaxIdentity,
    TextModifierRequest,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount
} from '../declarations/types-57.js';
export type { DocumentTaxID } from '../declarations/types-20.js';
export type {
    ExpandedInvoiceSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary
} from '../declarations/types-21.js';
export type { ResponseMeta, ResponseWarning, ResourceVersionRequestInput } from '../declarations/types-48.js';
export type { Invoice, InvoiceCollection, InvoiceCollectionAutomatic } from '../declarations/types-28.js';
export type {
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentDue,
    InvoicePaymentDueNone,
    InvoicePaymentDueDate,
    InvoicePaymentDuePaymentTerms,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-30.js';
export type {
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionExternal,
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-29.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { CheckoutBuyerContact, CategoryReference } from '../declarations/types-4.js';
export type { PricingAmounts, PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-43.js';
export type { SettlementAmounts, SelectedProductOption } from '../declarations/types-53.js';
export type {
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculationOnReceipt,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate,
    InvoiceSnapshot,
    InvoiceTip
} from '../declarations/types-31.js';
export type { OrderCharge, OrderCalculatedChargeTax, OrderGiftCardAllocation } from '../declarations/types-36.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Image } from '../declarations/types-25.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { TaxBreakdown } from '../declarations/types-56.js';
export type { PaymentRefund } from '../declarations/types-42.js';
export type { UpdateCreditNoteRequestInput } from '../declarations/types-58.js';
export { makeConfirmReturnResolutionRequest } from '../declarations/types-62.js';
export {
    makeCreateCreditNoteAllocationRequest,
    makeCreateCreditNoteRefundRequest,
    makeCreateCreditNoteRequest
} from '../declarations/types-63.js';
export {
    makeCreditNoteCorrectionRequest,
    makeCreditNoteCorrectionRequestAmount,
    makeCreditNoteCorrectionRequestQuantity,
    makeCreditNoteIssueAllocationRequest,
    makeCreditNoteLineItemRequest,
    makeCreditNoteRefundRequest
} from '../declarations/types-65.js';
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
    makeInvoicePaymentTermCalculationOnReceipt,
    makeInvoiceScheduleAmountSpecification,
    makeInvoiceScheduleAmountSpecificationFixed
} from '../declarations/types-68.js';
export {
    makeInvoiceScheduleAmountSpecificationPercentage,
    makeInvoiceScheduleAmountSpecificationRemainingBalance,
    makeIssueCreditNoteRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax
} from '../declarations/types-69.js';
export { makeResourceVersionRequest } from '../declarations/types-71.js';
export { makeTaxJurisdiction, makeTextModifierRequest, makeUpdateCreditNoteRequest } from '../declarations/types-73.js';
export interface CreditNotesResource {
    /**
 * Creates a draft credit note against an invoice that has been issued and not voided. Include
 * line_items for initial corrections or omit them for an empty draft. The draft uses frozen
 * invoice economics and the remaining pools shared by issued, non-void notes. Drafts reserve no
 * credit. It receives a credit note number when issued.
 *
 * `POST /v1/credit-notes`
 * @see https://developers.withflintpay.com/docs/api/credit-notes#createCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.create({invoice_id: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", reason:
 * "returned_goods"}, { idempotencyKey: idempotencyKey })
 */
    create(params: CreditNotesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CreditNote, CreditNoteResponse>>;
    /**
 * Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount
 * cannot exceed the credit note's available_money or the invoice's outstanding balance. Closing
 * the balance with credit sets the invoice to paid when positive net collection remains, or
 * credited when there is no positive net collection. Returns the allocation, the credit note, and
 * the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's
 * identity.
 *
 * `POST /v1/credit-notes/{credit_note_id}/allocations`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#createCreditNoteAllocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount:
 * "100", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    createAllocation(credit_note_id: InputValue<string>, params: CreditNotesCreateAllocationParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreditNoteAllocationResult, CreditNoteAllocationResultResponse>>;
    /**
 * Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund
 * all available credit. Refunds use the source invoice's original payments and do not reopen its
 * balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped
 * to merchant, environment, credit note, and key. Reusing it with another request conflicts.
 * Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder
 * can be requested with a new key after its outcome is definitive.
 *
 * `POST /v1/credit-notes/{credit_note_id}/refunds`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#createCreditNoteRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.createRefund("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "duplicate"}, {
 * idempotencyKey: idempotencyKey })
 */
    createRefund(credit_note_id: InputValue<string>, params: CreditNotesCreateRefundParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Refund, RefundResponse>>;
    /**
 * Returns one credit note with its lines, total, and the credit still available to allocate.
 *
 * `GET /v1/credit-notes/{credit_note_id}`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#getCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.get("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(credit_note_id: InputValue<string>, params?: CreditNotesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreditNote, CreditNoteResponse>>;
    /**
 * Returns one allocation. A non-null reversed_at means the credit was returned to the credit note
 * and the invoice balance reopened.
 *
 * `GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`
 * @param credit_note_id Flint credit note ID.
 * @param credit_note_allocation_id Flint credit note allocation ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#getCreditNoteAllocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.getAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "cna_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: CreditNotesGetAllocationParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreditNoteAllocation, CreditNoteAllocationResponse>>;
    /**
 * Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists
 * from issue onward and shows the credited lines, totals, and the invoice it corrects. It uses
 * your current branding, so a later download can differ in logo or colors, but not in content.
 *
 * `GET /v1/credit-notes/{credit_note_id}/pdf`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#getCreditNotePDF
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.getPDF("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPDF(credit_note_id: InputValue<string>, params?: CreditNotesGetPDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<CreditNotesGetPDFResponse>>;
    /**
 * Issues a draft credit note and freezes its number, lines, and totals. Provide allocation to
 * issue and apply credit to its invoice atomically, or refund to initiate a linked refund on a
 * paid invoice. Allocation and refund cannot be combined. Omit allocation.amount_money to apply
 * the smaller of the credit available after issue and the invoice's outstanding balance. An
 * explicit amount must be positive, use the invoice's currency, and fit both balances. The result
 * includes credit_note_allocation when allocation is requested. Idempotency-Key is required and is
 * retained for as long as the issue's effects exist, scoped to merchant, environment, credit note,
 * and key. Reuse the key with the identical request to recover the original credit note and
 * allocation. Recover an allocation after a lost response by listing this note's allocations with
 * idempotency_key=issue:<issue key>. For refunds, list this note's refunds filtered by the
 * original idempotency_key. A pending refund is accepted but has not completed. Without allocation
 * or refund, issuance leaves the invoice balance unchanged. Issue validates the stored preview
 * against current shared creditable pools. A fitting correction whose preview changed returns
 * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed: replace its existing
 * corrections with PATCH using the current expected_version, review the recalculated amounts, and
 * issue again. A stored correction exceeding the remaining pool returns ACTION_NOT_ALLOWED with
 * reason not_offered. Update the draft lines before issuing again. Affected historical tax
 * allocations return ACTION_NOT_ALLOWED with reason credit_note_tax_reconciliation_required.
 *
 * `POST /v1/credit-notes/{credit_note_id}/issue`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#issueCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.issue("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    issue(credit_note_id: InputValue<string>, params: CreditNotesIssueParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<IssueCreditNoteResult, IssueCreditNoteResponse>>;
    /**
 * Returns every allocation made from a credit note, including reversed ones. Filter by
 * idempotency_key to find the allocation a given request produced. Default order: allocated_at
 * descending, then credit_note_allocation_id descending.
 *
 * `GET /v1/credit-notes/{credit_note_id}/allocations`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteAllocations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.listAllocations("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listAllocations(credit_note_id: InputValue<string>, params?: CreditNotesListAllocationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreditNoteAllocationListResponse, CreditNoteAllocationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteAllocations
     */
    listAllocationsPages(credit_note_id: InputValue<string>, params?: CreditNotesListAllocationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CreditNoteAllocationListResponse, CreditNoteAllocationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteAllocations
     */
    listAllocationsItems(credit_note_id: InputValue<string>, params?: CreditNotesListAllocationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CreditNoteAllocation>;
    /**
 * Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to
 * recover a refund after a lost response. Default order: time each refund was applied to the
 * credit note (descending), then refund_id descending.
 *
 * `GET /v1/credit-notes/{credit_note_id}/refunds`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteRefunds
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.listRefunds("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listRefunds(credit_note_id: InputValue<string>, params?: CreditNotesListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RefundListResponse, CreditNoteRefundListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteRefunds
     */
    listRefundsPages(credit_note_id: InputValue<string>, params?: CreditNotesListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<RefundListResponse, CreditNoteRefundListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNoteRefunds
     */
    listRefundsItems(credit_note_id: InputValue<string>, params?: CreditNotesListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Refund>;
    /**
 * Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see
 * everything credited against one invoice. Default order: created_at descending, then
 * credit_note_id descending.
 *
 * `GET /v1/credit-notes`
 * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNotes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.list()
 */
    list(params?: CreditNotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreditNoteListResponse, CreditNoteListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNotes
     */
    listPages(params?: CreditNotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CreditNoteListResponse, CreditNoteListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/credit-notes#listCreditNotes
     */
    listItems(params?: CreditNotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CreditNote>;
    /**
 * Reverses an allocation and reopens that much of the invoice balance. The original allocation
 * keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation
 * that closed an invoice moves it from credited back to open or partially_paid. Reversing credit
 * on a paid invoice that also has collected payments moves it to partially_paid.
 *
 * `POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`
 * @param credit_note_id Flint credit note ID.
 * @param credit_note_allocation_id Flint credit note allocation ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#reverseCreditNoteAllocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.reverseAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "cna_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey })
 */
    reverseAllocation(credit_note_id: InputValue<string>, credit_note_allocation_id: InputValue<string>, params?: CreditNotesReverseAllocationParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CreditNoteAllocationResult, CreditNoteAllocationResultResponse>>;
    /**
 * Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a
 * null memo clears it, and line_items requires expected_version. Replacing lines recalculates
 * their amounts from current remaining creditable pools. Scalar edits preserve stored line values.
 * Issued and void credit notes are frozen.
 *
 * `PATCH /v1/credit-notes/{credit_note_id}`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#updateCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.update("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {memo: "Updated credit note memo"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(credit_note_id: InputValue<string>, params: CreditNotesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CreditNote, CreditNoteResponse>>;
    /**
 * Voids an issued credit note. Reverse every allocation first. A credit note with a pending or
 * succeeded refund can't be voided. Blockers return 409 RESOURCE_IN_USE with
 * details[0].blocking_resources listing the allocations and refunds. Void is terminal, and an
 * invoice cannot be voided while an issued credit note stands against it.
 *
 * `POST /v1/credit-notes/{credit_note_id}/void`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#voidCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.void("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    void(credit_note_id: InputValue<string>, params?: CreditNotesVoidParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CreditNote, CreditNoteResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly creditNotes: CreditNotesResource;
}
