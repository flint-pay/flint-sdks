<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage $image
 * @property-read string $name
 * @property-read string $product_id
 * @property-read list<BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemUnitPriceMoney $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem extends Model {
    /** @param array{'image'?: mixed, 'name': string, 'product_id': string, 'selected_options': list<mixed>, 'sku'?: string, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem')); }
    /** Primary image of the variant or its product. Omitted when there is none. An image with its URL, size, and alt text.
     * @return ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage
     */
    public function getImage(): ?BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product the offered swap variant belongs to. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Option values that identify the variant, such as size and color. [] (Value): {@see BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the variant. Omitted when it has none.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemUnitPriceMoney
     */
    public function getUnitPriceMoney(): BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItemUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the variant a subscriber can swap to. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
