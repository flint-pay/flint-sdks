<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_transfer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersGetInput extends Model {
    /** @param array{'inventory_transfer_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_transfer_id is omitted; use hasInventoryTransferId() or valueOrDefault().
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
}
