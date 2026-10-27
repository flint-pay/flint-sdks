<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliverySelectionBuyerLocationCoordinateAddress $address
 * @property-read DeliverySelectionBuyerLocationCoordinateCoordinate $coordinate
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionBuyerLocationCoordinate extends Model {
    /** @param array{'address'?: mixed, 'coordinate': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionBuyerLocationCoordinate')); }
    /** Shape $ (Value): {@see DeliverySelectionBuyerLocationCoordinateAddress}. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return ?DeliverySelectionBuyerLocationCoordinateAddress
     */
    public function getAddress(): ?DeliverySelectionBuyerLocationCoordinateAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see DeliverySelectionBuyerLocationCoordinateCoordinate}. A latitude and longitude.
     * @return DeliverySelectionBuyerLocationCoordinateCoordinate
     */
    public function getCoordinate(): DeliverySelectionBuyerLocationCoordinateCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string.  Value enum: "coordinate".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
