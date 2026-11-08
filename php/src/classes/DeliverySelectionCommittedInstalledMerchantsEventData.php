<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliverySelectionCommittedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionCommittedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: string, 'checkout_session_id'?: string, 'choices': list<mixed>, 'created_at'?: string, 'delivery_quote_id': string, 'delivery_quote_version'?: int, 'delivery_selection_id': string, 'destination_address'?: mixed, 'eligibility_context_version'?: int, 'expires_at': string, 'input_requirements': list<mixed>, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at'?: string, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: mixed, 'redacted_at'?: string, 'status': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DeliverySelectionCommittedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliverySelectionCommittedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
