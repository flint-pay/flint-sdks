<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $country
 * @property-read string $level
 * @property-read string $name
 * @property-read string $state
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxJurisdictionRequestInput extends Model {
    /** @param array{'code': string, 'country': string, 'level': string, 'name': string, 'state': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxJurisdictionRequestInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district".
     * @return string
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
