<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductArchivedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ProductArchivedMerchantEventData extends Model {
    /** @param array{'object': object{'active_variant_count'?: int, 'categories': list<mixed>, 'created_at'?: string, 'default_variant'?: mixed, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<mixed>, 'is_available_for_sale'?: bool, 'matched_variant'?: mixed, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<mixed>, 'price_range'?: mixed, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string, 'variant_count'?: int, 'variants'?: list<mixed>, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductArchivedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.
     * @return ProductArchivedMerchantEventDataObject
     */
    public function getObject(): ProductArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
