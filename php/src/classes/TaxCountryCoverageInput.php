<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_scope
 * @property-read string $country
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCountryCoverageInput extends Model {
    /** @param array{'category_scope': string, 'country': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCountryCoverageInput')); }
    /** all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada uses digital, so it does not cover services, professional_services or taxable charges. Value enum: "all", "digital".
     * @return string
     * @throws SdkError When category_scope is omitted; use hasCategoryScope() or valueOrDefault().
     */
    public function getCategoryScope(): string { return $this->get('category_scope'); }
    public function hasCategoryScope(): bool { return $this->has('category_scope'); }
    /** ISO 3166-1 alpha-2 destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
}
