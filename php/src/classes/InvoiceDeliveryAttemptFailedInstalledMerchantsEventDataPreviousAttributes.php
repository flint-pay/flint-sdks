<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $cc_emails
 * @property-read string|null $channel
 * @property-read string|null $created_at
 * @property-read string|null $delivery_type
 * @property-read string|null $failure_reason
 * @property-read string|null $invoice_delivery_attempt_id
 * @property-read string|null $invoice_id
 * @property-read string|null $sent_at
 * @property-read string|null $status
 * @property-read string|null $suppression_reason
 * @property-read string|null $to_email
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptFailedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'cc_emails'?: mixed, 'channel'?: mixed, 'created_at'?: mixed, 'delivery_type'?: mixed, 'failure_reason'?: mixed, 'invoice_delivery_attempt_id'?: mixed, 'invoice_id'?: mixed, 'sent_at'?: mixed, 'status'?: mixed, 'suppression_reason'?: mixed, 'to_email'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptFailedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Addresses copied on this email. Absent when none were copied. anyOf[1] (Value): Array of string. Addresses copied on this email. Absent when none were copied. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getCcEmails(): array|null { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** How Flint delivered the invoice. Value enum: "email". anyOf[1] (Value): string. How Flint delivered the invoice. Value enum: "email". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getChannel(): string|null { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** When the attempt was created. anyOf[1] (Value): string. When the attempt was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". anyOf[1] (Value): string. Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send", "reminder". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryType(): string|null { return $this->get('delivery_type'); }
    public function hasDeliveryType(): bool { return $this->has('delivery_type'); }
    /** Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". anyOf[1] (Value): string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureReason(): string|null { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Flint invoice delivery attempt ID. anyOf[1] (Value): string. Flint invoice delivery attempt ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceDeliveryAttemptId(): string|null { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** ID of the invoice this delivery attempt belongs to. anyOf[1] (Value): string. ID of the invoice this delivery attempt belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the email service accepted the message. Absent until it does. anyOf[1] (Value): string. When the email service accepted the message. Absent until it does. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSentAt(): string|null { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". anyOf[1] (Value): string. The outcome of this attempt. sent means the email service accepted the message. Value enum: "pending", "sent", "failed", "suppressed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached". anyOf[1] (Value): string. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSuppressionReason(): string|null { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** Address the invoice was sent to. `null` when the customer was deleted. anyOf[1] (Value): string. Address the invoice was sent to. `null` when the customer was deleted. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getToEmail(): string|null { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
}
