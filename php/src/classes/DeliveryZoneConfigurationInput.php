<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<mixed> $all
 * @property-read list<mixed> $any
 * @property-read DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass $country
 * @property-read mixed $not
 * @property-read DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass $postal_code
 * @property-read array{'maximum_distance': DeliveryDistanceInput|array<array-key, mixed>|\stdClass, 'measurement'?: string, 'origin': array{'location_id'?: string, 'method_origin'?: bool}|object, 'subject'?: string}|object $radius
 * @property-read DeliveryStateConditionInput|array<array-key, mixed>|\stdClass $state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZoneConfigurationInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneConfigurationInput')); }
    /** minItems: 1. maxItems: 100. [] (Value): {@see DeliveryZoneConfigurationInput}. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return list<mixed>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
    /** minItems: 1. maxItems: 100. [] (Value): {@see DeliveryZoneConfigurationInput}. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return list<mixed>
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): array { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
    /** A delivery eligibility condition that matches when the address country is one of `values`.
     * @return DeliveryCountryConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return mixed
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
    /** A delivery eligibility condition that matches the address postal code against exact or prefix `values`.
     * @return DeliveryPostalCodeConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): mixed { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.
     * @return array{'maximum_distance': DeliveryDistanceInput|array<array-key, mixed>|\stdClass, 'measurement'?: string, 'origin': array{'location_id'?: string, 'method_origin'?: bool}|object, 'subject'?: string}|object
     * @throws SdkError When radius is omitted; use hasRadius() or valueOrDefault().
     */
    public function getRadius(): array|object { return $this->get('radius'); }
    public function hasRadius(): bool { return $this->has('radius'); }
    /** Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.
     * @return DeliveryStateConditionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
