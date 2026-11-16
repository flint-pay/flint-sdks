<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductArchivedMerchantEventDataObject $object
 * @property-read ?ProductArchivedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ProductArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, 'previous_attributes'?: object{'active_variant_count'?: mixed, 'categories'?: mixed, 'created_at'?: mixed, 'default_variant'?: mixed, 'default_variant_id'?: mixed, 'delivery_configuration_status'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'images'?: mixed, 'is_available_for_sale'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'option_count'?: mixed, 'options'?: mixed, 'price_range'?: mixed, 'product_id'?: mixed, 'product_type'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'variant_count'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductArchivedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.
     * @return ProductArchivedMerchantEventDataObject
     */
    public function getObject(): ProductArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ProductArchivedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ProductArchivedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
