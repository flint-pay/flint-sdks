<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object> $all
 * @property-read list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object> $any
 * @property-read DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass $country
 * @property-read array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object $not
 * @property-read DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass $postal_code
 * @property-read DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass $radius
 * @property-read DeliveryStateConditionInput|array<array-key, mixed>|\stdClass $state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZoneConfigurationInput extends Model {
    /** @param array{'all': list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object>}|object|array{'any': list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object>}|object|array{'not': array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneConfigurationInput')); }
    /** Shape $ (Value): Array of {@see DeliveryZoneConfigurationInput}. minItems: 1. maxItems: 100. Shape $[] (Value): {@see DeliveryZoneConfigurationInput}. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** Shape $ (Value): Array of {@see DeliveryZoneConfigurationInput}. minItems: 1. maxItems: 100. Shape $[] (Value): {@see DeliveryZoneConfigurationInput}. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return list<array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object>
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): array { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** Shape $ (Value): {@see DeliveryCountryConditionInput}. A delivery eligibility condition that matches when the address country is one of `values`.
     * @return DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): {@see DeliveryZoneConfigurationInput}. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return array{'all': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass>}|object|array{'not': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass}|object|array{'country': DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass}|object|array{'state': DeliveryStateConditionInput|array<array-key, mixed>|\stdClass}|object|array{'postal_code': DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass}|object|array{'radius': DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** Shape $ (Value): {@see DeliveryPostalCodeConditionInput}. A delivery eligibility condition that matches the address postal code against exact or prefix `values`.
     * @return DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Shape $ (Value): {@see DeliveryRadiusConditionInput}. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.
     * @return DeliveryRadiusConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): mixed { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** Shape $ (Value): {@see DeliveryStateConditionInput}. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.
     * @return DeliveryStateConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
