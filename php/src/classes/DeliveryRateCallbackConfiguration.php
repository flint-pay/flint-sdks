<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $maximum_request_bytes
 * @property-read ?string $maximum_response_bytes
 * @property-read ?bool $preview_enabled
 * @property-read ?string $redirect_policy
 * @property-read ?float $request_timeout_seconds
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackConfiguration extends Model {
    /** @param array{'maximum_request_bytes'?: string, 'maximum_response_bytes'?: string, 'preview_enabled'?: bool, 'redirect_policy'?: string, 'request_timeout_seconds'?: float, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackConfiguration')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * @return ?string
     */
    public function getMaximumRequestBytes(): ?string { return $this->get('maximum_request_bytes'); }
    public function hasMaximumRequestBytes(): bool { return $this->has('maximum_request_bytes'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * @return ?string
     */
    public function getMaximumResponseBytes(): ?string { return $this->get('maximum_response_bytes'); }
    public function hasMaximumResponseBytes(): bool { return $this->has('maximum_response_bytes'); }
    /** Shape $ (Value): boolean. Default: false.
     * @return ?bool
     */
    public function getPreviewEnabled(): ?bool { return $this->get('preview_enabled'); }
    public function hasPreviewEnabled(): bool { return $this->has('preview_enabled'); }
    /** Shape $ (Value): string. Default: "reject". Value enum: "reject".
     * @return ?string
     */
    public function getRedirectPolicy(): ?string { return $this->get('redirect_policy'); }
    public function hasRedirectPolicy(): bool { return $this->has('redirect_policy'); }
    /** Shape $ (Value): number. minimum: 0.1. maximum: 10. Default: 2.
     * @return ?float
     */
    public function getRequestTimeoutSeconds(): ?float { return $this->get('request_timeout_seconds'); }
    public function hasRequestTimeoutSeconds(): bool { return $this->has('request_timeout_seconds'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
