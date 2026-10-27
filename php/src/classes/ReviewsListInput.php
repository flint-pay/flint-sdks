<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $status
 * @property-read list<string> $risk_level
 * @property-read list<string> $payment_flow
 * @property-read string $payment_intent_id
 * @property-read string $order_id
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $opened_after
 * @property-read string|\DateTimeInterface $opened_before
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReviewsListInput extends Model {
    /** @param array{'status'?: list<string>, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'opened_after'?: string|\DateTimeInterface, 'opened_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReviewsListInput')); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "resolving", "closed". Shape $[] (Value): string.  Value enum: "open", "resolving", "closed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". Shape $[] (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed".
     * @return list<string>
     * @throws SdkError When risk_level is omitted; use hasRiskLevel() or valueOrDefault().
     */
    public function getRiskLevel(): array { return $this->get('risk_level'); }
    public function hasRiskLevel(): bool { return $this->has('risk_level'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Shape $[] (Value): string.  Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return list<string>
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): array { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When opened_after is omitted; use hasOpenedAfter() or valueOrDefault().
     */
    public function getOpenedAfter(): string|\DateTimeInterface { return $this->get('opened_after'); }
    public function hasOpenedAfter(): bool { return $this->has('opened_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When opened_before is omitted; use hasOpenedBefore() or valueOrDefault().
     */
    public function getOpenedBefore(): string|\DateTimeInterface { return $this->get('opened_before'); }
    public function hasOpenedBefore(): bool { return $this->has('opened_before'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order", "payment_intent". Shape $[] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
