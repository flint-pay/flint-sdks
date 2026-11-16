<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read string|null $identifier_type
 * @property-read string|null|null $region
 * @property-read string|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerTaxIDPreviousAttributesInput extends Model {
    /** @param array{'country'?: string|null, 'identifier_type'?: string|null, 'region'?: string|null|null, 'value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxIDPreviousAttributesInput')); }
    /** Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. anyOf[1] (Value): string. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Type of the tax ID, as entered on the customer. anyOf[1] (Value): string. Type of the tax ID, as entered on the customer. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When identifier_type is omitted; use hasIdentifierType() or valueOrDefault().
     */
    public function getIdentifierType(): mixed { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** Region of the tax ID. `null` when the tax ID has no region. anyOf[1] (Value): string or null. Region of the tax ID. `null` when the tax ID has no region. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): mixed { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** The tax ID. anyOf[1] (Value): string. The tax ID. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
