<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass $invoice_payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class CollectInvoiceResultInput extends Model {
    /** @param array{'idempotency_key': string, 'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'invoice_payment_attempt'?: InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CollectInvoiceResultInput')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice_payment_attempt is omitted; use hasInvoicePaymentAttempt() or valueOrDefault().
     */
    public function getInvoicePaymentAttempt(): mixed { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
