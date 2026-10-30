<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $location_id
 * @property-read array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationsUpdateInput extends Model {
    /** @param array{'location_id': string, 'body': array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationsUpdateInput')); }
    /** Flint Location ID. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. Example: {"expected_version":4,"inventory_allocation_enabled":true,"name":"Brooklyn warehouse (Kent Ave)","timezone":"America/New_York"}.
     * @return array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
