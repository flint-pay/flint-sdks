<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read string|null $refund_id
 * @property-read string|null $root_gift_card_id
 * @property-read string|null $root_gift_card_load_id
 * @property-read mixed $value_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundValueHoldPreviousAttributes extends Model {
    /** @param array{'purchase_refund_allocation_id'?: mixed, 'refund_id'?: mixed, 'root_gift_card_id'?: mixed, 'root_gift_card_load_id'?: mixed, 'value_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundValueHoldPreviousAttributes')); }
    /** ID of the pending purchase refund entry that holds the value. anyOf[1] (Value): string. ID of the pending purchase refund entry that holds the value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPurchaseRefundAllocationId(): string|null { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** ID of the pending refund that holds the value. anyOf[1] (Value): string. ID of the pending refund that holds the value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** ID of the original card whose purchase is being refunded. anyOf[1] (Value): string. ID of the original card whose purchase is being refunded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRootGiftCardId(): string|null { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** ID of the original funding load that is being refunded. anyOf[1] (Value): string. ID of the original funding load that is being refunded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRootGiftCardLoadId(): string|null { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** The unspent value held. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
