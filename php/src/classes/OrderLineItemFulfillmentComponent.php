<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read OrderLineItemFulfillmentProfile|null $profile
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentComponent extends Model {
    /** @param array{'bundle_component_id': string, 'profile': mixed, 'quantity_per_line_item_unit': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponent')); }
    /** ID of the bundle component these requirements apply to.
     * @return string
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Fulfillment requirements for this component. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfile}. Whether an order line item requires fulfillment, and the fulfillment types it allows. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfile|null
     */
    public function getProfile(): OrderLineItemFulfillmentProfile|null { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Number of this component per unit of the order line item; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
