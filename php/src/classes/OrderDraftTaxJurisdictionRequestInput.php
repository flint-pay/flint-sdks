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
final class OrderDraftTaxJurisdictionRequestInput extends Model {
    /** @param array{'code': string, 'country': string, 'level': string, 'name': string, 'state'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDraftTaxJurisdictionRequestInput')); }
    /** Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`, starting with a letter or digit. Reports group tax by this code. minLength: 1.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** The level of government that imposes the tax. Value enum: "state", "county", "city", "district", "country", "province".
     * @return string
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Name of the jurisdiction, up to 200 characters. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: 1.
     * @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
