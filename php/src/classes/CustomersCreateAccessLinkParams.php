<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery
 * @property-read int $expires_in_seconds
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateAccessLinkParams extends Model {
    /** @param array{'delivery'?: string, 'expires_in_seconds'?: int, 'return_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateAccessLinkParams')); }
    /** link returns the credential for your server to relay. email asks Flint to enqueue a store-branded email to the customer's current address and returns only a delivery acknowledgement and masked recipient. Default: "link". Value enum: "link", "email".
     * @return string
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): string { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** 900 (15 minutes) or 259200 (72 hours). Omission keeps 900 for link delivery; email delivery always uses 259200. Both links are single-use. An idempotent replay keeps the original expiry. Value enum: 900, 259200.
     * @return int
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): int { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
