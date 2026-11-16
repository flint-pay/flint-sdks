<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read string|null $description
 * @property-read int|null $eligible_quantity
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $fulfillment_id
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read string|null $ineligibility_reason
 * @property-read bool|null $is_inspection_required
 * @property-read bool|null $is_merchandise_return_required
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $policy_adjustment_proposals
 * @property-read string|null $product_id
 * @property-read string|null $reason
 * @property-read string|null $receiving_location_id
 * @property-read string|null $release_timing
 * @property-read int|null $requested_quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read list<string>|null $suggested_return_reason_ids
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyEvaluationLineItemPreviousAttributesInput extends Model {
    /** @param array{'allowed_resolution_types'?: list<string>|null, 'bundle_components'?: list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'bundle_id'?: string|null, 'description'?: string|null, 'eligible_quantity'?: int|null, 'expires_at'?: string|\DateTimeInterface|null, 'fulfillment_id'?: string|null, 'image'?: ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'ineligibility_reason'?: string|null, 'is_inspection_required'?: bool|null, 'is_merchandise_return_required'?: bool|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'policy_adjustment_proposals'?: list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'product_id'?: string|null, 'reason'?: string|null, 'receiving_location_id'?: string|null, 'release_timing'?: string|null, 'requested_quantity'?: int|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'status'?: string|null, 'suggested_return_reason_ids'?: list<string>|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyEvaluationLineItemPreviousAttributesInput')); }
    /** Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): mixed { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Components of the bundle the line was sold from. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributesInput}. Components of the bundle the line was sold from. anyOf[1][] (Value): {@see BundleComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): mixed { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): mixed { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the fulfillment the units were delivered in. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Image of the item as sold. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1] (Value): string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): mixed { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Whether the policy requires inspection of the returned units. anyOf[1] (Value): boolean. Whether the policy requires inspection of the returned units. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): mixed { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Whether the policy requires the buyer to send the merchandise back. anyOf[1] (Value): boolean. Whether the policy requires the buyer to send the merchandise back. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_merchandise_return_required is omitted; use hasIsMerchandiseReturnRequired() or valueOrDefault().
     */
    public function getIsMerchandiseReturnRequired(): mixed { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Modifiers selected on the order line, with their prices. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributesInput}. Modifiers selected on the order line, with their prices. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Order that owns order_line_item_id. anyOf[1] (Value): string. Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item the units come from. anyOf[1] (Value): string. ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1] (Value): Array of {@see ReturnPolicyAdjustmentProposalPreviousAttributesInput}. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][] (Value): {@see ReturnPolicyAdjustmentProposalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When policy_adjustment_proposals is omitted; use hasPolicyAdjustmentProposals() or valueOrDefault().
     */
    public function getPolicyAdjustmentProposals(): mixed { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** ID of the Location the policy sends returned merchandise to. anyOf[1] (Value): string. ID of the Location the policy sends returned merchandise to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): mixed { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): mixed { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): mixed { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. anyOf[1] (Value): Array of string. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. anyOf[1][] (Value): string. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When suggested_return_reason_ids is omitted; use hasSuggestedReturnReasonIds() or valueOrDefault().
     */
    public function getSuggestedReturnReasonIds(): mixed { return $this->get('suggested_return_reason_ids'); }
    public function hasSuggestedReturnReasonIds(): bool { return $this->has('suggested_return_reason_ids'); }
    /** ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
