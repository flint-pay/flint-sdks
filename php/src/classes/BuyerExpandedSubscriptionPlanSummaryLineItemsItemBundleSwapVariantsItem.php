<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage $image
 * @property-read string $name
 * @property-read list<BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read MoneyValue|null $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem extends Model {
    /** @param array{'image'?: mixed, 'name': string, 'selected_options': list<mixed>, 'sku'?: string, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem')); }
    /** Shape $ (Value): {@see BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage
     */
    public function getImage(): ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of ({@see BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem} and {@see SelectedProductOption}). Shape $[] (Value): {@see BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): {@see MoneyValue} or null. Shape $.anyOf[1] (Value): {@see MoneyValue}. Shape $.anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getUnitPriceMoney(): MoneyValue|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
