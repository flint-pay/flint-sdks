<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $basis_delivery_quote_id
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string $checkout_session_id
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string|null $expected_delivery_selection_id
 * @property-read list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object> $inventory_assignments
 * @property-read list<string> $inventory_reservation_ids
 * @property-read list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass> $method_results
 * @property-read string $pickup_location_id
 * @property-read int $tier_key
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuotesCreateParams extends Model {
    /** @param array{'basis_delivery_quote_id'?: string, 'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'checkout_session_id': string, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'inventory_reservation_ids'?: list<string>, 'method_results'?: list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>, 'pickup_location_id'?: string, 'tier_key'?: int, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuotesCreateParams')); }
    /** ID of an earlier delivery quote for this checkout session to price from again, such as to add caller-supplied rates. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * @return string
     * @throws SdkError When basis_delivery_quote_id is omitted; use hasBasisDeliveryQuoteId() or valueOrDefault().
     */
    public function getBasisDeliveryQuoteId(): string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** Buyer location used to evaluate pickup and local delivery. Send it when a method needs it. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     * @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Checkout session to quote. With a checkout credential, this must be the credential's own checkout session; any other ID is refused as not found. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Address used to price shipment or local delivery. Partial is fine: send what the buyer has entered, at least country. A selection that sends destination_address must send a complete address; a selection that omits it keeps this partial address, and its input_requirements lists missing members that must be supplied before payment. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present.
     * @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * @return string|null
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string|null { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** Locations your integration assigns stock from. The assignments for an inventory demand together cover its quantity, and a demand can have several. maxItems: 1000. [] (Value): {@see DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.
     * @return list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>
     * @throws SdkError When inventory_assignments is omitted; use hasInventoryAssignments() or valueOrDefault().
     */
    public function getInventoryAssignments(): array { return $this->get('inventory_assignments'); }
    public function hasInventoryAssignments(): bool { return $this->has('inventory_assignments'); }
    /** Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to credit when routing this quote, without changing their holds. Pass the same IDs when creating the delivery selection to adopt matching held units. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: 100. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return list<string>
     * @throws SdkError When inventory_reservation_ids is omitted; use hasInventoryReservationIds() or valueOrDefault().
     */
    public function getInventoryReservationIds(): array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Rates your integration supplies for methods with caller-supplied pricing. [] (Value): {@see CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you supply for one delivery method and choice group when creating a delivery quote with caller-supplied pricing.
     * @return list<CallerSuppliedDeliveryMethodResultRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When method_results is omitted; use hasMethodResults() or valueOrDefault().
     */
    public function getMethodResults(): array { return $this->get('method_results'); }
    public function hasMethodResults(): bool { return $this->has('method_results'); }
    /** ID of the Location at which to price pickup methods. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
    /** Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When tier_key is omitted; use hasTierKey() or valueOrDefault().
     */
    public function getTierKey(): int { return $this->get('tier_key'); }
    public function hasTierKey(): bool { return $this->has('tier_key'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
