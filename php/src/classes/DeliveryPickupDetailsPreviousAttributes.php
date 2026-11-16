<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSummaryResourcePreviousAttributes|null $location
 * @property-read string|null $pickup_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupDetailsPreviousAttributes extends Model {
    /** @param array{'location'?: mixed, 'pickup_mode'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupDetailsPreviousAttributes')); }
    /** Location where the buyer collects the items. anyOf[1] (Value): {@see DeliveryLocationSummaryResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryLocationSummaryResourcePreviousAttributes|null
     */
    public function getLocation(): DeliveryLocationSummaryResourcePreviousAttributes|null { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** How the buyer collects the items at this Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[1] (Value): string. How the buyer collects the items at this Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickupMode(): string|null { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
}
