<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $accepted_quantity
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read int|null $approved_quantity
 * @property-read string|null $automatic_resolution_type
 * @property-read int|null $available_resolution_quantity
 * @property-read list<BundleComponentPreviousAttributes>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read string|null $buyer_note
 * @property-read int|null $canceled_quantity
 * @property-read string|null $created_at
 * @property-read mixed $decided_by
 * @property-read string|null $decision_at
 * @property-read string|null $decline_reason
 * @property-read string|null $decline_reason_message
 * @property-read int|null $declined_quantity
 * @property-read string|null $description
 * @property-read int|null $dispositioned_quantity
 * @property-read mixed $eligibility
 * @property-read mixed $fulfillment
 * @property-read string|null $fulfillment_id
 * @property-read int|null $handed_off_quantity
 * @property-read mixed $image
 * @property-read int|null $inspected_quantity
 * @property-read string|null $inspection_waived_at
 * @property-read mixed $inspection_waived_by
 * @property-read string|null $inspection_waiver_reason
 * @property-read string|null $inspection_waiver_reason_message
 * @property-read bool|null $is_inspection_required
 * @property-read bool|null $is_policy_overridden
 * @property-read string|null $merchandise_status
 * @property-read list<OrderLineItemModifierPreviousAttributes>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $overridden_at
 * @property-read mixed $overridden_by
 * @property-read string|null $override_reason
 * @property-read string|null $override_reason_message
 * @property-read string|null $product_id
 * @property-read int|null $received_quantity
 * @property-read string|null $receiving_location_id
 * @property-read int|null $rejected_quantity
 * @property-read string|null $release_timing
 * @property-read int|null $requested_quantity
 * @property-read string|null $requested_resolution_type
 * @property-read string|null $resolution_status
 * @property-read int|null $resolved_quantity
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * @property-read mixed $return_reason
 * @property-read string|null $return_reason_handle
 * @property-read string|null $return_reason_id
 * @property-read string|null $return_reason_name
 * @property-read int|null $return_required_quantity
 * @property-read list<string>|null $return_resolution_ids
 * @property-read mixed $return_value
 * @property-read int|null $review_required_quantity
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnLineItemPreviousAttributes extends Model {
    /** @param array{'accepted_quantity'?: mixed, 'allowed_resolution_types'?: mixed, 'approved_quantity'?: mixed, 'automatic_resolution_type'?: mixed, 'available_resolution_quantity'?: mixed, 'bundle_components'?: mixed, 'bundle_id'?: mixed, 'buyer_note'?: mixed, 'canceled_quantity'?: mixed, 'created_at'?: mixed, 'decided_by'?: mixed, 'decision_at'?: mixed, 'decline_reason'?: mixed, 'decline_reason_message'?: mixed, 'declined_quantity'?: mixed, 'description'?: mixed, 'dispositioned_quantity'?: mixed, 'eligibility'?: mixed, 'fulfillment'?: mixed, 'fulfillment_id'?: mixed, 'handed_off_quantity'?: mixed, 'image'?: mixed, 'inspected_quantity'?: mixed, 'inspection_waived_at'?: mixed, 'inspection_waived_by'?: mixed, 'inspection_waiver_reason'?: mixed, 'inspection_waiver_reason_message'?: mixed, 'is_inspection_required'?: mixed, 'is_policy_overridden'?: mixed, 'merchandise_status'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'overridden_at'?: mixed, 'overridden_by'?: mixed, 'override_reason'?: mixed, 'override_reason_message'?: mixed, 'product_id'?: mixed, 'received_quantity'?: mixed, 'receiving_location_id'?: mixed, 'rejected_quantity'?: mixed, 'release_timing'?: mixed, 'requested_quantity'?: mixed, 'requested_resolution_type'?: mixed, 'resolution_status'?: mixed, 'resolved_quantity'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, 'return_reason'?: mixed, 'return_reason_handle'?: mixed, 'return_reason_id'?: mixed, 'return_reason_name'?: mixed, 'return_required_quantity'?: mixed, 'return_resolution_ids'?: mixed, 'return_value'?: mixed, 'review_required_quantity'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemPreviousAttributes')); }
    /** Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAcceptedQuantity(): int|null { return $this->get('accepted_quantity'); }
    public function hasAcceptedQuantity(): bool { return $this->has('accepted_quantity'); }
    /** Resolution types that can settle this line's approved quantity. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types that can settle this line's approved quantity. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedResolutionTypes(): array|null { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Units the decision approved. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getApprovedQuantity(): int|null { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Value enum: "refund", "store_credit", "no_monetary_action". anyOf[1] (Value): string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Value enum: "refund", "store_credit", "no_monetary_action". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAutomaticResolutionType(): string|null { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAvailableResolutionQuantity(): int|null { return $this->get('available_resolution_quantity'); }
    public function hasAvailableResolutionQuantity(): bool { return $this->has('available_resolution_quantity'); }
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
    /** Note the buyer gave about this line. Some return reasons require one. anyOf[1] (Value): string. Note the buyer gave about this line. Some return reasons require one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Approved units canceled later. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCanceledQuantity(): int|null { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who recorded the decision on this line. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDecidedBy(): mixed { return $this->get('decided_by'); }
    public function hasDecidedBy(): bool { return $this->has('decided_by'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDecisionAt(): string|null { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Why the line's declined quantity was declined. Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other". anyOf[1] (Value): string. Why the line's declined quantity was declined. Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeclineReason(): string|null { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** Detail sent with the decline. anyOf[1] (Value): string. Detail sent with the decline. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeclineReasonMessage(): string|null { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** Units the decision declined. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDeclinedQuantity(): int|null { return $this->get('declined_quantity'); }
    public function hasDeclinedQuantity(): bool { return $this->has('declined_quantity'); }
    /** Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDispositionedQuantity(): int|null { return $this->get('dispositioned_quantity'); }
    public function hasDispositionedQuantity(): bool { return $this->has('dispositioned_quantity'); }
    /** How the pinned return policy judged this line when the Return was created, with the policy revision it used. anyOf[1] (Value): {@see ReturnLineItemEligibilityPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. anyOf[1] (Value): ({@see FulfillmentPreviousAttributes} or null). Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. anyOf[1].anyOf[1] (Value): {@see FulfillmentPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the fulfillment the units were delivered in. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getHandedOffQuantity(): int|null { return $this->get('handed_off_quantity'); }
    public function hasHandedOffQuantity(): bool { return $this->has('handed_off_quantity'); }
    /** Image of the item as sold. anyOf[1] (Value): {@see ImagePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Units that have been inspected. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getInspectedQuantity(): int|null { return $this->get('inspected_quantity'); }
    public function hasInspectedQuantity(): bool { return $this->has('inspected_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInspectionWaivedAt(): string|null { return $this->get('inspection_waived_at'); }
    public function hasInspectionWaivedAt(): bool { return $this->has('inspection_waived_at'); }
    /** Who waived inspection for this line. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getInspectionWaivedBy(): mixed { return $this->get('inspection_waived_by'); }
    public function hasInspectionWaivedBy(): bool { return $this->has('inspection_waived_by'); }
    /** Why inspection was waived for this line. Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". anyOf[1] (Value): string. Why inspection was waived for this line. Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInspectionWaiverReason(): string|null { return $this->get('inspection_waiver_reason'); }
    public function hasInspectionWaiverReason(): bool { return $this->has('inspection_waiver_reason'); }
    /** Detail sent when inspection was waived. anyOf[1] (Value): string. Detail sent when inspection was waived. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInspectionWaiverReasonMessage(): string|null { return $this->get('inspection_waiver_reason_message'); }
    public function hasInspectionWaiverReasonMessage(): bool { return $this->has('inspection_waiver_reason_message'); }
    /** Whether returned units of this line must be inspected. anyOf[1] (Value): boolean. Whether returned units of this line must be inspected. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsInspectionRequired(): bool|null { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. anyOf[1] (Value): boolean. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsPolicyOverridden(): bool|null { return $this->get('is_policy_overridden'); }
    public function hasIsPolicyOverridden(): bool { return $this->has('is_policy_overridden'); }
    /** Where this line's merchandise stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved". anyOf[1] (Value): string. Where this line's merchandise stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchandiseStatus(): string|null { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
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
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOverriddenAt(): string|null { return $this->get('overridden_at'); }
    public function hasOverriddenAt(): bool { return $this->has('overridden_at'); }
    /** Who recorded the override. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOverriddenBy(): mixed { return $this->get('overridden_by'); }
    public function hasOverriddenBy(): bool { return $this->has('overridden_by'); }
    /** Why the decision overrode the pinned return policy's proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other". anyOf[1] (Value): string. Why the decision overrode the pinned return policy's proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOverrideReason(): string|null { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** Detail sent with the override. anyOf[1] (Value): string. Detail sent with the override. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOverrideReasonMessage(): string|null { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
    /** ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the catalog product the item was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Units that arrived. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedQuantity(): int|null { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** ID of the Location the buyer sends the merchandise to. Absent when none has to come back. anyOf[1] (Value): string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivingLocationId(): string|null { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRejectedQuantity(): int|null { return $this->get('rejected_quantity'); }
    public function hasRejectedQuantity(): bool { return $this->has('rejected_quantity'); }
    /** Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleaseTiming(): string|null { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Units the request asked to return. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRequestedQuantity(): int|null { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Outcome requested for this line when it was created. Absent when none was requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): string. Outcome requested for this line when it was created. Absent when none was requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedResolutionType(): string|null { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** Whether the value for this line's approved quantity has been delivered. Value enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value): string. Whether the value for this line's approved quantity has been delivered. Value enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolutionStatus(): string|null { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getResolvedQuantity(): int|null { return $this->get('resolved_quantity'); }
    public function hasResolvedQuantity(): bool { return $this->has('resolved_quantity'); }
    /** ID of the Return this line belongs to. anyOf[1] (Value): string. ID of the Return this line belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Unique identifier for this return line item, prefixed `retli_`. anyOf[1] (Value): string. Unique identifier for this return line item, prefixed `retli_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. anyOf[1] (Value): ({@see ReturnReasonPreviousAttributes} or null). Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. anyOf[1].anyOf[1] (Value): {@see ReturnReasonPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnReason(): mixed { return $this->get('return_reason'); }
    public function hasReturnReason(): bool { return $this->has('return_reason'); }
    /** Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReasonHandle(): string|null { return $this->get('return_reason_handle'); }
    public function hasReturnReasonHandle(): bool { return $this->has('return_reason_handle'); }
    /** ID of the reason chosen for this line. anyOf[1] (Value): string. ID of the reason chosen for this line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReasonId(): string|null { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReasonName(): string|null { return $this->get('return_reason_name'); }
    public function hasReturnReasonName(): bool { return $this->has('return_reason_name'); }
    /** How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. anyOf[1] (Value): integer. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReturnRequiredQuantity(): int|null { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. anyOf[1] (Value): Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getReturnResolutionIds(): array|null { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. anyOf[1] (Value): {@see ReturnLineItemValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnValue(): mixed { return $this->get('return_value'); }
    public function hasReturnValue(): bool { return $this->has('return_value'); }
    /** Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReviewRequiredQuantity(): int|null { return $this->get('review_required_quantity'); }
    public function hasReviewRequiredQuantity(): bool { return $this->has('review_required_quantity'); }
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
    /** Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1] (Value): string. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1][] (Value): string.  Value enum: "cancel", "waive_inspection". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the catalog variant the item was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
