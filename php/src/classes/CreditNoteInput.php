<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $allocated_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $buyer_tax_identity
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $credit_note_id
 * @property-read string $credit_note_number
 * @property-read string|null $external_reference_id
 * @property-read ExpandedInvoiceSummaryInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read string $latest_refund_status
 * @property-read list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string|null $memo
 * @property-read string $merchant_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $pending_refund_money
 * @property-read string $reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $seller_tax_identity
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string|\DateTimeInterface $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteInput extends Model {
    /** @param array{'allocated_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'created_at': string|\DateTimeInterface, 'credit_note_id': string, 'credit_note_number'?: string, 'external_reference_id': string|null, 'invoice'?: ExpandedInvoiceSummaryInput|array<array-key, mixed>|\stdClass, 'invoice_id': string, 'issued_at'?: string|\DateTimeInterface, 'latest_refund_status'?: string, 'line_items': list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass>, 'memo': string|null, 'merchant_id': string, 'pending_refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reason': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'status': string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'version': string, 'voided_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When allocated_money is omitted; use hasAllocatedMoney() or valueOrDefault().
     */
    public function getAllocatedMoney(): mixed { return $this->get('allocated_money'); }
    public function hasAllocatedMoney(): bool { return $this->has('allocated_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit available to allocate or refund. Zero on draft and void notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): {@see TaxIdentityInput} or null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): mixed { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Unique identifier of the credit note.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): string. Assigned at issue and stable from then on. Absent while the credit note is a draft.
     * @return string
     * @throws SdkError When credit_note_number is omitted; use hasCreditNoteNumber() or valueOrDefault().
     */
    public function getCreditNoteNumber(): string { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see ExpandedInvoiceSummaryInput}. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded.
     * @return ExpandedInvoiceSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Shape $ (Value): string. The invoice this credit note corrects.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): string. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return string
     * @throws SdkError When latest_refund_status is omitted; use hasLatestRefundStatus() or valueOrDefault().
     */
    public function getLatestRefundStatus(): string { return $this->get('latest_refund_status'); }
    public function hasLatestRefundStatus(): bool { return $this->has('latest_refund_status'); }
    /** Shape $ (Value): Array of {@see CreditNoteLineItemInput}. Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. Shape $[] (Value): {@see CreditNoteLineItemInput}. One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.
     * @return list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string or null. Free text shown on the credit note, up to 4096 characters.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Shape $ (Value): string. The merchant that owns the credit note.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pending_refund_money is omitted; use hasPendingRefundMoney() or valueOrDefault().
     */
    public function getPendingRefundMoney(): mixed { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** Shape $ (Value): string. Why the invoice is being corrected. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see TaxIdentityInput} or null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): mixed { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** Shape $ (Value): string. draft while the credit note is editable, issued once it is numbered and frozen, void once retired. Value enum: "draft", "issued", "void".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Current credit note version. Send this as expected_version when updating the draft. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
