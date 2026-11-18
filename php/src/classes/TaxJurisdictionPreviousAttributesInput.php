<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $country
 * @property-read string|null $level
 * @property-read string|null $name
 * @property-read string|null $state
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxJurisdictionPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'country'?: string|null, 'level'?: string|null, 'name'?: string|null, 'state'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxJurisdictionPreviousAttributesInput')); }
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. anyOf[1] (Value): string. Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** The level of government that imposes the tax. Value enum: "state", "county", "city", "district", "country", "province". anyOf[1] (Value): string. The level of government that imposes the tax. Value enum: "state", "county", "city", "district", "country", "province". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): mixed { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value): string. Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. anyOf[1] (Value): string. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
