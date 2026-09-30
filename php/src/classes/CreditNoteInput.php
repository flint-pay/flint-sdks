<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $credit_note_id
 * @property-read list<CreditNoteLineInput|array<array-key, mixed>|\stdClass> $credit_note_lines
 * @property-read string $credit_note_number
 * @property-read string $external_reference_id
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read string $latest_refund_status
 * @property-read string $memo
 * @property-read string $merchant_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $pending_refund_money
 * @property-read string $reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read string $status
 * @property-read array{'amount': string, 'currency': string}|object $total_money
 * @property-read array{'amount': string, 'currency': string}|object $unallocated_money
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string|\DateTimeInterface $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'credit_note_id': string, 'credit_note_lines': list<CreditNoteLineInput|array<array-key, mixed>|\stdClass>, 'credit_note_number'?: string, 'external_reference_id'?: string, 'invoice_id': string, 'issued_at'?: string|\DateTimeInterface, 'latest_refund_status'?: string, 'memo'?: string, 'merchant_id': string, 'pending_refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reason': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'total_money': array{'amount': string, 'currency': string}|object, 'unallocated_money': array{'amount': string, 'currency': string}|object, 'updated_at': string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** @return list<CreditNoteLineInput|array<array-key, mixed>|\stdClass>
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
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
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
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pending_refund_money is omitted; use hasPendingRefundMoney() or valueOrDefault().
     */
    public function getPendingRefundMoney(): mixed { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): array|object { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When unallocated_money is omitted; use hasUnallocatedMoney() or valueOrDefault().
     */
    public function getUnallocatedMoney(): array|object { return $this->get('unallocated_money'); }
    public function hasUnallocatedMoney(): bool { return $this->has('unallocated_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
