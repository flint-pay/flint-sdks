<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $invoice_payment_term_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentDueInputPaymentTermsInput extends Model {
    /** @param array{'due_at'?: string|\DateTimeInterface, 'invoice_payment_term_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentDueInputPaymentTermsInput')); }
    /** Shape $ (Value): string. When payment is due, as an RFC 3339 timestamp. Required with date and not accepted with any other type. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: 1.
     * @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** Shape $ (Value): string. How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Value enum: "payment_terms".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
