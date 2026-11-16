<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderLineItemFulfillmentComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $components
 * @property-read OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $direct
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentRequirementsPreviousAttributesInput extends Model {
    /** @param array{'components'?: list<OrderLineItemFulfillmentComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'direct'?: OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentRequirementsPreviousAttributesInput')); }
    /** Fulfillment requirements for each bundle component. Present for bundle lines. anyOf[1] (Value): Array of {@see OrderLineItemFulfillmentComponentPreviousAttributesInput}. Fulfillment requirements for each bundle component. Present for bundle lines. anyOf[1][] (Value): {@see OrderLineItemFulfillmentComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemFulfillmentComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): mixed { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Fulfillment requirements for a single item. Present for non-bundle lines. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfilePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When direct is omitted; use hasDirect() or valueOrDefault().
     */
    public function getDirect(): mixed { return $this->get('direct'); }
    public function hasDirect(): bool { return $this->has('direct'); }
}
