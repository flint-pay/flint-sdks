<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $country
 * @property-read string $level
 * @property-read string $name
 * @property-read string $state
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxTaxBreakdownsItemPercentageJurisdiction extends Model {
    /** @param array{'code': string, 'country': string, 'level': string, 'name': string, 'state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxTaxBreakdownsItemPercentageJurisdiction')); }
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1.
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Value enum: "state", "county", "city", "district".
     * @return string
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** minLength: 1.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** minLength: 1.
     * @return string
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
