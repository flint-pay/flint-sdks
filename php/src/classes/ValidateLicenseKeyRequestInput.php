<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * @property-read string $license_key_activation_id
 * @property-read list<string> $product_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class ValidateLicenseKeyRequestInput extends Model {
    /** @param array{'key': string, 'license_key_activation_id'?: string, 'product_ids': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ValidateLicenseKeyRequestInput')); }
    /** The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: 1.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** An activation to check on this key, when the app has one. minLength: 1. pattern: ^lka_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * @return string
     * @throws SdkError When license_key_activation_id is omitted; use hasLicenseKeyActivationId() or valueOrDefault().
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: 1. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1. pattern: ^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
}
