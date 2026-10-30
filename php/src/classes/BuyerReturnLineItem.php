<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $accepted_quantity
 * @property-read list<string> $allowed_resolution_types
 * @property-read int $approved_quantity
 * @property-read ?string $automatic_resolution_type
 * @property-read int $available_resolution_quantity
 * @property-read list<BundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?string $buyer_note
 * @property-read int $canceled_quantity
 * @property-read string $created_at
 * @property-read ?string $decision_at
 * @property-read ?string $decline_reason
 * @property-read ?string $decline_reason_message
 * @property-read int $declined_quantity
 * @property-read ?string $description
 * @property-read int $dispositioned_quantity
 * @property-read BuyerReturnLineItemEligibility $eligibility
 * @property-read string $fulfillment_id
 * @property-read int $handed_off_quantity
 * @property-read ?Image $image
 * @property-read int $inspected_quantity
 * @property-read ?bool $is_inspection_required
 * @property-read bool $is_policy_overridden
 * @property-read string $merchandise_status
 * @property-read list<BuyerReturnLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read int $received_quantity
 * @property-read int $rejected_quantity
 * @property-read ?string $release_timing
 * @property-read int $requested_quantity
 * @property-read ?string $requested_resolution_type
 * @property-read string $resolution_status
 * @property-read int $resolved_quantity
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read string $return_reason_handle
 * @property-read string $return_reason_id
 * @property-read string $return_reason_name
 * @property-read int $return_required_quantity
 * @property-read list<string> $return_resolution_ids
 * @property-read ReturnLineItemValue $return_value
 * @property-read int $review_required_quantity
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnLineItem extends Model {
    /** @param array{'accepted_quantity': int, 'allowed_resolution_types': list<string>, 'approved_quantity': int, 'automatic_resolution_type'?: string, 'available_resolution_quantity': int, 'bundle_components': list<mixed>, 'bundle_id'?: string, 'buyer_note'?: string, 'canceled_quantity': int, 'created_at': string, 'decision_at'?: string, 'decline_reason'?: string, 'decline_reason_message'?: string, 'declined_quantity': int, 'description'?: string, 'dispositioned_quantity': int, 'eligibility': mixed, 'fulfillment_id': string, 'handed_off_quantity': int, 'image'?: mixed, 'inspected_quantity': int, 'is_inspection_required'?: bool, 'is_policy_overridden': bool, 'merchandise_status': string, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'received_quantity': int, 'rejected_quantity': int, 'release_timing'?: string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'resolution_status': string, 'resolved_quantity': int, 'return_id': string, 'return_line_item_id': string, 'return_reason_handle': string, 'return_reason_id': string, 'return_reason_name': string, 'return_required_quantity': int, 'return_resolution_ids': list<string>, 'return_value': mixed, 'review_required_quantity': int, 'selected_options': list<mixed>, 'sku'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnLineItem')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAcceptedQuantity(): int { return $this->get('accepted_quantity'); }
    public function hasAcceptedQuantity(): bool { return $this->has('accepted_quantity'); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getApprovedQuantity(): int { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Value enum: "refund", "store_credit", "no_monetary_action".
     * @return ?string
     */
    public function getAutomaticResolutionType(): ?string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAvailableResolutionQuantity(): int { return $this->get('available_resolution_quantity'); }
    public function hasAvailableResolutionQuantity(): bool { return $this->has('available_resolution_quantity'); }
    /**  [] (Value): {@see BundleComponent}. An item included in a bundle.
     * @return list<BundleComponent>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** bundle_id
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** buyer_note
     * @return ?string
     */
    public function getBuyerNote(): ?string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getCanceledQuantity(): int { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDecisionAt(): ?string { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     * @return ?string
     */
    public function getDeclineReason(): ?string { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** decline_reason_message
     * @return ?string
     */
    public function getDeclineReasonMessage(): ?string { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getDeclinedQuantity(): int { return $this->get('declined_quantity'); }
    public function hasDeclinedQuantity(): bool { return $this->has('declined_quantity'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getDispositionedQuantity(): int { return $this->get('dispositioned_quantity'); }
    public function hasDispositionedQuantity(): bool { return $this->has('dispositioned_quantity'); }
    /** An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     * @return BuyerReturnLineItemEligibility
     */
    public function getEligibility(): BuyerReturnLineItemEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** fulfillment_id
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getHandedOffQuantity(): int { return $this->get('handed_off_quantity'); }
    public function hasHandedOffQuantity(): bool { return $this->has('handed_off_quantity'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getInspectedQuantity(): int { return $this->get('inspected_quantity'); }
    public function hasInspectedQuantity(): bool { return $this->has('inspected_quantity'); }
    /** is_inspection_required
     * @return ?bool
     */
    public function getIsInspectionRequired(): ?bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** is_policy_overridden
     * @return bool
     */
    public function getIsPolicyOverridden(): bool { return $this->get('is_policy_overridden'); }
    public function hasIsPolicyOverridden(): bool { return $this->has('is_policy_overridden'); }
    /** Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved".
     * @return string
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /**  [] (Value): {@see BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.
     * @return list<BuyerReturnLineItemModifier>
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
     * @return int
     */
    public function getReceivedQuantity(): int { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getRejectedQuantity(): int { return $this->get('rejected_quantity'); }
    public function hasRejectedQuantity(): bool { return $this->has('rejected_quantity'); }
    /** Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return ?string
     */
    public function getReleaseTiming(): ?string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return ?string
     */
    public function getRequestedResolutionType(): ?string { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** Value enum: "not_selected", "pending", "requires_action", "fulfilled", "failed".
     * @return string
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getResolvedQuantity(): int { return $this->get('resolved_quantity'); }
    public function hasResolvedQuantity(): bool { return $this->has('resolved_quantity'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_line_item_id
     * @return string
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it.
     * @return string
     */
    public function getReturnReasonHandle(): string { return $this->get('return_reason_handle'); }
    public function hasReturnReasonHandle(): bool { return $this->has('return_reason_handle'); }
    /** ID of the reason chosen for this line.
     * @return string
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it.
     * @return string
     */
    public function getReturnReasonName(): string { return $this->get('return_reason_name'); }
    public function hasReturnReasonName(): bool { return $this->has('return_reason_name'); }
    /** How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: int64.
     * @return int
     */
    public function getReturnRequiredQuantity(): int { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. [] (Value): string.
     * @return list<string>
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** The value of a return line: unit price, subtotal, discount, tax, and total.
     * @return ReturnLineItemValue
     */
    public function getReturnValue(): ReturnLineItemValue { return $this->get('return_value'); }
    public function hasReturnValue(): bool { return $this->has('return_value'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getReviewRequiredQuantity(): int { return $this->get('review_required_quantity'); }
    public function hasReviewRequiredQuantity(): bool { return $this->has('review_required_quantity'); }
    /**  [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Always empty for buyer credentials. maxItems: 0. [] enum: "cancel", "waive_inspection". [] (Value): string.  Value enum: "cancel", "waive_inspection".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** variant_id
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
