<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read int $attempt_number
 * @property-read int $automatic_attempt_count
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $correlation_id
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string $delivery_trigger
 * @property-read string $diagnostic_category
 * @property-read string $duration_milliseconds
 * @property-read string $entry_type
 * @property-read string $environment_id
 * @property-read string $error_category
 * @property-read string $error_code
 * @property-read string $error_summary
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $http_method
 * @property-read string $image_revision
 * @property-read string $last_error
 * @property-read int $last_response_code
 * @property-read string $latency_milliseconds
 * @property-read int $max_attempts
 * @property-read string $mutation_kind
 * @property-read string|\DateTimeInterface $next_retry_at
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $path
 * @property-read string $reason
 * @property-read string $recommended_action
 * @property-read string $reference_url
 * @property-read string $request_id
 * @property-read string $resource_id
 * @property-read string $resource_timeline_entry_id
 * @property-read string $resource_type
 * @property-read bool $retryable
 * @property-read string $route_pattern
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read int $status_code
 * @property-read bool $test
 * @property-read string $webhook_delivery_attempt_id
 * @property-read string $webhook_delivery_id
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineEntryInput extends Model {
    /** @param array{'api_request_log_id'?: string, 'attempt_number'?: int, 'automatic_attempt_count'?: int, 'completed_at'?: string|\DateTimeInterface, 'correlation_id'?: string, 'delivered_at'?: string|\DateTimeInterface, 'delivery_trigger'?: string, 'diagnostic_category'?: string, 'duration_milliseconds'?: string, 'entry_type': string, 'environment_id'?: string, 'error_category'?: string, 'error_code'?: string, 'error_summary'?: string, 'event_source'?: string, 'event_type'?: string, 'http_method'?: string, 'image_revision'?: string, 'last_error'?: string, 'last_response_code'?: int, 'latency_milliseconds'?: string, 'max_attempts'?: int, 'mutation_kind'?: string, 'next_retry_at'?: string|\DateTimeInterface, 'occurred_at': string|\DateTimeInterface, 'path'?: string, 'reason'?: string, 'recommended_action'?: string, 'reference_url'?: string, 'request_id'?: string, 'resource_id'?: string, 'resource_timeline_entry_id': string, 'resource_type'?: string, 'retryable'?: bool, 'route_pattern'?: string, 'started_at'?: string|\DateTimeInterface, 'status'?: string, 'status_code'?: int, 'test': bool, 'webhook_delivery_attempt_id'?: string, 'webhook_delivery_id'?: string, 'webhook_endpoint_id'?: string, 'webhook_event_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineEntryInput')); }
    /** @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** @return int
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** @return int
     * @throws SdkError When automatic_attempt_count is omitted; use hasAutomaticAttemptCount() or valueOrDefault().
     */
    public function getAutomaticAttemptCount(): int { return $this->get('automatic_attempt_count'); }
    public function hasAutomaticAttemptCount(): bool { return $this->has('automatic_attempt_count'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When correlation_id is omitted; use hasCorrelationId() or valueOrDefault().
     */
    public function getCorrelationId(): string { return $this->get('correlation_id'); }
    public function hasCorrelationId(): bool { return $this->has('correlation_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** @return string
     * @throws SdkError When delivery_trigger is omitted; use hasDeliveryTrigger() or valueOrDefault().
     */
    public function getDeliveryTrigger(): string { return $this->get('delivery_trigger'); }
    public function hasDeliveryTrigger(): bool { return $this->has('delivery_trigger'); }
    /** @return string
     * @throws SdkError When diagnostic_category is omitted; use hasDiagnosticCategory() or valueOrDefault().
     */
    public function getDiagnosticCategory(): string { return $this->get('diagnostic_category'); }
    public function hasDiagnosticCategory(): bool { return $this->has('diagnostic_category'); }
    /** @return string
     * @throws SdkError When duration_milliseconds is omitted; use hasDurationMilliseconds() or valueOrDefault().
     */
    public function getDurationMilliseconds(): string { return $this->get('duration_milliseconds'); }
    public function hasDurationMilliseconds(): bool { return $this->has('duration_milliseconds'); }
    /** @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** @return string
     * @throws SdkError When environment_id is omitted; use hasEnvironmentId() or valueOrDefault().
     */
    public function getEnvironmentId(): string { return $this->get('environment_id'); }
    public function hasEnvironmentId(): bool { return $this->has('environment_id'); }
    /** @return string
     * @throws SdkError When error_category is omitted; use hasErrorCategory() or valueOrDefault().
     */
    public function getErrorCategory(): string { return $this->get('error_category'); }
    public function hasErrorCategory(): bool { return $this->has('error_category'); }
    /** @return string
     * @throws SdkError When error_code is omitted; use hasErrorCode() or valueOrDefault().
     */
    public function getErrorCode(): string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** @return string
     * @throws SdkError When error_summary is omitted; use hasErrorSummary() or valueOrDefault().
     */
    public function getErrorSummary(): string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** @return string
     * @throws SdkError When image_revision is omitted; use hasImageRevision() or valueOrDefault().
     */
    public function getImageRevision(): string { return $this->get('image_revision'); }
    public function hasImageRevision(): bool { return $this->has('image_revision'); }
    /** @return string
     * @throws SdkError When last_error is omitted; use hasLastError() or valueOrDefault().
     */
    public function getLastError(): string { return $this->get('last_error'); }
    public function hasLastError(): bool { return $this->has('last_error'); }
    /** @return int
     * @throws SdkError When last_response_code is omitted; use hasLastResponseCode() or valueOrDefault().
     */
    public function getLastResponseCode(): int { return $this->get('last_response_code'); }
    public function hasLastResponseCode(): bool { return $this->has('last_response_code'); }
    /** @return string
     * @throws SdkError When latency_milliseconds is omitted; use hasLatencyMilliseconds() or valueOrDefault().
     */
    public function getLatencyMilliseconds(): string { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** @return int
     * @throws SdkError When max_attempts is omitted; use hasMaxAttempts() or valueOrDefault().
     */
    public function getMaxAttempts(): int { return $this->get('max_attempts'); }
    public function hasMaxAttempts(): bool { return $this->has('max_attempts'); }
    /** @return string
     * @throws SdkError When mutation_kind is omitted; use hasMutationKind() or valueOrDefault().
     */
    public function getMutationKind(): string { return $this->get('mutation_kind'); }
    public function hasMutationKind(): bool { return $this->has('mutation_kind'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string|\DateTimeInterface { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** @return string
     * @throws SdkError When reference_url is omitted; use hasReferenceUrl() or valueOrDefault().
     */
    public function getReferenceUrl(): string { return $this->get('reference_url'); }
    public function hasReferenceUrl(): bool { return $this->has('reference_url'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** @return string
     * @throws SdkError When resource_timeline_entry_id is omitted; use hasResourceTimelineEntryId() or valueOrDefault().
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
    /** @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** @return string
     * @throws SdkError When route_pattern is omitted; use hasRoutePattern() or valueOrDefault().
     */
    public function getRoutePattern(): string { return $this->get('route_pattern'); }
    public function hasRoutePattern(): bool { return $this->has('route_pattern'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return int
     * @throws SdkError When status_code is omitted; use hasStatusCode() or valueOrDefault().
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
    /** @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** @return string
     * @throws SdkError When webhook_delivery_attempt_id is omitted; use hasWebhookDeliveryAttemptId() or valueOrDefault().
     */
    public function getWebhookDeliveryAttemptId(): string { return $this->get('webhook_delivery_attempt_id'); }
    public function hasWebhookDeliveryAttemptId(): bool { return $this->has('webhook_delivery_attempt_id'); }
    /** @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
