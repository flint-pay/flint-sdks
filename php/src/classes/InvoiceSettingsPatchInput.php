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
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null $remit_to_address
 * @property-read string|null $reply_to_email
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSettingsPatchInput extends Model {
    /** @param array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|object|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null, 'reminder_policy'?: array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettingsPatchInput')); }
    /** @return array{'retry_day_offsets': list<int>}|object|null
     * @throws SdkError When autopay_retry_policy is omitted; use hasAutopayRetryPolicy() or valueOrDefault().
     */
    public function getAutopayRetryPolicy(): mixed { return $this->get('autopay_retry_policy'); }
    public function hasAutopayRetryPolicy(): bool { return $this->has('autopay_retry_policy'); }
    /** @return string|null
     * @throws SdkError When credit_note_number_prefix is omitted; use hasCreditNoteNumberPrefix() or valueOrDefault().
     */
    public function getCreditNoteNumberPrefix(): string|null { return $this->get('credit_note_number_prefix'); }
    public function hasCreditNoteNumberPrefix(): bool { return $this->has('credit_note_number_prefix'); }
    /** @return string|null
     * @throws SdkError When default_collection_mode is omitted; use hasDefaultCollectionMode() or valueOrDefault().
     */
    public function getDefaultCollectionMode(): string|null { return $this->get('default_collection_mode'); }
    public function hasDefaultCollectionMode(): bool { return $this->has('default_collection_mode'); }
    /** @return string|null
     * @throws SdkError When default_footer is omitted; use hasDefaultFooter() or valueOrDefault().
     */
    public function getDefaultFooter(): string|null { return $this->get('default_footer'); }
    public function hasDefaultFooter(): bool { return $this->has('default_footer'); }
    /** @return string|null
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string|null { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** @return string|null
     * @throws SdkError When default_memo is omitted; use hasDefaultMemo() or valueOrDefault().
     */
    public function getDefaultMemo(): string|null { return $this->get('default_memo'); }
    public function hasDefaultMemo(): bool { return $this->has('default_memo'); }
    /** @return string|null
     * @throws SdkError When invoice_number_prefix is omitted; use hasInvoiceNumberPrefix() or valueOrDefault().
     */
    public function getInvoiceNumberPrefix(): string|null { return $this->get('invoice_number_prefix'); }
    public function hasInvoiceNumberPrefix(): bool { return $this->has('invoice_number_prefix'); }
    /** @return array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
    /** @return array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null
     * @throws SdkError When reminder_policy is omitted; use hasReminderPolicy() or valueOrDefault().
     */
    public function getReminderPolicy(): mixed { return $this->get('reminder_policy'); }
    public function hasReminderPolicy(): bool { return $this->has('reminder_policy'); }
    /** @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** @return string|null
     * @throws SdkError When reply_to_email is omitted; use hasReplyToEmail() or valueOrDefault().
     */
    public function getReplyToEmail(): string|null { return $this->get('reply_to_email'); }
    public function hasReplyToEmail(): bool { return $this->has('reply_to_email'); }
    /** @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
