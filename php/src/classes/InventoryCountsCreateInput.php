<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'inventory_item_ids': list<string>, 'location_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsCreateInput extends Model {
    /** @param array{'body': array{'inventory_item_ids': list<string>, 'location_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsCreateInput')); }
    /** The request body for: Create inventory count. Example: {"inventory_item_ids":["invi_01K1P6G4M7H2N8Q9R3S5T6V7WX"],"location_id":"loc_01K1P6G4M7H2N8Q9R3S5T6V7WX"}.
     * @return array{'inventory_item_ids': list<string>, 'location_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
