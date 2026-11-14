<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class InvoicePaymentAttemptFailedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptFailedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional): string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.expected_amount_money (Required): {@see MoneyValueInput}. The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z". object.invoice_id (Required): string. The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string. Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@see PaymentErrorSummaryInput}. Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. object.payment_intent_id (Optional): string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing". object.updated_at (Required): string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "invoice_payment_attempt.failed".
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
