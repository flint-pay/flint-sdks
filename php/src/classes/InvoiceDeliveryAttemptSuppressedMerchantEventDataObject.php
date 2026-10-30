<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $cc_emails
 * @property-read string $channel
 * @property-read ?string $created_at
 * @property-read string $delivery_type
 * @property-read ?string $failure_reason
 * @property-read string $invoice_delivery_attempt_id
 * @property-read string $invoice_id
 * @property-read ?string $sent_at
 * @property-read string $status
 * @property-read ?string $suppression_reason
 * @property-read string|null $to_email
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptSuppressedMerchantEventDataObject extends Model {
    /** @param array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSuppressedMerchantEventDataObject')); }
    /** Addresses copied on this email. Absent when none were copied. [] (Value): string.
     * @return ?list<string>
     */
    public function getCcEmails(): ?array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** How Flint delivered the invoice. Value enum: "email".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** When the attempt was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * @return string
     */
    public function getDeliveryType(): string { return $this->get('delivery_type'); }
    public function hasDeliveryType(): bool { return $this->has('delivery_type'); }
    /** Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Flint invoice delivery attempt ID.
     * @return string
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** ID of the invoice this delivery attempt belongs to.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the email service accepted the message. Absent until it does. Format: date-time.
     * @return ?string
     */
    public function getSentAt(): ?string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed".
     * @return ?string
     */
    public function getSuppressionReason(): ?string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** Address the invoice was sent to. `null` after the customer was deleted.
     * @return string|null
     */
    public function getToEmail(): string|null { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
}
