<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_note
 * @property-read string $customer_id
 * @property-read OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass $delivery_destination
 * @property-read list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $internal_note
 * @property-read OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read CreateOrderTipInput|array<array-key, mixed>|\stdClass $requested_tip
 * @property-read OrderTaxRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoiceQuickPayRequestInput extends Model {
    /** @param array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'discounts'?: list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass>, 'internal_note'?: string, 'inventory_routing_source'?: OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'line_items': list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'requested_tip'?: CreateOrderTipInput|array<array-key, mixed>|\stdClass, 'tax'?: OrderTaxRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoiceQuickPayRequestInput')); }
    /** A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: 1.
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** The customer to bill. The invoice shows their name and billing details, and GET /v1/invoices?customer_id= finds it. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Where the backing order's items are shipped or delivered, the same as order creation accepts. The delivery destination you set when creating or updating an order, with an address and an optional recipient.
     * @return OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Discounts to apply to the backing order, in the shape order creation accepts. [] (Value): {@see CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual discount or a reference to a promotion.
     * @return list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** A note for your team on the backing order. Buyer reads leave it out. minLength: 1.
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision.
     * @return OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** The items to bill, at least one, in the shape order creation accepts. A custom line without variant_id or bundle_id must set fulfillment.requirement. minItems: 1. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** A tip to request from the buyer on the backing order. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent.
     * @return CreateOrderTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Tax inputs for the backing order, the same as order creation accepts. Validation errors name fields under quick_pay.tax. Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location.
     * @return OrderTaxRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
}
