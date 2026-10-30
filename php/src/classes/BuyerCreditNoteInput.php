<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $buyer_tax_identity
 * @property-read string $credit_note_id
 * @property-read string $credit_note_number
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read string $latest_refund_status
 * @property-read list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string|null $memo
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $pending_refund_money
 * @property-read string $reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $seller_tax_identity
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string|\DateTimeInterface $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCreditNoteInput extends Model {
    /** @param array{'buyer_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'credit_note_id': string, 'credit_note_number': string, 'invoice_id': string, 'issued_at': string|\DateTimeInterface, 'latest_refund_status'?: string, 'line_items': list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass>, 'memo': string|null, 'pending_refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reason': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'status': string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'voided_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreditNoteInput')); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): mixed { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** Unique identifier of the credit note.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft.
     * @return string
     * @throws SdkError When credit_note_number is omitted; use hasCreditNoteNumber() or valueOrDefault().
     */
    public function getCreditNoteNumber(): string { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** The invoice this credit note corrects.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the credit note was issued. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return string
     * @throws SdkError When latest_refund_status is omitted; use hasLatestRefundStatus() or valueOrDefault().
     */
    public function getLatestRefundStatus(): string { return $this->get('latest_refund_status'); }
    public function hasLatestRefundStatus(): bool { return $this->has('latest_refund_status'); }
    /** Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. [] (Value): {@see CreditNoteLineItemInput}. One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.
     * @return list<CreditNoteLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Free text shown on the credit note. Null when none was set.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pending_refund_money is omitted; use hasPendingRefundMoney() or valueOrDefault().
     */
    public function getPendingRefundMoney(): mixed { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** Why the invoice is being corrected. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): mixed { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** issued once it is numbered and frozen, void once retired. Value enum: "issued", "void".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** When the credit note was voided. Absent unless it is void. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
