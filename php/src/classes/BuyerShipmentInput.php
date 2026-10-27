<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string $direction
 * @property-read string $fulfillment_id
 * @property-read string|\DateTimeInterface $handed_off_at
 * @property-read string $order_id
 * @property-read int $package_count
 * @property-read string $return_id
 * @property-read list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass> $return_line_items
 * @property-read string $shipment_id
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerShipmentInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'direction': string, 'fulfillment_id': string, 'handed_off_at'?: string|\DateTimeInterface, 'order_id': string, 'package_count': int, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerShipmentInput')); }
    /** Shape $ (Value): string. Creation timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * @return string
     * @throws SdkError When direction is omitted; use hasDirection() or valueOrDefault().
     */
    public function getDirection(): string { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Shape $ (Value): string. Fulfillment associated with this shipment.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When handed_off_at is omitted; use hasHandedOffAt() or valueOrDefault().
     */
    public function getHandedOffAt(): string|\DateTimeInterface { return $this->get('handed_off_at'); }
    public function hasHandedOffAt(): bool { return $this->has('handed_off_at'); }
    /** Shape $ (Value): string. Order whose items are transported by the shipment.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When package_count is omitted; use hasPackageCount() or valueOrDefault().
     */
    public function getPackageCount(): int { return $this->get('package_count'); }
    public function hasPackageCount(): bool { return $this->has('package_count'); }
    /** Shape $ (Value): string. Return associated with this shipment, when its direction is return.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): Array of {@see ReturnShipmentLineItemAllocationInput}. Return lines and quantities allocated to this return shipment. Shape $[] (Value): {@see ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return shipment or package.
     * @return list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_line_items is omitted; use hasReturnLineItems() or valueOrDefault().
     */
    public function getReturnLineItems(): array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Shape $ (Value): string. Stable identifier of the shipment.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Last update timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Monotonic shipment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
