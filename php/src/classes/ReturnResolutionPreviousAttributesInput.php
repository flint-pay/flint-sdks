<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_reason
 * @property-read string|null $action_required_by
 * @property-read list<ReturnResolutionAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $adjustments
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $buyer_payment_amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $buyer_refund_amount_money
 * @property-read string|\DateTimeInterface|null $canceled_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $canceled_by
 * @property-read string|null $cancellation_reason
 * @property-read string|null $cancellation_reason_message
 * @property-read string|\DateTimeInterface|null $confirmed_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $confirmed_by
 * @property-read string|null $corrects_return_resolution_id
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $created_by
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $credit_adjustment_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $deduction_money
 * @property-read list<ReturnResolutionExecutionBlockerPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $execution_blockers
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_code
 * @property-read string|null $failure_message
 * @property-read string|\DateTimeInterface|null $fulfilled_at
 * @property-read string|null $gift_card_refund_destination
 * @property-read list<ReturnResolutionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read list<string>|null $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $payment_intents
 * @property-read string|null $pricing_basis
 * @property-read list<string>|null $refund_ids
 * @property-read list<RefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $refunds
 * @property-read list<ReturnReplacementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $replacement_line_items
 * @property-read ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $replacement_order
 * @property-read string|null $replacement_order_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $replacement_total_money
 * @property-read string|null $resolution_type
 * @property-read string|null $return_id
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_resolution_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_total_money
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionPreviousAttributesInput extends Model {
    /** @param array{'action_reason'?: string|null, 'action_required_by'?: string|null, 'adjustments'?: list<ReturnResolutionAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'buyer_payment_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'buyer_refund_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'canceled_at'?: string|\DateTimeInterface|null, 'canceled_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'cancellation_reason'?: string|null, 'cancellation_reason_message'?: string|null, 'confirmed_at'?: string|\DateTimeInterface|null, 'confirmed_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'corrects_return_resolution_id'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'created_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'credit_adjustment_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'deduction_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'execution_blockers'?: list<ReturnResolutionExecutionBlockerPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'external_reference_id'?: string|null, 'failure_code'?: string|null, 'failure_message'?: string|null, 'fulfilled_at'?: string|\DateTimeInterface|null, 'gift_card_refund_destination'?: string|null, 'line_items'?: list<ReturnResolutionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payment_intent_ids'?: list<string>|null, 'payment_intents'?: list<ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'pricing_basis'?: string|null, 'refund_ids'?: list<string>|null, 'refunds'?: list<RefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'replacement_line_items'?: list<ReturnReplacementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'replacement_order'?: ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'replacement_order_id'?: string|null, 'replacement_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'resolution_type'?: string|null, 'return_id'?: string|null, 'return_policy_id'?: string|null, 'return_policy_revision_id'?: string|null, 'return_resolution_id'?: string|null, 'returned_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionPreviousAttributesInput')); }
    /** Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When action_reason is omitted; use hasActionReason() or valueOrDefault().
     */
    public function getActionReason(): mixed { return $this->get('action_reason'); }
    public function hasActionReason(): bool { return $this->has('action_reason'); }
    /** Who has to act while the resolution's status is `requires_action`. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When action_required_by is omitted; use hasActionRequiredBy() or valueOrDefault().
     */
    public function getActionRequiredBy(): mixed { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /** Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of {@see ReturnResolutionAdjustmentPreviousAttributesInput}. Fees and credits applied to the resolution's amounts. anyOf[1][] (Value): {@see ReturnResolutionAdjustmentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): mixed { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When buyer_payment_amount_money is omitted; use hasBuyerPaymentAmountMoney() or valueOrDefault().
     */
    public function getBuyerPaymentAmountMoney(): mixed { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): mixed { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): mixed { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When canceled_by is omitted; use hasCanceledBy() or valueOrDefault().
     */
    public function getCanceledBy(): mixed { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): mixed { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When cancellation_reason_message is omitted; use hasCancellationReasonMessage() or valueOrDefault().
     */
    public function getCancellationReasonMessage(): mixed { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When confirmed_at is omitted; use hasConfirmedAt() or valueOrDefault().
     */
    public function getConfirmedAt(): mixed { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** Who confirmed the resolution. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When confirmed_by is omitted; use hasConfirmedBy() or valueOrDefault().
     */
    public function getConfirmedBy(): mixed { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): mixed { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who created the resolution. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Credits added by the resolution's adjustments. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When credit_adjustment_money is omitted; use hasCreditAdjustmentMoney() or valueOrDefault().
     */
    public function getCreditAdjustmentMoney(): mixed { return $this->get('credit_adjustment_money'); }
    public function hasCreditAdjustmentMoney(): bool { return $this->has('credit_adjustment_money'); }
    /** Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1] (Value): Array of {@see ReturnResolutionExecutionBlockerPreviousAttributesInput}. What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][] (Value): {@see ReturnResolutionExecutionBlockerPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionExecutionBlockerPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When execution_blockers is omitted; use hasExecutionBlockers() or valueOrDefault().
     */
    public function getExecutionBlockers(): mixed { return $this->get('execution_blockers'); }
    public function hasExecutionBlockers(): bool { return $this->has('execution_blockers'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): mixed { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed Return resolution, when available. anyOf[1] (Value): string. Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): mixed { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** When the resolution completed. anyOf[1] (Value): string. When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When fulfilled_at is omitted; use hasFulfilledAt() or valueOrDefault().
     */
    public function getFulfilledAt(): mixed { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_refund_destination is omitted; use hasGiftCardRefundDestination() or valueOrDefault().
     */
    public function getGiftCardRefundDestination(): mixed { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /** Return lines and quantities the resolution covers. Absent on a correction. anyOf[1] (Value): Array of {@see ReturnResolutionLineItemPreviousAttributesInput}. Return lines and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value): {@see ReturnResolutionLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): mixed { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of {@see ExpandedPaymentIntentSummaryPreviousAttributesInput}. Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): mixed { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** How replacement lines are priced. Present on exchanges and replacements. Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value): string. How replacement lines are priced. Present on exchanges and replacements. Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): mixed { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): mixed { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1] (Value): Array of {@see RefundPreviousAttributesInput}. Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1][] (Value): {@see RefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): mixed { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1] (Value): Array of {@see ReturnReplacementLineItemPreviousAttributesInput}. Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value): {@see ReturnReplacementLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnReplacementLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): mixed { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When replacement_order is omitted; use hasReplacementOrder() or valueOrDefault().
     */
    public function getReplacementOrder(): mixed { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When replacement_order_id is omitted; use hasReplacementOrderId() or valueOrDefault().
     */
    public function getReplacementOrderId(): mixed { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** Total of the replacement items the buyer receives. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** What the buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): mixed { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): mixed { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. anyOf[1] (Value): string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): mixed { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value): string. Unique identifier for this return resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): mixed { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Value of the returned units this resolution covers. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "confirm", "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "confirm", "release", "retry". anyOf[1][] (Value): string.  Value enum: "cancel", "confirm", "release", "retry". anyOf[2] (Value): null.
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
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
