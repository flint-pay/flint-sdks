<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $api_version
 * @property-read int $attempt_number
 * @property-read ?string $completed_at
 * @property-read string $delivery_trigger
 * @property-read ?string $duration_milliseconds
 * @property-read ?string $error_category
 * @property-read ?string $error_summary
 * @property-read ?string $reason_message
 * @property-read ?string $recommended_action
 * @property-read ?string $response_body_excerpt
 * @property-read ?string $response_content_type
 * @property-read ?array<array-key, string> $response_headers
 * @property-read ?bool $retryable
 * @property-read ?string $started_at
 * @property-read string $status
 * @property-read ?int $status_code
 * @property-read string $webhook_delivery_attempt_id
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class WebhookDeliveryAttempt extends Model {
    /** @param array{'api_version'?: string, 'attempt_number': int, 'completed_at'?: string, 'delivery_trigger': string, 'duration_milliseconds'?: string, 'error_category'?: string, 'error_summary'?: string, 'reason_message'?: string, 'recommended_action'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: \stdClass, 'retryable'?: bool, 'started_at'?: string, 'status': string, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveryAttempt')); }
    /** Shape $ (Value): string. API version used for this delivery attempt. Omitted when the version was not recorded or payload rendering failed. Format: date.
     * @return ?string
     */
    public function getApiVersion(): ?string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Shape $ (Value): string.  Value enum: "automatic_delivery", "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     * @return string
     */
    public function getDeliveryTrigger(): string { return $this->get('delivery_trigger'); }
    public function hasDeliveryTrigger(): bool { return $this->has('delivery_trigger'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getDurationMilliseconds(): ?string { return $this->get('duration_milliseconds'); }
    public function hasDurationMilliseconds(): bool { return $this->has('duration_milliseconds'); }
    /** Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx", "server_error", "webhook_delivery".
     * @return ?string
     */
    public function getErrorCategory(): ?string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed.
     * @return ?string
     */
    public function getErrorSummary(): ?string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** Shape $ (Value): string. The note supplied when this action was requested.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt.
     * @return ?string
     */
    public function getRecommendedAction(): ?string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Shape $ (Value): string. Receiver response body excerpt. Omitted unless the caller can read the event's resource.
     * @return ?string
     */
    public function getResponseBodyExcerpt(): ?string { return $this->get('response_body_excerpt'); }
    public function hasResponseBodyExcerpt(): bool { return $this->has('response_body_excerpt'); }
    /** Shape $ (Value): string. Receiver response content type. Omitted unless the caller can read the event's resource.
     * @return ?string
     */
    public function getResponseContentType(): ?string { return $this->get('response_content_type'); }
    public function hasResponseContentType(): bool { return $this->has('response_content_type'); }
    /** Shape $ (Value): Map of string. Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getResponseHeaders(): ?array { return $this->get('response_headers'); }
    public function hasResponseHeaders(): bool { return $this->has('response_headers'); }
    /** Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     * @return ?bool
     */
    public function getRetryable(): ?bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStartedAt(): ?string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Shape $ (Value): string.  Value enum: "queued", "sending", "delivered", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getStatusCode(): ?int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getWebhookDeliveryAttemptId(): string { return $this->get('webhook_delivery_attempt_id'); }
    public function hasWebhookDeliveryAttemptId(): bool { return $this->has('webhook_delivery_attempt_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
