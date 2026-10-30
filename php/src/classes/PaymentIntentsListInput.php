<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $idempotency_key
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $order_id
 * @property-read string $customer_id
 * @property-read string $invoice_id
 * @property-read bool $is_action_required
 * @property-read list<string>|string $status
 * @property-read list<string>|string $risk_level
 * @property-read list<string>|string $payment_flow
 * @property-read string $external_reference_id
 * @property-read string $return_id
 * @property-read string $return_resolution_id
 * @property-read string $query
 * @property-read int $min_amount
 * @property-read int $max_amount
 * @property-read string $currency
 * @property-read list<string>|string $refund_status
 * @property-read list<string>|string $dispute_status
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsListInput extends Model {
    /** @param array{'idempotency_key'?: string, 'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'customer_id'?: string, 'invoice_id'?: string, 'is_action_required'?: bool, 'status'?: list<string>|string, 'risk_level'?: list<string>|string, 'payment_flow'?: list<string>|string, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'min_amount'?: int, 'max_amount'?: int, 'currency'?: string, 'refund_status'?: list<string>|string, 'dispute_status'?: list<string>|string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsListInput')); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
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
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Filter by invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Filter by whether the merchant must capture the payment or respond to a dispute. A dispute requires action when its status is needs_response or inquiry_needs_response, evidence responses are allowed, and its deadline is absent or has not passed. Omit to include both groups.
     * @return bool
     * @throws SdkError When is_action_required is omitted; use hasIsActionRequired() or valueOrDefault().
     */
    public function getIsActionRequired(): bool { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Filter by payment intent status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1][] (Value): string.  Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value): string.  Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by the latest completed risk assessment. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated", "highest", "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". anyOf[1][] (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed".
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
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Filter by linked ReturnResolution ID. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Search across payment_intent_id, external_reference_id, and receipt_email. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1. Example: 500.
     * @return int
     * @throws SdkError When min_amount is omitted; use hasMinAmount() or valueOrDefault().
     */
    public function getMinAmount(): int { return $this->get('min_amount'); }
    public function hasMinAmount(): bool { return $this->has('min_amount'); }
    /** Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1. Example: 500.
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
    /** Exact match on refund_status. Repeat keys or comma-separate values to match any selected status. Combined with dispute_status, both filters must match. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value): string.  Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.  Value enum: "none", "partially_refunded", "refunded".
     * @return list<string>|string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): mixed { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Exact match on dispute_status. Repeat keys or comma-separate values to match any selected status. Combined with refund_status, both filters must match. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1][] (Value): string.  Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string.  Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return list<string>|string
     * @throws SdkError When dispute_status is omitted; use hasDisputeStatus() or valueOrDefault().
     */
    public function getDisputeStatus(): mixed { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default: "created_at". Value enum: "created_at", "updated_at", "amount_money".
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
    /** Supported expansions: customer, invoice, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer", "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of string.  [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string.  Value enum: "customer", "invoice", "order". anyOf[2] (Value): string.  Value enum: "customer", "invoice", "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
