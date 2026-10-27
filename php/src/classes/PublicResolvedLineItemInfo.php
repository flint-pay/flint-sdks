<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read ?list<PublicResolvedBundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?string $catalog_object_type
 * @property-read ?Image $image
 * @property-read ?bool $is_inventory_tracked
 * @property-read string $key
 * @property-read ?string $product_id
 * @property-read ?string $resolved_description
 * @property-read ?string $resolved_name
 * @property-read ?MoneyValue $resolved_unit_price_money
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedLineItemInfo extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'catalog_object_type'?: string, 'image'?: mixed, 'is_inventory_tracked'?: bool, 'key': string, 'product_id'?: string, 'resolved_description'?: string, 'resolved_name'?: string, 'resolved_unit_price_money'?: mixed, 'selected_options'?: list<mixed>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedLineItemInfo')); }
    /** Shape $ (Value): Array of {@see PublicResolvedModifierGroup}. Shape $[] (Value): {@see PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return ?list<PublicResolvedModifierGroup>
     */
    public function getAvailableModifiers(): ?array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Shape $ (Value): Array of {@see PublicResolvedBundleComponent}. Shape $[] (Value): {@see PublicResolvedBundleComponent}. One component of a bundle on a resolved payment link line item, with its variant and quantity.
     * @return ?list<PublicResolvedBundleComponent>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle".
     * @return ?string
     */
    public function getCatalogObjectType(): ?string { return $this->get('catalog_object_type'); }
    public function hasCatalogObjectType(): bool { return $this->has('catalog_object_type'); }
    /** Shape $ (Value): {@see Image}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getIsInventoryTracked(): ?bool { return $this->get('is_inventory_tracked'); }
    public function hasIsInventoryTracked(): bool { return $this->has('is_inventory_tracked'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getResolvedDescription(): ?string { return $this->get('resolved_description'); }
    public function hasResolvedDescription(): bool { return $this->has('resolved_description'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getResolvedName(): ?string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getResolvedUnitPriceMoney(): ?MoneyValue { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /** Shape $ (Value): Array of {@see SelectedProductOption}. Shape $[] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
