<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $requirement
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentProfile extends Model {
    /** @param array{'allowed_types': list<string>, 'requirement': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentProfile')); }
    /** Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * @return list<string>
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this item requires fulfillment. Value enum: "none", "required".
     * @return string
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
}
