<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferClosedMerchantEventDataObject $object
 * @property-read ?InventoryTransferClosedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferClosedMerchantEventData extends Model {
    /** @param array{'object': object{'closed_at'?: string, 'closed_reason'?: string|null, 'created_at': string, 'departed_at'?: string, 'destination_location_id': string, 'external_reference_id'?: string, 'idempotency_key'?: string|null, 'inventory_transfer_id': string, 'lines': list<mixed>, 'note'?: string, 'origin_location_id': string, 'received_at'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'closed_at'?: mixed, 'closed_reason'?: mixed, 'created_at'?: mixed, 'departed_at'?: mixed, 'destination_location_id'?: mixed, 'external_reference_id'?: mixed, 'idempotency_key'?: mixed, 'inventory_transfer_id'?: mixed, 'lines'?: mixed, 'note'?: mixed, 'origin_location_id'?: mixed, 'received_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferClosedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InventoryTransferClosedMerchantEventDataObject
     */
    public function getObject(): InventoryTransferClosedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InventoryTransferClosedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InventoryTransferClosedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
