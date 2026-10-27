<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?string $delivered_at
 * @property-read string $direction
 * @property-read string $fulfillment_id
 * @property-read ?string $handed_off_at
 * @property-read string $order_id
 * @property-read int $package_count
 * @property-read ?string $return_id
 * @property-read ?list<ReturnShipmentLineItemAllocation> $return_line_items
 * @property-read string $shipment_id
 * @property-read ?string $shipped_at
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerShipment extends Model {
    /** @param array{'created_at'?: string, 'delivered_at'?: string, 'direction': string, 'fulfillment_id': string, 'handed_off_at'?: string, 'order_id': string, 'package_count': int, 'return_id'?: string, 'return_line_items'?: list<mixed>, 'shipment_id': string, 'shipped_at'?: string, 'status': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerShipment')); }
    /** Shape $ (Value): string. Creation timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * @return string
     */
    public function getDirection(): string { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Shape $ (Value): string. Fulfillment associated with this shipment.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * @return ?string
     */
    public function getHandedOffAt(): ?string { return $this->get('handed_off_at'); }
    public function hasHandedOffAt(): bool { return $this->has('handed_off_at'); }
    /** Shape $ (Value): string. Order whose items are transported by the shipment.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0.
     * @return int
     */
    public function getPackageCount(): int { return $this->get('package_count'); }
    public function hasPackageCount(): bool { return $this->has('package_count'); }
    /** Shape $ (Value): string. Return associated with this shipment, when its direction is return.
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): Array of {@see ReturnShipmentLineItemAllocation}. Return lines and quantities allocated to this return shipment. Shape $[] (Value): {@see ReturnShipmentLineItemAllocation}. A return line and the quantity placed in a return shipment or package.
     * @return ?list<ReturnShipmentLineItemAllocation>
     */
    public function getReturnLineItems(): ?array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Shape $ (Value): string. Stable identifier of the shipment.
     * @return string
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getShippedAt(): ?string { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Last update timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Monotonic shipment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
