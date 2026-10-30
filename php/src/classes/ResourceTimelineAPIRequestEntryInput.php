<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $caller
 * @property-read string $client_request_id
 * @property-read string $client_trace_id
 * @property-read string $entry_type
 * @property-read string $error_code
 * @property-read string $error_summary
 * @property-read string $error_type
 * @property-read string $http_method
 * @property-read int $latency_milliseconds
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $path
 * @property-read string $recommended_action
 * @property-read string $reference_url
 * @property-read string $request_id
 * @property-read string $resource_timeline_entry_id
 * @property-read string $retry
 * @property-read string $route_pattern
 * @property-read int $status_code
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineAPIRequestEntryInput extends Model {
    /** @param array{'api_request_log_id': string, 'caller'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'client_request_id'?: string, 'client_trace_id'?: string, 'entry_type': string, 'error_code'?: string, 'error_summary'?: string, 'error_type'?: string, 'http_method': string, 'latency_milliseconds': int, 'occurred_at': string|\DateTimeInterface, 'path': string, 'recommended_action'?: string, 'reference_url'?: string, 'request_id': string, 'resource_timeline_entry_id': string, 'retry'?: string, 'route_pattern': string, 'status_code': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineAPIRequestEntryInput')); }
    /** api_request_log_id
     * @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** The public resource that made this request. Absent when Flint cannot attribute the caller. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When caller is omitted; use hasCaller() or valueOrDefault().
     */
    public function getCaller(): mixed { return $this->get('caller'); }
    public function hasCaller(): bool { return $this->has('caller'); }
    /** The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     * @return string
     * @throws SdkError When client_request_id is omitted; use hasClientRequestId() or valueOrDefault().
     */
    public function getClientRequestId(): string { return $this->get('client_request_id'); }
    public function hasClientRequestId(): bool { return $this->has('client_request_id'); }
    /** The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     * @return string
     * @throws SdkError When client_trace_id is omitted; use hasClientTraceId() or valueOrDefault().
     */
    public function getClientTraceId(): string { return $this->get('client_trace_id'); }
    public function hasClientTraceId(): bool { return $this->has('client_trace_id'); }
    /** Value enum: "api_request".
     * @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** error_code
     * @return string
     * @throws SdkError When error_code is omitted; use hasErrorCode() or valueOrDefault().
     */
    public function getErrorCode(): string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** A short explanation of why the request failed. Absent for successful requests.
     * @return string
     * @throws SdkError When error_summary is omitted; use hasErrorSummary() or valueOrDefault().
     */
    public function getErrorSummary(): string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** The error envelope's `type` for this response. Value enum: "authentication_error", "authorization_error", "validation_error", "not_found_error", "conflict_error", "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error", "internal_error", "protocol_error".
     * @return string
     * @throws SdkError When error_type is omitted; use hasErrorType() or valueOrDefault().
     */
    public function getErrorType(): string { return $this->get('error_type'); }
    public function hasErrorType(): bool { return $this->has('error_type'); }
    /** http_method
     * @return string
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When latency_milliseconds is omitted; use hasLatencyMilliseconds() or valueOrDefault().
     */
    public function getLatencyMilliseconds(): int { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** path
     * @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** The next action to resolve the failure. Absent when no action applies.
     * @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** A Flint guide that explains this failure. Absent when no guide applies.
     * @return string
     * @throws SdkError When reference_url is omitted; use hasReferenceUrl() or valueOrDefault().
     */
    public function getReferenceUrl(): string { return $this->get('reference_url'); }
    public function hasReferenceUrl(): bool { return $this->has('reference_url'); }
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
    /** How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Value enum: "same_request", "after_refresh", "none".
     * @return string
     * @throws SdkError When retry is omitted; use hasRetry() or valueOrDefault().
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
    /** route_pattern
     * @return string
     * @throws SdkError When route_pattern is omitted; use hasRoutePattern() or valueOrDefault().
     */
    public function getRoutePattern(): string { return $this->get('route_pattern'); }
    public function hasRoutePattern(): bool { return $this->has('route_pattern'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When status_code is omitted; use hasStatusCode() or valueOrDefault().
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
}
