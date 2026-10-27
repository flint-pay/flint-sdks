<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'handed_off_at'?: string|\DateTimeInterface, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_count': int, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_shipment_updated_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'handed_off_at'?: string|\DateTimeInterface, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_count': int, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_shipment_updated_merchantInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see ShipmentInput}. A shipment carrying fulfilled order items. Shape $.object.created_at (Optional): string. Creation timestamp. Format: date-time. Shape $.object.delivered_at (Optional): string. When the shipment was delivered, in RFC3339 format. Format: date-time. Shape $.object.direction (Required): string. Whether the shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound", "return". Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. Shape $.object.external_system (Optional): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Shape $.object.fulfillment_id (Required): string. Fulfillment associated with this shipment. Shape $.object.handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: date-time. Shape $.object.metadata (Optional): Map of string. Caller-owned key-value metadata associated with the shipment. Shape $.object.metadata.* (Value): string. Shape $.object.order (Optional): {@see ExpandedOrderSummaryInput} or null. Order summary returned when the order relationship is expanded. Shape $.object.order.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.object.order.anyOf[2] (Value): null. Shape $.object.order_id (Required): string. Order whose items are transported by the shipment. Shape $.object.package_count (Required): integer. Total number of packages attached to the shipment, including voided packages. Format: int32. minimum: 0. Shape $.object.return_id (Optional): string. Return associated with this shipment, when its direction is return. Shape $.object.return_line_items (Optional): Array of {@see ReturnShipmentLineItemAllocationInput}. Return lines and quantities allocated to this return shipment. Shape $.object.return_line_items[] (Value): {@see ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return shipment or package. Shape $.object.shipment_id (Required): string. Stable identifier of the shipment. Shape $.object.shipped_at (Optional): string. When the shipment was shipped, in RFC3339 format. Format: date-time. Shape $.object.status (Required): string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". Shape $.object.updated_at (Optional): string. Last update timestamp. Format: date-time. Shape $.object.version (Required): integer string. Monotonic shipment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'handed_off_at'?: string|\DateTimeInterface, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_count': int, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "shipment.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
