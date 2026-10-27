<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $customer_id
 * @property-read list<string> $decision_status
 * @property-read string $external_reference_id
 * @property-read string $idempotency_key
 * @property-read list<string> $merchandise_status
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $receiving_location_id
 * @property-read list<string> $resolution_status
 * @property-read list<string> $resolution_type
 * @property-read string $return_number
 * @property-read string $return_reason_id
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string> $work_type
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsListInput extends Model {
    /** @param array{'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'customer_id'?: string, 'decision_status'?: list<string>, 'external_reference_id'?: string, 'idempotency_key'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>, 'resolution_type'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'status'?: list<string>, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'work_type'?: list<string>, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsListInput')); }
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". Shape $[] (Value): string.  Value enum: "pending", "approved", "partially_approved", "declined".
     * @return list<string>
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): array { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[] (Value): string.  Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return list<string>
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): array { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.  Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return list<string>
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): array { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return list<string>
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): array { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_number is omitted; use hasReturnNumber() or valueOrDefault().
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at".
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed", "declined", "canceled". Shape $[] (Value): string.  Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception". Shape $[] (Value): string.  Value enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution", "exception".
     * @return list<string>
     * @throws SdkError When work_type is omitted; use hasWorkType() or valueOrDefault().
     */
    public function getWorkType(): array { return $this->get('work_type'); }
    public function hasWorkType(): bool { return $this->has('work_type'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order". Shape $[] (Value): string.  Value enum: "customer", "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
