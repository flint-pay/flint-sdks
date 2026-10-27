<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $closed_reason
 * @property-read list<string> $status
 * @property-read list<string> $payment_status
 * @property-read list<string> $refund_status
 * @property-read list<string> $fulfillment_status
 * @property-read string $order_number
 * @property-read list<string> $origin
 * @property-read string $query
 * @property-read string $subscription_id
 * @property-read bool $subscription_delivery_changed
 * @property-read string $min_amount
 * @property-read string $max_amount
 * @property-read string $currency
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListOrdersInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'closed_reason'?: list<string>, 'status'?: list<string>, 'payment_status'?: list<string>, 'refund_status'?: list<string>, 'fulfillment_status'?: list<string>, 'order_number'?: string, 'origin'?: list<string>, 'query'?: string, 'subscription_id'?: string, 'subscription_delivery_changed'?: bool, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListOrdersInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". Shape $[] (Value): string.  Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return list<string>
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): array { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "closed". Shape $[] (Value): string.  Value enum: "open", "closed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid". Shape $[] (Value): string.  Value enum: "unpaid", "partially_paid", "paid".
     * @return list<string>
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): array { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". Shape $[] (Value): string.  Value enum: "none", "partially_refunded", "refunded".
     * @return list<string>
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): array { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". Shape $[] (Value): string.  Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return list<string>
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): array { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". Shape $[] (Value): string.  Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * @return list<string>
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): array { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When subscription_delivery_changed is omitted; use hasSubscriptionDeliveryChanged() or valueOrDefault().
     */
    public function getSubscriptionDeliveryChanged(): bool { return $this->get('subscription_delivery_changed'); }
    public function hasSubscriptionDeliveryChanged(): bool { return $this->has('subscription_delivery_changed'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Example: "500".
     * @return string
     * @throws SdkError When min_amount is omitted; use hasMinAmount() or valueOrDefault().
     */
    public function getMinAmount(): string { return $this->get('min_amount'); }
    public function hasMinAmount(): bool { return $this->has('min_amount'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Example: "500".
     * @return string
     * @throws SdkError When max_amount is omitted; use hasMaxAmount() or valueOrDefault().
     */
    public function getMaxAmount(): string { return $this->get('max_amount'); }
    public function hasMaxAmount(): bool { return $this->has('max_amount'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at", "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
}
