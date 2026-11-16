<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_types
 * @property-read string|null $requirement
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentProfilePreviousAttributes extends Model {
    /** @param array{'allowed_types'?: mixed, 'requirement'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentProfilePreviousAttributes')); }
    /** Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string. Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedTypes(): array|null { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this item requires fulfillment. Value enum: "none", "required". anyOf[1] (Value): string. Whether this item requires fulfillment. Value enum: "none", "required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequirement(): string|null { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
}
