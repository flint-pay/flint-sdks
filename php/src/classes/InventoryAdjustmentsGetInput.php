<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_adjustment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentsGetInput extends Model {
    /** @param array{'inventory_adjustment_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentsGetInput')); }
    /** Flint inventory adjustment ID. Example: "invadj_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_adjustment_id is omitted; use hasInventoryAdjustmentId() or valueOrDefault().
     */
    public function getInventoryAdjustmentId(): string { return $this->get('inventory_adjustment_id'); }
    public function hasInventoryAdjustmentId(): bool { return $this->has('inventory_adjustment_id'); }
}
