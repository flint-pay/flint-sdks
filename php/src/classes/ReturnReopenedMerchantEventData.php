<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReopenedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReopenedMerchantEventData extends Model {
    /** @param array{'object': object{'buyer_actions': list<mixed>, 'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'completed_at'?: string, 'completed_by'?: mixed, 'completion_blockers': list<mixed>, 'completion_mode'?: string, 'completion_reason'?: string, 'completion_reason_message'?: string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'decision_at'?: string, 'decision_status': string, 'external_reference_id'?: string, 'financial_summary': mixed, 'handoff_requirements': list<mixed>, 'initiated_by': string, 'line_items': list<mixed>, 'merchandise_status': string, 'metadata': mixed, 'order'?: mixed, 'order_id': string, 'policy_evaluation'?: mixed, 'resolution_status': string, 'return_disposition_ids': list<string>, 'return_dispositions'?: list<mixed>, 'return_id': string, 'return_inspection_ids': list<string>, 'return_inspections'?: list<mixed>, 'return_number': string, 'return_receipt_ids': list<string>, 'return_receipts'?: list<mixed>, 'return_resolution_ids': list<string>, 'return_resolutions'?: list<mixed>, 'shipment_ids': list<string>, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReopenedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ReturnReopenedMerchantEventDataObject
     */
    public function getObject(): ReturnReopenedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
