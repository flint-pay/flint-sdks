<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<OrderLineItemFulfillmentComponent> $components
 * @property-read ?OrderLineItemFulfillmentProfile $direct
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentRequirements extends Model {
    /** @param array{'components'?: list<mixed>, 'direct'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentRequirements')); }
    /** Shape $ (Value): Array of {@see OrderLineItemFulfillmentComponent}. Fulfillment requirements for each bundle component. Present for bundle lines. Shape $[] (Value): {@see OrderLineItemFulfillmentComponent}. Fulfillment requirements for one component of a bundle line item, with the component quantity per unit.
     * @return ?list<OrderLineItemFulfillmentComponent>
     */
    public function getComponents(): ?array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentProfile}. Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order line item requires fulfillment, and the fulfillment types it allows.
     * @return ?OrderLineItemFulfillmentProfile
     */
    public function getDirect(): ?OrderLineItemFulfillmentProfile { return $this->get('direct'); }
    public function hasDirect(): bool { return $this->has('direct'); }
}
