<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at': string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object, 'previous_attributes'?: array{'cc_emails'?: list<string>|null, 'channel'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'delivery_type'?: string|null, 'failure_reason'?: string|null, 'invoice_delivery_attempt_id'?: string|null, 'invoice_id'?: string|null, 'sent_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'suppression_reason'?: string|null, 'to_email'?: string|null, ...}|object}|object $data
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
final class InvoiceDeliveryAttemptSentMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at': string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object, 'previous_attributes'?: array{'cc_emails'?: list<string>|null, 'channel'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'delivery_type'?: string|null, 'failure_reason'?: string|null, 'invoice_delivery_attempt_id'?: string|null, 'invoice_id'?: string|null, 'sent_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'suppression_reason'?: string|null, 'to_email'?: string|null, ...}|object}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSentMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. actor (Optional): {@see ReturnActorInput}. Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at (Required): string. When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". object.failure_reason (Optional): string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id (Required): string. ID of the invoice this delivery attempt belongs to. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service accepted the message. Absent until it does. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". object.suppression_reason (Optional): string. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null. Addresses copied on this email. Absent when none were copied. previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Addresses copied on this email. Absent when none were copied. previous_attributes.cc_emails.anyOf[1][] (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null. previous_attributes.channel (Optional): string or null. How Flint delivered the invoice. Value enum: "email". previous_attributes.channel.anyOf[1] (Value): string. How Flint delivered the invoice. Value enum: "email". previous_attributes.channel.anyOf[2] (Value): null. previous_attributes.created_at (Optional): string or null. When the attempt was created. previous_attributes.created_at.anyOf[1] (Value): string. When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.delivery_type (Optional): string or null. Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". previous_attributes.delivery_type.anyOf[1] (Value): string. Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". previous_attributes.delivery_type.anyOf[2] (Value): null. previous_attributes.failure_reason (Optional): string or null. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". previous_attributes.failure_reason.anyOf[1] (Value): string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". previous_attributes.failure_reason.anyOf[2] (Value): null. previous_attributes.invoice_delivery_attempt_id (Optional): string or null. Flint invoice delivery attempt ID. previous_attributes.invoice_delivery_attempt_id.anyOf[1] (Value): string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". previous_attributes.invoice_delivery_attempt_id.anyOf[2] (Value): null. previous_attributes.invoice_id (Optional): string or null. ID of the invoice this delivery attempt belongs to. previous_attributes.invoice_id.anyOf[1] (Value): string. ID of the invoice this delivery attempt belongs to. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.sent_at (Optional): string or null. When the email service accepted the message. Absent until it does. previous_attributes.sent_at.anyOf[1] (Value): string. When the email service accepted the message. Absent until it does. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.sent_at.anyOf[2] (Value): null. previous_attributes.status (Optional): string or null. The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". previous_attributes.status.anyOf[1] (Value): string. The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.suppression_reason (Optional): string or null. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached". previous_attributes.suppression_reason.anyOf[1] (Value): string. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached". previous_attributes.suppression_reason.anyOf[2] (Value): null. previous_attributes.to_email (Optional): string or null. Address the invoice was sent to. `null` when the customer was deleted. previous_attributes.to_email.anyOf[1] (Value): string. Address the invoice was sent to. `null` when the customer was deleted. previous_attributes.to_email.anyOf[2] (Value): null.
     * @return array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at': string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object, 'previous_attributes'?: array{'cc_emails'?: list<string>|null, 'channel'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'delivery_type'?: string|null, 'failure_reason'?: string|null, 'invoice_delivery_attempt_id'?: string|null, 'invoice_id'?: string|null, 'sent_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'suppression_reason'?: string|null, 'to_email'?: string|null, ...}|object}|object
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
    /** The resource change or condition this event announces. Value enum: "invoice_delivery_attempt.sent".
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
