<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemBundleComponentsItem> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read bool $can_buyer_request
 * @property-read ?string $description
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibility $eligibility
 * @property-read string $fulfillment_id
 * @property-read ?MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemImage $image
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItem> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read ?string $requested_quantity
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem> $suggested_return_reasons
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem extends Model {
    /** @param array{'bundle_components': list<mixed>, 'bundle_id'?: string, 'can_buyer_request': bool, 'description'?: string, 'eligibility': mixed, 'fulfillment_id': string, 'image'?: mixed, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'requested_quantity'?: string, 'selected_options': list<mixed>, 'sku'?: string, 'suggested_return_reasons': list<mixed>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItem')); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemBundleComponentsItem} and {@see BundleComponent}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemBundleComponentsItem}. An item included in a bundle.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemBundleComponentsItem>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why.
     * @return bool
     */
    public function getCanBuyerRequest(): bool { return $this->get('can_buyer_request'); }
    public function hasCanBuyerRequest(): bool { return $this->has('can_buyer_request'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibility}. An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     * @return MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibility
     */
    public function getEligibility(): MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemImage}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemImage
     */
    public function getImage(): ?MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItem} and {@see BuyerReturnLineItemModifier}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItem}. A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItem>
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getRequestedQuantity(): ?string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSelectedOptionsItem} and {@see SelectedProductOption}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem} and {@see ReturnReasonSummary}). Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: 20. Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem}. A return reason a buyer can pick for a line, with its `handle` and whether a note is required.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem>
     */
    public function getSuggestedReturnReasons(): array { return $this->get('suggested_return_reasons'); }
    public function hasSuggestedReturnReasons(): bool { return $this->has('suggested_return_reasons'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
