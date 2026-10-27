<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderLineItemFulfillmentComponentInput|array<array-key, mixed>|\stdClass> $components
 * @property-read OrderLineItemFulfillmentProfileInput|array<array-key, mixed>|\stdClass $direct
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentRequirementsInput extends Model {
    /** @param array{'components'?: list<OrderLineItemFulfillmentComponentInput|array<array-key, mixed>|\stdClass>, 'direct'?: OrderLineItemFulfillmentProfileInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentRequirementsInput')); }
    /** Shape $ (Value): Array of {@see OrderLineItemFulfillmentComponentInput}. Fulfillment requirements for each bundle component. Present for bundle lines. Shape $[] (Value): {@see OrderLineItemFulfillmentComponentInput}. Fulfillment requirements for one component of a bundle line item, with the component quantity per unit.
     * @return list<OrderLineItemFulfillmentComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentProfileInput}. Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order line item requires fulfillment, and the fulfillment types it allows.
     * @return OrderLineItemFulfillmentProfileInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When direct is omitted; use hasDirect() or valueOrDefault().
     */
    public function getDirect(): mixed { return $this->get('direct'); }
    public function hasDirect(): bool { return $this->has('direct'); }
}
