<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $body
 * @property-read string $curl
 * @property-read array<array-key, string> $headers
 * @property-read string $http_method
 * @property-read string $path
 * @property-read list<APIRequestLogQueryParam> $query_params
 * @property-read bool $redactions_present
 * Presence-aware response; omitted optional fields return null. */
final class APIRequestLogReproduction extends Model {
    /** @param array{'body'?: mixed, 'curl': string, 'headers': \stdClass, 'http_method': string, 'path': string, 'query_params': list<mixed>, 'redactions_present': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogReproduction')); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Shape $.anyOf[1] (Value): object. Shape $.anyOf[2] (Value): Array of any. Shape $.anyOf[2][] (Value): any. Shape $.anyOf[3] (Value): string.
     * @return mixed
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** Shape $ (Value): string. A curl command using the recorded served_api_version in Flint-Version when available. Replace credential and body placeholders before running it.
     * @return string
     */
    public function getCurl(): string { return $this->get('curl'); }
    public function hasCurl(): bool { return $this->has('curl'); }
    /** Shape $ (Value): Map of string. Headers for reproducing the request. Flint-Version uses the served_api_version recorded in the log when available. Shape $.* (Value): string.
     * @return array<array-key, string>
     */
    public function getHeaders(): array { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** Shape $ (Value): Array of {@see APIRequestLogQueryParam}. Shape $[] (Value): {@see APIRequestLogQueryParam}. A query string parameter from a logged API request, as a name and value.
     * @return list<APIRequestLogQueryParam>
     */
    public function getQueryParams(): array { return $this->get('query_params'); }
    public function hasQueryParams(): bool { return $this->has('query_params'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getRedactionsPresent(): bool { return $this->get('redactions_present'); }
    public function hasRedactionsPresent(): bool { return $this->has('redactions_present'); }
}
