<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read MoneyValue|null $compare_at_price_money
 * @property-read ?Image $image
 * @property-read bool $is_sold_out
 * @property-read string $name
 * @property-read string $product_id
 * @property-read list<QuantityPriceBreak> $quantity_price_breaks
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read MoneyValue $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PublicCatalogVariant extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'compare_at_price_money': mixed, 'image'?: mixed, 'is_sold_out': bool, 'name': string, 'product_id': string, 'quantity_price_breaks': list<mixed>, 'selected_options': list<mixed>, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicCatalogVariant')); }
    /** Modifier groups available for this variant's effective modifier set. Omitted when the variant has none. [] (Value): {@see PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return ?list<PublicResolvedModifierGroup>
     */
    public function getAvailableModifiers(): ?array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getCompareAtPriceMoney(): MoneyValue|null { return $this->get('compare_at_price_money'); }
    public function hasCompareAtPriceMoney(): bool { return $this->has('compare_at_price_money'); }
    /** Effective primary variant image, inherited from the product when the variant has none. Omitted when neither has an image. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** True when the starting quantity of a tracked variant cannot be supplied. For a variant that needs a delivery quote, the configured inventory routing source must supply that quantity for at least one offered delivery method. For a variant that needs no quote, stock alone decides. Shipping can use remaining backorder capacity. Pickup requires physical stock. Uses the minimum quantity when the buyer can adjust the quantity. Always false for untracked variants. Availability is advisory. Reads and checkout resolution do not hold stock or expose stock counts.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Order line name for this variant: the product name plus the variant label.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product the offered variant belongs to.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Default quantity breaks for this variant. Use the largest `minimum_quantity` at or below the quantity on the order line. An empty array uses the base price. [] (Value): {@see QuantityPriceBreak}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreak>
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** The variant's product option values, in product option position order. Empty when the product has no options. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Current catalog base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the offered product variant.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
