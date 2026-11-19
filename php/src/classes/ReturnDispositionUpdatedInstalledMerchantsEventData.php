<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnDispositionUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?ReturnDispositionUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReturnDispositionUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string, 'created_by': mixed, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'idempotency_key': string|null, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': mixed, 'occurred_at': string, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_id': string|null, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id': string|null, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'canceled_at'?: mixed, 'canceled_by'?: mixed, 'cancellation_reason'?: mixed, 'cancellation_reason_message'?: mixed, 'created_at'?: mixed, 'created_by'?: mixed, 'disposition_type'?: mixed, 'external_reference_id'?: mixed, 'failure_code'?: mixed, 'failure_message'?: mixed, 'idempotency_key'?: mixed, 'inventory_location_id'?: mixed, 'inventory_movement_ids'?: mixed, 'inventory_receipt_id'?: mixed, 'metadata'?: mixed, 'occurred_at'?: mixed, 'quantity'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'replaced_by_return_disposition_id'?: mixed, 'replaces_return_disposition_id'?: mixed, 'return_disposition_id'?: mixed, 'return_id'?: mixed, 'return_inspection_id'?: mixed, 'return_inspection_line_item_id'?: mixed, 'return_line_item_id'?: mixed, 'return_receipt_id'?: mixed, 'return_receipt_line_item_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ReturnDispositionUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnDispositionUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ReturnDispositionUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ReturnDispositionUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
