<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, mixed>|\stdClass|list<mixed>|string $body
 * @property-read string $curl
 * @property-read array<array-key, string>|\stdClass $headers
 * @property-read string $http_method
 * @property-read string $path
 * @property-read list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass> $query_params
 * @property-read bool $redactions_present
 * Presence-aware input; omitted fields throw when accessed. */
final class APIRequestLogReproductionInput extends Model {
    /** @param array{'body'?: array<array-key, mixed>|\stdClass|list<mixed>|string, 'curl': string, 'headers': array<array-key, string>|\stdClass, 'http_method': string, 'path': string, 'query_params': list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass>, 'redactions_present': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogReproductionInput')); }
    /** The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. oneOf[1] (Value): object. oneOf[2] (Value): Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     * @return array<array-key, mixed>|\stdClass|list<mixed>|string
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** A curl command using the recorded served_api_version in Flint-Version when available. Replace credential and body placeholders before running it.
     * @return string
     * @throws SdkError When curl is omitted; use hasCurl() or valueOrDefault().
     */
    public function getCurl(): string { return $this->get('curl'); }
    public function hasCurl(): bool { return $this->has('curl'); }
    /** Headers for reproducing the request. Flint-Version uses the served_api_version recorded in the log when available. * (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When headers is omitted; use hasHeaders() or valueOrDefault().
     */
    public function getHeaders(): array|object { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** http_method
     * @return string
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** path
     * @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /**  [] (Value): {@see APIRequestLogQueryParamInput}. A query string parameter from a logged API request, as a name and value.
     * @return list<APIRequestLogQueryParamInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When query_params is omitted; use hasQueryParams() or valueOrDefault().
     */
    public function getQueryParams(): array { return $this->get('query_params'); }
    public function hasQueryParams(): bool { return $this->has('query_params'); }
    /** redactions_present
     * @return bool
     * @throws SdkError When redactions_present is omitted; use hasRedactionsPresent() or valueOrDefault().
     */
    public function getRedactionsPresent(): bool { return $this->get('redactions_present'); }
    public function hasRedactionsPresent(): bool { return $this->has('redactions_present'); }
}
