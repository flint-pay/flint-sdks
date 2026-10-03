<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $purchase_refund_allocation_id
 * @property-read string $refund_id
 * @property-read string $root_gift_card_id
 * @property-read string $root_gift_card_load_id
 * @property-read GiftCardMoney $value_money
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundValueHold extends Model {
    /** @param array{'purchase_refund_allocation_id': string, 'refund_id': string, 'root_gift_card_id': string, 'root_gift_card_load_id': string, 'value_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundValueHold')); }
    /** @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
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
    /** @return GiftCardMoney
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): GiftCardMoney { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
