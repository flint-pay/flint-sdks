<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read OrderLineItemFulfillmentProfilePreviousAttributes|null $profile
 * @property-read int|null $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentComponentPreviousAttributes extends Model {
    /** @param array{'bundle_component_id'?: mixed, 'profile'?: mixed, 'quantity_per_line_item_unit'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponentPreviousAttributes')); }
    /** ID of the bundle component these requirements apply to. anyOf[1] (Value): string. ID of the bundle component these requirements apply to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Fulfillment requirements for this component. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfilePreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfilePreviousAttributes|null
     */
    public function getProfile(): OrderLineItemFulfillmentProfilePreviousAttributes|null { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Number of this component per unit of the order line item; fractional quantities are not supported. anyOf[1] (Value): integer. Number of this component per unit of the order line item; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantityPerLineItemUnit(): int|null { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
