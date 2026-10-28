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
    /** @param array{'basis_delivery_quote_id'?: string, 'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<DeliveryInventoryAssignmentRequestInput|array<array-key, mixed>|\stdClass>, 'method_results'?: list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>, 'pickup_location_id'?: string, 'tier_key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutDeliveryQuoteRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When basis_delivery_quote_id is omitted; use hasBasisDeliveryQuoteId() or valueOrDefault().
     */
    public function getBasisDeliveryQuoteId(): string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationRequestInput}. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     * @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): {@see DeliveryAddressRequestInput}. Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present.
     * @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): string or null. Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     * @return string|null
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string|null { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** Shape $ (Value): Array of {@see DeliveryInventoryAssignmentRequestInput}. maxItems: 1000. Shape $[] (Value): {@see DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.
     * @return list<DeliveryInventoryAssignmentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_assignments is omitted; use hasInventoryAssignments() or valueOrDefault().
     */
    public function getInventoryAssignments(): array { return $this->get('inventory_assignments'); }
    public function hasInventoryAssignments(): bool { return $this->has('inventory_assignments'); }
    /** Shape $ (Value): Array of {@see CallerSuppliedDeliveryMethodResultRequestInput}. Shape $[] (Value): {@see CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you supply for one delivery method and choice group when creating a delivery quote with caller-supplied pricing.
     * @return list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When method_results is omitted; use hasMethodResults() or valueOrDefault().
     */
    public function getMethodResults(): array { return $this->get('method_results'); }
    public function hasMethodResults(): bool { return $this->has('method_results'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
    /** Shape $ (Value): integer string. Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When tier_key is omitted; use hasTierKey() or valueOrDefault().
     */
    public function getTierKey(): string { return $this->get('tier_key'); }
    public function hasTierKey(): bool { return $this->has('tier_key'); }
}
