<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $allocated_at
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $credit_note_allocation_id
 * @property-read string|null $credit_note_id
 * @property-read string|null $idempotency_key
 * @property-read string|null $invoice_id
 * @property-read string|null $reversed_at
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteAllocationReversedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'allocated_at'?: mixed, 'amount_money'?: mixed, 'credit_note_allocation_id'?: mixed, 'credit_note_id'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'reversed_at'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationReversedMerchantEventDataPreviousAttributes')); }
    /** When the credit was applied to the invoice balance. anyOf[1] (Value): string. When the credit was applied to the invoice balance. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAllocatedAt(): string|null { return $this->get('allocated_at'); }
    public function hasAllocatedAt(): bool { return $this->has('allocated_at'); }
    /** Credit applied to the invoice balance. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Unique identifier of the allocation. anyOf[1] (Value): string. Unique identifier of the allocation. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteAllocationId(): string|null { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
    /** The credit note whose credit was applied. anyOf[1] (Value): string. The credit note whose credit was applied. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteId(): string|null { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The invoice whose balance the credit reduced. anyOf[1] (Value): string. The invoice whose balance the credit reduced. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the allocation was reversed and its credit returned. Absent while the allocation stands. anyOf[1] (Value): string. When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversedAt(): string|null { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". anyOf[1][] (Value): string.  Value enum: "reverse". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
