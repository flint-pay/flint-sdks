<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $consideration_money
 * @property-read string|null $created_at
 * @property-read string|null $order_manual_reversal_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read mixed $recovery
 * @property-read mixed $refund_id
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read list<GiftCardPurchaseRefundValueAllocationPreviousAttributes>|null $value_allocations
 * @property-read mixed $value_money
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundAllocationPreviousAttributes extends Model {
    /** @param array{'consideration_money'?: mixed, 'created_at'?: mixed, 'order_manual_reversal_id'?: mixed, 'purchase_refund_allocation_id'?: mixed, 'recovery'?: mixed, 'refund_id'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'value_allocations'?: mixed, 'value_money'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocationPreviousAttributes')); }
    /** The part of the amount the buyer paid that this refund or reversal returns. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. anyOf[1] (Value): string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderManualReversalId(): string|null { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** ID of this entry in the load's purchase refunds. anyOf[1] (Value): string. ID of this entry in the load's purchase refunds. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPurchaseRefundAllocationId(): string|null { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** How the value was restored after the refund failed. `null` when no recovery happened. anyOf[1] (Value): {@see GiftCardPurchaseRefundRecoveryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRecovery(): mixed { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** ID of the refund. `null` when the entry reverses a manual payment, which has no refund. anyOf[1] (Value): string or null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Whether the refund has succeeded, failed, or is still pending. Value enum: "pending", "succeeded", "failed". anyOf[1] (Value): string. Whether the refund has succeeded, failed, or is still pending. Value enum: "pending", "succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundValueAllocationPreviousAttributes}. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. anyOf[1][] (Value): {@see GiftCardPurchaseRefundValueAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundValueAllocationPreviousAttributes>|null
     */
    public function getValueAllocations(): array|null { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** The unspent face value this entry removes from the load. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
