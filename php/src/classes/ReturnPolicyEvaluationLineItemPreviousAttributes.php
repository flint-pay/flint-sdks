<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read list<BundleComponentPreviousAttributes>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read string|null $description
 * @property-read int|null $eligible_quantity
 * @property-read string|null $expires_at
 * @property-read string|null $fulfillment_id
 * @property-read ImagePreviousAttributes|null $image
 * @property-read string|null $ineligibility_reason
 * @property-read bool|null $is_inspection_required
 * @property-read bool|null $is_merchandise_return_required
 * @property-read list<OrderLineItemModifierPreviousAttributes>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read list<ReturnPolicyAdjustmentProposalPreviousAttributes>|null $policy_adjustment_proposals
 * @property-read string|null $product_id
 * @property-read string|null $reason
 * @property-read string|null $receiving_location_id
 * @property-read string|null $release_timing
 * @property-read int|null $requested_quantity
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read list<string>|null $suggested_return_reason_ids
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyEvaluationLineItemPreviousAttributes extends Model {
    /** @param array{'allowed_resolution_types'?: mixed, 'bundle_components'?: mixed, 'bundle_id'?: mixed, 'description'?: mixed, 'eligible_quantity'?: mixed, 'expires_at'?: mixed, 'fulfillment_id'?: mixed, 'image'?: mixed, 'ineligibility_reason'?: mixed, 'is_inspection_required'?: mixed, 'is_merchandise_return_required'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'policy_adjustment_proposals'?: mixed, 'product_id'?: mixed, 'reason'?: mixed, 'receiving_location_id'?: mixed, 'release_timing'?: mixed, 'requested_quantity'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'suggested_return_reason_ids'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyEvaluationLineItemPreviousAttributes')); }
    /** Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedResolutionTypes(): array|null { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Components of the bundle the line was sold from. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributes}. Components of the bundle the line was sold from. anyOf[1][] (Value): {@see BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributes>|null
     */
    public function getBundleComponents(): array|null { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEligibleQuantity(): int|null { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the fulfillment the units were delivered in. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Image of the item as sold. anyOf[1] (Value): {@see ImagePreviousAttributes}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributes|null
     */
    public function getImage(): ImagePreviousAttributes|null { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1] (Value): string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIneligibilityReason(): string|null { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Whether the policy requires inspection of the returned units. anyOf[1] (Value): boolean. Whether the policy requires inspection of the returned units. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsInspectionRequired(): bool|null { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Whether the policy requires the buyer to send the merchandise back. anyOf[1] (Value): boolean. Whether the policy requires the buyer to send the merchandise back. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsMerchandiseReturnRequired(): bool|null { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Modifiers selected on the order line, with their prices. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributes}. Modifiers selected on the order line, with their prices. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributes>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Order that owns order_line_item_id. anyOf[1] (Value): string. Order that owns order_line_item_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item the units come from. anyOf[1] (Value): string. ID of the order line item the units come from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1] (Value): Array of {@see ReturnPolicyAdjustmentProposalPreviousAttributes}. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][] (Value): {@see ReturnPolicyAdjustmentProposalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyAdjustmentProposalPreviousAttributes>|null
     */
    public function getPolicyAdjustmentProposals(): array|null { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the catalog product the item was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** ID of the Location the policy sends returned merchandise to. anyOf[1] (Value): string. ID of the Location the policy sends returned merchandise to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivingLocationId(): string|null { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. The policy evaluation did not assign a release gate to this line. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual", "unspecified". anyOf[1] (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. The policy evaluation did not assign a release gate to this line. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual", "unspecified". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleaseTiming(): string|null { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRequestedQuantity(): int|null { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributes>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. anyOf[1] (Value): Array of string. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSuggestedReturnReasonIds(): array|null { return $this->get('suggested_return_reason_ids'); }
    public function hasSuggestedReturnReasonIds(): bool { return $this->has('suggested_return_reason_ids'); }
    /** ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the catalog variant the item was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
