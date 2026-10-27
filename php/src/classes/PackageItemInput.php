<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $fulfillment_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $package_id
 * @property-read string $package_item_id
 * @property-read string $quantity
 * @property-read string $shipment_id
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageItemInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'fulfillment_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'order_line_item_id': string, 'package_id': string, 'package_item_id': string, 'quantity': string, 'shipment_id': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageItemInput')); }
    /** Shape $ (Value): string. Creation timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_item_id is omitted; use hasPackageItemId() or valueOrDefault().
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string. Last update timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
