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
 * Presence-aware response; omitted optional fields return null. */
final class AddressPreviousAttributes extends Model {
    /** @param array{'city'?: mixed, 'country'?: mixed, 'line1'?: mixed, 'line2'?: mixed, 'postal_code'?: mixed, 'state'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddressPreviousAttributes')); }
    /** City or locality of the address. anyOf[1] (Value): string. City or locality of the address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCity(): string|null { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Street address, including the building number. anyOf[1] (Value): string. Street address, including the building number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLine1(): string|null { return $this->get('line1'); }
    public function hasLine1(): bool { return $this->has('line1'); }
    /** Apartment, suite, floor, or other address details. anyOf[1] (Value): string. Apartment, suite, floor, or other address details. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLine2(): string|null { return $this->get('line2'); }
    public function hasLine2(): bool { return $this->has('line2'); }
    /** Postal or ZIP code of the address. anyOf[1] (Value): string. Postal or ZIP code of the address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPostalCode(): string|null { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** State, province, or region of the address. anyOf[1] (Value): string. State, province, or region of the address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getState(): string|null { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
