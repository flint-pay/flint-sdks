<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read ?list<BuyerOrderLineItemModifier> $modifiers
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFulfillmentLineItem extends Model {
    /** @param array{'bundle_component_id': string|null, 'modifiers'?: list<mixed>, 'order_id': string, 'order_line_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFulfillmentLineItem')); }
    /** Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@see BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     * @return ?list<BuyerOrderLineItemModifier>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Order that owns the referenced line item.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Order line whose quantity is allocated to the fulfillment.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
