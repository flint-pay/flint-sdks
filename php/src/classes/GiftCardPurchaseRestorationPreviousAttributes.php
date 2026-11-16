<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $original_gift_card_id
 * @property-read string|null $original_gift_card_load_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read int|null $unit_ordinal
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRestorationPreviousAttributes extends Model {
    /** @param array{'order_id'?: mixed, 'order_line_item_id'?: mixed, 'original_gift_card_id'?: mixed, 'original_gift_card_load_id'?: mixed, 'purchase_refund_allocation_id'?: mixed, 'unit_ordinal'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRestorationPreviousAttributes')); }
    /** ID of the original purchase order whose line item sold the gift card. anyOf[1] (Value): string. ID of the original purchase order whose line item sold the gift card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item that sold the gift card. anyOf[1] (Value): string. ID of the order line item that sold the gift card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. anyOf[1] (Value): string. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalGiftCardId(): string|null { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** ID of the load on the original card that the refund or reversal removed value from. anyOf[1] (Value): string. ID of the load on the original card that the refund or reversal removed value from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalGiftCardLoadId(): string|null { return $this->get('original_gift_card_load_id'); }
    public function hasOriginalGiftCardLoadId(): bool { return $this->has('original_gift_card_load_id'); }
    /** ID of the purchase refund entry on the original load whose removed value this load restores. anyOf[1] (Value): string. ID of the purchase refund entry on the original load whose removed value this load restores. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPurchaseRefundAllocationId(): string|null { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Which unit of the line item's quantity the card was issued for, starting at 1. anyOf[1] (Value): integer. Which unit of the line item's quantity the card was issued for, starting at 1. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUnitOrdinal(): int|null { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
