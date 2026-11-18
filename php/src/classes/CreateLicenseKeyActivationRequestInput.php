<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fingerprint
 * @property-read string $key
 * @property-read string $name
 * @property-read list<string> $product_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateLicenseKeyActivationRequestInput extends Model {
    /** @param array{'fingerprint'?: string, 'key': string, 'name': string, 'product_ids': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateLicenseKeyActivationRequestInput')); }
    /** An identifier for this installation. An active installation with the same fingerprint is reused. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When fingerprint is omitted; use hasFingerprint() or valueOrDefault().
     */
    public function getFingerprint(): string { return $this->get('fingerprint'); }
    public function hasFingerprint(): bool { return $this->has('fingerprint'); }
    /** The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: 1.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Device name shown to the buyer and merchant. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: 1. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1. pattern: ^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
}
