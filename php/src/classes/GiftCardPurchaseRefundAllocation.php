<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $consideration_money
 * @property-read string $created_at
 * @property-read ?string $order_manual_reversal_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read ?GiftCardPurchaseRefundRecovery $recovery
 * @property-read string|null $refund_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read ?list<GiftCardPurchaseRefundValueAllocation> $value_allocations
 * @property-read MoneyValue $value_money
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundAllocation extends Model {
    /** @param array{'consideration_money': mixed, 'created_at': string, 'order_manual_reversal_id'?: string, 'purchase_refund_allocation_id': string, 'recovery'?: mixed, 'refund_id': string|null, 'status': string, 'updated_at': string, 'value_allocations'?: list<mixed>, 'value_money': mixed, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocation')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getConsiderationMoney(): MoneyValue { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** order_manual_reversal_id
     * @return ?string
     */
    public function getOrderManualReversalId(): ?string { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** purchase_refund_allocation_id
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.
     * @return ?GiftCardPurchaseRefundRecovery
     */
    public function getRecovery(): ?GiftCardPurchaseRefundRecovery { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** refund_id
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Value enum: "pending", "succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. [] (Value): {@see GiftCardPurchaseRefundValueAllocation}. A gift card load and amount reserved or reversed for a gift card purchase refund.
     * @return ?list<GiftCardPurchaseRefundValueAllocation>
     */
    public function getValueAllocations(): ?array { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
