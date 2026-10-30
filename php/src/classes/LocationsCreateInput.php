<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory_allocation_enabled'?: bool, 'metadata'?: mixed, 'name': string, 'status'?: string, 'timezone': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationsCreateInput extends Model {
    /** @param array{'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory_allocation_enabled'?: bool, 'metadata'?: mixed, 'name': string, 'status'?: string, 'timezone': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationsCreateInput')); }
    /** The request body for: Create location. Example: {"address":{"city":"Brooklyn","country":"US","line1":"120 Kent Avenue","postal_code":"11249","state":"NY"},"inventory_allocation_enabled":true,"name":"Brooklyn warehouse","status":"active","timezone":"America/New_York"}.
     * @return array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory_allocation_enabled'?: bool, 'metadata'?: mixed, 'name': string, 'status'?: string, 'timezone': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
