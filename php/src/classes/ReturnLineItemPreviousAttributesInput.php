<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $accepted_quantity
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read int|null $approved_quantity
 * @property-read string|null $automatic_resolution_type
 * @property-read int|null $available_resolution_quantity
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read string|null $buyer_note
 * @property-read int|null $canceled_quantity
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $decided_by
 * @property-read string|\DateTimeInterface|null $decision_at
 * @property-read string|null $decline_reason
 * @property-read string|null $decline_reason_message
 * @property-read int|null $declined_quantity
 * @property-read string|null $description
 * @property-read int|null $dispositioned_quantity
 * @property-read ReturnLineItemEligibilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $eligibility
 * @property-read FulfillmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $fulfillment
 * @property-read string|null $fulfillment_id
 * @property-read int|null $handed_off_quantity
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read int|null $inspected_quantity
 * @property-read string|\DateTimeInterface|null $inspection_waived_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $inspection_waived_by
 * @property-read string|null $inspection_waiver_reason
 * @property-read string|null $inspection_waiver_reason_message
 * @property-read bool|null $is_inspection_required
 * @property-read bool|null $is_policy_overridden
 * @property-read string|null $merchandise_status
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|\DateTimeInterface|null $overridden_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $overridden_by
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
 * @property-read ReturnReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $return_reason
 * @property-read string|null $return_reason_handle
 * @property-read string|null $return_reason_id
 * @property-read string|null $return_reason_name
 * @property-read int|null $return_required_quantity
 * @property-read list<string>|null $return_resolution_ids
 * @property-read ReturnLineItemValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $return_value
 * @property-read int|null $review_required_quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemPreviousAttributesInput extends Model {
    /** @param array{'accepted_quantity'?: int|null, 'allowed_resolution_types'?: list<string>|null, 'approved_quantity'?: int|null, 'automatic_resolution_type'?: string|null, 'available_resolution_quantity'?: int|null, 'bundle_components'?: list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'bundle_id'?: string|null, 'buyer_note'?: string|null, 'canceled_quantity'?: int|null, 'created_at'?: string|\DateTimeInterface|null, 'decided_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'decision_at'?: string|\DateTimeInterface|null, 'decline_reason'?: string|null, 'decline_reason_message'?: string|null, 'declined_quantity'?: int|null, 'description'?: string|null, 'dispositioned_quantity'?: int|null, 'eligibility'?: ReturnLineItemEligibilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'fulfillment'?: FulfillmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'fulfillment_id'?: string|null, 'handed_off_quantity'?: int|null, 'image'?: ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'inspected_quantity'?: int|null, 'inspection_waived_at'?: string|\DateTimeInterface|null, 'inspection_waived_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'inspection_waiver_reason'?: string|null, 'inspection_waiver_reason_message'?: string|null, 'is_inspection_required'?: bool|null, 'is_policy_overridden'?: bool|null, 'merchandise_status'?: string|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'overridden_at'?: string|\DateTimeInterface|null, 'overridden_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'override_reason'?: string|null, 'override_reason_message'?: string|null, 'product_id'?: string|null, 'received_quantity'?: int|null, 'receiving_location_id'?: string|null, 'rejected_quantity'?: int|null, 'release_timing'?: string|null, 'requested_quantity'?: int|null, 'requested_resolution_type'?: string|null, 'resolution_status'?: string|null, 'resolved_quantity'?: int|null, 'return_id'?: string|null, 'return_line_item_id'?: string|null, 'return_reason'?: ReturnReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'return_reason_handle'?: string|null, 'return_reason_id'?: string|null, 'return_reason_name'?: string|null, 'return_required_quantity'?: int|null, 'return_resolution_ids'?: list<string>|null, 'return_value'?: ReturnLineItemValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'review_required_quantity'?: int|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemPreviousAttributesInput')); }
    /** Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When accepted_quantity is omitted; use hasAcceptedQuantity() or valueOrDefault().
     */
    public function getAcceptedQuantity(): mixed { return $this->get('accepted_quantity'); }
    public function hasAcceptedQuantity(): bool { return $this->has('accepted_quantity'); }
    /** Resolution types that can settle this line's approved quantity. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types that can settle this line's approved quantity. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): mixed { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Units the decision approved. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When approved_quantity is omitted; use hasApprovedQuantity() or valueOrDefault().
     */
    public function getApprovedQuantity(): mixed { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Value enum: "refund", "store_credit", "no_monetary_action". anyOf[1] (Value): string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: "refund". Value enum: "refund", "store_credit", "no_monetary_action". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): mixed { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When available_resolution_quantity is omitted; use hasAvailableResolutionQuantity() or valueOrDefault().
     */
    public function getAvailableResolutionQuantity(): mixed { return $this->get('available_resolution_quantity'); }
    public function hasAvailableResolutionQuantity(): bool { return $this->has('available_resolution_quantity'); }
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
    /** Note the buyer gave about this line. Some return reasons require one. anyOf[1] (Value): string. Note the buyer gave about this line. Some return reasons require one. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): mixed { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Approved units canceled later. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): mixed { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who recorded the decision on this line. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When decided_by is omitted; use hasDecidedBy() or valueOrDefault().
     */
    public function getDecidedBy(): mixed { return $this->get('decided_by'); }
    public function hasDecidedBy(): bool { return $this->has('decided_by'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): mixed { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Why the line's declined quantity was declined. Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other". anyOf[1] (Value): string. Why the line's declined quantity was declined. Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When decline_reason is omitted; use hasDeclineReason() or valueOrDefault().
     */
    public function getDeclineReason(): mixed { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** Detail sent with the decline. anyOf[1] (Value): string. Detail sent with the decline. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When decline_reason_message is omitted; use hasDeclineReasonMessage() or valueOrDefault().
     */
    public function getDeclineReasonMessage(): mixed { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** Units the decision declined. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When declined_quantity is omitted; use hasDeclinedQuantity() or valueOrDefault().
     */
    public function getDeclinedQuantity(): mixed { return $this->get('declined_quantity'); }
    public function hasDeclinedQuantity(): bool { return $this->has('declined_quantity'); }
    /** Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When dispositioned_quantity is omitted; use hasDispositionedQuantity() or valueOrDefault().
     */
    public function getDispositionedQuantity(): mixed { return $this->get('dispositioned_quantity'); }
    public function hasDispositionedQuantity(): bool { return $this->has('dispositioned_quantity'); }
    /** How the pinned return policy judged this line when the Return was created, with the policy revision it used. anyOf[1] (Value): {@see ReturnLineItemEligibilityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnLineItemEligibilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. anyOf[1] (Value): {@see FulfillmentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return FulfillmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the fulfillment the units were delivered in. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When handed_off_quantity is omitted; use hasHandedOffQuantity() or valueOrDefault().
     */
    public function getHandedOffQuantity(): mixed { return $this->get('handed_off_quantity'); }
    public function hasHandedOffQuantity(): bool { return $this->has('handed_off_quantity'); }
    /** Image of the item as sold. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Units that have been inspected. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When inspected_quantity is omitted; use hasInspectedQuantity() or valueOrDefault().
     */
    public function getInspectedQuantity(): mixed { return $this->get('inspected_quantity'); }
    public function hasInspectedQuantity(): bool { return $this->has('inspected_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When inspection_waived_at is omitted; use hasInspectionWaivedAt() or valueOrDefault().
     */
    public function getInspectionWaivedAt(): mixed { return $this->get('inspection_waived_at'); }
    public function hasInspectionWaivedAt(): bool { return $this->has('inspection_waived_at'); }
    /** Who waived inspection for this line. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When inspection_waived_by is omitted; use hasInspectionWaivedBy() or valueOrDefault().
     */
    public function getInspectionWaivedBy(): mixed { return $this->get('inspection_waived_by'); }
    public function hasInspectionWaivedBy(): bool { return $this->has('inspection_waived_by'); }
    /** Why inspection was waived for this line. Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". anyOf[1] (Value): string. Why inspection was waived for this line. Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inspection_waiver_reason is omitted; use hasInspectionWaiverReason() or valueOrDefault().
     */
    public function getInspectionWaiverReason(): mixed { return $this->get('inspection_waiver_reason'); }
    public function hasInspectionWaiverReason(): bool { return $this->has('inspection_waiver_reason'); }
    /** Detail sent when inspection was waived. anyOf[1] (Value): string. Detail sent when inspection was waived. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inspection_waiver_reason_message is omitted; use hasInspectionWaiverReasonMessage() or valueOrDefault().
     */
    public function getInspectionWaiverReasonMessage(): mixed { return $this->get('inspection_waiver_reason_message'); }
    public function hasInspectionWaiverReasonMessage(): bool { return $this->has('inspection_waiver_reason_message'); }
    /** Whether returned units of this line must be inspected. anyOf[1] (Value): boolean. Whether returned units of this line must be inspected. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): mixed { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. anyOf[1] (Value): boolean. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_policy_overridden is omitted; use hasIsPolicyOverridden() or valueOrDefault().
     */
    public function getIsPolicyOverridden(): mixed { return $this->get('is_policy_overridden'); }
    public function hasIsPolicyOverridden(): bool { return $this->has('is_policy_overridden'); }
    /** Where this line's merchandise stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved". anyOf[1] (Value): string. Where this line's merchandise stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): mixed { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
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
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When overridden_at is omitted; use hasOverriddenAt() or valueOrDefault().
     */
    public function getOverriddenAt(): mixed { return $this->get('overridden_at'); }
    public function hasOverriddenAt(): bool { return $this->has('overridden_at'); }
    /** Who recorded the override. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When overridden_by is omitted; use hasOverriddenBy() or valueOrDefault().
     */
    public function getOverriddenBy(): mixed { return $this->get('overridden_by'); }
    public function hasOverriddenBy(): bool { return $this->has('overridden_by'); }
    /** Why the decision overrode the pinned return policy's proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other". anyOf[1] (Value): string. Why the decision overrode the pinned return policy's proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When override_reason is omitted; use hasOverrideReason() or valueOrDefault().
     */
    public function getOverrideReason(): mixed { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** Detail sent with the override. anyOf[1] (Value): string. Detail sent with the override. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When override_reason_message is omitted; use hasOverrideReasonMessage() or valueOrDefault().
     */
    public function getOverrideReasonMessage(): mixed { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
    /** ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Units that arrived. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): mixed { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** ID of the Location the buyer sends the merchandise to. Absent when none has to come back. anyOf[1] (Value): string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): mixed { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When rejected_quantity is omitted; use hasRejectedQuantity() or valueOrDefault().
     */
    public function getRejectedQuantity(): mixed { return $this->get('rejected_quantity'); }
    public function hasRejectedQuantity(): bool { return $this->has('rejected_quantity'); }
    /** Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): mixed { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Units the request asked to return. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): mixed { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Outcome requested for this line when it was created. Absent when none was requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): string. Outcome requested for this line when it was created. Absent when none was requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When requested_resolution_type is omitted; use hasRequestedResolutionType() or valueOrDefault().
     */
    public function getRequestedResolutionType(): mixed { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** Whether the value for this line's approved quantity has been delivered. Value enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value): string. Whether the value for this line's approved quantity has been delivered. Value enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): mixed { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When resolved_quantity is omitted; use hasResolvedQuantity() or valueOrDefault().
     */
    public function getResolvedQuantity(): mixed { return $this->get('resolved_quantity'); }
    public function hasResolvedQuantity(): bool { return $this->has('resolved_quantity'); }
    /** ID of the Return this line belongs to. anyOf[1] (Value): string. ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Unique identifier for this return line item, prefixed `retli_`. anyOf[1] (Value): string. Unique identifier for this return line item, prefixed `retli_`. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. anyOf[1] (Value): {@see ReturnReasonPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When return_reason is omitted; use hasReturnReason() or valueOrDefault().
     */
    public function getReturnReason(): mixed { return $this->get('return_reason'); }
    public function hasReturnReason(): bool { return $this->has('return_reason'); }
    /** Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_reason_handle is omitted; use hasReturnReasonHandle() or valueOrDefault().
     */
    public function getReturnReasonHandle(): mixed { return $this->get('return_reason_handle'); }
    public function hasReturnReasonHandle(): bool { return $this->has('return_reason_handle'); }
    /** ID of the reason chosen for this line. anyOf[1] (Value): string. ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): mixed { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_reason_name is omitted; use hasReturnReasonName() or valueOrDefault().
     */
    public function getReturnReasonName(): mixed { return $this->get('return_reason_name'); }
    public function hasReturnReasonName(): bool { return $this->has('return_reason_name'); }
    /** How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. anyOf[1] (Value): integer. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): mixed { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. anyOf[1] (Value): Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When return_resolution_ids is omitted; use hasReturnResolutionIds() or valueOrDefault().
     */
    public function getReturnResolutionIds(): mixed { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. anyOf[1] (Value): {@see ReturnLineItemValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnLineItemValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When return_value is omitted; use hasReturnValue() or valueOrDefault().
     */
    public function getReturnValue(): mixed { return $this->get('return_value'); }
    public function hasReturnValue(): bool { return $this->has('return_value'); }
    /** Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When review_required_quantity is omitted; use hasReviewRequiredQuantity() or valueOrDefault().
     */
    public function getReviewRequiredQuantity(): mixed { return $this->get('review_required_quantity'); }
    public function hasReviewRequiredQuantity(): bool { return $this->has('review_required_quantity'); }
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
    /** Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1] (Value): string. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1][] (Value): string.  Value enum: "cancel", "waive_inspection". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
