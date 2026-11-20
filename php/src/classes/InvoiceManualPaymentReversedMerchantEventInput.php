<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string|\DateTimeInterface, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, ...}|object, 'previous_attributes'?: array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'idempotency_key'?: string|null, 'invoice_id'?: string|null, 'invoice_manual_payment_id'?: string|null, 'note'?: string|null, 'payment_reference'?: string|null, 'received_at'?: string|\DateTimeInterface|null, 'reversal_note'?: string|null, 'reversed_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, ...}|object}|object $data
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
final class InvoiceManualPaymentReversedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string|\DateTimeInterface, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, ...}|object, 'previous_attributes'?: array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'idempotency_key'?: string|null, 'invoice_id'?: string|null, 'invoice_manual_payment_id'?: string|null, 'note'?: string|null, 'payment_reference'?: string|null, 'received_at'?: string|\DateTimeInterface|null, 'reversal_note'?: string|null, 'reversed_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, ...}|object}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentReversedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. actor (Optional): {@see ReturnActorInput}. Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.amount_money (Required): {@see MoneyValueInput}. Full amount received, including any principal and late fees covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.idempotency_key (Optional): string or null. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. object.invoice_id (Required): string. The invoice this payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_manual_payment_id (Required): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Example: "omp_01KEZF7C007J18203RBJKB9TYE". object.note (Optional): string. Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. object.payment_reference (Optional): string. Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength: 255. object.received_at (Required): string. When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z". object.reversal_note (Optional): string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: 1. maxLength: 4096. object.reversed_at (Optional): string. When the payment was reversed. Present only when reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed". object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". object.supported_actions[] (Value): string.  Value enum: "reverse". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. previous_attributes.amount_money (Optional): {@see MoneyValuePreviousAttributesInput} or null. Full amount received, including any principal and late fees covered. previous_attributes.amount_money.anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. previous_attributes.amount_money.anyOf[2] (Value): null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.invoice_id (Optional): string or null. The invoice this payment was recorded against. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_manual_payment_id (Optional): string or null. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. previous_attributes.invoice_manual_payment_id.anyOf[1] (Value): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Example: "omp_01KEZF7C007J18203RBJKB9TYE". previous_attributes.invoice_manual_payment_id.anyOf[2] (Value): null. previous_attributes.note (Optional): string or null. Note about the offline payment, up to 4096 characters. previous_attributes.note.anyOf[1] (Value): string. Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. previous_attributes.note.anyOf[2] (Value): null. previous_attributes.payment_reference (Optional): string or null. Caller-owned check, wire, or bank reference, stored unmodified. previous_attributes.payment_reference.anyOf[1] (Value): string. Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength: 255. previous_attributes.payment_reference.anyOf[2] (Value): null. previous_attributes.received_at (Optional): string or null. When the payment was received. previous_attributes.received_at.anyOf[1] (Value): string. When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2] (Value): null. previous_attributes.reversal_note (Optional): string or null. Note supplied when reversing the payment. Present only when reversed and a note was supplied. previous_attributes.reversal_note.anyOf[1] (Value): string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: 1. maxLength: 4096. previous_attributes.reversal_note.anyOf[2] (Value): null. previous_attributes.reversed_at (Optional): string or null. When the payment was reversed. Present only when reversed. previous_attributes.reversed_at.anyOf[1] (Value): string. When the payment was reversed. Present only when reversed. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.reversed_at.anyOf[2] (Value): null. previous_attributes.status (Optional): string or null. Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed". previous_attributes.status.anyOf[1] (Value): string. Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". previous_attributes.supported_actions.anyOf[1][] (Value): string.  Value enum: "reverse". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * @return array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'idempotency_key'?: string|null, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string|\DateTimeInterface, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, ...}|object, 'previous_attributes'?: array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'idempotency_key'?: string|null, 'invoice_id'?: string|null, 'invoice_manual_payment_id'?: string|null, 'note'?: string|null, 'payment_reference'?: string|null, 'received_at'?: string|\DateTimeInterface|null, 'reversal_note'?: string|null, 'reversed_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, ...}|object}|object
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
    /** The resource change or condition this event announces. Value enum: "invoice_manual_payment.reversed".
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
