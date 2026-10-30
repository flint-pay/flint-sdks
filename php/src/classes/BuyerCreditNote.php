<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxIdentity|null $buyer_tax_identity
 * @property-read string $credit_note_id
 * @property-read string $credit_note_number
 * @property-read string $invoice_id
 * @property-read string $issued_at
 * @property-read ?string $latest_refund_status
 * @property-read list<CreditNoteLineItem> $line_items
 * @property-read string|null $memo
 * @property-read MoneyValue $pending_refund_money
 * @property-read string $reason
 * @property-read MoneyValue $refunded_money
 * @property-read TaxIdentity|null $seller_tax_identity
 * @property-read string $status
 * @property-read MoneyValue $total_money
 * @property-read ?string $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCreditNote extends Model {
    /** @param array{'buyer_tax_identity': mixed, 'credit_note_id': string, 'credit_note_number': string, 'invoice_id': string, 'issued_at': string, 'latest_refund_status'?: string, 'line_items': list<mixed>, 'memo': string|null, 'pending_refund_money': mixed, 'reason': string, 'refunded_money': mixed, 'seller_tax_identity': mixed, 'status': string, 'total_money': mixed, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreditNote')); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getBuyerTaxIdentity(): TaxIdentity|null { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** Unique identifier of the credit note.
     * @return string
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft.
     * @return string
     */
    public function getCreditNoteNumber(): string { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** The invoice this credit note corrects.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the credit note was issued. Format: date-time.
     * @return string
     */
    public function getIssuedAt(): string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return ?string
     */
    public function getLatestRefundStatus(): ?string { return $this->get('latest_refund_status'); }
    public function hasLatestRefundStatus(): bool { return $this->has('latest_refund_status'); }
    /** Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. [] (Value): {@see CreditNoteLineItem}. One correction calculated from the frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not affect the correction. Stored issued values are never recalculated by a read.
     * @return list<CreditNoteLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Free text shown on the credit note. Null when none was set.
     * @return string|null
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPendingRefundMoney(): MoneyValue { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** Why the invoice is being corrected. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getSellerTaxIdentity(): TaxIdentity|null { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** issued once it is numbered and frozen, void once retired. Value enum: "issued", "void".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** When the credit note was voided. Absent unless it is void. Format: date-time.
     * @return ?string
     */
    public function getVoidedAt(): ?string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
