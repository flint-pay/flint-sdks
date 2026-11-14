<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $original_gift_card_id
 * @property-read string $original_gift_card_load_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read int $unit_ordinal
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRestoration extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'original_gift_card_id': string, 'original_gift_card_load_id': string, 'purchase_refund_allocation_id': string, 'unit_ordinal': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRestoration')); }
    /** ID of the original purchase order whose line item sold the gift card.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item that sold the gift card.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed.
     * @return string
     */
    public function getOriginalGiftCardId(): string { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** ID of the load on the original card that the refund or reversal removed value from.
     * @return string
     */
    public function getOriginalGiftCardLoadId(): string { return $this->get('original_gift_card_load_id'); }
    public function hasOriginalGiftCardLoadId(): bool { return $this->has('original_gift_card_load_id'); }
    /** ID of the purchase refund entry on the original load whose removed value this load restores.
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Which unit of the line item's quantity the card was issued for, starting at 1. Format: int64.
     * @return int
     */
    public function getUnitOrdinal(): int { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
