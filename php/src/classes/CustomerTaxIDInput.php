<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $identifier_type
 * @property-read string|null $region
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerTaxIDInput extends Model {
    /** @param array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxIDInput')); }
    /** Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Type of the tax ID, as entered on the customer.
     * @return string
     * @throws SdkError When identifier_type is omitted; use hasIdentifierType() or valueOrDefault().
     */
    public function getIdentifierType(): string { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** Region of the tax ID. `null` when the tax ID has no region.
     * @return string|null
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): string|null { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** The tax ID.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
