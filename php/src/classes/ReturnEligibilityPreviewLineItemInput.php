<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read bool $can_buyer_request
 * @property-read string $description
 * @property-read ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read string $fulfillment_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read string $product_id
 * @property-read string $requested_quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read list<ReturnReasonSummaryInput|array<array-key, mixed>|\stdClass> $suggested_return_reasons
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnEligibilityPreviewLineItemInput extends Model {
    /** @param array{'bundle_components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'can_buyer_request': bool, 'description'?: string, 'eligibility': ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass, 'fulfillment_id': string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'modifiers': list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'requested_quantity'?: string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'suggested_return_reasons': list<ReturnReasonSummaryInput|array<array-key, mixed>|\stdClass>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilityPreviewLineItemInput')); }
    /** Shape $ (Value): Array of {@see BundleComponentInput}. Shape $[] (Value): {@see BundleComponentInput}. An item included in a bundle.
     * @return list<BundleComponentInput|array<array-key, mixed>|\stdClass>
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
    /** Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why.
     * @return bool
     * @throws SdkError When can_buyer_request is omitted; use hasCanBuyerRequest() or valueOrDefault().
     */
    public function getCanBuyerRequest(): bool { return $this->get('can_buyer_request'); }
    public function hasCanBuyerRequest(): bool { return $this->has('can_buyer_request'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see ReturnLineItemEligibilityInput}. Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     * @return ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifierInput}. Shape $[] (Value): {@see OrderLineItemModifierInput}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): Array of {@see SelectedProductOptionInput}. Shape $[] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): Array of {@see ReturnReasonSummaryInput}. Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: 20. Shape $[] (Value): {@see ReturnReasonSummaryInput}. A return reason a buyer can pick for a line, with its `handle` and whether a note is required.
     * @return list<ReturnReasonSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When suggested_return_reasons is omitted; use hasSuggestedReturnReasons() or valueOrDefault().
     */
    public function getSuggestedReturnReasons(): array { return $this->get('suggested_return_reasons'); }
    public function hasSuggestedReturnReasons(): bool { return $this->has('suggested_return_reasons'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
