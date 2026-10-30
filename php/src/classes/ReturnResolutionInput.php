<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_reason
 * @property-read string $action_required_by
 * @property-read list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_payment_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_refund_amount_money
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $canceled_by
 * @property-read string $cancellation_reason
 * @property-read string $cancellation_reason_message
 * @property-read string|\DateTimeInterface $confirmed_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $confirmed_by
 * @property-read string $corrects_return_resolution_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $created_by
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $deduction_money
 * @property-read list<ReturnResolutionExecutionBlockerInput|array<array-key, mixed>|\stdClass> $execution_blockers
 * @property-read string $external_reference_id
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string|\DateTimeInterface $fulfilled_at
 * @property-read string $gift_card_refund_destination
 * @property-read list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read string $pricing_basis
 * @property-read list<string> $refund_ids
 * @property-read list<RefundInput|array<array-key, mixed>|\stdClass> $refunds
 * @property-read list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $replacement_order
 * @property-read string $replacement_order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read string $return_policy_revision_id
 * @property-read string $return_resolution_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_total_money
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionInput extends Model {
    /** @param array{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>, 'buyer_payment_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_refund_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'confirmed_at'?: string|\DateTimeInterface, 'confirmed_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'corrects_return_resolution_id'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'deduction_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'execution_blockers': list<ReturnResolutionExecutionBlockerInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string|\DateTimeInterface, 'gift_card_refund_destination'?: string, 'line_items': list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'payment_intent_ids': list<string>, 'payment_intents'?: list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<RefundInput|array<array-key, mixed>|\stdClass>, 'replacement_line_items': list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>, 'replacement_order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'replacement_order_id'?: string, 'replacement_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'resolution_type': string, 'return_id': string, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionInput')); }
    /** Value enum: "buyer_payment", "buyer_selection", "merchant_review", "manual_release", "linked_effect_retry", "other".
     * @return string
     * @throws SdkError When action_reason is omitted; use hasActionReason() or valueOrDefault().
     */
    public function getActionReason(): string { return $this->get('action_reason'); }
    public function hasActionReason(): bool { return $this->has('action_reason'); }
    /** Value enum: "buyer", "merchant".
     * @return string
     * @throws SdkError When action_required_by is omitted; use hasActionRequiredBy() or valueOrDefault().
     */
    public function getActionRequiredBy(): string { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /**  [] (Value): {@see ReturnResolutionAdjustmentInput}. A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     * @return list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_payment_amount_money is omitted; use hasBuyerPaymentAmountMoney() or valueOrDefault().
     */
    public function getBuyerPaymentAmountMoney(): mixed { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): mixed { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When canceled_by is omitted; use hasCanceledBy() or valueOrDefault().
     */
    public function getCanceledBy(): mixed { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** cancellation_reason_message
     * @return string
     * @throws SdkError When cancellation_reason_message is omitted; use hasCancellationReasonMessage() or valueOrDefault().
     */
    public function getCancellationReasonMessage(): string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When confirmed_at is omitted; use hasConfirmedAt() or valueOrDefault().
     */
    public function getConfirmedAt(): string|\DateTimeInterface { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When confirmed_by is omitted; use hasConfirmedBy() or valueOrDefault().
     */
    public function getConfirmedBy(): mixed { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** corrects_return_resolution_id
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /**  [] (Value): {@see ReturnResolutionExecutionBlockerInput}. Work that must complete before a Return resolution can finish.
     * @return list<ReturnResolutionExecutionBlockerInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_blockers is omitted; use hasExecutionBlockers() or valueOrDefault().
     */
    public function getExecutionBlockers(): array { return $this->get('execution_blockers'); }
    public function hasExecutionBlockers(): bool { return $this->has('execution_blockers'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Value enum: "gift_card_refund_destination_required", "store_credit_unavailable", "refund_creation_failed", "refund_failed", "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed", "replacement_fulfillment_canceled", "resolution_effect_failed".
     * @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed Return resolution, when available.
     * @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** When the resolution became fulfilled. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When fulfilled_at is omitted; use hasFulfilledAt() or valueOrDefault().
     */
    public function getFulfilledAt(): string|\DateTimeInterface { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When gift_card_refund_destination is omitted; use hasGiftCardRefundDestination() or valueOrDefault().
     */
    public function getGiftCardRefundDestination(): string { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /**  [] (Value): {@see ReturnResolutionLineItemInput}. A return line included in a resolution, with its quantity and returned total.
     * @return list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /**  [] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Value enum: "original_price", "current_price", "merchant_agreed_price".
     * @return string
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /**  [] (Value): {@see RefundInput}. Money returned against a collected payment.
     * @return list<RefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /**  [] (Value): {@see ReturnReplacementLineItemInput}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When replacement_order is omitted; use hasReplacementOrder() or valueOrDefault().
     */
    public function getReplacementOrder(): mixed { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** replacement_order_id
     * @return string
     * @throws SdkError When replacement_order_id is omitted; use hasReplacementOrderId() or valueOrDefault().
     */
    public function getReplacementOrderId(): string { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** return_id
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_policy_revision_id
     * @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** return_resolution_id
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** fulfilled means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open, except checkout_session. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". [] (Value): string.  Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
