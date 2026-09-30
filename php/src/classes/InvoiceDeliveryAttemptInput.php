<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read string $channel
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_type
 * @property-read string $error_message
 * @property-read string $invoice_delivery_attempt_id
 * @property-read string|\DateTimeInterface $sent_at
 * @property-read string $status
 * @property-read string $to_email
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceDeliveryAttemptInput extends Model {
    /** @param array{'cc_emails'?: list<string>, 'channel': string, 'created_at'?: string|\DateTimeInterface, 'delivery_type': string, 'error_message'?: string, 'invoice_delivery_attempt_id': string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'to_email': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptInput')); }
    /** @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When delivery_type is omitted; use hasDeliveryType() or valueOrDefault().
     */
    public function getDeliveryType(): string { return $this->get('delivery_type'); }
    public function hasDeliveryType(): bool { return $this->has('delivery_type'); }
    /** @return string
     * @throws SdkError When error_message is omitted; use hasErrorMessage() or valueOrDefault().
     */
    public function getErrorMessage(): string { return $this->get('error_message'); }
    public function hasErrorMessage(): bool { return $this->has('error_message'); }
    /** @return string
     * @throws SdkError When invoice_delivery_attempt_id is omitted; use hasInvoiceDeliveryAttemptId() or valueOrDefault().
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When sent_at is omitted; use hasSentAt() or valueOrDefault().
     */
    public function getSentAt(): string|\DateTimeInterface { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When to_email is omitted; use hasToEmail() or valueOrDefault().
     */
    public function getToEmail(): string { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
}
