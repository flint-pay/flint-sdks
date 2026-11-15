<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $identifier_type
 * @property-read string|null $region
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class CustomerTaxID extends Model {
    /** @param array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxID')); }
    /** Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Type of the tax ID, as entered on the customer.
     * @return string
     */
    public function getIdentifierType(): string { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** Region of the tax ID. `null` when the tax ID has no region.
     * @return string|null
     */
    public function getRegion(): string|null { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** The tax ID.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
