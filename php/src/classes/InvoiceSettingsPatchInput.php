<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'retry_day_offsets': list<int>}|object|null $autopay_retry_policy
 * @property-read string|null $credit_note_number_prefix
 * @property-read string|null $default_collection_mode
 * @property-read string|null $default_footer
 * @property-read string|null $default_invoice_payment_term_id
 * @property-read string|null $default_memo
 * @property-read string|null $invoice_number_prefix
 * @property-read array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null $payment_policy
 * @property-read array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null $reminder_policy
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null $remit_to_address
 * @property-read string|null $reply_to_email
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSettingsPatchInput extends Model {
    /** @param array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|object|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null, 'reminder_policy'?: array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettingsPatchInput')); }
    /** Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@see InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic invoice payment, as a list of day offsets. anyOf[2] (Value): null.
     * @return array{'retry_day_offsets': list<int>}|object|null
     * @throws SdkError When autopay_retry_policy is omitted; use hasAutopayRetryPolicy() or valueOrDefault().
     */
    public function getAutopayRetryPolicy(): mixed { return $this->get('autopay_retry_policy'); }
    public function hasAutopayRetryPolicy(): bool { return $this->has('autopay_retry_policy'); }
    /** Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     * @return string|null
     * @throws SdkError When credit_note_number_prefix is omitted; use hasCreditNoteNumberPrefix() or valueOrDefault().
     */
    public function getCreditNoteNumberPrefix(): string|null { return $this->get('credit_note_number_prefix'); }
    public function hasCreditNoteNumberPrefix(): bool { return $this->has('credit_note_number_prefix'); }
    /** Value enum: "buyer_initiated", "automatic", "external", null.
     * @return string|null
     * @throws SdkError When default_collection_mode is omitted; use hasDefaultCollectionMode() or valueOrDefault().
     */
    public function getDefaultCollectionMode(): string|null { return $this->get('default_collection_mode'); }
    public function hasDefaultCollectionMode(): bool { return $this->has('default_collection_mode'); }
    /** Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     * @return string|null
     * @throws SdkError When default_footer is omitted; use hasDefaultFooter() or valueOrDefault().
     */
    public function getDefaultFooter(): string|null { return $this->get('default_footer'); }
    public function hasDefaultFooter(): bool { return $this->has('default_footer'); }
    /** Send null to clear it. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string|null
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string|null { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Limited to 4096 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: 1. maxLength: 4096.
     * @return string|null
     * @throws SdkError When default_memo is omitted; use hasDefaultMemo() or valueOrDefault().
     */
    public function getDefaultMemo(): string|null { return $this->get('default_memo'); }
    public function hasDefaultMemo(): bool { return $this->has('default_memo'); }
    /** Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     * @return string|null
     * @throws SdkError When invoice_number_prefix is omitted; use hasInvoiceNumberPrefix() or valueOrDefault().
     */
    public function getInvoiceNumberPrefix(): string|null { return $this->get('invoice_number_prefix'); }
    public function hasInvoiceNumberPrefix(): bool { return $this->has('invoice_number_prefix'); }
    /** Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@see InvoicePaymentPolicyInput}. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     * @return array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
    /** Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@see InvoiceReminderPolicyInput}. Rules for automatic invoice reminders, each sent a set number of days before or after the due date. anyOf[2] (Value): null.
     * @return array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null
     * @throws SdkError When reminder_policy is omitted; use hasReminderPolicy() or valueOrDefault().
     */
    public function getReminderPolicy(): mixed { return $this->get('reminder_policy'); }
    public function hasReminderPolicy(): bool { return $this->has('reminder_policy'); }
    /** Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@see AddressRequestInput}. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. anyOf[2] (Value): null.
     * @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Limited to 255 characters (Unicode code points), counted before normalization. Send null to clear it. Format: email. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When reply_to_email is omitted; use hasReplyToEmail() or valueOrDefault().
     */
    public function getReplyToEmail(): string|null { return $this->get('reply_to_email'); }
    public function hasReplyToEmail(): bool { return $this->has('reply_to_email'); }
    /** Limited to 255 characters (Unicode code points), counted before normalization. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
