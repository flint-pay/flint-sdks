<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation $location
 * @property-read string $pickup_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup extends Model {
    /** @param array{'location'?: mixed, 'pickup_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickup')); }
    /** Shape $ (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation}. A pickup location shown on a delivery option: its name, address, instructions, and timezone.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation
     */
    public function getLocation(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionPickupLocation { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other".
     * @return string
     */
    public function getPickupMode(): string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
}
