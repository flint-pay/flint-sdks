<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $city
 * @property-read string|null $country
 * @property-read string|null $line1
 * @property-read string|null $line2
 * @property-read string|null $postal_code
 * @property-read string|null $state
 * Presence-aware input; omitted fields throw when accessed. */
final class AddressPreviousAttributesInput extends Model {
    /** @param array{'city'?: string|null, 'country'?: string|null, 'line1'?: string|null, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddressPreviousAttributesInput')); }
    /** City or locality of the address. anyOf[1] (Value): string. City or locality of the address. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When city is omitted; use hasCity() or valueOrDefault().
     */
    public function getCity(): mixed { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Street address, including the building number. anyOf[1] (Value): string. Street address, including the building number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line1 is omitted; use hasLine1() or valueOrDefault().
     */
    public function getLine1(): mixed { return $this->get('line1'); }
    public function hasLine1(): bool { return $this->has('line1'); }
    /** Apartment, suite, floor, or other address details. anyOf[1] (Value): string. Apartment, suite, floor, or other address details. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line2 is omitted; use hasLine2() or valueOrDefault().
     */
    public function getLine2(): mixed { return $this->get('line2'); }
    public function hasLine2(): bool { return $this->has('line2'); }
    /** Postal or ZIP code of the address. anyOf[1] (Value): string. Postal or ZIP code of the address. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** State, province, or region of the address. anyOf[1] (Value): string. State, province, or region of the address. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
