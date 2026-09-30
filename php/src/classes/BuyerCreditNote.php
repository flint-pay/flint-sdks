<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxIdentity|null $buyer_tax_identity
 * @property-read string $credit_note_id
 * @property-read list<CreditNoteLine> $credit_note_lines
 * @property-read string $credit_note_number
 * @property-read string $invoice_id
 * @property-read string $issued_at
 * @property-read string $latest_refund_status
 * @property-read string $memo
 * @property-read MoneyValue $pending_refund_money
 * @property-read string $reason
 * @property-read MoneyValue $refunded_money
 * @property-read TaxIdentity|null $seller_tax_identity
 * @property-read string $status
 * @property-read MoneyValue $total_money
 * @property-read string $voided_at
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerCreditNote extends Model {
    /** @param array{'buyer_tax_identity'?: mixed, 'credit_note_id': string, 'credit_note_lines': list<mixed>, 'credit_note_number': string, 'invoice_id': string, 'issued_at': string, 'latest_refund_status'?: string, 'memo'?: string, 'pending_refund_money': mixed, 'reason': string, 'refunded_money': mixed, 'seller_tax_identity'?: mixed, 'status': string, 'total_money': object{'amount': string, 'currency': string}, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreditNote')); }
    /** @return TaxIdentity|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): TaxIdentity|null { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** @return list<CreditNoteLine>
     * @throws SdkError When credit_note_lines is omitted; use hasCreditNoteLines() or valueOrDefault().
     */
    public function getCreditNoteLines(): array { return $this->get('credit_note_lines'); }
    public function hasCreditNoteLines(): bool { return $this->has('credit_note_lines'); }
    /** @return string
     * @throws SdkError When credit_note_number is omitted; use hasCreditNoteNumber() or valueOrDefault().
     */
    public function getCreditNoteNumber(): string { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** @return string
     * @throws SdkError When latest_refund_status is omitted; use hasLatestRefundStatus() or valueOrDefault().
     */
    public function getLatestRefundStatus(): string { return $this->get('latest_refund_status'); }
    public function hasLatestRefundStatus(): bool { return $this->has('latest_refund_status'); }
    /** @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return MoneyValue
     * @throws SdkError When pending_refund_money is omitted; use hasPendingRefundMoney() or valueOrDefault().
     */
    public function getPendingRefundMoney(): MoneyValue { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return TaxIdentity|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): TaxIdentity|null { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return MoneyValue
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** @return string
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
