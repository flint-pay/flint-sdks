<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $keys
 * @property-read bool $seller_authorization_confirmed
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateLicenseKeyPoolKeysRequestInput extends Model {
    /** @param array{'keys': list<string>, 'seller_authorization_confirmed': bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateLicenseKeyPoolKeysRequestInput')); }
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
}
