<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationCallbackActivatedEventDataObject $object
 * @property-read ?TaxCalculationCallbackActivatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackActivatedEventData extends Model {
    /** @param array{'object': object{'circuit_failure_count': int, 'circuit_state': string, 'configuration': mixed, 'created_at': string, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'circuit_failure_count'?: mixed, 'circuit_state'?: mixed, 'configuration'?: mixed, 'created_at'?: mixed, 'current_tax_calculation_callback_revision_id'?: mixed, 'external_reference_id'?: mixed, 'key_id'?: mixed, 'name'?: mixed, 'secret'?: mixed, 'signing_methods'?: mixed, 'status'?: mixed, 'tax_calculation_callback_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackActivatedEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return TaxCalculationCallbackActivatedEventDataObject
     */
    public function getObject(): TaxCalculationCallbackActivatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?TaxCalculationCallbackActivatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?TaxCalculationCallbackActivatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
