<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accepted_quantity
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approved_quantity
 * @property-read string $available_resolution_quantity
 * @property-read list<BundleComponent> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $buyer_note
 * @property-read string $canceled_quantity
 * @property-read string $created_at
 * @property-read ReturnActor $decided_by
 * @property-read string $decision_at
 * @property-read string $decline_reason
 * @property-read string $decline_reason_message
 * @property-read string $declined_quantity
 * @property-read string $description
 * @property-read string $dispositioned_quantity
 * @property-read ReturnLineItemEligibility $eligibility
 * @property-read Fulfillment|null $fulfillment
 * @property-read string $fulfillment_id
 * @property-read string $handed_off_quantity
 * @property-read Image $image
 * @property-read string $inspected_quantity
 * @property-read string $inspection_waived_at
 * @property-read ReturnActor $inspection_waived_by
 * @property-read string $inspection_waiver_reason
 * @property-read string $inspection_waiver_reason_message
 * @property-read bool $is_inspection_required
 * @property-read bool $is_policy_overridden
 * @property-read string $merchandise_status
 * @property-read list<OrderLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read string $overridden_at
 * @property-read ReturnActor $overridden_by
 * @property-read string $override_reason
 * @property-read string $override_reason_message
 * @property-read string $product_id
 * @property-read string $received_quantity
 * @property-read string $receiving_location_id
 * @property-read string $refund_timing
 * @property-read string $rejected_quantity
 * @property-read string $requested_quantity
 * @property-read string $requested_resolution_type
 * @property-read string $resolution_count
 * @property-read string $resolution_mode
 * @property-read string $resolution_status
 * @property-read string $resolved_quantity
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read ReturnReason|null $return_reason
 * @property-read string $return_reason_handle
 * @property-read string $return_reason_id
 * @property-read string $return_reason_name
 * @property-read string $return_required_quantity
 * @property-read ReturnLineItemValue $return_value
 * @property-read string $review_required_quantity
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read string $selected_resolution_type
 * @property-read string $sku
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read string $variant_id
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnLineItem extends Model {
    /** @param array{'accepted_quantity': string, 'allowed_resolution_types': list<string>, 'approved_quantity': string, 'available_resolution_quantity': string, 'bundle_components': list<mixed>, 'bundle_id'?: string, 'buyer_note'?: string, 'canceled_quantity': string, 'created_at': string, 'decided_by'?: mixed, 'decision_at'?: string, 'decline_reason'?: string, 'decline_reason_message'?: string, 'declined_quantity': string, 'description'?: string, 'dispositioned_quantity': string, 'eligibility': mixed, 'fulfillment'?: mixed, 'fulfillment_id': string, 'handed_off_quantity': string, 'image'?: mixed, 'inspected_quantity': string, 'inspection_waived_at'?: string, 'inspection_waived_by'?: mixed, 'inspection_waiver_reason'?: string, 'inspection_waiver_reason_message'?: string, 'is_inspection_required'?: bool, 'is_policy_overridden': bool, 'merchandise_status': string, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'overridden_at'?: string, 'overridden_by'?: mixed, 'override_reason'?: string, 'override_reason_message'?: string, 'product_id'?: string, 'received_quantity': string, 'receiving_location_id'?: string, 'refund_timing'?: string, 'rejected_quantity': string, 'requested_quantity': string, 'requested_resolution_type'?: string, 'resolution_count': string, 'resolution_mode'?: string, 'resolution_status': string, 'resolved_quantity': string, 'return_id': string, 'return_line_item_id': string, 'return_reason'?: mixed, 'return_reason_handle': string, 'return_reason_id': string, 'return_reason_name': string, 'return_required_quantity': string, 'return_value': mixed, 'review_required_quantity': string, 'selected_options': list<mixed>, 'selected_resolution_type'?: string, 'sku'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItem')); }
    /** @return string
     * @throws SdkError When accepted_quantity is omitted; use hasAcceptedQuantity() or valueOrDefault().
     */
    public function getAcceptedQuantity(): string { return $this->get('accepted_quantity'); }
    public function hasAcceptedQuantity(): bool { return $this->has('accepted_quantity'); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return string
     * @throws SdkError When approved_quantity is omitted; use hasApprovedQuantity() or valueOrDefault().
     */
    public function getApprovedQuantity(): string { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** @return string
     * @throws SdkError When available_resolution_quantity is omitted; use hasAvailableResolutionQuantity() or valueOrDefault().
     */
    public function getAvailableResolutionQuantity(): string { return $this->get('available_resolution_quantity'); }
    public function hasAvailableResolutionQuantity(): bool { return $this->has('available_resolution_quantity'); }
    /** @return list<BundleComponent>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** @return string
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): string { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ReturnActor
     * @throws SdkError When decided_by is omitted; use hasDecidedBy() or valueOrDefault().
     */
    public function getDecidedBy(): ReturnActor { return $this->get('decided_by'); }
    public function hasDecidedBy(): bool { return $this->has('decided_by'); }
    /** @return string
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): string { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** @return string
     * @throws SdkError When decline_reason is omitted; use hasDeclineReason() or valueOrDefault().
     */
    public function getDeclineReason(): string { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** @return string
     * @throws SdkError When decline_reason_message is omitted; use hasDeclineReasonMessage() or valueOrDefault().
     */
    public function getDeclineReasonMessage(): string { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** @return string
     * @throws SdkError When declined_quantity is omitted; use hasDeclinedQuantity() or valueOrDefault().
     */
    public function getDeclinedQuantity(): string { return $this->get('declined_quantity'); }
    public function hasDeclinedQuantity(): bool { return $this->has('declined_quantity'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When dispositioned_quantity is omitted; use hasDispositionedQuantity() or valueOrDefault().
     */
    public function getDispositionedQuantity(): string { return $this->get('dispositioned_quantity'); }
    public function hasDispositionedQuantity(): bool { return $this->has('dispositioned_quantity'); }
    /** @return ReturnLineItemEligibility
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): ReturnLineItemEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** @return Fulfillment|null
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): Fulfillment|null { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return string
     * @throws SdkError When handed_off_quantity is omitted; use hasHandedOffQuantity() or valueOrDefault().
     */
    public function getHandedOffQuantity(): string { return $this->get('handed_off_quantity'); }
    public function hasHandedOffQuantity(): bool { return $this->has('handed_off_quantity'); }
    /** @return Image
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** @return string
     * @throws SdkError When inspected_quantity is omitted; use hasInspectedQuantity() or valueOrDefault().
     */
    public function getInspectedQuantity(): string { return $this->get('inspected_quantity'); }
    public function hasInspectedQuantity(): bool { return $this->has('inspected_quantity'); }
    /** @return string
     * @throws SdkError When inspection_waived_at is omitted; use hasInspectionWaivedAt() or valueOrDefault().
     */
    public function getInspectionWaivedAt(): string { return $this->get('inspection_waived_at'); }
    public function hasInspectionWaivedAt(): bool { return $this->has('inspection_waived_at'); }
    /** @return ReturnActor
     * @throws SdkError When inspection_waived_by is omitted; use hasInspectionWaivedBy() or valueOrDefault().
     */
    public function getInspectionWaivedBy(): ReturnActor { return $this->get('inspection_waived_by'); }
    public function hasInspectionWaivedBy(): bool { return $this->has('inspection_waived_by'); }
    /** @return string
     * @throws SdkError When inspection_waiver_reason is omitted; use hasInspectionWaiverReason() or valueOrDefault().
     */
    public function getInspectionWaiverReason(): string { return $this->get('inspection_waiver_reason'); }
    public function hasInspectionWaiverReason(): bool { return $this->has('inspection_waiver_reason'); }
    /** @return string
     * @throws SdkError When inspection_waiver_reason_message is omitted; use hasInspectionWaiverReasonMessage() or valueOrDefault().
     */
    public function getInspectionWaiverReasonMessage(): string { return $this->get('inspection_waiver_reason_message'); }
    public function hasInspectionWaiverReasonMessage(): bool { return $this->has('inspection_waiver_reason_message'); }
    /** @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** @return bool
     * @throws SdkError When is_policy_overridden is omitted; use hasIsPolicyOverridden() or valueOrDefault().
     */
    public function getIsPolicyOverridden(): bool { return $this->get('is_policy_overridden'); }
    public function hasIsPolicyOverridden(): bool { return $this->has('is_policy_overridden'); }
    /** @return string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** @return list<OrderLineItemModifier>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When overridden_at is omitted; use hasOverriddenAt() or valueOrDefault().
     */
    public function getOverriddenAt(): string { return $this->get('overridden_at'); }
    public function hasOverriddenAt(): bool { return $this->has('overridden_at'); }
    /** @return ReturnActor
     * @throws SdkError When overridden_by is omitted; use hasOverriddenBy() or valueOrDefault().
     */
    public function getOverriddenBy(): ReturnActor { return $this->get('overridden_by'); }
    public function hasOverriddenBy(): bool { return $this->has('overridden_by'); }
    /** @return string
     * @throws SdkError When override_reason is omitted; use hasOverrideReason() or valueOrDefault().
     */
    public function getOverrideReason(): string { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** @return string
     * @throws SdkError When override_reason_message is omitted; use hasOverrideReasonMessage() or valueOrDefault().
     */
    public function getOverrideReasonMessage(): string { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
    /** @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** @return string
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): string { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** @return string
     * @throws SdkError When refund_timing is omitted; use hasRefundTiming() or valueOrDefault().
     */
    public function getRefundTiming(): string { return $this->get('refund_timing'); }
    public function hasRefundTiming(): bool { return $this->has('refund_timing'); }
    /** @return string
     * @throws SdkError When rejected_quantity is omitted; use hasRejectedQuantity() or valueOrDefault().
     */
    public function getRejectedQuantity(): string { return $this->get('rejected_quantity'); }
    public function hasRejectedQuantity(): bool { return $this->has('rejected_quantity'); }
    /** @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** @return string
     * @throws SdkError When requested_resolution_type is omitted; use hasRequestedResolutionType() or valueOrDefault().
     */
    public function getRequestedResolutionType(): string { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** @return string
     * @throws SdkError When resolution_count is omitted; use hasResolutionCount() or valueOrDefault().
     */
    public function getResolutionCount(): string { return $this->get('resolution_count'); }
    public function hasResolutionCount(): bool { return $this->has('resolution_count'); }
    /** @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** @return string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** @return string
     * @throws SdkError When resolved_quantity is omitted; use hasResolvedQuantity() or valueOrDefault().
     */
    public function getResolvedQuantity(): string { return $this->get('resolved_quantity'); }
    public function hasResolvedQuantity(): bool { return $this->has('resolved_quantity'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** @return ReturnReason|null
     * @throws SdkError When return_reason is omitted; use hasReturnReason() or valueOrDefault().
     */
    public function getReturnReason(): ReturnReason|null { return $this->get('return_reason'); }
    public function hasReturnReason(): bool { return $this->has('return_reason'); }
    /** @return string
     * @throws SdkError When return_reason_handle is omitted; use hasReturnReasonHandle() or valueOrDefault().
     */
    public function getReturnReasonHandle(): string { return $this->get('return_reason_handle'); }
    public function hasReturnReasonHandle(): bool { return $this->has('return_reason_handle'); }
    /** @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** @return string
     * @throws SdkError When return_reason_name is omitted; use hasReturnReasonName() or valueOrDefault().
     */
    public function getReturnReasonName(): string { return $this->get('return_reason_name'); }
    public function hasReturnReasonName(): bool { return $this->has('return_reason_name'); }
    /** @return string
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): string { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** @return ReturnLineItemValue
     * @throws SdkError When return_value is omitted; use hasReturnValue() or valueOrDefault().
     */
    public function getReturnValue(): ReturnLineItemValue { return $this->get('return_value'); }
    public function hasReturnValue(): bool { return $this->has('return_value'); }
    /** @return string
     * @throws SdkError When review_required_quantity is omitted; use hasReviewRequiredQuantity() or valueOrDefault().
     */
    public function getReviewRequiredQuantity(): string { return $this->get('review_required_quantity'); }
    public function hasReviewRequiredQuantity(): bool { return $this->has('review_required_quantity'); }
    /** @return list<SelectedProductOption>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** @return string
     * @throws SdkError When selected_resolution_type is omitted; use hasSelectedResolutionType() or valueOrDefault().
     */
    public function getSelectedResolutionType(): string { return $this->get('selected_resolution_type'); }
    public function hasSelectedResolutionType(): bool { return $this->has('selected_resolution_type'); }
    /** @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
