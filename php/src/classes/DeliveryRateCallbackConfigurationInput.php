<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $maximum_request_bytes
 * @property-read int $maximum_response_bytes
 * @property-read bool $preview_enabled
 * @property-read string $redirect_policy
 * @property-read int|float $request_timeout_seconds
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackConfigurationInput extends Model {
    /** @param array{'maximum_request_bytes'?: int, 'maximum_response_bytes'?: int, 'preview_enabled'?: bool, 'redirect_policy'?: string, 'request_timeout_seconds'?: int|float, 'url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackConfigurationInput')); }
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * @return int
     * @throws SdkError When maximum_request_bytes is omitted; use hasMaximumRequestBytes() or valueOrDefault().
     */
    public function getMaximumRequestBytes(): int { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * @return int
     * @throws SdkError When maximum_response_bytes is omitted; use hasMaximumResponseBytes() or valueOrDefault().
     */
    public function getMaximumResponseBytes(): int { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** Default: false.
     * @return bool
     * @throws SdkError When preview_enabled is omitted; use hasPreviewEnabled() or valueOrDefault().
     */
    public function getPreviewEnabled(): bool { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
    /** Default: "reject". Value enum: "reject".
     * @return string
     * @throws SdkError When redirect_policy is omitted; use hasRedirectPolicy() or valueOrDefault().
     */
    public function getRedirectPolicy(): string { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** minimum: 0.1. maximum: 10. Default: 2.
     * @return int|float
     * @throws SdkError When request_timeout_seconds is omitted; use hasRequestTimeoutSeconds() or valueOrDefault().
     */
    public function getRequestTimeoutSeconds(): int|float { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
