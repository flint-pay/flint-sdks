<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $invoice_id
 * @property-read array{'amount_money': mixed, 'expected_version'?: int, 'note'?: string, 'payment_reference'?: string, 'received_at'?: string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesCreateManualPaymentInput extends Model {
    /** @param array{'invoice_id': string, 'body': array{'amount_money': mixed, 'expected_version'?: int, 'note'?: string, 'payment_reference'?: string, 'received_at'?: string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesCreateManualPaymentInput')); }
    /** Flint invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** The request body for: Create invoice manual payment.
     * @return array{'amount_money': mixed, 'expected_version'?: int, 'note'?: string, 'payment_reference'?: string, 'received_at'?: string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
