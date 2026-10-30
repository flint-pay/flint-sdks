<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $customer_id
 * @property-read list<string>|string $decision_status
 * @property-read string $external_reference_id
 * @property-read string $idempotency_key
 * @property-read list<string>|string $merchandise_status
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $receiving_location_id
 * @property-read list<string>|string $resolution_status
 * @property-read list<string>|string $resolution_type
 * @property-read string $return_number
 * @property-read string $return_reason_id
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $work_type
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsListInput extends Model {
    /** @param array{'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'customer_id'?: string, 'decision_status'?: list<string>|string, 'external_reference_id'?: string, 'idempotency_key'?: string, 'merchandise_status'?: list<string>|string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>|string, 'resolution_type'?: list<string>|string, 'return_number'?: string, 'return_reason_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'status'?: list<string>|string, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'work_type'?: list<string>|string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsListInput')); }
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
    /** Filter by customer id. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "approved", "partially_approved", "declined". Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". anyOf[1][] (Value): string.  Value enum: "pending", "approved", "partially_approved", "declined". anyOf[2] (Value): string.  Value enum: "pending", "approved", "partially_approved", "declined".
     * @return list<string>|string
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): mixed { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[1][] (Value): string.  Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2] (Value): string.  Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return list<string>|string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): mixed { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Filter by order id. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Search by return ID, return number, external reference ID, the order's number, or the buyer's email.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[1][] (Value): string.  Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[2] (Value): string.  Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return list<string>|string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): mixed { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return list<string>|string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): mixed { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Filter by return number.
     * @return string
     * @throws SdkError When return_number is omitted; use hasReturnNumber() or valueOrDefault().
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Field to sort by. Defaults to created_at; ties are broken by return_id. Default: "created_at". Value enum: "created_at".
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
    /** Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string.  Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.  Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Filter by work type. Matches only returns that are still requested or open. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception". Value enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception". anyOf[1][] (Value): string.  Value enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception". anyOf[2] (Value): string.  Value enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception".
     * @return list<string>|string
     * @throws SdkError When work_type is omitted; use hasWorkType() or valueOrDefault().
     */
    public function getWorkType(): mixed { return $this->get('work_type'); }
    public function hasWorkType(): bool { return $this->has('work_type'); }
    /** Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string.  [] enum: "customer", "order". anyOf[1][] (Value): string.  Value enum: "customer", "order". anyOf[2] (Value): string.  Value enum: "customer", "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
