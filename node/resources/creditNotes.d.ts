import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    CreditNote,
    CreditNoteAllocation,
    CreditNoteAllocationListResponse,
    CreditNoteAllocationResponse,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNoteListResponse,
    CreditNoteResponse
} from '../declarations/types-14.js';
import type {
    CreditNotesCreateAllocationParams,
    CreditNotesCreateParams,
    CreditNotesGetAllocationParams,
    CreditNotesGetPDFParams,
    CreditNotesGetPDFResponse,
    CreditNotesGetParams,
    CreditNotesIssueParams,
    CreditNotesListAllocationsParams,
    CreditNotesListParams,
    CreditNotesReverseAllocationParams,
    CreditNotesUpdateParams,
    CreditNotesVoidParams
} from '../declarations/types-15.js';
import type { IssueCreditNoteResponse, IssueCreditNoteResult } from '../declarations/types-35.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    CreditNotesCreateAllocationParams,
    CreditNotesGetParams,
    CreditNotesGetAllocationParams,
    CreditNotesGetPDFParams,
    CreditNotesGetPDFResponse,
    CreditNotesIssueParams,
    CreditNotesListAllocationsParams,
    CreditNotesListParams,
    CreditNotesReverseAllocationParams,
    CreditNotesUpdateParams,
    CreditNotesVoidParams
} from '../declarations/types-15.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference, ResourceVersionRequestInput } from '../declarations/types-54.js';
export type {
    CreditNote,
    CreditNoteResponse,
    CreditNoteAllocationResult,
    CreditNoteAllocationResultResponse,
    CreditNoteAllocation,
    CreditNoteAllocationResponse,
    CreditNoteAllocationListResponse,
    CreditNoteListResponse,
    CreditNoteLineItemRequestInput,
    CreditNoteCorrectionRequestModelInput,
    CreditNoteCorrectionRequestQuantityRequestInput,
    CreditNoteCorrectionRequestAmountRequestInput,
    Credentials,
    CreditNoteLineItem,
    CreditNoteCorrectionRequest,
    CreditNoteCorrectionRequestQuantity,
    CreditNoteCorrectionRequestAmount,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteRefundRequestInput
} from '../declarations/types-14.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type {
    IssueCreditNoteResult,
    IssueCreditNoteResponse,
    IssueCreditNoteRequestInput,
    InvoicesMarkUncollectibleParams
} from '../declarations/types-35.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateCreditNoteRequestInput, CreateCreditNoteAllocationRequestInput } from '../declarations/types-8.js';
export type { MoneyValueInput, MoneyValue, NextAction, OrderCharge, OrderCalculatedChargeTax } from '../declarations/types-39.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { TaxIdentity, TaxCurrencyConversion, TextModifierRequest, TaxJurisdiction, TaxReverseCharge } from '../declarations/types-65.js';
export type { Address } from '../declarations/types-0.js';
export type {
    DocumentTaxID,
    ExpandedInvoiceSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    DisputesAcceptParams
} from '../declarations/types-24.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { ReadinessMerchantAccountSession, Refund } from '../declarations/types-52.js';
export type {
    Invoice,
    InvoiceCollection,
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionAutomatic,
    InvoiceCollectionExternal
} from '../declarations/types-31.js';
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
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-33.js';
export type {
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-32.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { CheckoutBuyerContact, CategoryReference } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { OrderSettlementAmounts, OrderLineItemModifier, OrderTaxExemption } from '../declarations/types-41.js';
export type { SettlementAmounts, SelectedProductOption } from '../declarations/types-59.js';
export type {
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
} from '../declarations/types-34.js';
export type { Image } from '../declarations/types-28.js';
export type { TaxBreakdown, TaxBreakdownPercentage, TaxBreakdownFlatAmount } from '../declarations/types-64.js';
export type {
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID
} from '../declarations/types-16.js';
export type {
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-53.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails,
    PaymentRefund
} from '../declarations/types-47.js';
export type { SplitReversalReference } from '../declarations/types-60.js';
export type { OrderGiftCardAllocation } from '../declarations/types-40.js';
export type { UpdateCreditNoteRequestInput } from '../declarations/types-66.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/types-7.js';
export {
    makeConfirmReturnResolutionRequest,
    makeCreateCreditNoteAllocationRequest,
    makeCreateCreditNoteRequest
} from '../declarations/types-72.js';
export {
    makeCreditNoteCorrectionRequestAmountRequest,
    makeCreditNoteCorrectionRequestModel,
    makeCreditNoteCorrectionRequestQuantityRequest,
    makeCreditNoteIssueAllocationRequest,
    makeCreditNoteLineItemRequest,
    makeCreditNoteRefundRequest
} from '../declarations/types-75.js';
export { makeIssueCreditNoteRequest } from '../declarations/types-78.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export { makeResourceVersionRequest } from '../declarations/types-81.js';
export { makeTextModifierRequest, makeUpdateCreditNoteRequest } from '../declarations/types-83.js';
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
 * client.creditNotes.create({invoice_id: "inv_01KEZF7C00A5GEBMWHEAJFSAR4", reason:
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
 * Returns one credit note with its lines, total, and the credit still available to allocate.
 *
 * `GET /v1/credit-notes/{credit_note_id}`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#getCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.creditNotes.get("cn_01KEZF7C00N1TRRCVDNY8S471H")
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
 * client.creditNotes.getAllocation("cn_01KEZF7C00N1TRRCVDNY8S471H",
 * "cna_01KEZF7C00EH6DMS9BD8F72CMA")
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
 * client.creditNotes.getPDF("cn_01KEZF7C00N1TRRCVDNY8S471H")
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
 * allocation. After a lost response, list this note's allocations or refunds filtered by the issue
 * request's idempotency_key. A pending refund is accepted but has not completed. Without
 * allocation or refund, issuance leaves the invoice balance unchanged. Issue validates the stored
 * preview against current shared creditable pools. A fitting correction whose preview changed
 * fails with `VERSION_CONFLICT`, which includes the credit note and `current_version`: replace its
 * existing corrections with PATCH using the current expected_version, review the recalculated
 * amounts, and issue again. A stored correction exceeding the remaining pool fails with
 * `ACTION_NOT_ALLOWED` and reason `not_offered`. Update the draft lines before issuing again.
 * Affected historical tax allocations fail with `ACTION_NOT_ALLOWED` and reason
 * `credit_note_tax_reconciliation_required`.
 *
 * `POST /v1/credit-notes/{credit_note_id}/issue`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#issueCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.issue("cn_01KEZF7C00N1TRRCVDNY8S471H", undefined, { idempotencyKey:
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
 * client.creditNotes.listAllocations("cn_01KEZF7C00N1TRRCVDNY8S471H")
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
 * client.creditNotes.reverseAllocation("cn_01KEZF7C00N1TRRCVDNY8S471H",
 * "cna_01KEZF7C00EH6DMS9BD8F72CMA", undefined, { idempotencyKey: idempotencyKey })
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
 * succeeded refund can't be voided. Blockers fail with `RESOURCE_IN_USE`, and
 * `details[0].blocking_resources` lists the allocations and refunds. Void is terminal, and an
 * invoice cannot be voided while an issued credit note stands against it.
 *
 * `POST /v1/credit-notes/{credit_note_id}/void`
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/credit-notes#voidCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.creditNotes.void("cn_01KEZF7C00N1TRRCVDNY8S471H", undefined, { idempotencyKey:
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
