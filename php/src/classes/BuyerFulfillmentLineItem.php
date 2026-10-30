<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<BuyerOrderLineItemModifier> $modifiers
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFulfillmentLineItem extends Model {
    /** @param array{'modifiers'?: list<mixed>, 'order_line_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFulfillmentLineItem')); }
    /** Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@see BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog modifier or entered text, with its quantity and price change.
     * @return ?list<BuyerOrderLineItemModifier>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Order line whose quantity is allocated to the fulfillment.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
