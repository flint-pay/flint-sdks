<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_payment_term_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsGetInput extends Model {
    /** @param array{'invoice_payment_term_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsGetInput')); }
    /** @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
}
