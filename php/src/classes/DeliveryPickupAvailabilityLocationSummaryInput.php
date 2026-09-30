<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $location_id
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupAvailabilityLocationSummaryInput extends Model {
    /** @param array{'address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'location_id': string, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationSummaryInput')); }
    /** @return DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
