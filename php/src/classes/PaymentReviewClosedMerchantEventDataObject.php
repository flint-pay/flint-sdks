<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_at
 * @property-read ResourceReference|null $closed_by
 * @property-read string|null $closed_reason
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $ip_address
 * @property-read PaymentReviewResolutionFailure|null $last_resolution_failure
 * @property-read string|null $matched_risk_rule_id
 * @property-read string $opened_at
 * @property-read string $opened_reason
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string|null $order_id
 * @property-read string $payment_flow
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read string $payment_review_id
 * @property-read PaymentReviewPaymentSummary $payment_summary
 * @property-read string|null $pending_action
 * @property-read string|null $refund_id
 * @property-read MoneyValue|null $refunded_money
 * @property-read string|null $resolution_started_at
 * @property-read ResourceReference|null $resolution_started_by
 * @property-read PaymentReviewRisk $risk
 * @property-read string $status
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewClosedMerchantEventDataObject extends Model {
    /** @param array{'closed_at': string|null, 'closed_by': mixed, 'closed_reason': string|null, 'customer'?: mixed, 'customer_id': string|null, 'ip_address': string|null, 'last_resolution_failure': mixed, 'matched_risk_rule_id': string|null, 'opened_at': string, 'opened_reason': string, 'order'?: mixed, 'order_id': string|null, 'payment_flow': string, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_review_id': string, 'payment_summary': mixed, 'pending_action': string|null, 'refund_id': string|null, 'refunded_money': mixed, 'resolution_started_at': string|null, 'resolution_started_by': mixed, 'risk': mixed, 'status': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewClosedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getClosedBy(): ResourceReference|null { return $this->get('closed_by'); }
    public function hasClosedBy(): bool { return $this->has('closed_by'); }
    /** Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** customer_id
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ip_address
     * @return string|null
     */
    public function getIpAddress(): string|null { return $this->get('ip_address'); }
    public function hasIpAddress(): bool { return $this->has('ip_address'); }
    /** The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@see PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. anyOf[2] (Value): null.
     * @return PaymentReviewResolutionFailure|null
     */
    public function getLastResolutionFailure(): PaymentReviewResolutionFailure|null { return $this->get('last_resolution_failure'); }
    public function hasLastResolutionFailure(): bool { return $this->has('last_resolution_failure'); }
    /** matched_risk_rule_id
     * @return string|null
     */
    public function getMatchedRiskRuleId(): string|null { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOpenedAt(): string { return $this->get('opened_at'); }
    public function hasOpenedAt(): bool { return $this->has('opened_at'); }
    /** Value enum: "rule".
     * @return string
     */
    public function getOpenedReason(): string { return $this->get('opened_reason'); }
    public function hasOpenedReason(): bool { return $this->has('opened_reason'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** order_id
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return string
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummary|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** payment_intent_id
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** payment_review_id
     * @return string
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.
     * @return PaymentReviewPaymentSummary
     */
    public function getPaymentSummary(): PaymentReviewPaymentSummary { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** The decision being carried out. `null` when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * @return string|null
     */
    public function getPendingAction(): string|null { return $this->get('pending_action'); }
    public function hasPendingAction(): bool { return $this->has('pending_action'); }
    /** The refund that closed this review. Null otherwise.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getRefundedMoney(): MoneyValue|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getResolutionStartedAt(): string|null { return $this->get('resolution_started_at'); }
    public function hasResolutionStartedAt(): bool { return $this->has('resolution_started_at'); }
    /** The credential that started resolving this payment review. Null when Flint started it. anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getResolutionStartedBy(): ResourceReference|null { return $this->get('resolution_started_by'); }
    public function hasResolutionStartedBy(): bool { return $this->has('resolution_started_by'); }
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`.
     * @return PaymentReviewRisk
     */
    public function getRisk(): PaymentReviewRisk { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** Value enum: "open", "resolving", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
