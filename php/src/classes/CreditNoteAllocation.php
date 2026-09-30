<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocated_at
 * @property-read MoneyValue $amount_money
 * @property-read string $credit_note_allocation_id
 * @property-read string $credit_note_id
 * @property-read string $idempotency_key
 * @property-read string $invoice_id
 * @property-read string $reversed_at
 * Presence-aware response; omitted fields throw when accessed. */
final class CreditNoteAllocation extends Model {
    /** @param array{'allocated_at': string, 'amount_money': object{'amount': string, 'currency': string}, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocation')); }
    /** @return string
     * @throws SdkError When allocated_at is omitted; use hasAllocatedAt() or valueOrDefault().
     */
    public function getAllocatedAt(): string { return $this->get('allocated_at'); }
    public function hasAllocatedAt(): bool { return $this->has('allocated_at'); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When credit_note_allocation_id is omitted; use hasCreditNoteAllocationId() or valueOrDefault().
     */
    public function getCreditNoteAllocationId(): string { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
    /** @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When reversed_at is omitted; use hasReversedAt() or valueOrDefault().
     */
    public function getReversedAt(): string { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
}
