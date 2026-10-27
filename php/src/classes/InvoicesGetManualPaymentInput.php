<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_id
 * @property-read string $invoice_manual_payment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesGetManualPaymentInput extends Model {
    /** @param array{'invoice_id': string, 'invoice_manual_payment_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesGetManualPaymentInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_manual_payment_id is omitted; use hasInvoiceManualPaymentId() or valueOrDefault().
     */
    public function getInvoiceManualPaymentId(): string { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
}
