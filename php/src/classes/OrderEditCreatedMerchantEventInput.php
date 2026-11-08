<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'note'?: string, 'order_edit_id': string, 'order_id': string, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class OrderEditCreatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'note'?: string, 'order_edit_id': string, 'order_id': string, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditCreatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`. object.charge_refunds (Required): Array of {@see OrderEditChargeRefundInput}. Explicit charge refunds frozen at commit. Empty when no charges were refunded. object.charge_refunds[] (Value): {@see OrderEditChargeRefundInput}. The refund the preview would make for one order charge. object.created_at (Required): string. When the edit committed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.note (Optional): string. Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: 500. object.order_edit_id (Required): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Required): string. The order this edit belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.reason (Optional): string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock". object.refund_ids (Required): Array of string. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. object.refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_money (Required): {@see MoneyValueInput}. Total money to refund for removed units and charges. May be zero; a zero-value edit creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.remove_line_items (Required): Array of {@see OrderEditLineRemovalInput}. Removed units and their refund amounts frozen at commit. object.remove_line_items[] (Value): {@see OrderEditLineRemovalInput}. Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order. object.status (Required): string. Whether this edit has committed. Refund processing has its own status on each refund. Value enum: "completed". object.supported_actions (Required): Array of string. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "retry". object.supported_actions[] (Value): string.  Value enum: "retry". object.unrefunded_money (Required): {@see MoneyValueInput}. Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'note'?: string, 'order_edit_id': string, 'order_id': string, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "order_edit.created".
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
