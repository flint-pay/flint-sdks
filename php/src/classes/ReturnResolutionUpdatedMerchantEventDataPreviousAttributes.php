<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_reason
 * @property-read string|null $action_required_by
 * @property-read list<ReturnResolutionAdjustmentPreviousAttributes>|null $adjustments
 * @property-read MoneyValuePreviousAttributes|null $buyer_payment_amount_money
 * @property-read MoneyValuePreviousAttributes|null $buyer_refund_amount_money
 * @property-read string|null $canceled_at
 * @property-read ReturnActorPreviousAttributes|null $canceled_by
 * @property-read string|null $cancellation_reason
 * @property-read string|null $cancellation_reason_message
 * @property-read string|null $confirmed_at
 * @property-read ReturnActorPreviousAttributes|null $confirmed_by
 * @property-read string|null $corrects_return_resolution_id
 * @property-read string|null $created_at
 * @property-read ReturnActorPreviousAttributes|null $created_by
 * @property-read MoneyValuePreviousAttributes|null $credit_adjustment_money
 * @property-read MoneyValuePreviousAttributes|null $deduction_money
 * @property-read list<ReturnResolutionExecutionBlockerPreviousAttributes>|null $execution_blockers
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_code
 * @property-read string|null $failure_message
 * @property-read string|null $fulfilled_at
 * @property-read string|null $gift_card_refund_destination
 * @property-read list<ReturnResolutionLineItemPreviousAttributes>|null $line_items
 * @property-read array<array-key, string>|null $metadata
 * @property-read list<string>|null $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryPreviousAttributes>|null $payment_intents
 * @property-read string|null $pricing_basis
 * @property-read list<string>|null $refund_ids
 * @property-read list<RefundPreviousAttributes>|null $refunds
 * @property-read list<ReturnReplacementLineItemPreviousAttributes>|null $replacement_line_items
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $replacement_order
 * @property-read string|null $replacement_order_id
 * @property-read MoneyValuePreviousAttributes|null $replacement_total_money
 * @property-read string|null $resolution_type
 * @property-read string|null $return_id
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_resolution_id
 * @property-read MoneyValuePreviousAttributes|null $returned_total_money
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'action_reason'?: mixed, 'action_required_by'?: mixed, 'adjustments'?: mixed, 'buyer_payment_amount_money'?: mixed, 'buyer_refund_amount_money'?: mixed, 'canceled_at'?: mixed, 'canceled_by'?: mixed, 'cancellation_reason'?: mixed, 'cancellation_reason_message'?: mixed, 'confirmed_at'?: mixed, 'confirmed_by'?: mixed, 'corrects_return_resolution_id'?: mixed, 'created_at'?: mixed, 'created_by'?: mixed, 'credit_adjustment_money'?: mixed, 'deduction_money'?: mixed, 'execution_blockers'?: mixed, 'external_reference_id'?: mixed, 'failure_code'?: mixed, 'failure_message'?: mixed, 'fulfilled_at'?: mixed, 'gift_card_refund_destination'?: mixed, 'line_items'?: mixed, 'metadata'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'pricing_basis'?: mixed, 'refund_ids'?: mixed, 'refunds'?: mixed, 'replacement_line_items'?: mixed, 'replacement_order'?: mixed, 'replacement_order_id'?: mixed, 'replacement_total_money'?: mixed, 'resolution_type'?: mixed, 'return_id'?: mixed, 'return_policy_id'?: mixed, 'return_policy_revision_id'?: mixed, 'return_resolution_id'?: mixed, 'returned_total_money'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionUpdatedMerchantEventDataPreviousAttributes')); }
    /** Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActionReason(): string|null { return $this->get('action_reason'); }
    public function hasActionReason(): bool { return $this->has('action_reason'); }
    /** Who has to act while the resolution's status is `requires_action`. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActionRequiredBy(): string|null { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /** Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of {@see ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's amounts. anyOf[1][] (Value): {@see ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionAdjustmentPreviousAttributes>|null
     */
    public function getAdjustments(): array|null { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getBuyerPaymentAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getBuyerRefundAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getCanceledBy(): ReturnActorPreviousAttributes|null { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReasonMessage(): string|null { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getConfirmedAt(): string|null { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** Who confirmed the resolution. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getConfirmedBy(): ReturnActorPreviousAttributes|null { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCorrectsReturnResolutionId(): string|null { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who created the resolution. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getCreatedBy(): ReturnActorPreviousAttributes|null { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Credits added by the resolution's adjustments. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCreditAdjustmentMoney(): MoneyValuePreviousAttributes|null { return $this->get('credit_adjustment_money'); }
    public function hasCreditAdjustmentMoney(): bool { return $this->has('credit_adjustment_money'); }
    /** Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDeductionMoney(): MoneyValuePreviousAttributes|null { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1] (Value): Array of {@see ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][] (Value): {@see ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionExecutionBlockerPreviousAttributes>|null
     */
    public function getExecutionBlockers(): array|null { return $this->get('execution_blockers'); }
    public function hasExecutionBlockers(): bool { return $this->has('execution_blockers'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "refund_payment_balance_unavailable", "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "refund_payment_balance_unavailable", "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureCode(): string|null { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed Return resolution, when available. anyOf[1] (Value): string. Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureMessage(): string|null { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** When the resolution completed. anyOf[1] (Value): string. When the resolution completed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfilledAt(): string|null { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardRefundDestination(): string|null { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /** Return lines and quantities the resolution covers. Absent on a correction. anyOf[1] (Value): Array of {@see ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value): {@see ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentIntentIds(): array|null { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of {@see ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedPaymentIntentSummaryPreviousAttributes>|null
     */
    public function getPaymentIntents(): array|null { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** How replacement lines are priced. Present on exchanges and replacements. Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value): string. How replacement lines are priced. Present on exchanges and replacements. Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPricingBasis(): string|null { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRefundIds(): array|null { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1] (Value): Array of {@see RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1][] (Value): {@see RefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundPreviousAttributes>|null
     */
    public function getRefunds(): array|null { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1] (Value): Array of {@see ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value): {@see ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnReplacementLineItemPreviousAttributes>|null
     */
    public function getReplacementLineItems(): array|null { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getReplacementOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReplacementOrderId(): string|null { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** Total of the replacement items the buyer receives. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReplacementTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** What the buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolutionType(): string|null { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the Return the resolution belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyId(): string|null { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. anyOf[1] (Value): string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyRevisionId(): string|null { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value): string. Unique identifier for this return resolution, prefixed `retres_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Value of the returned units this resolution covers. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1][] (Value): string.  Value enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
