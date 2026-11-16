<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $category_scope
 * @property-read string|null $country
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCountryCoveragePreviousAttributesInput extends Model {
    /** @param array{'category_scope'?: string|null, 'country'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCountryCoveragePreviousAttributesInput')); }
    /** all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Value enum: "all", "digital". anyOf[1] (Value): string. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Value enum: "all", "digital". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When category_scope is omitted; use hasCategoryScope() or valueOrDefault().
     */
    public function getCategoryScope(): mixed { return $this->get('category_scope'); }
    public function hasCategoryScope(): bool { return $this->has('category_scope'); }
    /** ISO 3166-1 alpha-2 destination country. anyOf[1] (Value): string. ISO 3166-1 alpha-2 destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
}
