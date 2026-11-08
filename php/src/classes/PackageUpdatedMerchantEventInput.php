<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'carrier'?: string, 'created_at': string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'label_url'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'carrier'?: string, 'created_at': string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'label_url'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageUpdatedMerchantEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.carrier (Optional): string. Carrier transporting the package. object.created_at (Required): string. Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@see DimensionsInput}. Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at (Optional): string or null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". object.external_system (Optional): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. object.metadata (Optional): {@see MetadataMapInput}. Caller-owned key-value metadata associated with the package. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.order (Optional): {@see ExpandedOrderSummaryInput} or null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required): string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". object.return_id (Optional): string. Return this package belongs to. Present only on packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_line_items (Optional): Array of {@see ReturnShipmentLineItemAllocationInput}. Return line quantities allocated to this parcel. Present only on packages of return shipments. object.return_line_items[] (Value): {@see ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return shipment or package. object.service_code (Optional): string. Carrier service used for the package. object.shipment_id (Required): string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". object.status_reason (Optional): string. Additional explanation of the package's current status. object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". object.supported_actions[] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic package version for expected_version checks. Format: uint64. minimum: 1. object.weight (Optional): {@see WeightInput}. Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'carrier'?: string, 'created_at': string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'label_url'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "package.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
