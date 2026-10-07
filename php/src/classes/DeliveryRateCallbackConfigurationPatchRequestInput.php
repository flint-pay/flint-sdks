<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $maximum_request_bytes
 * @property-read string|null $maximum_response_bytes
 * @property-read bool|null $preview_enabled
 * @property-read string|null $redirect_policy
 * @property-read int|float|null $request_timeout_seconds
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackConfigurationPatchRequestInput extends Model {
    /** @param array{'maximum_request_bytes'?: string|null, 'maximum_response_bytes'?: string|null, 'preview_enabled'?: bool|null, 'redirect_policy'?: string|null, 'request_timeout_seconds'?: int|float|null, 'url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackConfigurationPatchRequestInput')); }
    /** @return string|null
     * @throws SdkError When maximum_request_bytes is omitted; use hasMaximumRequestBytes() or valueOrDefault().
     */
    public function getMaximumRequestBytes(): string|null { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** @return string|null
     * @throws SdkError When maximum_response_bytes is omitted; use hasMaximumResponseBytes() or valueOrDefault().
     */
    public function getMaximumResponseBytes(): string|null { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** @return bool|null
     * @throws SdkError When preview_enabled is omitted; use hasPreviewEnabled() or valueOrDefault().
     */
    public function getPreviewEnabled(): bool|null { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
    /** @return string|null
     * @throws SdkError When redirect_policy is omitted; use hasRedirectPolicy() or valueOrDefault().
     */
    public function getRedirectPolicy(): string|null { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** @return int|float|null
     * @throws SdkError When request_timeout_seconds is omitted; use hasRequestTimeoutSeconds() or valueOrDefault().
     */
    public function getRequestTimeoutSeconds(): int|float|null { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
