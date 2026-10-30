<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass> $available_modifiers
 * @property-read list<PaymentLinkAvailableVariantInput|array<array-key, mixed>|\stdClass> $available_variants
 * @property-read list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $catalog_object_type
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read bool $is_inventory_tracked
 * @property-read bool $is_sold_out
 * @property-read string $key
 * @property-read string $product_id
 * @property-read list<PaymentLinkProductOptionInput|array<array-key, mixed>|\stdClass> $product_options
 * @property-read string $resolved_description
 * @property-read string $resolved_name
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $resolved_unit_price_money
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedLineItemInfoInput extends Model {
    /** @param array{'available_modifiers'?: list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass>, 'available_variants'?: list<PaymentLinkAvailableVariantInput|array<array-key, mixed>|\stdClass>, 'bundle_components'?: list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'catalog_object_type'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'is_inventory_tracked'?: bool, 'is_sold_out': bool, 'key': string, 'product_id'?: string, 'product_options'?: list<PaymentLinkProductOptionInput|array<array-key, mixed>|\stdClass>, 'resolved_description'?: string, 'resolved_name'?: string, 'resolved_unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedLineItemInfoInput')); }
    /**  [] (Value): {@see PublicResolvedModifierGroupInput}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return list<PublicResolvedModifierGroupInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When available_modifiers is omitted; use hasAvailableModifiers() or valueOrDefault().
     */
    public function getAvailableModifiers(): array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. [] (Value): {@see PaymentLinkAvailableVariantInput}. A listed payment link variant that can be sold in the line currency, with its current price, options, image, modifiers, and advisory stock state.
     * @return list<PaymentLinkAvailableVariantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When available_variants is omitted; use hasAvailableVariants() or valueOrDefault().
     */
    public function getAvailableVariants(): array { return $this->get('available_variants'); }
    public function hasAvailableVariants(): bool { return $this->has('available_variants'); }
    /**  [] (Value): {@see PublicResolvedBundleComponentInput}. One component of a bundle on a resolved payment link line item, with its variant and quantity.
     * @return list<PublicResolvedBundleComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** bundle_id
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Value enum: "variant", "bundle".
     * @return string
     * @throws SdkError When catalog_object_type is omitted; use hasCatalogObjectType() or valueOrDefault().
     */
    public function getCatalogObjectType(): string { return $this->get('catalog_object_type'); }
    public function hasCatalogObjectType(): bool { return $this->has('catalog_object_type'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** is_inventory_tracked
     * @return bool
     * @throws SdkError When is_inventory_tracked is omitted; use hasIsInventoryTracked() or valueOrDefault().
     */
    public function getIsInventoryTracked(): bool { return $this->get('is_inventory_tracked'); }
    public function hasIsInventoryTracked(): bool { return $this->has('is_inventory_tracked'); }
    /** True when the fixed variant or bundle components cannot be bought at the line minimum quantity from the link inventory_routing_source. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock.
     * @return bool
     * @throws SdkError When is_sold_out is omitted; use hasIsSoldOut() or valueOrDefault().
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** key
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** product_id
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. [] (Value): {@see PaymentLinkProductOptionInput}. An active product option offered on a payment link, with values used by its available variants.
     * @return list<PaymentLinkProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When product_options is omitted; use hasProductOptions() or valueOrDefault().
     */
    public function getProductOptions(): array { return $this->get('product_options'); }
    public function hasProductOptions(): bool { return $this->has('product_options'); }
    /** resolved_description
     * @return string
     * @throws SdkError When resolved_description is omitted; use hasResolvedDescription() or valueOrDefault().
     */
    public function getResolvedDescription(): string { return $this->get('resolved_description'); }
    public function hasResolvedDescription(): bool { return $this->has('resolved_description'); }
    /** resolved_name
     * @return string
     * @throws SdkError When resolved_name is omitted; use hasResolvedName() or valueOrDefault().
     */
    public function getResolvedName(): string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolved_unit_price_money is omitted; use hasResolvedUnitPriceMoney() or valueOrDefault().
     */
    public function getResolvedUnitPriceMoney(): mixed { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /**  [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** variant_id
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
