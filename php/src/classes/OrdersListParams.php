<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $customer_id
 * @property-read list<string>|string $order_id
 * @property-read list<string>|string $closed_reason
 * @property-read list<string>|string $status
 * @property-read list<string>|string $payment_status
 * @property-read list<string>|string $refund_status
 * @property-read list<string>|string $fulfillment_status
 * @property-read string $order_number
 * @property-read bool $has_unassigned_fulfillment_quantity
 * @property-read bool $has_open_fulfillment
 * @property-read string $external_reference_id
 * @property-read list<string>|string $origin
 * @property-read string $query
 * @property-read string $subscription_id
 * @property-read bool $subscription_delivery_changed
 * @property-read string $return_id
 * @property-read string $return_resolution_id
 * @property-read string $payment_link_id
 * @property-read int $min_amount
 * @property-read int $max_amount
 * @property-read string $currency
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'customer_id'?: string, 'order_id'?: list<string>|string, 'closed_reason'?: list<string>|string, 'status'?: list<string>|string, 'payment_status'?: list<string>|string, 'refund_status'?: list<string>|string, 'fulfillment_status'?: list<string>|string, 'order_number'?: string, 'has_unassigned_fulfillment_quantity'?: bool, 'has_open_fulfillment'?: bool, 'external_reference_id'?: string, 'origin'?: list<string>|string, 'query'?: string, 'subscription_id'?: string, 'subscription_delivery_changed'?: bool, 'return_id'?: string, 'return_resolution_id'?: string, 'payment_link_id'?: string, 'min_amount'?: int, 'max_amount'?: int, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersListParams')); }
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
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Exact-match filter on order IDs. Repeat the parameter or use comma-separated IDs to match any of up to 100 distinct IDs. Unknown IDs and orders outside your merchant or environment are absent. Other filters still apply, and results keep the list's ordering and pagination. Keep the same ID set on subsequent pages. anyOf[1] (Value): Array of string. minItems: 1. maxItems: 100. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". anyOf[1][] (Value): string. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): string. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>|string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Why a closed order closed. Repeated keys and comma-separated values match any reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[1][] (Value): string.  Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): string.  Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return list<string>|string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): mixed { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Order status: open or closed. Repeated keys and comma-separated values are both accepted. Selecting open and closed includes both statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "open", "closed". Value enum: "open", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "closed". anyOf[1][] (Value): string.  Value enum: "open", "closed". anyOf[2] (Value): string.  Value enum: "open", "closed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by settled collection status. Repeat the parameter or pass comma-separated values to match any of several statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "unpaid", "partially_paid", "paid". Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid". anyOf[1][] (Value): string.  Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): string.  Value enum: "unpaid", "partially_paid", "paid".
     * @return list<string>|string
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): mixed { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Filter by refund progress. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value): string.  Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.  Value enum: "none", "partially_refunded", "refunded".
     * @return list<string>|string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): mixed { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Filter by aggregate order fulfillment status. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[1][] (Value): string.  Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): string.  Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return list<string>|string
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): mixed { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** Filter by merchant-visible order number.
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Filter by whether any required fulfillment quantity is unassigned. True includes orders with a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders with no unassigned quantity, including orders that need no fulfillment.
     * @return bool
     * @throws SdkError When has_unassigned_fulfillment_quantity is omitted; use hasHasUnassignedFulfillmentQuantity() or valueOrDefault().
     */
    public function getHasUnassignedFulfillmentQuantity(): bool { return $this->get('has_unassigned_fulfillment_quantity'); }
    public function hasHasUnassignedFulfillmentQuantity(): bool { return $this->has('has_unassigned_fulfillment_quantity'); }
    /** Filter by whether the order has an open fulfillment. A fulfillment remains open until it completes, is canceled, fails, or is marked as a no-show. False includes orders with no fulfillments.
     * @return bool
     * @throws SdkError When has_open_fulfillment is omitted; use hasHasOpenFulfillment() or valueOrDefault().
     */
    public function getHasOpenFulfillment(): bool { return $this->get('has_open_fulfillment'); }
    public function hasHasOpenFulfillment(): bool { return $this->has('has_open_fulfillment'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Filter by order origin. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[1][] (Value): string.  Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[2] (Value): string.  Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * @return list<string>|string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Search across order_id, order number, external_reference_id, fulfillment external_reference_id, buyer email, notes, and line item names. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Filter by whether the subscriber changed delivery after this order was paid.
     * @return bool
     * @throws SdkError When subscription_delivery_changed is omitted; use hasSubscriptionDeliveryChanged() or valueOrDefault().
     */
    public function getSubscriptionDeliveryChanged(): bool { return $this->get('subscription_delivery_changed'); }
    public function hasSubscriptionDeliveryChanged(): bool { return $this->has('subscription_delivery_changed'); }
    /** Filter by the Return that created a replacement order. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Filter by the ReturnResolution that created a replacement order. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Filter by the payment link whose checkout created the order. Example: "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format: int64. minimum: 1. Example: 500.
     * @return int
     * @throws SdkError When min_amount is omitted; use hasMinAmount() or valueOrDefault().
     */
    public function getMinAmount(): int { return $this->get('min_amount'); }
    public function hasMinAmount(): bool { return $this->has('min_amount'); }
    /** Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format: int64. minimum: 1. Example: 500.
     * @return int
     * @throws SdkError When max_amount is omitted; use hasMaxAmount() or valueOrDefault().
     */
    public function getMaxAmount(): int { return $this->get('max_amount'); }
    public function hasMaxAmount(): bool { return $this->has('max_amount'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Field to sort by. Defaults to created_at; ties are broken by order_id. Default: "created_at". Value enum: "created_at", "updated_at", "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Supported expansions: customer, subscription, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=subscription, or pass one comma-separated value. [] enum: "customer", "subscription", "subscription_plan". Value enum: "customer", "subscription", "subscription_plan". anyOf[1] (Value): Array of string.  [] enum: "customer", "subscription", "subscription_plan". anyOf[1][] (Value): string.  Value enum: "customer", "subscription", "subscription_plan". anyOf[2] (Value): string.  Value enum: "customer", "subscription", "subscription_plan".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
