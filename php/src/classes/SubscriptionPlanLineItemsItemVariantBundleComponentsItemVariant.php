<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read ?string $name
 * @property-read ?string $product_name
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantBundleComponentsItemVariantSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlanLineItemsItemVariantBundleComponentsItemVariant extends Model {
    /** @param array{'available_for_sale': bool, 'name'?: string, 'product_name'?: string, 'selected_options'?: list<mixed>, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanLineItemsItemVariantBundleComponentsItemVariant')); }
    /** Whether the component's variant and its product are both active.
     * @return bool
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Name of the component's variant, when set.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Name of the product the variant belongs to.
     * @return ?string
     */
    public function getProductName(): ?string { return $this->get('product_name'); }
    public function hasProductName(): bool { return $this->has('product_name'); }
    /** Option names and values selected by the component's variant. [] (Value): {@see SubscriptionPlanLineItemsItemVariantBundleComponentsItemVariantSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SubscriptionPlanLineItemsItemVariantBundleComponentsItemVariantSelectedOptionsItem>
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
