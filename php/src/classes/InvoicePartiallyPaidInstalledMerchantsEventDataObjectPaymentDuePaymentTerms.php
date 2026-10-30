<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $due_at
 * @property-read string $invoice_payment_term_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePartiallyPaidInstalledMerchantsEventDataObjectPaymentDuePaymentTerms extends Model {
    /** @param array{'due_at'?: string, 'invoice_payment_term_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePartiallyPaidInstalledMerchantsEventDataObjectPaymentDuePaymentTerms')); }
    /** The due date set with type date. Present only with date. The top-level due_at is the effective due date for every type. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
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
