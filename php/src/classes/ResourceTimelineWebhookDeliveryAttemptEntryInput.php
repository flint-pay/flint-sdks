<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read int $attempt_number
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $delivery_trigger
 * @property-read int $duration_milliseconds
 * @property-read string $entry_type
 * @property-read string $error_category
 * @property-read string $error_summary
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason_message
 * @property-read string $recommended_action
 * @property-read string $request_id
 * @property-read string $resource_timeline_entry_id
 * @property-read bool $retryable
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read int $status_code
 * @property-read string $webhook_delivery_attempt_id
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineWebhookDeliveryAttemptEntryInput extends Model {
    /** @param array{'api_request_log_id'?: string, 'attempt_number': int, 'completed_at'?: string|\DateTimeInterface, 'delivery_trigger': string, 'duration_milliseconds'?: int, 'entry_type': string, 'error_category'?: string, 'error_summary'?: string, 'occurred_at': string|\DateTimeInterface, 'reason_message'?: string, 'recommended_action'?: string, 'request_id'?: string, 'resource_timeline_entry_id': string, 'retryable'?: bool, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_code'?: int, 'webhook_delivery_attempt_id': string, 'webhook_delivery_id': string, 'webhook_endpoint_id': string, 'webhook_event_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineWebhookDeliveryAttemptEntryInput')); }
    /** api_request_log_id
     * @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
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
    /** Value enum: "automatic_delivery", "automatic_retry", "manual_resend", "manual_delivery".
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
    /** Value enum: "webhook_delivery_attempt".
     * @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
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
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
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
    /** Records created before server-minted request IDs keep their original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** resource_timeline_entry_id
     * @return string
     * @throws SdkError When resource_timeline_entry_id is omitted; use hasResourceTimelineEntryId() or valueOrDefault().
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
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
    /** Value enum: "delivered", "failed", "pending", "queued", "sending".
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
