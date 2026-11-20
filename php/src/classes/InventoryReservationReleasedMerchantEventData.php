<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read InventoryReservationReleasedMerchantEventDataObject $object
 * @property-read ?InventoryReservationReleasedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationReleasedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'closed_reason'?: string|null, 'created_at': string, 'expires_at': string|null, 'idempotency_key'?: string|null, 'inventory_action_required'?: mixed, 'inventory_reservation_id': string, 'inventory_routing_source': mixed, 'lines': list<mixed>, 'owner': mixed, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'closed_reason'?: mixed, 'created_at'?: mixed, 'expires_at'?: mixed, 'idempotency_key'?: mixed, 'inventory_action_required'?: mixed, 'inventory_reservation_id'?: mixed, 'inventory_routing_source'?: mixed, 'lines'?: mixed, 'owner'?: mixed, 'replacement_inventory_reservation_id'?: mixed, 'source_inventory_reservation_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationReleasedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return InventoryReservationReleasedMerchantEventDataObject
     */
    public function getObject(): InventoryReservationReleasedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?InventoryReservationReleasedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?InventoryReservationReleasedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
