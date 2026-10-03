<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardMoney $consideration_money
 * @property-read string $created_at
 * @property-read string $order_manual_reversal_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read GiftCardPurchaseRefundRecovery $recovery
 * @property-read string $refund_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read list<GiftCardPurchaseRefundValueAllocation> $value_allocations
 * @property-read GiftCardMoney $value_money
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundAllocation extends Model {
    /** @param array{'consideration_money': object{'amount': string, 'currency': string}, 'created_at': string, 'order_manual_reversal_id'?: string, 'purchase_refund_allocation_id': string, 'recovery'?: object{'created_at': string, 'destination': string, 'destinations': list<mixed>}, 'refund_id'?: string, 'status': string, 'updated_at': string, 'value_allocations'?: list<mixed>, 'value_money': object{'amount': string, 'currency': string}, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundAllocation')); }
    /** @return GiftCardMoney
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): GiftCardMoney { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When order_manual_reversal_id is omitted; use hasOrderManualReversalId() or valueOrDefault().
     */
    public function getOrderManualReversalId(): string { return $this->get('order_manual_reversal_id'); }
    public function hasOrderManualReversalId(): bool { return $this->has('order_manual_reversal_id'); }
    /** @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** @return GiftCardPurchaseRefundRecovery
     * @throws SdkError When recovery is omitted; use hasRecovery() or valueOrDefault().
     */
    public function getRecovery(): GiftCardPurchaseRefundRecovery { return $this->get('recovery'); }
    public function hasRecovery(): bool { return $this->has('recovery'); }
    /** @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return list<GiftCardPurchaseRefundValueAllocation>
     * @throws SdkError When value_allocations is omitted; use hasValueAllocations() or valueOrDefault().
     */
    public function getValueAllocations(): array { return $this->get('value_allocations'); }
    public function hasValueAllocations(): bool { return $this->has('value_allocations'); }
    /** @return GiftCardMoney
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): GiftCardMoney { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
