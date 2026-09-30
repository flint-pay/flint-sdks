<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_at
 * @property-read string|null $closed_by
 * @property-read string|null $closed_reason
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $ip_address
 * @property-read PublicIPAddressLocation|null $ip_address_location
 * @property-read string|null $matched_risk_rule_id
 * @property-read string $opened_at
 * @property-read string $opened_reason
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string|null $order_id
 * @property-read string $payment_flow
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read PublicRiskPaymentSummary $payment_summary
 * @property-read string|null $pending_action
 * @property-read string|null $refund_id
 * @property-read MoneyValue|null $refunded_amount_money
 * @property-read string|null $resolution_started_at
 * @property-read string|null $resolution_started_by
 * @property-read string $review_id
 * @property-read PublicReviewRisk $risk
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class Review extends Model {
    /** @param array{'closed_at': string|null, 'closed_by': string|null, 'closed_reason': string|null, 'customer'?: mixed, 'customer_id': string|null, 'ip_address': string|null, 'ip_address_location': mixed, 'matched_risk_rule_id': string|null, 'opened_at': string, 'opened_reason': string, 'order'?: mixed, 'order_id': string|null, 'payment_flow': string, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_summary': mixed, 'pending_action': string|null, 'refund_id': string|null, 'refunded_amount_money': mixed, 'resolution_started_at': string|null, 'resolution_started_by': string|null, 'review_id': string, 'risk': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Review')); }
    /** @return string|null
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** @return string|null
     * @throws SdkError When closed_by is omitted; use hasClosedBy() or valueOrDefault().
     */
    public function getClosedBy(): string|null { return $this->get('closed_by'); }
    public function hasClosedBy(): bool { return $this->has('closed_by'); }
    /** @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string|null
     * @throws SdkError When ip_address is omitted; use hasIpAddress() or valueOrDefault().
     */
    public function getIpAddress(): string|null { return $this->get('ip_address'); }
    public function hasIpAddress(): bool { return $this->has('ip_address'); }
    /** @return PublicIPAddressLocation|null
     * @throws SdkError When ip_address_location is omitted; use hasIpAddressLocation() or valueOrDefault().
     */
    public function getIpAddressLocation(): PublicIPAddressLocation|null { return $this->get('ip_address_location'); }
    public function hasIpAddressLocation(): bool { return $this->has('ip_address_location'); }
    /** @return string|null
     * @throws SdkError When matched_risk_rule_id is omitted; use hasMatchedRiskRuleId() or valueOrDefault().
     */
    public function getMatchedRiskRuleId(): string|null { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** @return string
     * @throws SdkError When opened_at is omitted; use hasOpenedAt() or valueOrDefault().
     */
    public function getOpenedAt(): string { return $this->get('opened_at'); }
    public function hasOpenedAt(): bool { return $this->has('opened_at'); }
    /** @return string
     * @throws SdkError When opened_reason is omitted; use hasOpenedReason() or valueOrDefault().
     */
    public function getOpenedReason(): string { return $this->get('opened_reason'); }
    public function hasOpenedReason(): bool { return $this->has('opened_reason'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** @return ExpandedPaymentIntentSummary|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return PublicRiskPaymentSummary
     * @throws SdkError When payment_summary is omitted; use hasPaymentSummary() or valueOrDefault().
     */
    public function getPaymentSummary(): PublicRiskPaymentSummary { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** @return string|null
     * @throws SdkError When pending_action is omitted; use hasPendingAction() or valueOrDefault().
     */
    public function getPendingAction(): string|null { return $this->get('pending_action'); }
    public function hasPendingAction(): bool { return $this->has('pending_action'); }
    /** @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** @return MoneyValue|null
     * @throws SdkError When refunded_amount_money is omitted; use hasRefundedAmountMoney() or valueOrDefault().
     */
    public function getRefundedAmountMoney(): MoneyValue|null { return $this->get('refunded_amount_money'); }
    public function hasRefundedAmountMoney(): bool { return $this->has('refunded_amount_money'); }
    /** @return string|null
     * @throws SdkError When resolution_started_at is omitted; use hasResolutionStartedAt() or valueOrDefault().
     */
    public function getResolutionStartedAt(): string|null { return $this->get('resolution_started_at'); }
    public function hasResolutionStartedAt(): bool { return $this->has('resolution_started_at'); }
    /** @return string|null
     * @throws SdkError When resolution_started_by is omitted; use hasResolutionStartedBy() or valueOrDefault().
     */
    public function getResolutionStartedBy(): string|null { return $this->get('resolution_started_by'); }
    public function hasResolutionStartedBy(): bool { return $this->has('resolution_started_by'); }
    /** @return string
     * @throws SdkError When review_id is omitted; use hasReviewId() or valueOrDefault().
     */
    public function getReviewId(): string { return $this->get('review_id'); }
    public function hasReviewId(): bool { return $this->has('review_id'); }
    /** @return PublicReviewRisk
     * @throws SdkError When risk is omitted; use hasRisk() or valueOrDefault().
     */
    public function getRisk(): PublicReviewRisk { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
