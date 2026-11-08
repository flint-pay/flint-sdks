<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $maximum_request_bytes
 * @property-read ?int $maximum_response_bytes
 * @property-read ?string $redirect_policy
 * @property-read ?float $request_timeout_seconds
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackConfiguration extends Model {
    /** @param array{'maximum_request_bytes'?: int, 'maximum_response_bytes'?: int, 'redirect_policy'?: string, 'request_timeout_seconds'?: float, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackConfiguration')); }
    /** Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     * @return ?int
     */
    public function getMaximumRequestBytes(): ?int { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     * @return ?int
     */
    public function getMaximumResponseBytes(): ?int { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: "reject". Value enum: "reject".
     * @return ?string
     */
    public function getRedirectPolicy(): ?string { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: 0.1. maximum: 10. Default: 3.
     * @return ?float
     */
    public function getRequestTimeoutSeconds(): ?float { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern: ^https://.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
