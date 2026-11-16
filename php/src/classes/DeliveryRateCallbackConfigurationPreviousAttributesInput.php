<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $maximum_request_bytes
 * @property-read int|null $maximum_response_bytes
 * @property-read bool|null $preview_enabled
 * @property-read string|null $redirect_policy
 * @property-read int|float|null $request_timeout_seconds
 * @property-read string|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackConfigurationPreviousAttributesInput extends Model {
    /** @param array{'maximum_request_bytes'?: int|null, 'maximum_response_bytes'?: int|null, 'preview_enabled'?: bool|null, 'redirect_policy'?: string|null, 'request_timeout_seconds'?: int|float|null, 'url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackConfigurationPreviousAttributesInput')); }
    /** Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. anyOf[1] (Value): integer. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: int64. minimum: 1. maximum: 1048576. Default: 262144. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_request_bytes is omitted; use hasMaximumRequestBytes() or valueOrDefault().
     */
    public function getMaximumRequestBytes(): mixed { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. anyOf[1] (Value): integer. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: int64. minimum: 1. maximum: 1048576. Default: 262144. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_response_bytes is omitted; use hasMaximumResponseBytes() or valueOrDefault().
     */
    public function getMaximumResponseBytes(): mixed { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. anyOf[1] (Value): boolean. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default: false. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When preview_enabled is omitted; use hasPreviewEnabled() or valueOrDefault().
     */
    public function getPreviewEnabled(): mixed { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
    /** What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Value enum: "reject". anyOf[1] (Value): string. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Default: "reject". Value enum: "reject". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When redirect_policy is omitted; use hasRedirectPolicy() or valueOrDefault().
     */
    public function getRedirectPolicy(): mixed { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. anyOf[1] (Value): number. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. minimum: 0.1. maximum: 10. Default: 2. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When request_timeout_seconds is omitted; use hasRequestTimeoutSeconds() or valueOrDefault().
     */
    public function getRequestTimeoutSeconds(): mixed { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** HTTPS URL that Flint calls to get a delivery rate. anyOf[1] (Value): string. HTTPS URL that Flint calls to get a delivery rate. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
