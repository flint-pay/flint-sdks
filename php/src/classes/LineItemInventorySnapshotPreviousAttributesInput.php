<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LineItemInventoryDemandPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $demands
 * @property-read string|null $inventory_tracking
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemInventorySnapshotPreviousAttributesInput extends Model {
    /** @param array{'demands'?: list<LineItemInventoryDemandPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'inventory_tracking'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventorySnapshotPreviousAttributesInput')); }
    /** The inventory items and quantities each unit of the line item uses. anyOf[1] (Value): Array of {@see LineItemInventoryDemandPreviousAttributesInput}. The inventory items and quantities each unit of the line item uses. anyOf[1][] (Value): {@see LineItemInventoryDemandPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<LineItemInventoryDemandPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): mixed { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". anyOf[1] (Value): string. Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_tracking is omitted; use hasInventoryTracking() or valueOrDefault().
     */
    public function getInventoryTracking(): mixed { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
}
