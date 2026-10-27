<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $requirement
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentProfileInput extends Model {
    /** @param array{'allowed_types': list<string>, 'requirement': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentProfileInput')); }
    /** Shape $ (Value): Array of string. Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". Shape $[] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Shape $ (Value): string. Whether this item requires fulfillment. Value enum: "none", "required".
     * @return string
     * @throws SdkError When requirement is omitted; use hasRequirement() or valueOrDefault().
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
}
