<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accepted_quantity
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approved_quantity
 * @property-read string $automatic_resolution_type
 * @property-read string $available_resolution_quantity
 * @property-read list<BundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $buyer_note
 * @property-read string $canceled_quantity
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $decided_by
 * @property-read string|\DateTimeInterface $decision_at
 * @property-read string $decline_reason
 * @property-read string $decline_reason_message
 * @property-read string $declined_quantity
 * @property-read string $description
 * @property-read string $dispositioned_quantity
 * @property-read ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read array{'active_hold'?: FulfillmentHoldInput|array<array-key, mixed>|\stdClass, 'charges'?: list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass>, 'completed_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'delivery_choice_group_id': string|null, 'delivery_execution_leg_id': string|null, 'delivery_method_id': string|null, 'delivery_selection_id': string|null, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'dispatched_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'order_number'?: string, 'outcome'?: FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass, 'packages'?: list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>, 'packed_at'?: string|\DateTimeInterface, 'picked_at'?: string|\DateTimeInterface, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'scheduled_start_at': string|\DateTimeInterface|null, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipment_details'?: ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipments'?: list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string|\DateTimeInterface, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null $fulfillment
 * @property-read string $fulfillment_id
 * @property-read string $handed_off_quantity
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inspected_quantity
 * @property-read string|\DateTimeInterface $inspection_waived_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $inspection_waived_by
 * @property-read string $inspection_waiver_reason
 * @property-read string $inspection_waiver_reason_message
 * @property-read bool $is_inspection_required
 * @property-read bool $is_policy_overridden
 * @property-read string $merchandise_status
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read string|\DateTimeInterface $overridden_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $overridden_by
 * @property-read string $override_reason
 * @property-read string $override_reason_message
 * @property-read string $product_id
 * @property-read string $received_quantity
 * @property-read string $receiving_location_id
 * @property-read string $rejected_quantity
 * @property-read string $release_timing
 * @property-read string $requested_quantity
 * @property-read string $requested_resolution_type
 * @property-read string $resolution_status
 * @property-read string $resolved_quantity
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read array{'category_handles': list<string>, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, 'source': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object|null $return_reason
 * @property-read string $return_reason_handle
 * @property-read string $return_reason_id
 * @property-read string $return_reason_name
 * @property-read string $return_required_quantity
 * @property-read list<string> $return_resolution_ids
 * @property-read ReturnLineItemValueInput|array<array-key, mixed>|\stdClass $return_value
 * @property-read string $review_required_quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemInput extends Model {
    /** @param array{'accepted_quantity': string, 'allowed_resolution_types': list<string>, 'approved_quantity': string, 'automatic_resolution_type'?: string, 'available_resolution_quantity': string, 'bundle_components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'buyer_note'?: string, 'canceled_quantity': string, 'created_at': string|\DateTimeInterface, 'decided_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'decision_at'?: string|\DateTimeInterface, 'decline_reason'?: string, 'decline_reason_message'?: string, 'declined_quantity': string, 'description'?: string, 'dispositioned_quantity': string, 'eligibility': ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass, 'fulfillment'?: array{'active_hold'?: FulfillmentHoldInput|array<array-key, mixed>|\stdClass, 'charges'?: list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass>, 'completed_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'delivery_choice_group_id': string|null, 'delivery_execution_leg_id': string|null, 'delivery_method_id': string|null, 'delivery_selection_id': string|null, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'dispatched_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'order_number'?: string, 'outcome'?: FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass, 'packages'?: list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>, 'packed_at'?: string|\DateTimeInterface, 'picked_at'?: string|\DateTimeInterface, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'scheduled_start_at': string|\DateTimeInterface|null, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipment_details'?: ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipments'?: list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string|\DateTimeInterface, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'fulfillment_id': string, 'handed_off_quantity': string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inspected_quantity': string, 'inspection_waived_at'?: string|\DateTimeInterface, 'inspection_waived_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'inspection_waiver_reason'?: string, 'inspection_waiver_reason_message'?: string, 'is_inspection_required'?: bool, 'is_policy_overridden': bool, 'merchandise_status': string, 'modifiers': list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'order_line_item_id': string, 'overridden_at'?: string|\DateTimeInterface, 'overridden_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'override_reason'?: string, 'override_reason_message'?: string, 'product_id'?: string, 'received_quantity': string, 'receiving_location_id'?: string, 'rejected_quantity': string, 'release_timing'?: string, 'requested_quantity': string, 'requested_resolution_type'?: string, 'resolution_status': string, 'resolved_quantity': string, 'return_id': string, 'return_line_item_id': string, 'return_reason'?: array{'category_handles': list<string>, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, 'source': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object|null, 'return_reason_handle': string, 'return_reason_id': string, 'return_reason_name': string, 'return_required_quantity': string, 'return_resolution_ids': list<string>, 'return_value': ReturnLineItemValueInput|array<array-key, mixed>|\stdClass, 'review_required_quantity': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemInput')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When accepted_quantity is omitted; use hasAcceptedQuantity() or valueOrDefault().
     */
    public function getAcceptedQuantity(): string { return $this->get('accepted_quantity'); }
    public function hasAcceptedQuantity(): bool { return $this->has('accepted_quantity'); }
    /** Shape $ (Value): Array of string.  [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When approved_quantity is omitted; use hasApprovedQuantity() or valueOrDefault().
     */
    public function getApprovedQuantity(): string { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** Shape $ (Value): string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     * @return string
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Shape $ (Value): integer string. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When available_resolution_quantity is omitted; use hasAvailableResolutionQuantity() or valueOrDefault().
     */
    public function getAvailableResolutionQuantity(): string { return $this->get('available_resolution_quantity'); }
    public function hasAvailableResolutionQuantity(): bool { return $this->has('available_resolution_quantity'); }
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): string { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When decided_by is omitted; use hasDecidedBy() or valueOrDefault().
     */
    public function getDecidedBy(): mixed { return $this->get('decided_by'); }
    public function hasDecidedBy(): bool { return $this->has('decided_by'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): string|\DateTimeInterface { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Shape $ (Value): string.  Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     * @return string
     * @throws SdkError When decline_reason is omitted; use hasDeclineReason() or valueOrDefault().
     */
    public function getDeclineReason(): string { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When decline_reason_message is omitted; use hasDeclineReasonMessage() or valueOrDefault().
     */
    public function getDeclineReasonMessage(): string { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When declined_quantity is omitted; use hasDeclinedQuantity() or valueOrDefault().
     */
    public function getDeclinedQuantity(): string { return $this->get('declined_quantity'); }
    public function hasDeclinedQuantity(): bool { return $this->has('declined_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When dispositioned_quantity is omitted; use hasDispositionedQuantity() or valueOrDefault().
     */
    public function getDispositionedQuantity(): string { return $this->get('dispositioned_quantity'); }
    public function hasDispositionedQuantity(): bool { return $this->has('dispositioned_quantity'); }
    /** Shape $ (Value): {@see ReturnLineItemEligibilityInput}. Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     * @return ReturnLineItemEligibilityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): {@see FulfillmentInput} or null. Shape $.anyOf[1] (Value): {@see FulfillmentInput}. Work required to deliver an order's items. Shape $.anyOf[2] (Value): null.
     * @return array{'active_hold'?: FulfillmentHoldInput|array<array-key, mixed>|\stdClass, 'charges'?: list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass>, 'completed_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'delivery_choice_group_id': string|null, 'delivery_execution_leg_id': string|null, 'delivery_method_id': string|null, 'delivery_selection_id': string|null, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'dispatched_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'order_number'?: string, 'outcome'?: FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass, 'packages'?: list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>, 'packed_at'?: string|\DateTimeInterface, 'picked_at'?: string|\DateTimeInterface, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'scheduled_start_at': string|\DateTimeInterface|null, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipment_details'?: ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipments'?: list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string|\DateTimeInterface, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When handed_off_quantity is omitted; use hasHandedOffQuantity() or valueOrDefault().
     */
    public function getHandedOffQuantity(): string { return $this->get('handed_off_quantity'); }
    public function hasHandedOffQuantity(): bool { return $this->has('handed_off_quantity'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When inspected_quantity is omitted; use hasInspectedQuantity() or valueOrDefault().
     */
    public function getInspectedQuantity(): string { return $this->get('inspected_quantity'); }
    public function hasInspectedQuantity(): bool { return $this->has('inspected_quantity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When inspection_waived_at is omitted; use hasInspectionWaivedAt() or valueOrDefault().
     */
    public function getInspectionWaivedAt(): string|\DateTimeInterface { return $this->get('inspection_waived_at'); }
    public function hasInspectionWaivedAt(): bool { return $this->has('inspection_waived_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inspection_waived_by is omitted; use hasInspectionWaivedBy() or valueOrDefault().
     */
    public function getInspectionWaivedBy(): mixed { return $this->get('inspection_waived_by'); }
    public function hasInspectionWaivedBy(): bool { return $this->has('inspection_waived_by'); }
    /** Shape $ (Value): string.  Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other".
     * @return string
     * @throws SdkError When inspection_waiver_reason is omitted; use hasInspectionWaiverReason() or valueOrDefault().
     */
    public function getInspectionWaiverReason(): string { return $this->get('inspection_waiver_reason'); }
    public function hasInspectionWaiverReason(): bool { return $this->has('inspection_waiver_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inspection_waiver_reason_message is omitted; use hasInspectionWaiverReasonMessage() or valueOrDefault().
     */
    public function getInspectionWaiverReasonMessage(): string { return $this->get('inspection_waiver_reason_message'); }
    public function hasInspectionWaiverReasonMessage(): bool { return $this->has('inspection_waiver_reason_message'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_policy_overridden is omitted; use hasIsPolicyOverridden() or valueOrDefault().
     */
    public function getIsPolicyOverridden(): bool { return $this->get('is_policy_overridden'); }
    public function hasIsPolicyOverridden(): bool { return $this->has('is_policy_overridden'); }
    /** Shape $ (Value): string.  Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When overridden_at is omitted; use hasOverriddenAt() or valueOrDefault().
     */
    public function getOverriddenAt(): string|\DateTimeInterface { return $this->get('overridden_at'); }
    public function hasOverriddenAt(): bool { return $this->has('overridden_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When overridden_by is omitted; use hasOverriddenBy() or valueOrDefault().
     */
    public function getOverriddenBy(): mixed { return $this->get('overridden_by'); }
    public function hasOverriddenBy(): bool { return $this->has('overridden_by'); }
    /** Shape $ (Value): string.  Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other".
     * @return string
     * @throws SdkError When override_reason is omitted; use hasOverrideReason() or valueOrDefault().
     */
    public function getOverrideReason(): string { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When override_reason_message is omitted; use hasOverrideReasonMessage() or valueOrDefault().
     */
    public function getOverrideReasonMessage(): string { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): string { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When rejected_quantity is omitted; use hasRejectedQuantity() or valueOrDefault().
     */
    public function getRejectedQuantity(): string { return $this->get('rejected_quantity'); }
    public function hasRejectedQuantity(): bool { return $this->has('rejected_quantity'); }
    /** Shape $ (Value): string. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return string
     * @throws SdkError When requested_resolution_type is omitted; use hasRequestedResolutionType() or valueOrDefault().
     */
    public function getRequestedResolutionType(): string { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** Shape $ (Value): string.  Value enum: "not_selected", "pending", "requires_action", "fulfilled", "failed".
     * @return string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When resolved_quantity is omitted; use hasResolvedQuantity() or valueOrDefault().
     */
    public function getResolvedQuantity(): string { return $this->get('resolved_quantity'); }
    public function hasResolvedQuantity(): bool { return $this->has('resolved_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): {@see ReturnReasonInput} or null. Shape $.anyOf[1] (Value): {@see ReturnReasonInput}. A reason customers can select when requesting a return. Shape $.anyOf[2] (Value): null.
     * @return array{'category_handles': list<string>, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, 'source': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When return_reason is omitted; use hasReturnReason() or valueOrDefault().
     */
    public function getReturnReason(): mixed { return $this->get('return_reason'); }
    public function hasReturnReason(): bool { return $this->has('return_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_reason_handle is omitted; use hasReturnReasonHandle() or valueOrDefault().
     */
    public function getReturnReasonHandle(): string { return $this->get('return_reason_handle'); }
    public function hasReturnReasonHandle(): bool { return $this->has('return_reason_handle'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_reason_name is omitted; use hasReturnReasonName() or valueOrDefault().
     */
    public function getReturnReasonName(): string { return $this->get('return_reason_name'); }
    public function hasReturnReasonName(): bool { return $this->has('return_reason_name'); }
    /** Shape $ (Value): integer string. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): string { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** Shape $ (Value): Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When return_resolution_ids is omitted; use hasReturnResolutionIds() or valueOrDefault().
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Shape $ (Value): {@see ReturnLineItemValueInput}. The value of a return line: unit price, subtotal, discount, tax, and total.
     * @return ReturnLineItemValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_value is omitted; use hasReturnValue() or valueOrDefault().
     */
    public function getReturnValue(): mixed { return $this->get('return_value'); }
    public function hasReturnValue(): bool { return $this->has('return_value'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When review_required_quantity is omitted; use hasReviewRequiredQuantity() or valueOrDefault().
     */
    public function getReviewRequiredQuantity(): string { return $this->get('review_required_quantity'); }
    public function hasReviewRequiredQuantity(): bool { return $this->has('review_required_quantity'); }
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
    /** Shape $ (Value): string.  Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string.  [] enum: "cancel", "waive_inspection". Shape $[] (Value): string.  Value enum: "cancel", "waive_inspection".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
