<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read TaxCalculationCallbackUpdatedEventDataObject $object
 * @property-read ?TaxCalculationCallbackUpdatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackUpdatedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'circuit_failure_count': int, 'circuit_state': string, 'configuration': mixed, 'created_at': string, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'circuit_failure_count'?: mixed, 'circuit_state'?: mixed, 'configuration'?: mixed, 'created_at'?: mixed, 'current_tax_calculation_callback_revision_id'?: mixed, 'external_reference_id'?: mixed, 'key_id'?: mixed, 'name'?: mixed, 'secret'?: mixed, 'signing_methods'?: mixed, 'status'?: mixed, 'tax_calculation_callback_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackUpdatedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return TaxCalculationCallbackUpdatedEventDataObject
     */
    public function getObject(): TaxCalculationCallbackUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?TaxCalculationCallbackUpdatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?TaxCalculationCallbackUpdatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
