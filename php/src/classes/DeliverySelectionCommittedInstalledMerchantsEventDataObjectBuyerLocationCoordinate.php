<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateAddress $address
 * @property-read DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateCoordinate $coordinate
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinate extends Model {
    /** @param array{'address'?: mixed, 'coordinate': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinate')); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateAddress
     */
    public function getAddress(): ?DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** A latitude and longitude.
     * @return DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateCoordinate
     */
    public function getCoordinate(): DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Value enum: "coordinate".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
