<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $due_date
 * @property-read string $invoice_payment_term_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentDueInputPaymentTermsInput extends Model {
    /** @param array{'due_date'?: string, 'invoice_payment_term_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentDueInputPaymentTermsInput')); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Required with date and not accepted with any other type. The date must be today or later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string
     * @throws SdkError When due_date is omitted; use hasDueDate() or valueOrDefault().
     */
    public function getDueDate(): string { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** The active payment term to apply. Required with payment_terms and not accepted with any other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     * @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** How the due date is set. customer_default and merchant_default resolve when the draft is written, and reads return the resolved type. Sending payment_terms on a draft captures the term's current revision again. Value enum: "payment_terms".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
