<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $delivery_location_set_id
 * @property-read ?string $delivery_location_set_revision_id
 * @property-read string $location_id
 * @property-read ?list<string> $location_ids
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationOriginFixedLocation extends Model {
    /** @param array{'delivery_location_set_id'?: string, 'delivery_location_set_revision_id'?: string, 'location_id': string, 'location_ids'?: list<string>, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationOriginFixedLocation')); }
    /** delivery_location_set_id
     * @return ?string
     */
    public function getDeliveryLocationSetId(): ?string { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** delivery_location_set_revision_id
     * @return ?string
     */
    public function getDeliveryLocationSetRevisionId(): ?string { return $this->get('delivery_location_set_revision_id'); }
    public function hasDeliveryLocationSetRevisionId(): bool { return $this->has('delivery_location_set_revision_id'); }
    /** location_id
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /**  [] (Value): string.
     * @return ?list<string>
     */
    public function getLocationIds(): ?array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** Value enum: "fixed_location".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
