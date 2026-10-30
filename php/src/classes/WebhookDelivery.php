<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $automatic_attempt_count
 * @property-read string $created_at
 * @property-read ?string $delivered_at
 * @property-read ?string $error_category
 * @property-read ?string $error_summary
 * @property-read ?int $last_response_code
 * @property-read int $max_attempts
 * @property-read ?string $next_retry_at
 * @property-read ?string $recommended_action
 * @property-read ?bool $retryable
 * @property-read string $status
 * @property-read ?string $suppression_reason
 * @property-read string $updated_at
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class WebhookDelivery extends Model {
    /** @param array{'automatic_attempt_count': int, 'created_at': string, 'delivered_at'?: string, 'error_category'?: string, 'error_summary'?: string, 'last_response_code'?: int, 'max_attempts': int, 'next_retry_at'?: string, 'recommended_action'?: string, 'retryable'?: bool, 'status': string, 'suppression_reason'?: string, 'updated_at': string, 'webhook_delivery_id': string, 'webhook_endpoint_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDelivery')); }
    /** Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a delivery you create don't count. Format: int32.
     * @return int
     */
    public function getAutomaticAttemptCount(): int { return $this->get('automatic_attempt_count'); }
    public function hasAutomaticAttemptCount(): bool { return $this->has('automatic_attempt_count'); }
    /** When the delivery was created: when Flint prepared the event, or when you created it. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     * @return ?string
     */
    public function getErrorCategory(): ?string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed.
     * @return ?string
     */
    public function getErrorSummary(): ?string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** Format: int32.
     * @return ?int
     */
    public function getLastResponseCode(): ?int { return $this->get('last_response_code'); }
    public function hasLastResponseCode(): bool { return $this->has('last_response_code'); }
    /** Maximum automatic attempts. Format: int32.
     * @return int
     */
    public function getMaxAttempts(): int { return $this->get('max_attempts'); }
    public function hasMaxAttempts(): bool { return $this->has('max_attempts'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getNextRetryAt(): ?string { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** The next step to resolve the failed delivery attempt.
     * @return ?string
     */
    public function getRecommendedAction(): ?string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     * @return ?bool
     */
    public function getRetryable(): ?bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Value enum: "pending", "delivered", "failed", "suppressed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted", "authorization_revoked", "scope_missing", "event_not_allowed".
     * @return ?string
     */
    public function getSuppressionReason(): ?string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** webhook_delivery_id
     * @return string
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** webhook_endpoint_id
     * @return string
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** webhook_event_id
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
