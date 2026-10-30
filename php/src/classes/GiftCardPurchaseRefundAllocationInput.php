<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $consideration_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $order_manual_reversal_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read GiftCardPurchaseRefundRecoveryInput|array<array-key, mixed>|\stdClass $recovery
 * @property-read string|null $refund_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read list<GiftCardPurchaseRefundValueAllocationInput|array<array-key, mixed>|\stdClass> $value_allocations
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $value_money
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundAllocationInput extends Model {
    /** @param array{'consideration_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'order_manual_reversal_id'?: string, 'purchase_refund_allocation_id': string, 'recovery'?: GiftCardPurchaseRefundRecoveryInput|array<array-key, mixed>|\stdClass, 'refund_id': string|null, 'status': string, 'updated_at': string|\DateTimeInterface, 'value_allocations'?: list<GiftCardPurchaseRefundValueAllocationInput|array<array-key, mixed>|\stdClass>, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocationInput')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** order_manual_reversal_id
     * @return string
     * @throws SdkError When order_manual_reversal_id is omitted; use hasOrderManualReversalId() or valueOrDefault().
     */
    public function getOrderManualReversalId(): string { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** purchase_refund_allocation_id
     * @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.
     * @return GiftCardPurchaseRefundRecoveryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recovery is omitted; use hasRecovery() or valueOrDefault().
     */
    public function getRecovery(): mixed { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** refund_id
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Value enum: "pending", "succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. [] (Value): {@see GiftCardPurchaseRefundValueAllocationInput}. A gift card load and amount reserved or reversed for a gift card purchase refund.
     * @return list<GiftCardPurchaseRefundValueAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When value_allocations is omitted; use hasValueAllocations() or valueOrDefault().
     */
    public function getValueAllocations(): array { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
