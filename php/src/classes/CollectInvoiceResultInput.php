<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $invoice_payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class CollectInvoiceResultInput extends Model {
    /** @param array{'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'invoice_payment_attempt': array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CollectInvoiceResultInput')); }
    /** Shape $ (Value): {@see InvoiceInput}. A bill issued to a customer.
     * @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Shape $ (Value): {@see InvoicePaymentAttemptInput} or null. Shape $.anyOf[1] (Value): {@see InvoicePaymentAttemptInput}. An attempt to collect payment for an invoice. Shape $.anyOf[2] (Value): null.
     * @return array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When invoice_payment_attempt is omitted; use hasInvoicePaymentAttempt() or valueOrDefault().
     */
    public function getInvoicePaymentAttempt(): mixed { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
