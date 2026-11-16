<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileArchivedMerchantEventDataObject $object
 * @property-read ?DeliveryProfileArchivedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_profile_revision_id'?: mixed, 'delivery_profile_id'?: mixed, 'external_reference_id'?: mixed, 'is_default'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileArchivedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * @return DeliveryProfileArchivedMerchantEventDataObject
     */
    public function getObject(): DeliveryProfileArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?DeliveryProfileArchivedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?DeliveryProfileArchivedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
