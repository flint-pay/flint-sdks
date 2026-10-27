<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxLocationFullAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $address_source
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationInputInferredFullAddressInput extends Model {
    /** @param array{'address': OrderTaxLocationFullAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationInputInferredFullAddressInput')); }
    /** Shape $ (Value): {@see OrderTaxLocationFullAddressRequestInput}. A full street address you supply as an order's tax location.
     * @return OrderTaxLocationFullAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. Where the tax address comes from. The only accepted value is provided, which is the default. Default: "provided". Value enum: "provided".
     * @return string
     * @throws SdkError When address_source is omitted; use hasAddressSource() or valueOrDefault().
     */
    public function getAddressSource(): string { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
}
