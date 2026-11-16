<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $category_scope
 * @property-read string|null $country
 * Presence-aware response; omitted optional fields return null. */
final class TaxCountryCoveragePreviousAttributes extends Model {
    /** @param array{'category_scope'?: mixed, 'country'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCountryCoveragePreviousAttributes')); }
    /** all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Value enum: "all", "digital". anyOf[1] (Value): string. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Value enum: "all", "digital". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCategoryScope(): string|null { return $this->get('category_scope'); }
    public function hasCategoryScope(): bool { return $this->has('category_scope'); }
    /** ISO 3166-1 alpha-2 destination country. anyOf[1] (Value): string. ISO 3166-1 alpha-2 destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
}
