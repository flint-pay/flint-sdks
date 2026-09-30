<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read string $correlation_id
 * @property-read string $created_at
 * @property-read string $error_category
 * @property-read string $error_code
 * @property-read string $error_summary
 * @property-read string $http_method
 * @property-read string $latency_milliseconds
 * @property-read string $path
 * @property-read list<APIRequestLogQueryParam> $query_params
 * @property-read string $recommended_action
 * @property-read string $reference_url
 * @property-read APIRequestLogReproduction $reproduction
 * @property-read string $request_body
 * @property-read string $request_headers
 * @property-read string $request_id
 * @property-read string $requested_api_version
 * @property-read string $requested_api_version_source
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read string $response_body
 * @property-read string $response_content_type
 * @property-read ApiRequestLogResponseShapeMetadata $response_shape_metadata
 * @property-read bool $retryable
 * @property-read string $route_pattern
 * @property-read string $served_api_version
 * @property-read int $status_code
 * Presence-aware response; omitted fields throw when accessed. */
final class APIRequestLogDetail extends Model {
    /** @param array{'api_request_log_id': string, 'correlation_id'?: string, 'created_at': string, 'error_category'?: string, 'error_code'?: string, 'error_summary'?: string, 'http_method': string, 'latency_milliseconds': string, 'path': string, 'query_params': list<mixed>, 'recommended_action'?: string, 'reference_url'?: string, 'reproduction': mixed, 'request_body'?: string, 'request_headers'?: string, 'request_id': string, 'requested_api_version'?: string, 'requested_api_version_source'?: string, 'resource_id'?: string, 'resource_type'?: string, 'response_body'?: string, 'response_content_type'?: string, 'response_shape_metadata'?: mixed, 'retryable'?: bool, 'route_pattern': string, 'served_api_version'?: string, 'status_code': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogDetail')); }
    /** @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** @return string
     * @throws SdkError When correlation_id is omitted; use hasCorrelationId() or valueOrDefault().
     */
    public function getCorrelationId(): string { return $this->get('correlation_id'); }
    public function hasCorrelationId(): bool { return $this->has('correlation_id'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
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
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** @return string
     * @throws SdkError When latency_milliseconds is omitted; use hasLatencyMilliseconds() or valueOrDefault().
     */
    public function getLatencyMilliseconds(): string { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** @return list<APIRequestLogQueryParam>
     * @throws SdkError When query_params is omitted; use hasQueryParams() or valueOrDefault().
     */
    public function getQueryParams(): array { return $this->get('query_params'); }
    public function hasQueryParams(): bool { return $this->has('query_params'); }
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
    /** @return APIRequestLogReproduction
     * @throws SdkError When reproduction is omitted; use hasReproduction() or valueOrDefault().
     */
    public function getReproduction(): APIRequestLogReproduction { return $this->get('reproduction'); }
    public function hasReproduction(): bool { return $this->has('reproduction'); }
    /** @return string
     * @throws SdkError When request_body is omitted; use hasRequestBody() or valueOrDefault().
     */
    public function getRequestBody(): string { return $this->get('request_body'); }
    public function hasRequestBody(): bool { return $this->has('request_body'); }
    /** @return string
     * @throws SdkError When request_headers is omitted; use hasRequestHeaders() or valueOrDefault().
     */
    public function getRequestHeaders(): string { return $this->get('request_headers'); }
    public function hasRequestHeaders(): bool { return $this->has('request_headers'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** @return string
     * @throws SdkError When requested_api_version is omitted; use hasRequestedApiVersion() or valueOrDefault().
     */
    public function getRequestedApiVersion(): string { return $this->get('requested_api_version'); }
    public function hasRequestedApiVersion(): bool { return $this->has('requested_api_version'); }
    /** @return string
     * @throws SdkError When requested_api_version_source is omitted; use hasRequestedApiVersionSource() or valueOrDefault().
     */
    public function getRequestedApiVersionSource(): string { return $this->get('requested_api_version_source'); }
    public function hasRequestedApiVersionSource(): bool { return $this->has('requested_api_version_source'); }
    /** @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** @return string
     * @throws SdkError When response_body is omitted; use hasResponseBody() or valueOrDefault().
     */
    public function getResponseBody(): string { return $this->get('response_body'); }
    public function hasResponseBody(): bool { return $this->has('response_body'); }
    /** @return string
     * @throws SdkError When response_content_type is omitted; use hasResponseContentType() or valueOrDefault().
     */
    public function getResponseContentType(): string { return $this->get('response_content_type'); }
    public function hasResponseContentType(): bool { return $this->has('response_content_type'); }
    /** @return ApiRequestLogResponseShapeMetadata
     * @throws SdkError When response_shape_metadata is omitted; use hasResponseShapeMetadata() or valueOrDefault().
     */
    public function getResponseShapeMetadata(): ApiRequestLogResponseShapeMetadata { return $this->get('response_shape_metadata'); }
    public function hasResponseShapeMetadata(): bool { return $this->has('response_shape_metadata'); }
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
    /** @return string
     * @throws SdkError When served_api_version is omitted; use hasServedApiVersion() or valueOrDefault().
     */
    public function getServedApiVersion(): string { return $this->get('served_api_version'); }
    public function hasServedApiVersion(): bool { return $this->has('served_api_version'); }
    /** @return int
     * @throws SdkError When status_code is omitted; use hasStatusCode() or valueOrDefault().
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
}
