<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read string|null $type
 * @property-read string|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPostalCodeValuePreviousAttributesInput extends Model {
    /** @param array{'country'?: string|null, 'type'?: string|null, 'value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPostalCodeValuePreviousAttributesInput')); }
    /** ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Whether `value` is a whole postal code or the start of one. Value enum: "exact", "prefix". anyOf[1] (Value): string. Whether `value` is a whole postal code or the start of one. Default: "exact". Value enum: "exact", "prefix". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** The postal code, or the start of postal codes, to match. anyOf[1] (Value): string. The postal code, or the start of postal codes, to match. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
