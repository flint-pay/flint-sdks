<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $keys
 * @property-read bool $seller_authorization_confirmed
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolsCreateKeysParams extends Model {
    /** @param array{'keys': list<string>, 'seller_authorization_confirmed': bool, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolsCreateKeysParams')); }
    /** The full keys to upload, in order. Use at least 16 characters per key if public validation is enabled. minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 8. maxLength: 255. pattern: ^[!-~][ -~]{6,253}[!-~]$.
     * @return list<string>
     * @throws SdkError When keys is omitted; use hasKeys() or valueOrDefault().
     */
    public function getKeys(): array { return $this->get('keys'); }
    public function hasKeys(): bool { return $this->has('keys'); }
    /** Confirms that you are authorized by the rights holder to sell the keys. Value enum: true.
     * @return bool
     * @throws SdkError When seller_authorization_confirmed is omitted; use hasSellerAuthorizationConfirmed() or valueOrDefault().
     */
    public function getSellerAuthorizationConfirmed(): bool { return $this->get('seller_authorization_confirmed'); }
    public function hasSellerAuthorizationConfirmed(): bool { return $this->has('seller_authorization_confirmed'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
