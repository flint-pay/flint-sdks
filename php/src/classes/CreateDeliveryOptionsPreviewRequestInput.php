<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read DeliveryPreviewRoutingSourceInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $mode
 * @property-read string $pickup_location_id
 * @property-read array<array-key, string>|\stdClass $pricing_context
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryOptionsPreviewRequestInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'inventory_routing_source'?: DeliveryPreviewRoutingSourceInput|array<array-key, mixed>|\stdClass, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryOptionsPreviewRequestInput')); }
    /** @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return DeliveryPreviewRoutingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When pricing_context is omitted; use hasPricingContext() or valueOrDefault().
     */
    public function getPricingContext(): array|object { return $this->get('pricing_context'); }
    public function hasPricingContext(): bool { return $this->has('pricing_context'); }
}
