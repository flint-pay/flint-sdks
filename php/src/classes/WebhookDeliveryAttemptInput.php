<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read int $attempt_number
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $delivery_trigger
 * @property-read int $duration_milliseconds
 * @property-read string $error_category
 * @property-read string $error_summary
 * @property-read string $reason_message
 * @property-read string $recommended_action
 * @property-read string $response_body_excerpt
 * @property-read string $response_content_type
 * @property-read array<array-key, string>|\stdClass $response_headers
 * @property-read bool $retryable
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read int $status_code
 * @property-read string $webhook_delivery_attempt_id
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveryAttemptInput extends Model {
    /** @param array{'api_version'?: string, 'attempt_number': int, 'completed_at'?: string|\DateTimeInterface, 'delivery_trigger': string, 'duration_milliseconds'?: int, 'error_category'?: string, 'error_summary'?: string, 'reason_message'?: string, 'recommended_action'?: string, 'response_body_excerpt'?: string, 'response_content_type'?: string, 'response_headers'?: array<array-key, string>|\stdClass, 'retryable'?: bool, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveryAttemptInput')); }
    /** API version used for this delivery attempt. Omitted when the version was not recorded or payload rendering failed. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Value enum: "automatic_delivery", "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     * @return string
     * @throws SdkError When delivery_trigger is omitted; use hasDeliveryTrigger() or valueOrDefault().
     */
    public function getDeliveryTrigger(): string { return $this->get('delivery_trigger'); }
    public function hasDeliveryTrigger(): bool { return $this->has('delivery_trigger'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When duration_milliseconds is omitted; use hasDurationMilliseconds() or valueOrDefault().
     */
    public function getDurationMilliseconds(): int { return $this->get('duration_milliseconds'); }
    public function hasDurationMilliseconds(): bool { return $this->has('duration_milliseconds'); }
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
    /** The note supplied when this action was requested.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** The next step to resolve the failed delivery attempt.
     * @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource.
     * @return string
     * @throws SdkError When response_body_excerpt is omitted; use hasResponseBodyExcerpt() or valueOrDefault().
     */
    public function getResponseBodyExcerpt(): string { return $this->get('response_body_excerpt'); }
    public function hasResponseBodyExcerpt(): bool { return $this->has('response_body_excerpt'); }
    /** Receiver response content type. Omitted unless the caller can read the event's resource.
     * @return string
     * @throws SdkError When response_content_type is omitted; use hasResponseContentType() or valueOrDefault().
     */
    public function getResponseContentType(): string { return $this->get('response_content_type'); }
    public function hasResponseContentType(): bool { return $this->has('response_content_type'); }
    /** Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. * (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When response_headers is omitted; use hasResponseHeaders() or valueOrDefault().
     */
    public function getResponseHeaders(): array|object { return $this->get('response_headers'); }
    public function hasResponseHeaders(): bool { return $this->has('response_headers'); }
    /** Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     * @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Value enum: "queued", "sending", "delivered", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When status_code is omitted; use hasStatusCode() or valueOrDefault().
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
    /** webhook_delivery_attempt_id
     * @return string
     * @throws SdkError When webhook_delivery_attempt_id is omitted; use hasWebhookDeliveryAttemptId() or valueOrDefault().
     */
    public function getWebhookDeliveryAttemptId(): string { return $this->get('webhook_delivery_attempt_id'); }
    public function hasWebhookDeliveryAttemptId(): bool { return $this->has('webhook_delivery_attempt_id'); }
    /** webhook_delivery_id
     * @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
