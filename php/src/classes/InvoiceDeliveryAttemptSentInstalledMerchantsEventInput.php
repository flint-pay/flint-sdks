<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceDeliveryAttemptSentInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSentInstalledMerchantsEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see InvoiceDeliveryAttemptInput}. One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status. object.cc_emails (Optional): Array of string. Addresses copied on this email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at (Optional): string. When the attempt was created. Format: date-time. object.delivery_type (Required): string. Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". object.failure_reason (Optional): string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint invoice delivery attempt ID. object.invoice_id (Required): string. ID of the invoice this delivery attempt belongs to. object.sent_at (Optional): string. When the email service accepted the message. Absent until it does. Format: date-time. object.status (Required): string. The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". object.suppression_reason (Optional): string. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed". object.to_email (Required): string or null. Address the invoice was sent to. `null` after the customer was deleted.
     * @return array{'object': array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "invoice_delivery_attempt.sent".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
