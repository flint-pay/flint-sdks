<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read list<string>|string $status
 * @property-read list<string>|string $risk_level
 * @property-read list<string>|string $payment_flow
 * @property-read string $payment_intent_id
 * @property-read string $order_id
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $opened_after
 * @property-read string|\DateTimeInterface $opened_before
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewsListInput extends Model {
    /** @param array{'status'?: list<string>|string, 'risk_level'?: list<string>|string, 'payment_flow'?: list<string>|string, 'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'opened_after'?: string|\DateTimeInterface, 'opened_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewsListInput')); }
    /** Filter by review status. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "open", "resolving", "closed". Value enum: "open", "resolving", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "resolving", "closed". anyOf[1][] (Value): string.  Value enum: "open", "resolving", "closed". anyOf[2] (Value): string.  Value enum: "open", "resolving", "closed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by immutable review risk level. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated", "highest", "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". anyOf[1][] (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed".
     * @return list<string>|string
     * @throws SdkError When risk_level is omitted; use hasRiskLevel() or valueOrDefault().
     */
    public function getRiskLevel(): mixed { return $this->get('risk_level'); }
    public function hasRiskLevel(): bool { return $this->has('risk_level'); }
    /** Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[1][] (Value): string.  Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): string.  Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return list<string>|string
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): mixed { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Inclusive lower bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When opened_after is omitted; use hasOpenedAfter() or valueOrDefault().
     */
    public function getOpenedAfter(): string|\DateTimeInterface { return $this->get('opened_after'); }
    public function hasOpenedAfter(): bool { return $this->has('opened_after'); }
    /** Exclusive upper bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When opened_before is omitted; use hasOpenedBefore() or valueOrDefault().
     */
    public function getOpenedBefore(): string|\DateTimeInterface { return $this->get('opened_before'); }
    public function hasOpenedBefore(): bool { return $this->has('opened_before'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Supported expansions: customer, order, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string.  Value enum: "customer", "order", "payment_intent". anyOf[2] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
