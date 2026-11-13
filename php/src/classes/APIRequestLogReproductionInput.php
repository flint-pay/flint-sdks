<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, mixed>|\stdClass|list<mixed>|string $body
 * @property-read string $curl
 * @property-read bool $has_redactions
 * @property-read array<array-key, string>|\stdClass $headers
 * @property-read string $http_method
 * @property-read string $path
 * @property-read list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass> $query_params
 * Presence-aware input; omitted fields throw when accessed. */
final class APIRequestLogReproductionInput extends Model {
    /** @param array{'body'?: array<array-key, mixed>|\stdClass|list<mixed>|string, 'curl': string, 'has_redactions': bool, 'headers': array<array-key, string>|\stdClass, 'http_method': string, 'path': string, 'query_params': list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogReproductionInput')); }
    /** The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. oneOf[1] (Value): object. oneOf[2] (Value): Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     * @return array<array-key, mixed>|\stdClass|list<mixed>|string
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** A curl command using the recorded served_api_version in Flint-Version when available. Complete captured bodies are inlined unless redacted or truncated. Replace credential and body placeholders before running it.
     * @return string
     * @throws SdkError When curl is omitted; use hasCurl() or valueOrDefault().
     */
    public function getCurl(): string { return $this->get('curl'); }
    public function hasCurl(): bool { return $this->has('curl'); }
    /** True when values in the captured request body or query were redacted. Ignores authorization headers and the response body. False does not guarantee completeness when body capture was omitted or expired.
     * @return bool
     * @throws SdkError When has_redactions is omitted; use hasHasRedactions() or valueOrDefault().
     */
    public function getHasRedactions(): bool { return $this->get('has_redactions'); }
    public function hasHasRedactions(): bool { return $this->has('has_redactions'); }
    /** Headers for reproducing the request. Flint-Version uses the recorded served_api_version. On routes that accept an idempotency key, same_request preserves the original key or uses a placeholder for that key when unavailable; after_refresh and none use a placeholder for a new key. * (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When headers is omitted; use hasHeaders() or valueOrDefault().
     */
    public function getHeaders(): array|object { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** HTTP method to resend the request with.
     * @return string
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Request path to resend the request to.
     * @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** Query parameters to resend, with sensitive values replaced by placeholders. [] (Value): {@see APIRequestLogQueryParamInput}. A query string parameter from a logged API request, as a name and value.
     * @return list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When query_params is omitted; use hasQueryParams() or valueOrDefault().
     */
    public function getQueryParams(): array { return $this->get('query_params'); }
    public function hasQueryParams(): bool { return $this->has('query_params'); }
}
