<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $delivered_at
 * @property-read string|null $direction
 * @property-read string|null $external_reference_id
 * @property-read string|null $external_system
 * @property-read string|null $fulfillment_id
 * @property-read string|null $handed_off_at
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read int|null $package_count
 * @property-read list<ExpandedPackageSummaryPreviousAttributes>|null $packages
 * @property-read string|null $return_id
 * @property-read list<ReturnShipmentLineItemAllocationPreviousAttributes>|null $return_line_items
 * @property-read string|null $shipment_id
 * @property-read string|null $shipped_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'delivered_at'?: mixed, 'direction'?: mixed, 'external_reference_id'?: mixed, 'external_system'?: mixed, 'fulfillment_id'?: mixed, 'handed_off_at'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'package_count'?: mixed, 'packages'?: mixed, 'return_id'?: mixed, 'return_line_items'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentUpdatedMerchantEventDataPreviousAttributes')); }
    /** Creation timestamp. anyOf[1] (Value): string. Creation timestamp. Format: date-time. anyOf[2] (Value): null.
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
    /** Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalSystem(): string|null { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Fulfillment associated with this shipment. anyOf[1] (Value): string. Fulfillment associated with this shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. anyOf[1] (Value): string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHandedOffAt(): string|null { return $this->get('handed_off_at'); }
    public function hasHandedOffAt(): bool { return $this->has('handed_off_at'); }
    /** Caller-owned key-value metadata associated with the shipment. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order whose items are transported by the shipment. anyOf[1] (Value): string. Order whose items are transported by the shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Total number of packages attached to the shipment, including voided packages. anyOf[1] (Value): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPackageCount(): int|null { return $this->get('package_count'); }
    public function hasPackageCount(): bool { return $this->has('package_count'); }
    /** Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. anyOf[1] (Value): Array of {@see ExpandedPackageSummaryPreviousAttributes}. Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. anyOf[1][] (Value): {@see ExpandedPackageSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedPackageSummaryPreviousAttributes>|null
     */
    public function getPackages(): array|null { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Return associated with this shipment, when its direction is return. anyOf[1] (Value): string. Return associated with this shipment, when its direction is return. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return lines and quantities allocated to this return shipment. anyOf[1] (Value): Array of {@see ReturnShipmentLineItemAllocationPreviousAttributes}. Return lines and quantities allocated to this return shipment. anyOf[1][] (Value): {@see ReturnShipmentLineItemAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnShipmentLineItemAllocationPreviousAttributes>|null
     */
    public function getReturnLineItems(): array|null { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Stable identifier of the shipment. anyOf[1] (Value): string. Stable identifier of the shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShipmentId(): string|null { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** When the shipment was shipped, in RFC3339 format. anyOf[1] (Value): string. When the shipment was shipped, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippedAt(): string|null { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. [] enum: "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. [] enum: "void". anyOf[1][] (Value): string.  Value enum: "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Last update timestamp. anyOf[1] (Value): string. Last update timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic shipment version for expected_version checks. anyOf[1] (Value): integer. Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
