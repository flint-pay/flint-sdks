<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'buyer_notification_behavior': string, 'created_at'?: string|\DateTimeInterface, 'current_status'?: string, 'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string|\DateTimeInterface, 'shipment_id'?: string, 'subject_type': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_fulfillment_event_created_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'buyer_notification_behavior': string, 'created_at'?: string|\DateTimeInterface, 'current_status'?: string, 'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string|\DateTimeInterface, 'shipment_id'?: string, 'subject_type': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_fulfillment_event_created_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see FulfillmentEventInput}. An action recorded during an order's fulfillment. Shape $.object.buyer_notification_behavior (Required): string. Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress". Shape $.object.created_at (Optional): string. Timeline entry creation timestamp. Format: date-time. Shape $.object.current_status (Optional): string.  Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". Shape $.object.custom_details (Optional): Map of string. Shape $.object.custom_details.* (Value): string. Shape $.object.event_type (Required): string.  Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom", "accepted", "preparing", "picked", "packed", "ready", "dispatched", "completed", "canceled", "failed", "no_show". Shape $.object.external_event_id (Optional): string. Shape $.object.external_status (Optional): string. Shape $.object.external_system (Optional): string. Shape $.object.fulfillment_event_id (Required): string. Shape $.object.fulfillment_id (Required): string. Shape $.object.location_description (Optional): string. Shape $.object.message (Optional): string. Shape $.object.occurred_at (Optional): string. Provider event timestamp. Format: date-time. Shape $.object.order (Optional): {@see ExpandedOrderSummaryInput} or null. Shape $.object.order.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.object.order.anyOf[2] (Value): null. Shape $.object.order_id (Required): string. Shape $.object.package_id (Optional): string. Shape $.object.previous_status (Optional): string.  Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". Shape $.object.quantity_effect (Optional): string.  Value enum: "preserve", "fulfill", "release". Shape $.object.reason (Optional): string.  Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue". Shape $.object.reason_message (Optional): string. The note supplied when this action was requested. Shape $.object.received_at (Optional): string. Flint receive timestamp. Format: date-time. Shape $.object.shipment_id (Optional): string. Shape $.object.subject_type (Required): string.  Value enum: "fulfillment", "shipment", "package".
     * @return array{'object': array{'buyer_notification_behavior': string, 'created_at'?: string|\DateTimeInterface, 'current_status'?: string, 'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string|\DateTimeInterface, 'shipment_id'?: string, 'subject_type': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "fulfillment_event.created".
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
