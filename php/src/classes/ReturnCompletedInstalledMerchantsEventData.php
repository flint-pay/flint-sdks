<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnCompletedInstalledMerchantsEventDataActor $actor
 * @property-read ReturnCompletedInstalledMerchantsEventDataObject $object
 * @property-read ?ReturnCompletedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCompletedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'completed_at'?: string, 'completed_by'?: mixed, 'completion_blockers': list<mixed>, 'completion_mode'?: string, 'completion_reason'?: string, 'completion_reason_message'?: string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'decision_at'?: string, 'decision_status': string, 'external_reference_id'?: string, 'financial_summary': mixed, 'handoff_requirements': list<mixed>, 'idempotency_key'?: string|null, 'initiated_by': string, 'line_items': list<mixed>, 'merchandise_status': string, 'metadata': mixed, 'order'?: mixed, 'order_id': string, 'policy_evaluation'?: mixed, 'resolution_status': string, 'return_disposition_ids': list<string>, 'return_dispositions'?: list<mixed>, 'return_id': string, 'return_inspection_ids': list<string>, 'return_inspections'?: list<mixed>, 'return_number': string, 'return_receipt_ids': list<string>, 'return_receipts'?: list<mixed>, 'return_resolution_ids': list<string>, 'return_resolutions'?: list<mixed>, 'shipment_ids': list<string>, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'canceled_at'?: mixed, 'canceled_by'?: mixed, 'cancellation_reason'?: mixed, 'cancellation_reason_message'?: mixed, 'completed_at'?: mixed, 'completed_by'?: mixed, 'completion_blockers'?: mixed, 'completion_mode'?: mixed, 'completion_reason'?: mixed, 'completion_reason_message'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'decision_at'?: mixed, 'decision_status'?: mixed, 'external_reference_id'?: mixed, 'financial_summary'?: mixed, 'handoff_requirements'?: mixed, 'idempotency_key'?: mixed, 'initiated_by'?: mixed, 'line_items'?: mixed, 'merchandise_status'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'policy_evaluation'?: mixed, 'resolution_status'?: mixed, 'return_disposition_ids'?: mixed, 'return_dispositions'?: mixed, 'return_id'?: mixed, 'return_inspection_ids'?: mixed, 'return_inspections'?: mixed, 'return_number'?: mixed, 'return_receipt_ids'?: mixed, 'return_receipts'?: mixed, 'return_resolution_ids'?: mixed, 'return_resolutions'?: mixed, 'shipment_ids'?: mixed, 'shipments'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnCompletedInstalledMerchantsEventDataActor
     */
    public function getActor(): ?ReturnCompletedInstalledMerchantsEventDataActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ReturnCompletedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnCompletedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ReturnCompletedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ReturnCompletedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
