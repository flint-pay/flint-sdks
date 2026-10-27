<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress $address
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate $coordinate
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress extends Model {
    /** @param array{'address': mixed, 'coordinate'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress')); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress}. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress
     */
    public function getAddress(): DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate}. A latitude and longitude.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate
     */
    public function getCoordinate(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string.  Value enum: "address".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
