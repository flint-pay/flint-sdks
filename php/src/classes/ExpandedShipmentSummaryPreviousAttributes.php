<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $delivered_at
 * @property-read string|null $direction
 * @property-read string|null $fulfillment_id
 * @property-read string|null $handed_off_at
 * @property-read int|null $package_count
 * @property-read string|null $return_id
 * @property-read string|null $shipment_id
 * @property-read string|null $shipped_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedShipmentSummaryPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'delivered_at'?: mixed, 'direction'?: mixed, 'fulfillment_id'?: mixed, 'handed_off_at'?: mixed, 'package_count'?: mixed, 'return_id'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedShipmentSummaryPreviousAttributes')); }
    /** When the shipment was created, in RFC3339 format. anyOf[1] (Value): string. When the shipment was created, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the shipment was delivered, in RFC3339 format. anyOf[1] (Value): string. When the shipment was delivered, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveredAt(): string|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return". anyOf[1] (Value): string. Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDirection(): string|null { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Fulfillment associated with this shipment. anyOf[1] (Value): string. Fulfillment associated with this shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** When the carrier accepted the shipment, in RFC3339 format. anyOf[1] (Value): string. When the carrier accepted the shipment, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHandedOffAt(): string|null { return $this->get('handed_off_at'); }
    public function hasHandedOffAt(): bool { return $this->has('handed_off_at'); }
    /** Total number of packages attached to the shipment, including voided packages. anyOf[1] (Value): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPackageCount(): int|null { return $this->get('package_count'); }
    public function hasPackageCount(): bool { return $this->has('package_count'); }
    /** ID of the Return this shipment sends back. Present only on return shipments. anyOf[1] (Value): string. ID of the Return this shipment sends back. Present only on return shipments. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Stable identifier of the expanded shipment. anyOf[1] (Value): string. Stable identifier of the expanded shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShipmentId(): string|null { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** When the shipment was shipped, in RFC3339 format. anyOf[1] (Value): string. When the shipment was shipped, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippedAt(): string|null { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): string. Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. [] enum: "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. [] enum: "void". anyOf[1][] (Value): string.  Value enum: "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the shipment was last updated, in RFC3339 format. anyOf[1] (Value): string. When the shipment was last updated, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
