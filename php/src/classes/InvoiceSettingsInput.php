<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceAutopayRetryPolicyInput|array<array-key, mixed>|\stdClass $autopay_retry_policy
 * @property-read string $credit_note_number_prefix
 * @property-read string $default_collection_mode
 * @property-read string $default_footer
 * @property-read string $default_invoice_payment_term_id
 * @property-read string $default_memo
 * @property-read string $invoice_number_prefix
 * @property-read InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass $payment_policy
 * @property-read InvoiceReminderPolicyInput|array<array-key, mixed>|\stdClass $reminder_policy
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read string $reply_to_email
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSettingsInput extends Model {
    /** @param array{'autopay_retry_policy'?: InvoiceAutopayRetryPolicyInput|array<array-key, mixed>|\stdClass, 'credit_note_number_prefix'?: string, 'default_collection_mode'?: string, 'default_footer'?: string, 'default_invoice_payment_term_id'?: string, 'default_memo'?: string, 'invoice_number_prefix'?: string, 'payment_policy'?: InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass, 'reminder_policy'?: InvoiceReminderPolicyInput|array<array-key, mixed>|\stdClass, 'remit_to_address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'reply_to_email'?: string, 'timezone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettingsInput')); }
    /** @return InvoiceAutopayRetryPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When autopay_retry_policy is omitted; use hasAutopayRetryPolicy() or valueOrDefault().
     */
    public function getAutopayRetryPolicy(): mixed { return $this->get('autopay_retry_policy'); }
    public function hasAutopayRetryPolicy(): bool { return $this->has('autopay_retry_policy'); }
    /** @return string
     * @throws SdkError When credit_note_number_prefix is omitted; use hasCreditNoteNumberPrefix() or valueOrDefault().
     */
    public function getCreditNoteNumberPrefix(): string { return $this->get('credit_note_number_prefix'); }
    public function hasCreditNoteNumberPrefix(): bool { return $this->has('credit_note_number_prefix'); }
    /** @return string
     * @throws SdkError When default_collection_mode is omitted; use hasDefaultCollectionMode() or valueOrDefault().
     */
    public function getDefaultCollectionMode(): string { return $this->get('default_collection_mode'); }
    public function hasDefaultCollectionMode(): bool { return $this->has('default_collection_mode'); }
    /** @return string
     * @throws SdkError When default_footer is omitted; use hasDefaultFooter() or valueOrDefault().
     */
    public function getDefaultFooter(): string { return $this->get('default_footer'); }
    public function hasDefaultFooter(): bool { return $this->has('default_footer'); }
    /** @return string
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** @return string
     * @throws SdkError When default_memo is omitted; use hasDefaultMemo() or valueOrDefault().
     */
    public function getDefaultMemo(): string { return $this->get('default_memo'); }
    public function hasDefaultMemo(): bool { return $this->has('default_memo'); }
    /** @return string
     * @throws SdkError When invoice_number_prefix is omitted; use hasInvoiceNumberPrefix() or valueOrDefault().
     */
    public function getInvoiceNumberPrefix(): string { return $this->get('invoice_number_prefix'); }
    public function hasInvoiceNumberPrefix(): bool { return $this->has('invoice_number_prefix'); }
    /** @return InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
    /** @return InvoiceReminderPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reminder_policy is omitted; use hasReminderPolicy() or valueOrDefault().
     */
    public function getReminderPolicy(): mixed { return $this->get('reminder_policy'); }
    public function hasReminderPolicy(): bool { return $this->has('reminder_policy'); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** @return string
     * @throws SdkError When reply_to_email is omitted; use hasReplyToEmail() or valueOrDefault().
     */
    public function getReplyToEmail(): string { return $this->get('reply_to_email'); }
    public function hasReplyToEmail(): bool { return $this->has('reply_to_email'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
