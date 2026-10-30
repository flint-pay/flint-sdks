<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemBundleComponentsItem> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read bool $can_buyer_request
 * @property-read ?string $description
 * @property-read CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibility $eligibility
 * @property-read string $fulfillment_id
 * @property-read ?CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemImage $image
 * @property-read list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItem> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read ?int $requested_quantity
 * @property-read list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem> $suggested_return_reasons
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItem extends Model {
    /** @param array{'bundle_components': list<mixed>, 'bundle_id'?: string, 'can_buyer_request': bool, 'description'?: string, 'eligibility': mixed, 'fulfillment_id': string, 'image'?: mixed, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'requested_quantity'?: int, 'selected_options': list<mixed>, 'sku'?: string, 'suggested_return_reasons': list<mixed>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItem')); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemBundleComponentsItem}. An item included in a bundle.
     * @return list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemBundleComponentsItem>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** bundle_id
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why.
     * @return bool
     */
    public function getCanBuyerRequest(): bool { return $this->get('can_buyer_request'); }
    public function hasCanBuyerRequest(): bool { return $this->has('can_buyer_request'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     * @return CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibility
     */
    public function getEligibility(): CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** fulfillment_id
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemImage
     */
    public function getImage(): ?CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItem}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItem>
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** order_line_item_id
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** product_id
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getRequestedQuantity(): ?int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@see CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem}. A return reason a buyer can pick for a line, with its `handle` and whether a note is required.
     * @return list<CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem>
     */
    public function getSuggestedReturnReasons(): array { return $this->get('suggested_return_reasons'); }
    public function hasSuggestedReturnReasons(): bool { return $this->has('suggested_return_reasons'); }
    /** variant_id
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
