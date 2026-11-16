<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnInspectionSupersededInstalledMerchantsEventDataObject $object
 * @property-read ?ReturnInspectionSupersededInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionSupersededInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<mixed>, 'inspected_at': string, 'inspection_location_id': string, 'line_items': list<mixed>, 'return_id': string, 'return_inspection_id': string, 'return_receipt_id': string, 'source_system': mixed, 'status': string, 'superseded_at'?: string, 'superseded_by_return_inspection_id'?: string, 'supersedes_return_inspection_id'?: string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'correction_reason'?: mixed, 'correction_reason_message'?: mixed, 'created_at'?: mixed, 'external_actor_id'?: mixed, 'external_reference_id'?: mixed, 'generated_dispositions'?: mixed, 'inspected_at'?: mixed, 'inspection_location_id'?: mixed, 'line_items'?: mixed, 'return_id'?: mixed, 'return_inspection_id'?: mixed, 'return_receipt_id'?: mixed, 'source_system'?: mixed, 'status'?: mixed, 'superseded_at'?: mixed, 'superseded_by_return_inspection_id'?: mixed, 'supersedes_return_inspection_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionSupersededInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ReturnInspectionSupersededInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnInspectionSupersededInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ReturnInspectionSupersededInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ReturnInspectionSupersededInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
