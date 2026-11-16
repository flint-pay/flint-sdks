<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?DeliveryZoneUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'configuration': mixed, 'created_at': string, 'current_delivery_zone_revision_id': string, 'delivery_zone_id': string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_zone_revision_id'?: mixed, 'delivery_zone_id'?: mixed, 'external_reference_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DeliveryZoneUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryZoneUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?DeliveryZoneUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?DeliveryZoneUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
