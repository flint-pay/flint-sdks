<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress $address
 * @property-read ?string $instructions
 * @property-read string $location_id
 * @property-read string $name
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation extends Model {
    /** @param array{'address'?: mixed, 'instructions'?: string, 'location_id': string, 'name': string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocation')); }
    /** Shape $ (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress}. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress
     */
    public function getAddress(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
