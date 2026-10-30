<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read list<BundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read int $eligible_quantity
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $fulfillment_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $ineligibility_reason
 * @property-read bool $is_inspection_required
 * @property-read bool $is_merchandise_return_required
 * @property-read list<BuyerReturnLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass> $policy_adjustment_proposals
 * @property-read string $product_id
 * @property-read string $reason
 * @property-read string $receiving_location_id
 * @property-read string $release_timing
 * @property-read int $requested_quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $status
 * @property-read list<string> $suggested_return_reason_ids
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnPolicyEvaluationLineItemInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'bundle_components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'description'?: string, 'eligible_quantity': int, 'expires_at'?: string|\DateTimeInterface, 'fulfillment_id': string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'ineligibility_reason'?: string, 'is_inspection_required': bool, 'is_merchandise_return_required': bool, 'modifiers': list<BuyerReturnLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'order_line_item_id': string, 'policy_adjustment_proposals': list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>, 'product_id'?: string, 'reason': string, 'receiving_location_id'?: string, 'release_timing': string, 'requested_quantity': int, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'suggested_return_reason_ids': list<string>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPolicyEvaluationLineItemInput')); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /**  [] (Value): {@see BundleComponentInput}. An item included in a bundle.
     * @return list<BundleComponentInput|array<array-key, mixed>|\stdClass>
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
    /** description
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): int { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** fulfillment_id
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return string
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** is_inspection_required
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** is_merchandise_return_required
     * @return bool
     * @throws SdkError When is_merchandise_return_required is omitted; use hasIsMerchandiseReturnRequired() or valueOrDefault().
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /**  [] (Value): {@see BuyerReturnLineItemModifierInput}. A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.
     * @return list<BuyerReturnLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** order_line_item_id
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /**  [] (Value): {@see ReturnPolicyAdjustmentProposalInput}. A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
     * @return list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When policy_adjustment_proposals is omitted; use hasPolicyAdjustmentProposals() or valueOrDefault().
     */
    public function getPolicyAdjustmentProposals(): array { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** product_id
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** receiving_location_id
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /**  [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Value enum: "eligible", "ineligible", "review_required".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. [] (Value): string.
     * @return list<string>
     * @throws SdkError When suggested_return_reason_ids is omitted; use hasSuggestedReturnReasonIds() or valueOrDefault().
     */
    public function getSuggestedReturnReasonIds(): array { return $this->get('suggested_return_reason_ids'); }
    public function hasSuggestedReturnReasonIds(): bool { return $this->has('suggested_return_reason_ids'); }
    /** variant_id
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
