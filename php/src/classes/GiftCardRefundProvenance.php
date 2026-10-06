<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue|null $original_consideration_money
 * @property-read string $original_created_at
 * @property-read \stdClass $original_source
 * @property-read string|null $original_source_created_at
 * @property-read string $refund_allocation_id
 * @property-read string $root_gift_card_id
 * @property-read string $root_gift_card_load_id
 * @property-read string $source_gift_card_id
 * @property-read string $source_gift_card_redemption_id
 * @property-read string $source_purchase_refund_allocation_id
 * @property-read string $source_refund_id
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardRefundProvenance extends Model {
    /** @param array{'original_consideration_money': mixed, 'original_created_at': string, 'original_source': \stdClass, 'original_source_created_at': string|null, 'refund_allocation_id': string, 'root_gift_card_id': string, 'root_gift_card_load_id': string, 'source_gift_card_id': string, 'source_gift_card_redemption_id': string, 'source_purchase_refund_allocation_id'?: string, 'source_refund_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRefundProvenance')); }
    /** @return MoneyValue|null
     * @throws SdkError When original_consideration_money is omitted; use hasOriginalConsiderationMoney() or valueOrDefault().
     */
    public function getOriginalConsiderationMoney(): MoneyValue|null { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** @return string
     * @throws SdkError When original_created_at is omitted; use hasOriginalCreatedAt() or valueOrDefault().
     */
    public function getOriginalCreatedAt(): string { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** @return \stdClass
     * @throws SdkError When original_source is omitted; use hasOriginalSource() or valueOrDefault().
     */
    public function getOriginalSource(): \stdClass { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** @return string|null
     * @throws SdkError When original_source_created_at is omitted; use hasOriginalSourceCreatedAt() or valueOrDefault().
     */
    public function getOriginalSourceCreatedAt(): string|null { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** @return string
     * @throws SdkError When refund_allocation_id is omitted; use hasRefundAllocationId() or valueOrDefault().
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** @return string
     * @throws SdkError When root_gift_card_id is omitted; use hasRootGiftCardId() or valueOrDefault().
     */
    public function getRootGiftCardId(): string { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** @return string
     * @throws SdkError When root_gift_card_load_id is omitted; use hasRootGiftCardLoadId() or valueOrDefault().
     */
    public function getRootGiftCardLoadId(): string { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** @return string
     * @throws SdkError When source_gift_card_id is omitted; use hasSourceGiftCardId() or valueOrDefault().
     */
    public function getSourceGiftCardId(): string { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** @return string
     * @throws SdkError When source_gift_card_redemption_id is omitted; use hasSourceGiftCardRedemptionId() or valueOrDefault().
     */
    public function getSourceGiftCardRedemptionId(): string { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** @return string
     * @throws SdkError When source_purchase_refund_allocation_id is omitted; use hasSourcePurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getSourcePurchaseRefundAllocationId(): string { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** @return string
     * @throws SdkError When source_refund_id is omitted; use hasSourceRefundId() or valueOrDefault().
     */
    public function getSourceRefundId(): string { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
