<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $allocated_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $credit_note_allocation_id
 * @property-read string $credit_note_id
 * @property-read string $idempotency_key
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $reversed_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteAllocationInput extends Model {
    /** @param array{'allocated_at': string|\DateTimeInterface, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When allocated_at is omitted; use hasAllocatedAt() or valueOrDefault().
     */
    public function getAllocatedAt(): string|\DateTimeInterface { return $this->get('allocated_at'); }
    public function hasAllocatedAt(): bool { return $this->has('allocated_at'); }
    /** Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Unique identifier of the allocation.
     * @return string
     * @throws SdkError When credit_note_allocation_id is omitted; use hasCreditNoteAllocationId() or valueOrDefault().
     */
    public function getCreditNoteAllocationId(): string { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
    /** The credit note whose credit was applied.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The key the caller sent when allocating, or issue: followed by the issue request's Idempotency-Key for an allocation made on issue. It is this allocation's identity and is filterable on the allocations list.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The invoice whose balance the credit reduced.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When reversed_at is omitted; use hasReversedAt() or valueOrDefault().
     */
    public function getReversedAt(): string|\DateTimeInterface { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
}
