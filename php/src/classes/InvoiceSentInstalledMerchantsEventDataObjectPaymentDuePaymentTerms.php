<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $due_date
 * @property-read string $invoice_payment_term_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSentInstalledMerchantsEventDataObjectPaymentDuePaymentTerms extends Model {
    /** @param array{'due_date'?: string, 'invoice_payment_term_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSentInstalledMerchantsEventDataObjectPaymentDuePaymentTerms')); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: date.
     * @return ?string
     */
    public function getDueDate(): ?string { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms.
     * @return string
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** How the due date was set. Value enum: "payment_terms".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
