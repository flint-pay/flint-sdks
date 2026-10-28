<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass> $choice_groups
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass> $merchant_diagnostics
 * @property-read string $mode
 * @property-read string $pickup_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'choice_groups': list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewInput')); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResourceInput}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): Array of {@see DeliveryPreviewChoiceGroupResourceInput}. Shape $[] (Value): {@see DeliveryPreviewChoiceGroupResourceInput}. One group of order items in a delivery options preview, with the options a buyer could choose, its availability status, and any input still needed.
     * @return list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): {@see AddressInput}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirementInput}. Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. Shape $[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see CreateOrderLineItemInput}. Shape $[] (Value): {@see CreateOrderLineItemInput}. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of {@see DeliveryMerchantDiagnosticInput}. Present for merchant callers as an array, including when empty. Absent for buyer callers. Shape $[] (Value): {@see DeliveryMerchantDiagnosticInput}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Value enum: "delivery_options".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
}
