<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expiration_url
 * @property-read string $expires_in_seconds
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutExpirationConfig extends Model {
    /** @param array{'expiration_url'?: string, 'expires_in_seconds'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutExpirationConfig')); }
    /** @return string
     * @throws SdkError When expiration_url is omitted; use hasExpirationUrl() or valueOrDefault().
     */
    public function getExpirationUrl(): string { return $this->get('expiration_url'); }
    public function hasExpirationUrl(): bool { return $this->has('expiration_url'); }
    /** @return string
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): string { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
}
