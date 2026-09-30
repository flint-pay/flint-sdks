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
 * @property-read list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read string $pricing_basis
 * @property-read list<string> $refund_ids
 * @property-read list<RefundInput|array<array-key, mixed>|\stdClass> $refunds
 * @property-read list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $replacement_order
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
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionInput extends Model {
    /** @param array{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>, 'buyer_payment_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_refund_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_at'?: string|\DateTimeInterface, 'confirmed_at'?: string|\DateTimeInterface, 'confirmed_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'corrects_return_resolution_id'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'deduction_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'execution_blockers': list<ReturnResolutionExecutionBlockerInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string|\DateTimeInterface, 'line_items': list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>, 'metadata': array<array-key, string>|\stdClass, 'payment_intent_ids': list<string>, 'payment_intents'?: list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<RefundInput|array<array-key, mixed>|\stdClass>, 'replacement_line_items': list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>, 'replacement_order'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'replacement_order_id'?: string, 'replacement_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'resolution_type': string, 'return_id': string, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionInput')); }
    /** @return string
     * @throws SdkError When action_reason is omitted; use hasActionReason() or valueOrDefault().
     */
    public function getActionReason(): string { return $this->get('action_reason'); }
    public function hasActionReason(): bool { return $this->has('action_reason'); }
    /** @return string
     * @throws SdkError When action_required_by is omitted; use hasActionRequiredBy() or valueOrDefault().
     */
    public function getActionRequiredBy(): string { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /** @return list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_payment_amount_money is omitted; use hasBuyerPaymentAmountMoney() or valueOrDefault().
     */
    public function getBuyerPaymentAmountMoney(): mixed { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): mixed { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When confirmed_at is omitted; use hasConfirmedAt() or valueOrDefault().
     */
    public function getConfirmedAt(): string|\DateTimeInterface { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When confirmed_by is omitted; use hasConfirmedBy() or valueOrDefault().
     */
    public function getConfirmedBy(): mixed { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** @return list<ReturnResolutionExecutionBlockerInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_blockers is omitted; use hasExecutionBlockers() or valueOrDefault().
     */
    public function getExecutionBlockers(): array { return $this->get('execution_blockers'); }
    public function hasExecutionBlockers(): bool { return $this->has('execution_blockers'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When fulfilled_at is omitted; use hasFulfilledAt() or valueOrDefault().
     */
    public function getFulfilledAt(): string|\DateTimeInterface { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** @return list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** @return list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** @return string
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** @return list<RefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** @return list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** @return array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When replacement_order is omitted; use hasReplacementOrder() or valueOrDefault().
     */
    public function getReplacementOrder(): mixed { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** @return string
     * @throws SdkError When replacement_order_id is omitted; use hasReplacementOrderId() or valueOrDefault().
     */
    public function getReplacementOrderId(): string { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
