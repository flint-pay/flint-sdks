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
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundAllocation extends Model {
    /** @param array{'consideration_money': mixed, 'created_at': string, 'order_manual_reversal_id'?: string, 'purchase_refund_allocation_id': string, 'recovery'?: mixed, 'refund_id': string|null, 'status': string, 'updated_at': string, 'value_allocations'?: list<mixed>, 'value_money': mixed, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocation')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getConsiderationMoney(): MoneyValue { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderManualReversalId(): ?string { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Shape $ (Value): {@see GiftCardPurchaseRefundRecovery}. Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.
     * @return ?GiftCardPurchaseRefundRecovery
     */
    public function getRecovery(): ?GiftCardPurchaseRefundRecovery { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): string.  Value enum: "pending", "succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): Array of {@see GiftCardPurchaseRefundValueAllocation}. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. Shape $[] (Value): {@see GiftCardPurchaseRefundValueAllocation}. A gift card load and amount reserved or reversed for a gift card purchase refund.
     * @return ?list<GiftCardPurchaseRefundValueAllocation>
     */
    public function getValueAllocations(): ?array { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
