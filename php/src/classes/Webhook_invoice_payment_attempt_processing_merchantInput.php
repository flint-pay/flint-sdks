<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_invoice_payment_attempt_processing_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_invoice_payment_attempt_processing_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see InvoicePaymentAttemptInput}. An attempt to collect payment for an invoice. Shape $.object.canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: date-time. Shape $.object.cancellation_requested_at (Optional): string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: date-time. Shape $.object.checkout_session_id (Optional): string. The hosted or embedded checkout session the buyer pays through. Absent for automatic charges. Shape $.object.expected_amount_money (Required): {@see MoneyValueInput}. The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: date-time. Shape $.object.invoice_id (Required): string. The invoice this attempt collects. Shape $.object.invoice_payment_attempt_id (Required): string. Flint invoice payment attempt ID. Shape $.object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Shape $.object.last_payment_error (Optional): {@see PaymentErrorSummaryInput}. Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. Shape $.object.payment_intent_id (Optional): string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Shape $.object.rail (Required): string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit". Shape $.object.settled_at (Optional): string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: date-time. Shape $.object.started_at (Optional): string. When the attempt was created. Format: date-time. Shape $.object.status (Required): string. Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Value enum: "open", "settled", "failed", "canceled", "expired", "processing". Shape $.object.updated_at (Optional): string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * @return array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "invoice_payment_attempt.processing".
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
