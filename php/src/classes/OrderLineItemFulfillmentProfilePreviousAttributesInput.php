<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_types
 * @property-read string|null $requirement
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentProfilePreviousAttributesInput extends Model {
    /** @param array{'allowed_types'?: list<string>|null, 'requirement'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentProfilePreviousAttributesInput')); }
    /** Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string. Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): mixed { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this item requires fulfillment. Value enum: "none", "required". anyOf[1] (Value): string. Whether this item requires fulfillment. Value enum: "none", "required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When requirement is omitted; use hasRequirement() or valueOrDefault().
     */
    public function getRequirement(): mixed { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
}
