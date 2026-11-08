<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEventCreatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentEventCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'buyer_notification_behavior': string, 'created_at': string, 'current_status'?: string, 'custom_details'?: \stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string, 'order'?: mixed, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string, 'shipment_id'?: string, 'subject_type': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventCreatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return FulfillmentEventCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentEventCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
