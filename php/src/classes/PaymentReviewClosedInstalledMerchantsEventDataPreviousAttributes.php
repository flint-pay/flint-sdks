<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $closed_at
 * @property-read mixed $closed_by
 * @property-read mixed $closed_reason
 * @property-read mixed $customer
 * @property-read mixed $customer_id
 * @property-read mixed $ip_address
 * @property-read mixed $last_resolution_failure
 * @property-read string|null $matched_risk_rule_id
 * @property-read string|null $opened_at
 * @property-read string|null $opened_reason
 * @property-read mixed $order
 * @property-read mixed $order_id
 * @property-read string|null $payment_flow
 * @property-read mixed $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_review_id
 * @property-read mixed $payment_summary
 * @property-read mixed $pending_action
 * @property-read mixed $refund_id
 * @property-read mixed $refunded_money
 * @property-read mixed $resolution_started_at
 * @property-read mixed $resolution_started_by
 * @property-read mixed $risk
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewClosedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'closed_at'?: mixed, 'closed_by'?: mixed, 'closed_reason'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'ip_address'?: mixed, 'last_resolution_failure'?: mixed, 'matched_risk_rule_id'?: mixed, 'opened_at'?: mixed, 'opened_reason'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'payment_flow'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_review_id'?: mixed, 'payment_summary'?: mixed, 'pending_action'?: mixed, 'refund_id'?: mixed, 'refunded_money'?: mixed, 'resolution_started_at'?: mixed, 'resolution_started_by'?: mixed, 'risk'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewClosedInstalledMerchantsEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string or null. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClosedAt(): mixed { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value): ({@see ResourceReferencePreviousAttributes} or null). The credential that closed this payment review. Null when Flint closed it. anyOf[1].anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClosedBy(): mixed { return $this->get('closed_by'); }
    public function hasClosedBy(): bool { return $this->has('closed_by'); }
    /** How the review was resolved. `null` when the review isn't closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null. anyOf[1] (Value): string or null. How the review was resolved. `null` when the review isn't closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClosedReason(): mixed { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): ({@see ExpandedCustomerSummaryPreviousAttributes} or null). Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1].anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer the payment was made for. `null` when the payment has no customer. anyOf[1] (Value): string or null. ID of the customer the payment was made for. `null` when the payment has no customer. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. anyOf[1] (Value): string or null. The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getIpAddress(): mixed { return $this->get('ip_address'); }
    public function hasIpAddress(): bool { return $this->has('ip_address'); }
    /** The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. anyOf[1] (Value): ({@see PaymentReviewResolutionFailurePreviousAttributes} or null). The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. anyOf[1].anyOf[1] (Value): {@see PaymentReviewResolutionFailurePreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getLastResolutionFailure(): mixed { return $this->get('last_resolution_failure'); }
    public function hasLastResolutionFailure(): bool { return $this->has('last_resolution_failure'); }
    /** ID of the risk rule with the review action that opened this review. anyOf[1] (Value): string. ID of the risk rule with the review action that opened this review. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMatchedRiskRuleId(): string|null { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOpenedAt(): string|null { return $this->get('opened_at'); }
    public function hasOpenedAt(): bool { return $this->has('opened_at'); }
    /** Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint opened the review. Value enum: "rule". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOpenedReason(): string|null { return $this->get('opened_reason'); }
    public function hasOpenedReason(): bool { return $this->has('opened_reason'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): ({@see ExpandedOrderSummaryPreviousAttributes} or null). Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. anyOf[1] (Value): string or null. ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** How the reviewed payment was started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentFlow(): string|null { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): ({@see ExpandedPaymentIntentSummaryPreviousAttributes} or null). Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1].anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment intent under review. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value): string. Unique identifier for this payment review, prefixed `rev_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentReviewId(): string|null { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@see PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentSummary(): mixed { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** The decision being carried out. `null` when status isn't resolving. Value enum: "approve", "decline", "expire", null. anyOf[1] (Value): string or null. The decision being carried out. `null` when status isn't resolving. Value enum: "approve", "decline", "expire", null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPendingAction(): mixed { return $this->get('pending_action'); }
    public function hasPendingAction(): bool { return $this->has('pending_action'); }
    /** The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. anyOf[1] (Value): string or null. The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): ({@see MoneyValuePreviousAttributes} or null). Refunded amount for this review. Null when no refund is recorded. anyOf[1].anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. anyOf[1] (Value): string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getResolutionStartedAt(): mixed { return $this->get('resolution_started_at'); }
    public function hasResolutionStartedAt(): bool { return $this->has('resolution_started_at'); }
    /** The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. anyOf[1] (Value): ({@see ResourceReferencePreviousAttributes} or null). The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. anyOf[1].anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getResolutionStartedBy(): mixed { return $this->get('resolution_started_by'); }
    public function hasResolutionStartedBy(): bool { return $this->has('resolution_started_by'); }
    /** The payment's risk level and score when the review opened. anyOf[1] (Value): {@see PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRisk(): mixed { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. [] enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. [] enum: "approve", "decline". anyOf[1][] (Value): string.  Value enum: "approve", "decline". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
