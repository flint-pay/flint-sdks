<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?string $description
 * @property-read string $eligible_quantity
 * @property-read ?string $expires_at
 * @property-read string $fulfillment_id
 * @property-read ?ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemImage $image
 * @property-read ?string $ineligibility_reason
 * @property-read bool $is_inspection_required
 * @property-read bool $is_merchandise_return_required
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem> $policy_adjustment_proposals
 * @property-read ?string $product_id
 * @property-read string $reason
 * @property-read ?string $receiving_location_id
 * @property-read string $release_timing
 * @property-read string $requested_quantity
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read string $status
 * @property-read list<string> $suggested_return_reason_ids
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'bundle_components': list<mixed>, 'bundle_id'?: string, 'description'?: string, 'eligible_quantity': string, 'expires_at'?: string, 'fulfillment_id': string, 'image'?: mixed, 'ineligibility_reason'?: string, 'is_inspection_required': bool, 'is_merchandise_return_required': bool, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'policy_adjustment_proposals': list<mixed>, 'product_id'?: string, 'reason': string, 'receiving_location_id'?: string, 'release_timing': string, 'requested_quantity': string, 'selected_options': list<mixed>, 'sku'?: string, 'status': string, 'suggested_return_reason_ids': list<string>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem')); }
    /** Shape $ (Value): Array of string.  [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem} and {@see BundleComponent}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem}. An item included in a bundle.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getEligibleQuantity(): string { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemImage}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemImage
     */
    public function getImage(): ?ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return ?string
     */
    public function getIneligibilityReason(): ?string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem} and {@see OrderLineItemModifier}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem>
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
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem} and {@see ReturnPolicyAdjustmentProposal}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem}. A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem>
     */
    public function getPolicyAdjustmentProposals(): array { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string.  Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReceivingLocationId(): ?string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem} and {@see SelectedProductOption}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getSuggestedReturnReasonIds(): array { return $this->get('suggested_return_reason_ids'); }
    public function hasSuggestedReturnReasonIds(): bool { return $this->has('suggested_return_reason_ids'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
