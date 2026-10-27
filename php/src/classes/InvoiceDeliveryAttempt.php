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
final class InvoiceDeliveryAttempt extends Model {
    /** @param array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string, 'delivery_type': string, 'failure_reason'?: string, 'invoice_delivery_attempt_id': string, 'invoice_id': string, 'sent_at'?: string, 'status': string, 'suppression_reason'?: string, 'to_email': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttempt')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getCcEmails(): ?array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** Shape $ (Value): string.  Value enum: "email".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.  Value enum: "send", "reminder".
     * @return string
     */
    public function getDeliveryType(): string { return $this->get('delivery_type'); }
    public function hasDeliveryType(): bool { return $this->has('delivery_type'); }
    /** Shape $ (Value): string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** Shape $ (Value): string. ID of the invoice this delivery attempt belongs to.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getSentAt(): ?string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Shape $ (Value): string.  Value enum: "pending", "sent", "failed", "suppressed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Present only when status is suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed".
     * @return ?string
     */
    public function getSuppressionReason(): ?string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** Shape $ (Value): string or null. Address the invoice was sent to. `null` after the customer was deleted.
     * @return string|null
     */
    public function getToEmail(): string|null { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
}
