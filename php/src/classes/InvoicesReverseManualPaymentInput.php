<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $invoice_id
 * @property-read string $invoice_manual_payment_id
 * @property-read array{'expected_version'?: int, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesReverseManualPaymentInput extends Model {
    /** @param array{'invoice_id': string, 'invoice_manual_payment_id': string, 'body': array{'expected_version'?: int, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesReverseManualPaymentInput')); }
    /** Flint invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Flint invoice manual payment ID. Example: "omp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_manual_payment_id is omitted; use hasInvoiceManualPaymentId() or valueOrDefault().
     */
    public function getInvoiceManualPaymentId(): string { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
    /** The request body for: Reverse manual invoice payment. Example: {"reversal_note":"Payment returned by bank"}.
     * @return array{'expected_version'?: int, 'reversal_note'?: string, 'reversed_at'?: string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
