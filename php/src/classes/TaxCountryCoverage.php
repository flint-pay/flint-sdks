<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_scope
 * @property-read string $country
 * Presence-aware response; omitted optional fields return null. */
final class TaxCountryCoverage extends Model {
    /** @param array{'category_scope': string, 'country': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCountryCoverage')); }
    /** all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada uses digital, so it does not cover services, professional_services or taxable charges. Value enum: "all", "digital".
     * @return string
     */
    public function getCategoryScope(): string { return $this->get('category_scope'); }
    public function hasCategoryScope(): bool { return $this->has('category_scope'); }
    /** ISO 3166-1 alpha-2 destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
}
