<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $due_date
 * @property-read string|null $invoice_payment_term_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentDueDatePreviousAttributesInput extends Model {
    /** @param array{'due_date'?: string|null, 'invoice_payment_term_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentDueDatePreviousAttributesInput')); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When due_date is omitted; use hasDueDate() or valueOrDefault().
     */
    public function getDueDate(): mixed { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. anyOf[1] (Value): string. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): mixed { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** How the due date was set. Value enum: "date". anyOf[1] (Value): string. How the due date was set. Value enum: "date". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "date".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
