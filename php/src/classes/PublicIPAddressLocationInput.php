<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $city
 * @property-read string $country
 * @property-read int|float $latitude
 * @property-read int|float $longitude
 * @property-read string $region
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicIPAddressLocationInput extends Model {
    /** @param array{'city': string, 'country': string, 'latitude': int|float, 'longitude': int|float, 'region': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicIPAddressLocationInput')); }
    /** @return string
     * @throws SdkError When city is omitted; use hasCity() or valueOrDefault().
     */
    public function getCity(): string { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** @return int|float
     * @throws SdkError When latitude is omitted; use hasLatitude() or valueOrDefault().
     */
    public function getLatitude(): int|float { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** @return int|float
     * @throws SdkError When longitude is omitted; use hasLongitude() or valueOrDefault().
     */
    public function getLongitude(): int|float { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
    /** @return string
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): string { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
}
