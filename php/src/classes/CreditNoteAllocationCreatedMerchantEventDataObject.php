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
 * @property-read ?string $reversed_at
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteAllocationCreatedMerchantEventDataObject extends Model {
    /** @param array{'allocated_at': string, 'amount_money': mixed, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationCreatedMerchantEventDataObject')); }
    /** When the credit was applied to the invoice balance. Format: date-time.
     * @return string
     */
    public function getAllocatedAt(): string { return $this->get('allocated_at'); }
    public function hasAllocatedAt(): bool { return $this->has('allocated_at'); }
    /** Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Unique identifier of the allocation.
     * @return string
     */
    public function getCreditNoteAllocationId(): string { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
    /** The credit note whose credit was applied.
     * @return string
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
     * @return string
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The invoice whose balance the credit reduced.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time.
     * @return ?string
     */
    public function getReversedAt(): ?string { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". [] (Value): string.  Value enum: "reverse".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
