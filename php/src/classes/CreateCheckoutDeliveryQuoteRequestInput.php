<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $basis_delivery_quote_id
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string|null $expected_delivery_selection_id
 * @property-read list<DeliveryInventoryAssignmentRequestInput|array<array-key, mixed>|\stdClass> $inventory_assignments
 * @property-read list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass> $method_results
 * @property-read string $pickup_location_id
 * @property-read string $tier_key
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutDeliveryQuoteRequestInput extends Model {
    /** @param array{'basis_delivery_quote_id'?: string, 'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<DeliveryInventoryAssignmentRequestInput|array<array-key, mixed>|\stdClass>, 'method_results'?: list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>, 'pickup_location_id'?: string, 'tier_key'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutDeliveryQuoteRequestInput')); }
    /** @return string
     * @throws SdkError When basis_delivery_quote_id is omitted; use hasBasisDeliveryQuoteId() or valueOrDefault().
     */
    public function getBasisDeliveryQuoteId(): string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string|null
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string|null { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** @return list<DeliveryInventoryAssignmentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_assignments is omitted; use hasInventoryAssignments() or valueOrDefault().
     */
    public function getInventoryAssignments(): array { return $this->get('inventory_assignments'); }
    public function hasInventoryAssignments(): bool { return $this->has('inventory_assignments'); }
    /** @return list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When method_results is omitted; use hasMethodResults() or valueOrDefault().
     */
    public function getMethodResults(): array { return $this->get('method_results'); }
    public function hasMethodResults(): bool { return $this->has('method_results'); }
    /** @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
    /** @return string
     * @throws SdkError When tier_key is omitted; use hasTierKey() or valueOrDefault().
     */
    public function getTierKey(): string { return $this->get('tier_key'); }
    public function hasTierKey(): bool { return $this->has('tier_key'); }
}
