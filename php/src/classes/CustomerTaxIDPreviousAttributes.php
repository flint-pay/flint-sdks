<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read string|null $identifier_type
 * @property-read string|null $region
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class CustomerTaxIDPreviousAttributes extends Model {
    /** @param array{'country'?: mixed, 'identifier_type'?: mixed, 'region'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxIDPreviousAttributes')); }
    /** Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. anyOf[1] (Value): string. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Type of the tax ID, as entered on the customer. anyOf[1] (Value): string. Type of the tax ID, as entered on the customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdentifierType(): string|null { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** Region of the tax ID. `null` when the tax ID has no region. anyOf[1] (Value): string. Region of the tax ID. `null` when the tax ID has no region. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRegion(): string|null { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** The tax ID. anyOf[1] (Value): string. The tax ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
