<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $body
 * @property-read string $curl
 * @property-read array<array-key, string> $headers
 * @property-read string $http_method
 * @property-read string $path
 * @property-read list<APIRequestLogQueryParam> $query_params
 * @property-read string $recommended_environment
 * @property-read bool $redactions_present
 * @property-read bool $reproduction_complete
 * @property-read bool $safe_to_reproduce
 * @property-read list<string> $warnings
 * Presence-aware response; omitted fields throw when accessed. */
final class APIRequestLogReproduction extends Model {
    /** @param array{'body'?: string, 'curl': string, 'headers': \stdClass, 'http_method': string, 'path': string, 'query_params': list<mixed>, 'recommended_environment': string, 'redactions_present': bool, 'reproduction_complete': bool, 'safe_to_reproduce': bool, 'warnings'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogReproduction')); }
    /** @return string
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): string { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** @return string
     * @throws SdkError When curl is omitted; use hasCurl() or valueOrDefault().
     */
    public function getCurl(): string { return $this->get('curl'); }
    public function hasCurl(): bool { return $this->has('curl'); }
    /** @return array<array-key, string>
     * @throws SdkError When headers is omitted; use hasHeaders() or valueOrDefault().
     */
    public function getHeaders(): array { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** @return string
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
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
     * @throws SdkError When recommended_environment is omitted; use hasRecommendedEnvironment() or valueOrDefault().
     */
    public function getRecommendedEnvironment(): string { return $this->get('recommended_environment'); }
    public function hasRecommendedEnvironment(): bool { return $this->has('recommended_environment'); }
    /** @return bool
     * @throws SdkError When redactions_present is omitted; use hasRedactionsPresent() or valueOrDefault().
     */
    public function getRedactionsPresent(): bool { return $this->get('redactions_present'); }
    public function hasRedactionsPresent(): bool { return $this->has('redactions_present'); }
    /** @return bool
     * @throws SdkError When reproduction_complete is omitted; use hasReproductionComplete() or valueOrDefault().
     */
    public function getReproductionComplete(): bool { return $this->get('reproduction_complete'); }
    public function hasReproductionComplete(): bool { return $this->has('reproduction_complete'); }
    /** @return bool
     * @throws SdkError When safe_to_reproduce is omitted; use hasSafeToReproduce() or valueOrDefault().
     */
    public function getSafeToReproduce(): bool { return $this->get('safe_to_reproduce'); }
    public function hasSafeToReproduce(): bool { return $this->has('safe_to_reproduce'); }
    /** @return list<string>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
