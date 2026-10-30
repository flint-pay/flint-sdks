<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $action_reason
 * @property-read ?string $action_required_by
 * @property-read list<ReturnResolutionAdjustment> $adjustments
 * @property-read MoneyValue $buyer_payment_amount_money
 * @property-read MoneyValue $buyer_refund_amount_money
 * @property-read ?string $canceled_at
 * @property-read ?ReturnActor $canceled_by
 * @property-read ?string $cancellation_reason
 * @property-read ?string $cancellation_reason_message
 * @property-read ?string $confirmed_at
 * @property-read ?ReturnActor $confirmed_by
 * @property-read ?string $corrects_return_resolution_id
 * @property-read string $created_at
 * @property-read ReturnActor $created_by
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $deduction_money
 * @property-read list<ReturnResolutionExecutionBlocker> $execution_blockers
 * @property-read ?string $external_reference_id
 * @property-read ?string $failure_code
 * @property-read ?string $failure_message
 * @property-read ?string $fulfilled_at
 * @property-read ?string $gift_card_refund_destination
 * @property-read list<ReturnResolutionLineItem> $line_items
 * @property-read array<array-key, string> $metadata
 * @property-read list<string> $payment_intent_ids
 * @property-read ?list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read ?string $pricing_basis
 * @property-read list<string> $refund_ids
 * @property-read ?list<Refund> $refunds
 * @property-read list<ReturnReplacementLineItem> $replacement_line_items
 * @property-read ExpandedOrderSummary|null $replacement_order
 * @property-read ?string $replacement_order_id
 * @property-read MoneyValue $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read ?string $return_policy_revision_id
 * @property-read string $return_resolution_id
 * @property-read MoneyValue $returned_total_money
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<mixed>, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'confirmed_at'?: string, 'confirmed_by'?: mixed, 'corrects_return_resolution_id'?: string, 'created_at': string, 'created_by': mixed, 'credit_money': mixed, 'deduction_money': mixed, 'execution_blockers': list<mixed>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata': mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_order'?: mixed, 'replacement_order_id'?: string, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionCreatedInstalledMerchantsEventDataObject')); }
    /** Value enum: "buyer_payment", "buyer_selection", "merchant_review", "manual_release", "linked_effect_retry", "other".
     * @return ?string
     */
    public function getActionReason(): ?string { return $this->get('action_reason'); }
    public function hasActionReason(): bool { return $this->has('action_reason'); }
    /** Value enum: "buyer", "merchant".
     * @return ?string
     */
    public function getActionRequiredBy(): ?string { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /**  [] (Value): {@see ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     * @return list<ReturnResolutionAdjustment>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBuyerPaymentAmountMoney(): MoneyValue { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBuyerRefundAmountMoney(): MoneyValue { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getCanceledBy(): ?ReturnActor { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** cancellation_reason_message
     * @return ?string
     */
    public function getCancellationReasonMessage(): ?string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getConfirmedAt(): ?string { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getConfirmedBy(): ?ReturnActor { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** corrects_return_resolution_id
     * @return ?string
     */
    public function getCorrectsReturnResolutionId(): ?string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActor
     */
    public function getCreatedBy(): ReturnActor { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDeductionMoney(): MoneyValue { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /**  [] (Value): {@see ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can finish.
     * @return list<ReturnResolutionExecutionBlocker>
     */
    public function getExecutionBlockers(): array { return $this->get('execution_blockers'); }
    public function hasExecutionBlockers(): bool { return $this->has('execution_blockers'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed Return resolution, when available.
     * @return ?string
     */
    public function getFailureMessage(): ?string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** When the resolution became fulfilled. Format: date-time.
     * @return ?string
     */
    public function getFulfilledAt(): ?string { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card".
     * @return ?string
     */
    public function getGiftCardRefundDestination(): ?string { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /**  [] (Value): {@see ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<ReturnResolutionLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /**  [] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return ?list<ExpandedPaymentIntentSummary>
     */
    public function getPaymentIntents(): ?array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Value enum: "original_price", "current_price", "merchant_agreed_price".
     * @return ?string
     */
    public function getPricingBasis(): ?string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /**  [] (Value): {@see Refund}. Money returned against a collected payment.
     * @return ?list<Refund>
     */
    public function getRefunds(): ?array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /**  [] (Value): {@see ReturnReplacementLineItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<ReturnReplacementLineItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getReplacementOrder(): ExpandedOrderSummary|null { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** replacement_order_id
     * @return ?string
     */
    public function getReplacementOrderId(): ?string { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReplacementTotalMoney(): MoneyValue { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return string
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_policy_revision_id
     * @return ?string
     */
    public function getReturnPolicyRevisionId(): ?string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** return_resolution_id
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** fulfilled means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open, except checkout_session. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". [] (Value): string.  Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
