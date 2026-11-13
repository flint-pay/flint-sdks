<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|\DateTimeInterface|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass>, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_merchant_id': string, 'shortfall_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class PaymentSplitCreatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|\DateTimeInterface|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass>, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_merchant_id': string, 'shortfall_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitCreatedEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.amount_money (Required): {@see MoneyValueInput}. The admitted amount, or its final amount set at capture. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.canceled_reason (Optional): string. Present when status is canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked", "fully_reversed". object.collecting_merchant_id (Required): string. The merchant of record that collected the payment. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.created_at (Required): string. When the payment's create recorded the split. Format: date-time. Example: "2026-08-02T16:00:00Z". object.description (Optional): string. The collecting merchant's description, shown to the seller. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255. Example: "warehouse-1842". object.failure_reason (Optional): string. Present when status is failed. Can gain values; unknown reasons use split_failed. Value enum: "seller_cannot_receive", "split_failed". object.funds_available_at (Required): string or null. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: date-time. Example: "2026-08-02T16:00:00Z". object.partner_app_id (Required): string. The collecting merchant's partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". object.partner_app_install_id (Required): string. The seller's install of the app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". object.payment_intent_id (Required): string. The collecting merchant's payment. Sellers can read the split, but not the payment. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_split_id (Required): string. Unique identifier for the split. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". object.pending_reason (Optional): string. Present when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open", "reversals_pending", "awaiting_funds". object.reversals (Required): Array of {@see PaymentSplitReversalInput}. Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. object.reversals[] (Value): {@see PaymentSplitReversalInput}. A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own. object.reversed_money (Required): {@see MoneyValueInput}. Reversals' total amount minus their reinstated amounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.seller_merchant_id (Required): string. The merchant receiving the split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.shortfall_money (Required): {@see MoneyValueInput}. Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.status (Required): string. The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed", "canceled". object.succeeded_at (Optional): string. When the split reached the seller's balance. Present when succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string. When the split last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|\DateTimeInterface|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<PaymentSplitReversalInput|array<array-key, mixed>|\stdClass>, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'seller_merchant_id': string, 'shortfall_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "payment_split.created".
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
