<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress|DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate|\stdClass|null $buyer_location
 * @property-read list<DeliveryPreviewChoiceGroupResource> $choice_groups
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read ?DeliveryAddressResource $destination_address
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<\stdClass> $line_items
 * @property-read ?list<DeliveryMerchantDiagnostic> $merchant_diagnostics
 * @property-read string $mode
 * @property-read ?string $pickup_location_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptions extends Model {
    /** @param array{'buyer_location'?: mixed, 'choice_groups': list<mixed>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'line_items': list<mixed>, 'merchant_diagnostics'?: list<mixed>, 'mode': string, 'pickup_location_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptions')); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResource}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress|DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate|\stdClass|null
     */
    public function getBuyerLocation(): DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress|DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate|\stdClass|null { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): Array of {@see DeliveryPreviewChoiceGroupResource}. Shape $[] (Value): {@see DeliveryPreviewChoiceGroupResource}. One group of order items in a delivery options preview, with the options a buyer could choose, its availability status, and any input still needed.
     * @return list<DeliveryPreviewChoiceGroupResource>
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): {@see DeliveryAddressResource}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return ?DeliveryAddressResource
     */
    public function getDestinationAddress(): ?DeliveryAddressResource { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirement}. Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. Shape $[] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see CreateOrderLineItem}. Shape $[] (Value): {@see CreateOrderLineItem}. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<\stdClass>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of {@see DeliveryMerchantDiagnostic}. Present for merchant callers as an array, including when empty. Absent for buyer callers. Shape $[] (Value): {@see DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return ?list<DeliveryMerchantDiagnostic>
     */
    public function getMerchantDiagnostics(): ?array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Value enum: "delivery_options".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPickupLocationId(): ?string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
}
