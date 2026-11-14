<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $mode
 * @property-read string $pickup_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryOptionsPreviewRequestInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'currency': string, 'delivery_method_ids'?: list<string>, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'line_items': list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryOptionsPreviewRequestInput')); }
    /** Buyer location used to evaluate pickup and local delivery availability. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     * @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Delivery methods to evaluate. When omitted, uses settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Destination address used to evaluate shipment and local delivery options. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present.
     * @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Where the preview allocates tracked stock: a fixed Location, the current revision of an allocation policy, or one policy revision. Required when any line item tracks inventory. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Items to evaluate delivery for, from 1 to 100. minItems: 1. maxItems: 100. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Value enum: "delivery_options".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the Location at which to price pickup methods. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
}
