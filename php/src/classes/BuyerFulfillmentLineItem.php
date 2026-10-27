<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<BuyerOrderLineItemModifier> $modifiers
 * @property-read string $order_line_item_id
 * @property-read string $quantity
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFulfillmentLineItem extends Model {
    /** @param array{'modifiers'?: list<mixed>, 'order_line_item_id': string, 'quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFulfillmentLineItem')); }
    /** Shape $ (Value): Array of {@see BuyerOrderLineItemModifier}. Modifier selections snapshotted from the order line for fulfillment. Shape $[] (Value): {@see BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog modifier or entered text, with its quantity and price change.
     * @return ?list<BuyerOrderLineItemModifier>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string. Order line whose quantity is allocated to the fulfillment.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
