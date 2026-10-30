<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read string $payment_intent_id
 * @property-read string $order_id
 * @property-read string $customer_id
 * @property-read list<string>|string $status
 * @property-read list<string>|string $reason
 * @property-read list<string>|string $case_type
 * @property-read bool $is_action_required
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $evidence_due_after
 * @property-read string|\DateTimeInterface $evidence_due_before
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputesListInput extends Model {
    /** @param array{'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'status'?: list<string>|string, 'reason'?: list<string>|string, 'case_type'?: list<string>|string, 'is_action_required'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'evidence_due_after'?: string|\DateTimeInterface, 'evidence_due_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputesListInput')); }
    /** Inclusive lower bound on updated_at. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Optional Flint payment intent ID filter. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Optional Flint order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Optional Flint customer ID filter. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Optional dispute status filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1][] (Value): string.  Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string.  Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Optional normalized dispute reason filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1][] (Value): string.  Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[2] (Value): string.  Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * @return list<string>|string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional dispute case type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[1][] (Value): string.  Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[2] (Value): string.  Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return".
     * @return list<string>|string
     * @throws SdkError When case_type is omitted; use hasCaseType() or valueOrDefault().
     */
    public function getCaseType(): mixed { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
    /** Filter by whether a merchant response is needed now. True includes needs_response and inquiry_needs_response disputes that allow evidence and whose evidence deadline has not passed; false includes the remaining disputes.
     * @return bool
     * @throws SdkError When is_action_required is omitted; use hasIsActionRequired() or valueOrDefault().
     */
    public function getIsActionRequired(): bool { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Field to sort by. Defaults to created_at; ties are broken by dispute_id. Default: "created_at". Value enum: "created_at", "evidence_due_at", "amount_money".
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
    /** Inclusive lower bound on evidence_due_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When evidence_due_after is omitted; use hasEvidenceDueAfter() or valueOrDefault().
     */
    public function getEvidenceDueAfter(): string|\DateTimeInterface { return $this->get('evidence_due_after'); }
    public function hasEvidenceDueAfter(): bool { return $this->has('evidence_due_after'); }
    /** Exclusive upper bound on evidence_due_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When evidence_due_before is omitted; use hasEvidenceDueBefore() or valueOrDefault().
     */
    public function getEvidenceDueBefore(): string|\DateTimeInterface { return $this->get('evidence_due_before'); }
    public function hasEvidenceDueBefore(): bool { return $this->has('evidence_due_before'); }
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
