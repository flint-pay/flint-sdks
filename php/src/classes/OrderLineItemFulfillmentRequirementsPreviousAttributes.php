<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderLineItemFulfillmentComponentPreviousAttributes>|null $components
 * @property-read OrderLineItemFulfillmentProfilePreviousAttributes|null $direct
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentRequirementsPreviousAttributes extends Model {
    /** @param array{'components'?: mixed, 'direct'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentRequirementsPreviousAttributes')); }
    /** Fulfillment requirements for each bundle component. Present for bundle lines. anyOf[1] (Value): Array of {@see OrderLineItemFulfillmentComponentPreviousAttributes}. Fulfillment requirements for each bundle component. Present for bundle lines. anyOf[1][] (Value): {@see OrderLineItemFulfillmentComponentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemFulfillmentComponentPreviousAttributes>|null
     */
    public function getComponents(): array|null { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Fulfillment requirements for a single item. Present for non-bundle lines. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfilePreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfilePreviousAttributes|null
     */
    public function getDirect(): OrderLineItemFulfillmentProfilePreviousAttributes|null { return $this->get('direct'); }
    public function hasDirect(): bool { return $this->has('direct'); }
}
