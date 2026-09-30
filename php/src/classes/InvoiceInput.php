<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $external_reference_id
 * @property-read string $footer
 * @property-read string $memo
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $recipient_email
 * @property-read string $reference
 * @property-read string|\DateTimeInterface $scheduled_send_at
 * @property-read string|\DateTimeInterface $service_at
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceInput extends Model {
    /** @param array{'cc_emails'?: list<string>, 'due_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'footer'?: string, 'memo'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'recipient_email'?: string, 'reference'?: string, 'scheduled_send_at'?: string|\DateTimeInterface, 'service_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceInput')); }
    /** @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** @return string
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When scheduled_send_at is omitted; use hasScheduledSendAt() or valueOrDefault().
     */
    public function getScheduledSendAt(): string|\DateTimeInterface { return $this->get('scheduled_send_at'); }
    public function hasScheduledSendAt(): bool { return $this->has('scheduled_send_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When service_at is omitted; use hasServiceAt() or valueOrDefault().
     */
    public function getServiceAt(): string|\DateTimeInterface { return $this->get('service_at'); }
    public function hasServiceAt(): bool { return $this->has('service_at'); }
}
