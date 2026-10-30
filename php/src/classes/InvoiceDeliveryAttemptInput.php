<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read string $channel
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_type
 * @property-read string $failure_reason
 * @property-read string $invoice_delivery_attempt_id
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $sent_at
 * @property-read string $status
 * @property-read string $suppression_reason
 * @property-read string|null $to_email
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceDeliveryAttemptInput extends Model {
    /** @param array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string|\DateTimeInterface, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptInput')); }
    /** Addresses copied on this email. Absent when none were copied. [] (Value): string.
     * @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** How Flint delivered the invoice. Value enum: "email".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** When the attempt was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * @return string
     * @throws SdkError When delivery_type is omitted; use hasDeliveryType() or valueOrDefault().
     */
    public function getDeliveryType(): string { return $this->get('delivery_type'); }
    public function hasDeliveryType(): bool { return $this->has('delivery_type'); }
    /** Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Flint invoice delivery attempt ID.
     * @return string
     * @throws SdkError When invoice_delivery_attempt_id is omitted; use hasInvoiceDeliveryAttemptId() or valueOrDefault().
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** ID of the invoice this delivery attempt belongs to.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the email service accepted the message. Absent until it does. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When sent_at is omitted; use hasSentAt() or valueOrDefault().
     */
    public function getSentAt(): string|\DateTimeInterface { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed".
     * @return string
     * @throws SdkError When suppression_reason is omitted; use hasSuppressionReason() or valueOrDefault().
     */
    public function getSuppressionReason(): string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** Address the invoice was sent to. `null` after the customer was deleted.
     * @return string|null
     * @throws SdkError When to_email is omitted; use hasToEmail() or valueOrDefault().
     */
    public function getToEmail(): string|null { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
}
