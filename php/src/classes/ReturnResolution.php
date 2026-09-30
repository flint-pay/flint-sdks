<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_reason
 * @property-read string $action_required_by
 * @property-read list<ReturnResolutionAdjustment> $adjustments
 * @property-read MoneyValue $buyer_payment_amount_money
 * @property-read MoneyValue $buyer_refund_amount_money
 * @property-read string $canceled_at
 * @property-read string $confirmed_at
 * @property-read ReturnActor $confirmed_by
 * @property-read string $corrects_return_resolution_id
 * @property-read string $created_at
 * @property-read ReturnActor $created_by
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $deduction_money
 * @property-read list<ReturnResolutionExecutionBlocker> $execution_blockers
 * @property-read string $external_reference_id
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string $fulfilled_at
 * @property-read list<ReturnResolutionLineItem> $line_items
 * @property-read array<array-key, string> $metadata
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read string $pricing_basis
 * @property-read list<string> $refund_ids
 * @property-read list<Refund> $refunds
 * @property-read list<ReturnReplacementLineItem> $replacement_line_items
 * @property-read ExpandedOrderSummary|null $replacement_order
 * @property-read string $replacement_order_id
 * @property-read MoneyValue $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read string $return_policy_revision_id
 * @property-read string $return_resolution_id
 * @property-read MoneyValue $returned_total_money
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnResolution extends Model {
    /** @param array{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<mixed>, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'canceled_at'?: string, 'confirmed_at'?: string, 'confirmed_by'?: mixed, 'corrects_return_resolution_id'?: string, 'created_at': string, 'created_by': mixed, 'credit_money': mixed, 'deduction_money': mixed, 'execution_blockers': list<mixed>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string, 'line_items': list<mixed>, 'metadata': \stdClass, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_order'?: mixed, 'replacement_order_id'?: string, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolution')); }
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
    /** @return list<ReturnResolutionAdjustment>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** @return MoneyValue
     * @throws SdkError When buyer_payment_amount_money is omitted; use hasBuyerPaymentAmountMoney() or valueOrDefault().
     */
    public function getBuyerPaymentAmountMoney(): MoneyValue { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** @return MoneyValue
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): MoneyValue { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** @return string
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** @return string
     * @throws SdkError When confirmed_at is omitted; use hasConfirmedAt() or valueOrDefault().
     */
    public function getConfirmedAt(): string { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** @return ReturnActor
     * @throws SdkError When confirmed_by is omitted; use hasConfirmedBy() or valueOrDefault().
     */
    public function getConfirmedBy(): ReturnActor { return $this->get('confirmed_by'); }
    public function hasConfirmedBy(): bool { return $this->has('confirmed_by'); }
    /** @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ReturnActor
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): ReturnActor { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** @return MoneyValue
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return MoneyValue
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): MoneyValue { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** @return list<ReturnResolutionExecutionBlocker>
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
    /** @return string
     * @throws SdkError When fulfilled_at is omitted; use hasFulfilledAt() or valueOrDefault().
     */
    public function getFulfilledAt(): string { return $this->get('fulfilled_at'); }
    public function hasFulfilledAt(): bool { return $this->has('fulfilled_at'); }
    /** @return list<ReturnResolutionLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** @return list<ExpandedPaymentIntentSummary>
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
    /** @return list<Refund>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** @return list<ReturnReplacementLineItem>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When replacement_order is omitted; use hasReplacementOrder() or valueOrDefault().
     */
    public function getReplacementOrder(): ExpandedOrderSummary|null { return $this->get('replacement_order'); }
    public function hasReplacementOrder(): bool { return $this->has('replacement_order'); }
    /** @return string
     * @throws SdkError When replacement_order_id is omitted; use hasReplacementOrderId() or valueOrDefault().
     */
    public function getReplacementOrderId(): string { return $this->get('replacement_order_id'); }
    public function hasReplacementOrderId(): bool { return $this->has('replacement_order_id'); }
    /** @return MoneyValue
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): MoneyValue { return $this->get('replacement_total_money'); }
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
    /** @return MoneyValue
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
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
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
