<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read ?Image $image
 * @property-read bool $is_sold_out
 * @property-read string $name
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read MoneyValue $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkAvailableVariant extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'image'?: mixed, 'is_sold_out': bool, 'name': string, 'selected_options': list<mixed>, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkAvailableVariant')); }
    /** Modifier groups available for this variant's effective modifier set. Omitted when the variant has none. [] (Value): {@see PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return ?list<PublicResolvedModifierGroup>
     */
    public function getAvailableModifiers(): ?array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Effective primary variant image, inherited from the product when the variant has none. Omitted when neither has an image. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** True when tracked inventory cannot supply the line's starting quantity through the payment link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise quantity. Always false for untracked variants. Advisory only: no stock is held at read or resolve time, and no stock counts are published.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Order line name for this variant: the product name plus the variant label.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The variant's product option values, in product option position order. Empty when the product has no options. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Current catalog unit price in the line currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
