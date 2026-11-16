<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $consideration_money
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $order_manual_reversal_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read GiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recovery
 * @property-read string|null|null $refund_id
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read list<GiftCardPurchaseRefundValueAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $value_allocations
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $value_money
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundAllocationPreviousAttributesInput extends Model {
    /** @param array{'consideration_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'order_manual_reversal_id'?: string|null, 'purchase_refund_allocation_id'?: string|null, 'recovery'?: GiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refund_id'?: string|null|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'value_allocations'?: list<GiftCardPurchaseRefundValueAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'value_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocationPreviousAttributesInput')); }
    /** The part of the amount the buyer paid that this refund or reversal returns. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. anyOf[1] (Value): string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: "omp_01KEZF7C007J18203RBJKB9TYE". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_manual_reversal_id is omitted; use hasOrderManualReversalId() or valueOrDefault().
     */
    public function getOrderManualReversalId(): mixed { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** ID of this entry in the load's purchase refunds. anyOf[1] (Value): string. ID of this entry in the load's purchase refunds. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): mixed { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** How the value was restored after the refund failed. `null` when no recovery happened. anyOf[1] (Value): {@see GiftCardPurchaseRefundRecoveryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recovery is omitted; use hasRecovery() or valueOrDefault().
     */
    public function getRecovery(): mixed { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** ID of the refund. `null` when the entry reverses a manual payment, which has no refund. anyOf[1] (Value): string or null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Whether the refund has succeeded, failed, or is still pending. Value enum: "pending", "succeeded", "failed". anyOf[1] (Value): string. Whether the refund has succeeded, failed, or is still pending. Value enum: "pending", "succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundValueAllocationPreviousAttributesInput}. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. anyOf[1][] (Value): {@see GiftCardPurchaseRefundValueAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundValueAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When value_allocations is omitted; use hasValueAllocations() or valueOrDefault().
     */
    public function getValueAllocations(): mixed { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** The unspent face value this entry removes from the load. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
