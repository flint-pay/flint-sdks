<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass> $available_modifiers
 * @property-read list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $catalog_object_type
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read bool $is_inventory_tracked
 * @property-read string $key
 * @property-read string $product_id
 * @property-read string $resolved_description
 * @property-read string $resolved_name
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $resolved_unit_price_money
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedLineItemInfoInput extends Model {
    /** @param array{'available_modifiers'?: list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass>, 'bundle_components'?: list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'catalog_object_type'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'is_inventory_tracked'?: bool, 'key': string, 'product_id'?: string, 'resolved_description'?: string, 'resolved_name'?: string, 'resolved_unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedLineItemInfoInput')); }
    /** Shape $ (Value): Array of {@see PublicResolvedModifierGroupInput}. Shape $[] (Value): {@see PublicResolvedModifierGroupInput}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When available_modifiers is omitted; use hasAvailableModifiers() or valueOrDefault().
     */
    public function getAvailableModifiers(): array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Shape $ (Value): Array of {@see PublicResolvedBundleComponentInput}. Shape $[] (Value): {@see PublicResolvedBundleComponentInput}. One component of a bundle on a resolved payment link line item, with its variant and quantity.
     * @return list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle".
     * @return string
     * @throws SdkError When catalog_object_type is omitted; use hasCatalogObjectType() or valueOrDefault().
     */
    public function getCatalogObjectType(): string { return $this->get('catalog_object_type'); }
    public function hasCatalogObjectType(): bool { return $this->has('catalog_object_type'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_inventory_tracked is omitted; use hasIsInventoryTracked() or valueOrDefault().
     */
    public function getIsInventoryTracked(): bool { return $this->get('is_inventory_tracked'); }
    public function hasIsInventoryTracked(): bool { return $this->has('is_inventory_tracked'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When resolved_description is omitted; use hasResolvedDescription() or valueOrDefault().
     */
    public function getResolvedDescription(): string { return $this->get('resolved_description'); }
    public function hasResolvedDescription(): bool { return $this->has('resolved_description'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When resolved_name is omitted; use hasResolvedName() or valueOrDefault().
     */
    public function getResolvedName(): string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolved_unit_price_money is omitted; use hasResolvedUnitPriceMoney() or valueOrDefault().
     */
    public function getResolvedUnitPriceMoney(): mixed { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /** Shape $ (Value): Array of {@see SelectedProductOptionInput}. Shape $[] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
