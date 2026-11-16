<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSummaryResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $location
 * @property-read string|null $pickup_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupDetailsPreviousAttributesInput extends Model {
    /** @param array{'location'?: DeliveryLocationSummaryResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'pickup_mode'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupDetailsPreviousAttributesInput')); }
    /** Location where the buyer collects the items. anyOf[1] (Value): {@see DeliveryLocationSummaryResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryLocationSummaryResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** How the buyer collects the items at this Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[1] (Value): string. How the buyer collects the items at this Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): mixed { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
}
