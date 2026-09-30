<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_auth_token
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class HostedCheckoutInput extends Model {
    /** @param array{'checkout_auth_token': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('HostedCheckoutInput')); }
    /** @return string
     * @throws SdkError When checkout_auth_token is omitted; use hasCheckoutAuthToken() or valueOrDefault().
     */
    public function getCheckoutAuthToken(): string { return $this->get('checkout_auth_token'); }
    public function hasCheckoutAuthToken(): bool { return $this->has('checkout_auth_token'); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
