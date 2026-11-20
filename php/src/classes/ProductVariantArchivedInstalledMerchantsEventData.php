<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read ProductVariantArchivedInstalledMerchantsEventDataObject $object
 * @property-read ?ProductVariantArchivedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'barcode'?: mixed, 'compare_at_price_money'?: mixed, 'created_at'?: mixed, 'delivery_configuration_reason'?: mixed, 'delivery_configuration_status'?: mixed, 'delivery_profile_id'?: mixed, 'effective_images'?: mixed, 'external_reference_id'?: mixed, 'gift_card_configuration'?: mixed, 'images'?: mixed, 'inventory_item_id'?: mixed, 'inventory_tracking'?: mixed, 'is_available_for_sale'?: mixed, 'is_inheriting_product_images'?: mixed, 'license_key_configuration'?: mixed, 'line_item_tax_category'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'position'?: mixed, 'product_id'?: mixed, 'quantity_price_breaks'?: mixed, 'release_date'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'taxable'?: mixed, 'unit_dimensions'?: mixed, 'unit_price_money'?: mixed, 'unit_weight'?: mixed, 'updated_at'?: mixed, 'variant_id'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantArchivedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`, `inventory_availability`.
     * @return ProductVariantArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductVariantArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ProductVariantArchivedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ProductVariantArchivedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
