<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $is_available_for_sale
 * @property-read ?string $name
 * @property-read string $product_id
 * @property-read ?string $product_name
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItemVariantSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItemVariant extends Model {
    /** @param array{'is_available_for_sale': bool, 'name'?: string, 'product_id': string, 'product_name'?: string, 'selected_options'?: list<mixed>, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItemVariant')); }
    /** Whether the component's variant and its product are both active.
     * @return bool
     */
    public function getIsAvailableForSale(): bool { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Name of the component's variant, when set.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product this component variant belongs to.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Name of the product the variant belongs to.
     * @return ?string
     */
    public function getProductName(): ?string { return $this->get('product_name'); }
    public function hasProductName(): bool { return $this->has('product_name'); }
    /** Option names and values selected by the component's variant. [] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItemVariantSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItemVariantSelectedOptionsItem>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to the component's variant, when set.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Identifier of the product variant included in the component.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
