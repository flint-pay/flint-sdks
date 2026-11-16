<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read int|null $quantity
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteLineItemResourcePreviousAttributes extends Model {
    /** @param array{'bundle_component_id'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteLineItemResourcePreviousAttributes')); }
    /** ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. anyOf[1] (Value): string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. anyOf[1] (Value): string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item. anyOf[1] (Value): string. ID of the order line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
