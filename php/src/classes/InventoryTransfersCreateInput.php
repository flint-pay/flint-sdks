<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'destination_location_id': string, 'external_reference_id'?: string, 'lines': list<array{'condition'?: string, 'inventory_item_id': string, 'requested_quantity': int}|object>, 'note'?: string, 'origin_location_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersCreateInput extends Model {
    /** @param array{'body': array{'destination_location_id': string, 'external_reference_id'?: string, 'lines': list<array{'condition'?: string, 'inventory_item_id': string, 'requested_quantity': int}|object>, 'note'?: string, 'origin_location_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersCreateInput')); }
    /** The request body for: Create inventory transfer. Example: {"destination_location_id":"loc_01K1P6G4M7H2N8Q9R3S5T6V7WX","lines":[{"inventory_item_id":"invi_01K1P6G4M7H2N8Q9R3S5T6V7WX","requested_quantity":1}],"origin_location_id":"loc_01K1P6G4M7H2N8Q9R3S5T6V7WX"}.
     * @return array{'destination_location_id': string, 'external_reference_id'?: string, 'lines': list<array{'condition'?: string, 'inventory_item_id': string, 'requested_quantity': int}|object>, 'note'?: string, 'origin_location_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
