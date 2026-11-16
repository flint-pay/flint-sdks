<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $maximum_request_bytes
 * @property-read int|null $maximum_response_bytes
 * @property-read string|null $redirect_policy
 * @property-read int|float|null $request_timeout_seconds
 * @property-read string|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbackConfigurationPreviousAttributesInput extends Model {
    /** @param array{'maximum_request_bytes'?: int|null, 'maximum_response_bytes'?: int|null, 'redirect_policy'?: string|null, 'request_timeout_seconds'?: int|float|null, 'url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackConfigurationPreviousAttributesInput')); }
    /** Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. anyOf[1] (Value): integer. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_request_bytes is omitted; use hasMaximumRequestBytes() or valueOrDefault().
     */
    public function getMaximumRequestBytes(): mixed { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. anyOf[1] (Value): integer. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_response_bytes is omitted; use hasMaximumResponseBytes() or valueOrDefault().
     */
    public function getMaximumResponseBytes(): mixed { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Value enum: "reject". anyOf[1] (Value): string. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: "reject". Value enum: "reject". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When redirect_policy is omitted; use hasRedirectPolicy() or valueOrDefault().
     */
    public function getRedirectPolicy(): mixed { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. anyOf[1] (Value): number. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: 0.1. maximum: 10. Default: 3. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When request_timeout_seconds is omitted; use hasRequestTimeoutSeconds() or valueOrDefault().
     */
    public function getRequestTimeoutSeconds(): mixed { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** HTTPS endpoint that receives signed callback requests. anyOf[1] (Value): string. HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern: ^https://. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
