<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemImage $image
 * @property-read string $name
 * @property-read list<ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read MoneyValue|null $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem extends Model {
    /** @param array{'image'?: mixed, 'name': string, 'selected_options': list<mixed>, 'sku'?: string, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem')); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemImage
     */
    public function getImage(): ?ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /**  [] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /**  anyOf[1] (Value): {@see MoneyValue}. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getUnitPriceMoney(): MoneyValue|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
