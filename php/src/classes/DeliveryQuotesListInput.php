<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read string $order_id
 * @property-read list<string> $status
 * @property-read list<string> $evaluation_status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuotesListInput extends Model {
    /** @param array{'checkout_session_id'?: string, 'order_id'?: string, 'status'?: list<string>, 'evaluation_status'?: list<string>, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuotesListInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "consumed", "stale", "expired", "revoked". Shape $[] (Value): string.  Value enum: "active", "consumed", "stale", "expired", "revoked".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "complete", "incomplete", "degraded". Shape $[] (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return list<string>
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): array { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
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
}
