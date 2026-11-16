<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierGroupUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?ModifierGroupUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ModifierGroupUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'allow_quantities': bool, 'created_at'?: string, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'merchant_id'?: string, 'metadata'?: mixed, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<mixed>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: mixed, 'updated_at'?: string, 'version': int}, 'previous_attributes'?: object{'allow_quantities'?: mixed, 'created_at'?: mixed, 'external_reference_id'?: mixed, 'max_quantity'?: mixed, 'max_selected'?: mixed, 'max_total_quantity'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'min_quantity'?: mixed, 'min_selected'?: mixed, 'modifier_group_id'?: mixed, 'modifier_group_type'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'status'?: mixed, 'text'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ModifierGroupUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierGroupUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ModifierGroupUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ModifierGroupUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
