<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentCanceledInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentCanceledInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'active_hold'?: mixed, 'charges'?: list<mixed>, 'completed_at'?: string, 'created_at': string, 'customer_id'?: string, 'delivery_choice_group_id': string|null, 'delivery_execution_leg_id': string|null, 'delivery_method_id': string|null, 'delivery_selection_id': string|null, 'device_id'?: string, 'digital_details'?: mixed, 'dispatched_at'?: string, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'order'?: mixed, 'order_id': string, 'order_number'?: string, 'outcome'?: mixed, 'packages'?: list<mixed>, 'packed_at'?: string, 'picked_at'?: string, 'pickup_details'?: mixed, 'recipient'?: mixed, 'scheduled_start_at': string|null, 'service_details'?: mixed, 'shipment_details'?: mixed, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string, 'type': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentCanceledInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return FulfillmentCanceledInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentCanceledInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
