<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read list<OrderLineItemModifierPreviousAttributes>|null $modifiers
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read int|null $quantity
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentLineItemPreviousAttributes extends Model {
    /** @param array{'bundle_component_id'?: mixed, 'modifiers'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentLineItemPreviousAttributes')); }
    /** Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. anyOf[1] (Value): string. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Modifier selections snapshotted from the order line for fulfillment. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributes}. Modifier selections snapshotted from the order line for fulfillment. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributes>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Order that owns the referenced line item. anyOf[1] (Value): string. Order that owns the referenced line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Order line whose quantity is allocated to the fulfillment. anyOf[1] (Value): string. Order line whose quantity is allocated to the fulfillment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
