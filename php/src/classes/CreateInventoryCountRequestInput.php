<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $inventory_item_ids
 * @property-read string $location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInventoryCountRequestInput extends Model {
    /** @param array{'inventory_item_ids': list<string>, 'location_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInventoryCountRequestInput')); }
    /** IDs of the inventory items to count at the Location, from 1 to 100. minItems: 1. maxItems: 100. [] (Value): string. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * @return list<string>
     * @throws SdkError When inventory_item_ids is omitted; use hasInventoryItemIds() or valueOrDefault().
     */
    public function getInventoryItemIds(): array { return $this->get('inventory_item_ids'); }
    public function hasInventoryItemIds(): bool { return $this->has('inventory_item_ids'); }
    /** ID of the Location whose stock is counted. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
