<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $address
 * @property-read string $destination_type
 * @property-read string $location_id
 * @property-read string $name
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnHandoffDestination extends Model {
    /** @param array{'address'?: mixed, 'destination_type': string, 'location_id'?: string, 'name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffDestination')); }
    /** @return PostalAddress
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): PostalAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When destination_type is omitted; use hasDestinationType() or valueOrDefault().
     */
    public function getDestinationType(): string { return $this->get('destination_type'); }
    public function hasDestinationType(): bool { return $this->has('destination_type'); }
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
