<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read mixed $collection
 * @property-read string $external_reference_id
 * @property-read string $footer
 * @property-read string $memo
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read mixed $payment_due
 * @property-read string $po_number
 * @property-read CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass $quick_pay
 * @property-read string $recipient_email
 * @property-read string $reference
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass> $schedule_entries
 * @property-read string|\DateTimeInterface $scheduled_send_at
 * @property-read string|\DateTimeInterface $service_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoiceRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoiceRequestInput')); }
    /** @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** @return mixed
     * @throws SdkError When collection is omitted; use hasCollection() or valueOrDefault().
     */
    public function getCollection(): mixed { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
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
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return mixed
     * @throws SdkError When payment_due is omitted; use hasPaymentDue() or valueOrDefault().
     */
    public function getPaymentDue(): mixed { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** @return string
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** @return CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When quick_pay is omitted; use hasQuickPay() or valueOrDefault().
     */
    public function getQuickPay(): mixed { return $this->get('quick_pay'); }
    public function hasQuickPay(): bool { return $this->has('quick_pay'); }
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
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** @return list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
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
