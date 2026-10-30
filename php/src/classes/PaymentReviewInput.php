<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $closed_at
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $closed_by
 * @property-read string|null $closed_reason
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $ip_address
 * @property-read array{'failed_at': string|\DateTimeInterface, 'refund_id': string, ...}|object|null $last_resolution_failure
 * @property-read string|null $matched_risk_rule_id
 * @property-read string|\DateTimeInterface $opened_at
 * @property-read string $opened_reason
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string|null $order_id
 * @property-read string $payment_flow
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read string $payment_review_id
 * @property-read PaymentReviewPaymentSummaryInput|array<array-key, mixed>|\stdClass $payment_summary
 * @property-read string|null $pending_action
 * @property-read string|null $refund_id
 * @property-read array{'amount': string, 'currency': string}|object|null $refunded_money
 * @property-read string|\DateTimeInterface|null $resolution_started_at
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $resolution_started_by
 * @property-read PaymentReviewRiskInput|array<array-key, mixed>|\stdClass $risk
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewInput extends Model {
    /** @param array{'closed_at': string|\DateTimeInterface|null, 'closed_by': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'closed_reason': string|null, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id': string|null, 'ip_address': string|null, 'last_resolution_failure': array{'failed_at': string|\DateTimeInterface, 'refund_id': string, ...}|object|null, 'matched_risk_rule_id': string|null, 'opened_at': string|\DateTimeInterface, 'opened_reason': string, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string|null, 'payment_flow': string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id': string, 'payment_review_id': string, 'payment_summary': PaymentReviewPaymentSummaryInput|array<array-key, mixed>|\stdClass, 'pending_action': string|null, 'refund_id': string|null, 'refunded_money': array{'amount': string, 'currency': string}|object|null, 'resolution_started_at': string|\DateTimeInterface|null, 'resolution_started_by': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'risk': PaymentReviewRiskInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When closed_by is omitted; use hasClosedBy() or valueOrDefault().
     */
    public function getClosedBy(): mixed { return $this->get('closed_by'); }
    public function hasClosedBy(): bool { return $this->has('closed_by'); }
    /** Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
     * @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** customer_id
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ip_address
     * @return string|null
     * @throws SdkError When ip_address is omitted; use hasIpAddress() or valueOrDefault().
     */
    public function getIpAddress(): string|null { return $this->get('ip_address'); }
    public function hasIpAddress(): bool { return $this->has('ip_address'); }
    /** The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@see PaymentReviewResolutionFailureInput}. A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. anyOf[2] (Value): null.
     * @return array{'failed_at': string|\DateTimeInterface, 'refund_id': string, ...}|object|null
     * @throws SdkError When last_resolution_failure is omitted; use hasLastResolutionFailure() or valueOrDefault().
     */
    public function getLastResolutionFailure(): mixed { return $this->get('last_resolution_failure'); }
    public function hasLastResolutionFailure(): bool { return $this->has('last_resolution_failure'); }
    /** matched_risk_rule_id
     * @return string|null
     * @throws SdkError When matched_risk_rule_id is omitted; use hasMatchedRiskRuleId() or valueOrDefault().
     */
    public function getMatchedRiskRuleId(): string|null { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When opened_at is omitted; use hasOpenedAt() or valueOrDefault().
     */
    public function getOpenedAt(): string|\DateTimeInterface { return $this->get('opened_at'); }
    public function hasOpenedAt(): bool { return $this->has('opened_at'); }
    /** Value enum: "rule".
     * @return string
     * @throws SdkError When opened_reason is omitted; use hasOpenedReason() or valueOrDefault().
     */
    public function getOpenedReason(): string { return $this->get('opened_reason'); }
    public function hasOpenedReason(): bool { return $this->has('opened_reason'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** order_id
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return string
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** payment_intent_id
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** payment_review_id
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.
     * @return PaymentReviewPaymentSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_summary is omitted; use hasPaymentSummary() or valueOrDefault().
     */
    public function getPaymentSummary(): mixed { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** The decision being carried out. `null` when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * @return string|null
     * @throws SdkError When pending_action is omitted; use hasPendingAction() or valueOrDefault().
     */
    public function getPendingAction(): string|null { return $this->get('pending_action'); }
    public function hasPendingAction(): bool { return $this->has('pending_action'); }
    /** The refund that closed this review. Null otherwise.
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When resolution_started_at is omitted; use hasResolutionStartedAt() or valueOrDefault().
     */
    public function getResolutionStartedAt(): string|\DateTimeInterface|null { return $this->get('resolution_started_at'); }
    public function hasResolutionStartedAt(): bool { return $this->has('resolution_started_at'); }
    /** The credential that started resolving this payment review. Null when Flint started it. anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When resolution_started_by is omitted; use hasResolutionStartedBy() or valueOrDefault().
     */
    public function getResolutionStartedBy(): mixed { return $this->get('resolution_started_by'); }
    public function hasResolutionStartedBy(): bool { return $this->has('resolution_started_by'); }
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`.
     * @return PaymentReviewRiskInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When risk is omitted; use hasRisk() or valueOrDefault().
     */
    public function getRisk(): mixed { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** Value enum: "open", "resolving", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
