<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read OrderLineItemFulfillmentProfile|null $profile
 * @property-read string $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentComponent extends Model {
    /** @param array{'bundle_component_id': string, 'profile': mixed, 'quantity_per_line_item_unit': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponent')); }
    /** Shape $ (Value): string. ID of the bundle component these requirements apply to.
     * @return string
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentProfile} or null. Fulfillment requirements for this component. Shape $.anyOf[1] (Value): {@see OrderLineItemFulfillmentProfile}. Whether an order line item requires fulfillment, and the fulfillment types it allows. Shape $.anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfile|null
     */
    public function getProfile(): OrderLineItemFulfillmentProfile|null { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Shape $ (Value): integer string. Number of this component per unit of the order line item; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantityPerLineItemUnit(): string { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
