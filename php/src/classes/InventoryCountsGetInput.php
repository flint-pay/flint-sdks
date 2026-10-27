<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_count_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsGetInput extends Model {
    /** @param array{'inventory_count_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
}
