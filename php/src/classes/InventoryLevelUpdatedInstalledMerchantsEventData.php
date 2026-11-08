<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryLevelUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InventoryLevelUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'available_quantity': int, 'backordered_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: mixed, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InventoryLevelUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryLevelUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
