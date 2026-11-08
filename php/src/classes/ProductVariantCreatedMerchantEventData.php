<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'barcode'?: string, 'created_at'?: string, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<mixed>, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images': list<mixed>, 'inventory_availability'?: mixed, 'inventory_item_id'?: string, 'inventory_tracking': string, 'is_available_for_sale': bool, 'is_inheriting_product_images': bool, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'quantity_price_breaks': list<mixed>, 'release_date': string|null, 'selected_options': list<mixed>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed, 'updated_at'?: string, 'variant_id': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`.
     * @return ProductVariantCreatedMerchantEventDataObject
     */
    public function getObject(): ProductVariantCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
