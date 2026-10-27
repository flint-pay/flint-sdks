<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $postal_code
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationPostalAddressRequestInput extends Model {
    /** @param array{'country'?: string, 'postal_code': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationPostalAddressRequestInput')); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. minLength: 1. pattern: \S.
     * @return string
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): string { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
}
