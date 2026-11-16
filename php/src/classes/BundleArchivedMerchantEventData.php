<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BundleArchivedMerchantEventDataObject $object
 * @property-read ?BundleArchivedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class BundleArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'barcode'?: mixed, 'bundle_id'?: mixed, 'categories'?: mixed, 'component_count'?: mixed, 'components'?: mixed, 'created_at'?: mixed, 'delivery_configuration_status'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'images'?: mixed, 'is_available_for_sale'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'unit_price_money'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleArchivedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
     * @return BundleArchivedMerchantEventDataObject
     */
    public function getObject(): BundleArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?BundleArchivedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?BundleArchivedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
