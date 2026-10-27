<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read ?ResourceReference $caller
 * @property-read ?string $client_request_id
 * @property-read ?string $client_trace_id
 * @property-read string $entry_type
 * @property-read ?string $error_code
 * @property-read ?string $error_summary
 * @property-read ?string $error_type
 * @property-read string $http_method
 * @property-read string $latency_milliseconds
 * @property-read string $occurred_at
 * @property-read string $path
 * @property-read ?string $recommended_action
 * @property-read ?string $reference_url
 * @property-read string $request_id
 * @property-read string $resource_timeline_entry_id
 * @property-read ?string $retry
 * @property-read string $route_pattern
 * @property-read int $status_code
 * Presence-aware response; omitted optional fields return null. */
final class ResourceTimelineEntriesItemApiRequest extends Model {
    /** @param array{'api_request_log_id': string, 'caller'?: mixed, 'client_request_id'?: string, 'client_trace_id'?: string, 'entry_type': string, 'error_code'?: string, 'error_summary'?: string, 'error_type'?: string, 'http_method': string, 'latency_milliseconds': string, 'occurred_at': string, 'path': string, 'recommended_action'?: string, 'reference_url'?: string, 'request_id': string, 'resource_timeline_entry_id': string, 'retry'?: string, 'route_pattern': string, 'status_code': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineEntriesItemApiRequest')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** Shape $ (Value): {@see ResourceReference}. The public resource that made this request. Absent when Flint cannot attribute the caller. A reference to another resource by `resource_type` and `resource_id`.
     * @return ?ResourceReference
     */
    public function getCaller(): ?ResourceReference { return $this->get('caller'); }
    public function hasCaller(): bool { return $this->has('caller'); }
    /** Shape $ (Value): string. The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     * @return ?string
     */
    public function getClientRequestId(): ?string { return $this->get('client_request_id'); }
    public function hasClientRequestId(): bool { return $this->has('client_request_id'); }
    /** Shape $ (Value): string. The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     * @return ?string
     */
    public function getClientTraceId(): ?string { return $this->get('client_trace_id'); }
    public function hasClientTraceId(): bool { return $this->has('client_trace_id'); }
    /** Shape $ (Value): string.  Value enum: "api_request".
     * @return string
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getErrorCode(): ?string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** Shape $ (Value): string. A short explanation of why the request failed. Absent for successful requests.
     * @return ?string
     */
    public function getErrorSummary(): ?string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** Shape $ (Value): string. The error envelope's `type` for this response. Value enum: "authentication_error", "authorization_error", "validation_error", "not_found_error", "conflict_error", "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error", "internal_error", "protocol_error".
     * @return ?string
     */
    public function getErrorType(): ?string { return $this->get('error_type'); }
    public function hasErrorType(): bool { return $this->has('error_type'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getLatencyMilliseconds(): string { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** Shape $ (Value): string. The next action to resolve the failure. Absent when no action applies.
     * @return ?string
     */
    public function getRecommendedAction(): ?string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Shape $ (Value): string. A Flint guide that explains this failure. Absent when no guide applies.
     * @return ?string
     */
    public function getReferenceUrl(): ?string { return $this->get('reference_url'); }
    public function hasReferenceUrl(): bool { return $this->has('reference_url'); }
    /** Shape $ (Value): string. Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
    /** Shape $ (Value): string. How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Value enum: "same_request", "after_refresh", "none".
     * @return ?string
     */
    public function getRetry(): ?string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRoutePattern(): string { return $this->get('route_pattern'); }
    public function hasRoutePattern(): bool { return $this->has('route_pattern'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
}
