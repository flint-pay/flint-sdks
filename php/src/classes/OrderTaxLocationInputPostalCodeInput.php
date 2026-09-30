<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxLocationPostalAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $address_source
 * @property-read string $address_type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationInputPostalCodeInput extends Model {
    /** @param array{'address': OrderTaxLocationPostalAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string, 'address_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationInputPostalCodeInput')); }
    /** @return OrderTaxLocationPostalAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When address_source is omitted; use hasAddressSource() or valueOrDefault().
     */
    public function getAddressSource(): string { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** @return string
     * @throws SdkError When address_type is omitted; use hasAddressType() or valueOrDefault().
     */
    public function getAddressType(): string { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
}
