<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $all
 * @property-read list<DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $any
 * @property-read DeliveryCountryConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $country
 * @property-read DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $not
 * @property-read DeliveryPostalCodeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $postal_code
 * @property-read DeliveryRadiusConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $radius
 * @property-read DeliveryStateConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZoneConfigurationPreviousAttributesInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneConfigurationPreviousAttributesInput')); }
    /** Matches when every nested expression matches. anyOf[1] (Value): Array of {@see DeliveryZoneConfigurationPreviousAttributesInput}. Matches when every nested expression matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@see DeliveryZoneConfigurationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): mixed { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** Matches when at least one nested expression matches. anyOf[1] (Value): Array of {@see DeliveryZoneConfigurationPreviousAttributesInput}. Matches when at least one nested expression matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@see DeliveryZoneConfigurationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): mixed { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** Matches when the address is in one of the listed countries. anyOf[1] (Value): {@see DeliveryCountryConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCountryConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Matches when the nested expression does not match. anyOf[1] (Value): {@see DeliveryZoneConfigurationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** Matches when the address postal code matches one of the listed codes. anyOf[1] (Value): {@see DeliveryPostalCodeConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryPostalCodeConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Matches when the address is within a set distance of an origin. anyOf[1] (Value): {@see DeliveryRadiusConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRadiusConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): mixed { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** Matches when the address is in one of the listed states or provinces. anyOf[1] (Value): {@see DeliveryStateConditionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryStateConditionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
