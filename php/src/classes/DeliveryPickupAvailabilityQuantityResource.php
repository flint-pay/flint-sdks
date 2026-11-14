<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_component_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupAvailabilityQuantityResource extends Model {
    /** @param array{'bundle_component_id'?: string, 'order_id': string, 'order_line_item_id': string, 'quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityQuantityResource')); }
    /** ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle.
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** ID of the order that owns this line item. Checkout credentials receive only their own session's order ID.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item.
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
