<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?InvoiceAutopayRetryPolicy $autopay_retry_policy
 * @property-read ?string $credit_note_number_prefix
 * @property-read ?string $default_collection_mode
 * @property-read ?string $default_footer
 * @property-read ?string $default_invoice_payment_term_id
 * @property-read ?string $default_memo
 * @property-read ?string $invoice_number_prefix
 * @property-read ?InvoicePaymentPolicy $payment_policy
 * @property-read ?InvoiceReminderPolicy $reminder_policy
 * @property-read ?Address $remit_to_address
 * @property-read ?string $reply_to_email
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSettings extends Model {
    /** @param array{'autopay_retry_policy'?: mixed, 'credit_note_number_prefix'?: string, 'default_collection_mode'?: string, 'default_footer'?: string, 'default_invoice_payment_term_id'?: string, 'default_memo'?: string, 'invoice_number_prefix'?: string, 'payment_policy'?: mixed, 'reminder_policy'?: mixed, 'remit_to_address'?: mixed, 'reply_to_email'?: string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettings')); }
    /** Shape $ (Value): {@see InvoiceAutopayRetryPolicy}. Replaced as a whole: send every field you want to keep. When to retry a failed automatic invoice payment, as a list of day offsets.
     * @return ?InvoiceAutopayRetryPolicy
     */
    public function getAutopayRetryPolicy(): ?InvoiceAutopayRetryPolicy { return $this->get('autopay_retry_policy'); }
    public function hasAutopayRetryPolicy(): bool { return $this->has('autopay_retry_policy'); }
    /** Shape $ (Value): string. Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     * @return ?string
     */
    public function getCreditNoteNumberPrefix(): ?string { return $this->get('credit_note_number_prefix'); }
    public function hasCreditNoteNumberPrefix(): bool { return $this->has('credit_note_number_prefix'); }
    /** Shape $ (Value): string.  Value enum: "buyer_initiated", "automatic", "external".
     * @return ?string
     */
    public function getDefaultCollectionMode(): ?string { return $this->get('default_collection_mode'); }
    public function hasDefaultCollectionMode(): bool { return $this->has('default_collection_mode'); }
    /** Shape $ (Value): string. Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: 4096.
     * @return ?string
     */
    public function getDefaultFooter(): ?string { return $this->get('default_footer'); }
    public function hasDefaultFooter(): bool { return $this->has('default_footer'); }
    /** Shape $ (Value): string. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getDefaultInvoicePaymentTermId(): ?string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Shape $ (Value): string. Limited to 4096 characters (Unicode code points), counted before normalization. maxLength: 4096.
     * @return ?string
     */
    public function getDefaultMemo(): ?string { return $this->get('default_memo'); }
    public function hasDefaultMemo(): bool { return $this->has('default_memo'); }
    /** Shape $ (Value): string. Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     * @return ?string
     */
    public function getInvoiceNumberPrefix(): ?string { return $this->get('invoice_number_prefix'); }
    public function hasInvoiceNumberPrefix(): bool { return $this->has('invoice_number_prefix'); }
    /** Shape $ (Value): {@see InvoicePaymentPolicy}. Replaced as a whole: send every field you want to keep. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.
     * @return ?InvoicePaymentPolicy
     */
    public function getPaymentPolicy(): ?InvoicePaymentPolicy { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
    /** Shape $ (Value): {@see InvoiceReminderPolicy}. Replaced as a whole: send every field you want to keep. Rules for automatic invoice reminders, each sent a set number of days before or after the due date.
     * @return ?InvoiceReminderPolicy
     */
    public function getReminderPolicy(): ?InvoiceReminderPolicy { return $this->get('reminder_policy'); }
    public function hasReminderPolicy(): bool { return $this->has('reminder_policy'); }
    /** Shape $ (Value): {@see Address}. Replaced as a whole: send every field you want to keep. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getRemitToAddress(): ?Address { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before normalization. Format: email. maxLength: 255.
     * @return ?string
     */
    public function getReplyToEmail(): ?string { return $this->get('reply_to_email'); }
    public function hasReplyToEmail(): bool { return $this->has('reply_to_email'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before normalization. maxLength: 255.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
