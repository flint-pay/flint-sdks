<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $purchase_refund_allocation_id
 * @property-read string $refund_id
 * @property-read string $root_gift_card_id
 * @property-read string $root_gift_card_load_id
 * @property-read MoneyValue $value_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundValueHold extends Model {
    /** @param array{'purchase_refund_allocation_id': string, 'refund_id': string, 'root_gift_card_id': string, 'root_gift_card_load_id': string, 'value_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundValueHold')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRootGiftCardId(): string { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRootGiftCardLoadId(): string { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
