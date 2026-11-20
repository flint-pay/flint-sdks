<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read DeliverySelectionCommittedInstalledMerchantsEventDataObject $object
 * @property-read ?DeliverySelectionCommittedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionCommittedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: string, 'checkout_session_id'?: string, 'choices': list<mixed>, 'created_at'?: string, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: mixed, 'expires_at': string, 'input_requirements': list<mixed>, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at'?: string, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: mixed, 'redacted_at'?: string, 'status': string, 'supported_actions': list<string>}, 'previous_attributes'?: object{'amount_money'?: mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: mixed, 'checkout_session_id'?: mixed, 'choices'?: mixed, 'created_at'?: mixed, 'delivery_quote_id'?: mixed, 'delivery_selection_id'?: mixed, 'destination_address'?: mixed, 'expires_at'?: mixed, 'input_requirements'?: mixed, 'instructions'?: mixed, 'lifecycle_events'?: mixed, 'lifecycle_updated_at'?: mixed, 'limiting_deadline_reason'?: mixed, 'order_id'?: mixed, 'private_data_status'?: mixed, 'recipient'?: mixed, 'redacted_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DeliverySelectionCommittedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliverySelectionCommittedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?DeliverySelectionCommittedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?DeliverySelectionCommittedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
