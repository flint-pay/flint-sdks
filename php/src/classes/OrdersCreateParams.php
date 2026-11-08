<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_note
 * @property-read string $customer_id
 * @property-read OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass $delivery_destination
 * @property-read list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $external_reference_id
 * @property-read string $internal_note
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read CreateOrderTipInput|array<array-key, mixed>|\stdClass $requested_tip
 * @property-read OrderTaxRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreateParams extends Model {
    /** @param array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'discounts'?: list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'line_items': list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'requested_tip'?: CreateOrderTipInput|array<array-key, mixed>|\stdClass, 'tax'?: OrderTaxRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateParams')); }
    /** A note to the buyer. minLength: 1. maxLength: 1000.
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** ID of the customer this order belongs to. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shipment or local-delivery destination for an order created without a delivery selection. The delivery destination you set when creating or updating an order, with an address and an optional recipient.
     * @return OrderDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Discounts applied to the order, each with its amount, status, and the line items and charges it covers. [] (Value): {@see CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual discount or a reference to a promotion.
     * @return list<CreateOrderDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** A note for your team. Buyer reads leave it out. minLength: 1. maxLength: 1000.
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Items the order sells, each with its pricing, tax, and fulfillment quantities. minItems: 1. [] (Value): {@see CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.
     * @return list<CreateOrderLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent.
     * @return CreateOrderTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Tax settings for the order. Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location.
     * @return OrderTaxRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
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
