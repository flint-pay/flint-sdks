<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $automatic_attempt_count
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string $error_category
 * @property-read string $error_summary
 * @property-read int $last_response_code
 * @property-read int $max_attempts
 * @property-read string|\DateTimeInterface $next_retry_at
 * @property-read string $recommended_action
 * @property-read bool $retryable
 * @property-read string $status
 * @property-read string $suppression_reason
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveryInput extends Model {
    /** @param array{'automatic_attempt_count': int, 'created_at': string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'error_category'?: string, 'error_summary'?: string, 'last_response_code'?: int, 'max_attempts': int, 'next_retry_at'?: string|\DateTimeInterface, 'recommended_action'?: string, 'retryable'?: bool, 'status': string, 'suppression_reason'?: string, 'updated_at': string|\DateTimeInterface, 'webhook_delivery_id': string, 'webhook_endpoint_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveryInput')); }
    /** Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a delivery you create don't count. Format: int32.
     * @return int
     * @throws SdkError When automatic_attempt_count is omitted; use hasAutomaticAttemptCount() or valueOrDefault().
     */
    public function getAutomaticAttemptCount(): int { return $this->get('automatic_attempt_count'); }
    public function hasAutomaticAttemptCount(): bool { return $this->has('automatic_attempt_count'); }
    /** When the delivery was created: when Flint prepared the event, or when you created it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     * @return string
     * @throws SdkError When error_category is omitted; use hasErrorCategory() or valueOrDefault().
     */
    public function getErrorCategory(): string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed.
     * @return string
     * @throws SdkError When error_summary is omitted; use hasErrorSummary() or valueOrDefault().
     */
    public function getErrorSummary(): string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When last_response_code is omitted; use hasLastResponseCode() or valueOrDefault().
     */
    public function getLastResponseCode(): int { return $this->get('last_response_code'); }
    public function hasLastResponseCode(): bool { return $this->has('last_response_code'); }
    /** Maximum automatic attempts. Format: int32.
     * @return int
     * @throws SdkError When max_attempts is omitted; use hasMaxAttempts() or valueOrDefault().
     */
    public function getMaxAttempts(): int { return $this->get('max_attempts'); }
    public function hasMaxAttempts(): bool { return $this->has('max_attempts'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string|\DateTimeInterface { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** The next step to resolve the failed delivery attempt.
     * @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     * @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Value enum: "pending", "delivered", "failed", "suppressed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted", "authorization_revoked", "scope_missing", "event_not_allowed".
     * @return string
     * @throws SdkError When suppression_reason is omitted; use hasSuppressionReason() or valueOrDefault().
     */
    public function getSuppressionReason(): string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** webhook_delivery_id
     * @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** webhook_endpoint_id
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
