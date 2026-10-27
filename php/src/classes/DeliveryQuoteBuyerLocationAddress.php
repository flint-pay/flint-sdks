<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryQuoteBuyerLocationAddressAddress $address
 * @property-read ?DeliveryQuoteBuyerLocationAddressCoordinate $coordinate
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteBuyerLocationAddress extends Model {
    /** @param array{'address': mixed, 'coordinate'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteBuyerLocationAddress')); }
    /** Shape $ (Value): {@see DeliveryQuoteBuyerLocationAddressAddress}. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return DeliveryQuoteBuyerLocationAddressAddress
     */
    public function getAddress(): DeliveryQuoteBuyerLocationAddressAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see DeliveryQuoteBuyerLocationAddressCoordinate}. A latitude and longitude.
     * @return ?DeliveryQuoteBuyerLocationAddressCoordinate
     */
    public function getCoordinate(): ?DeliveryQuoteBuyerLocationAddressCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string.  Value enum: "address".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
