<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read list<string> $decision_status
 * @property-read string $idempotency_key
 * @property-read list<string> $merchandise_status
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $resolution_status
 * @property-read string $return_number
 * @property-read string $return_reason_id
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListReturnsInput extends Model {
    /** @param array{'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'decision_status'?: list<string>, 'idempotency_key'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'resolution_status'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'status'?: list<string>, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListReturnsInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". Shape $[] (Value): string.  Value enum: "pending", "approved", "partially_approved", "declined".
     * @return list<string>
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): array { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.  Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return list<string>
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): array { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
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
}
