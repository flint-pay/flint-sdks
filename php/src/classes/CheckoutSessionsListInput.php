<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read string $order_id
 * @property-read string $payment_link_id
 * @property-read string $customer_id
 * @property-read string $subscription_plan_id
 * @property-read string $invoice_id
 * @property-read list<string>|string $surface
 * @property-read list<string>|string $type
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read string|\DateTimeInterface $expires_after
 * @property-read string|\DateTimeInterface $expires_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'order_id'?: string, 'payment_link_id'?: string, 'customer_id'?: string, 'subscription_plan_id'?: string, 'invoice_id'?: string, 'surface'?: list<string>|string, 'type'?: list<string>|string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expires_after'?: string|\DateTimeInterface, 'expires_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsListInput')); }
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
    /** Filter by the status each session has when read. A session past expires_at lists as expired even before its stored status is updated, unless payment work keeps it open, in which case it lists as open. A page can hold fewer sessions than page_size. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[1][] (Value): string.  Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[2] (Value): string.  Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Filter by Flint payment link ID. Example: "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Exact match on the Flint subscription plan ID. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Exact match on the Flint invoice ID. minLength: 1. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Filter by checkout surface. Sessions created before surfaces existed are hosted. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "hosted", "embedded". Value enum: "hosted", "embedded". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "hosted", "embedded". anyOf[1][] (Value): string.  Value enum: "hosted", "embedded". anyOf[2] (Value): string.  Value enum: "hosted", "embedded".
     * @return list<string>|string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): mixed { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** Filter by checkout session type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1][] (Value): string.  Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[2] (Value): string.  Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search across checkout session ID, external reference ID, metadata, and payment notes. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cs_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Field to sort by. Defaults to created_at; ties are broken by checkout_session_id. Default: "created_at". Value enum: "created_at", "updated_at".
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
    /** Inclusive lower bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_after is omitted; use hasExpiresAfter() or valueOrDefault().
     */
    public function getExpiresAfter(): string|\DateTimeInterface { return $this->get('expires_after'); }
    public function hasExpiresAfter(): bool { return $this->has('expires_after'); }
    /** Exclusive upper bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_before is omitted; use hasExpiresBefore() or valueOrDefault().
     */
    public function getExpiresBefore(): string|\DateTimeInterface { return $this->get('expires_before'); }
    public function hasExpiresBefore(): bool { return $this->has('expires_before'); }
    /** Supported expansions: customer, invoice, order, payment_link. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer", "invoice", "order", "payment_link". Value enum: "customer", "invoice", "order", "payment_link". anyOf[1] (Value): Array of string.  [] enum: "customer", "invoice", "order", "payment_link". anyOf[1][] (Value): string.  Value enum: "customer", "invoice", "order", "payment_link". anyOf[2] (Value): string.  Value enum: "customer", "invoice", "order", "payment_link".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
