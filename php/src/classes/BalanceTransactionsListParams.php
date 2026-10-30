<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $payout_id
 * @property-read string $order_id
 * @property-read list<string>|string $expand
 * @property-read list<string>|string $type
 * @property-read list<string>|string $related_resource_type
 * @property-read string $related_resource_id
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string|\DateTimeInterface $available_after
 * @property-read string|\DateTimeInterface $available_before
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionsListParams extends Model {
    /** @param array{'currency'?: string, 'payout_id'?: string, 'order_id'?: string, 'expand'?: list<string>|string, 'type'?: list<string>|string, 'related_resource_type'?: list<string>|string, 'related_resource_id'?: string, 'status'?: list<string>|string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'available_after'?: string|\DateTimeInterface, 'available_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionsListParams')); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Lists the balance transactions this payout carried, newest first. Their `net_money` sums to the payout's `amount_money`. Works in any payout status once the payout's contents are prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason: not_itemized` for a payout that doesn't list its contents, such as a manual payout. Example: "po_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Exact-match filter on `order_id`. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Supported expansions: order. Each expansion resolves with one batched lookup per page. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Optional balance transaction type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal". Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[1][] (Value): string.  Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[2] (Value): string.  Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Filter by related_resource.resource_type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". anyOf[1][] (Value): string.  Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". anyOf[2] (Value): string.  Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice".
     * @return list<string>|string
     * @throws SdkError When related_resource_type is omitted; use hasRelatedResourceType() or valueOrDefault().
     */
    public function getRelatedResourceType(): mixed { return $this->get('related_resource_type'); }
    public function hasRelatedResourceType(): bool { return $this->has('related_resource_type'); }
    /** Filter by related_resource.resource_id.
     * @return string
     * @throws SdkError When related_resource_id is omitted; use hasRelatedResourceId() or valueOrDefault().
     */
    public function getRelatedResourceId(): string { return $this->get('related_resource_id'); }
    public function hasRelatedResourceId(): bool { return $this->has('related_resource_id'); }
    /** Optional balance transaction status filter. Without it, the list returns transactions in every status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "available". Value enum: "pending", "available". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "available". anyOf[1][] (Value): string.  Value enum: "pending", "available". anyOf[2] (Value): string.  Value enum: "pending", "available".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
    /** Inclusive lower bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_after is omitted; use hasAvailableAfter() or valueOrDefault().
     */
    public function getAvailableAfter(): string|\DateTimeInterface { return $this->get('available_after'); }
    public function hasAvailableAfter(): bool { return $this->has('available_after'); }
    /** Exclusive upper bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_before is omitted; use hasAvailableBefore() or valueOrDefault().
     */
    public function getAvailableBefore(): string|\DateTimeInterface { return $this->get('available_before'); }
    public function hasAvailableBefore(): bool { return $this->has('available_before'); }
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
}
