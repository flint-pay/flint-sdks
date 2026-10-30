<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string $direction
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read string $fulfillment_id
 * @property-read string|\DateTimeInterface $handed_off_at
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read int $package_count
 * @property-read list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass> $packages
 * @property-read string $return_id
 * @property-read list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass> $return_line_items
 * @property-read string $shipment_id
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'handed_off_at'?: string|\DateTimeInterface, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_count': int, 'packages'?: list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentInput')); }
    /** Creation timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the shipment was delivered, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * @return string
     * @throws SdkError When direction is omitted; use hasDirection() or valueOrDefault().
     */
    public function getDirection(): string { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Fulfillment associated with this shipment.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When handed_off_at is omitted; use hasHandedOffAt() or valueOrDefault().
     */
    public function getHandedOffAt(): string|\DateTimeInterface { return $this->get('handed_off_at'); }
    public function hasHandedOffAt(): bool { return $this->has('handed_off_at'); }
    /** Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order whose items are transported by the shipment.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When package_count is omitted; use hasPackageCount() or valueOrDefault().
     */
    public function getPackageCount(): int { return $this->get('package_count'); }
    public function hasPackageCount(): bool { return $this->has('package_count'); }
    /** Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. [] (Value): {@see ExpandedPackageSummaryInput}. A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded.
     * @return list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Return associated with this shipment, when its direction is return.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return lines and quantities allocated to this return shipment. [] (Value): {@see ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return shipment or package.
     * @return list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_line_items is omitted; use hasReturnLineItems() or valueOrDefault().
     */
    public function getReturnLineItems(): array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Stable identifier of the shipment.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** When the shipment was shipped, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Last update timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
