<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $invoice_id
 * @property-read string $invoice_late_fee_id
 * @property-read array{'reason_message': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesWaiveLateFeeInput extends Model {
    /** @param array{'invoice_id': string, 'invoice_late_fee_id': string, 'body': array{'reason_message': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesWaiveLateFeeInput')); }
    /** Invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Invoice late fee ID. Example: "inlf_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** The request body for: Waive an unpaid invoice late fee. Example: {"reason_message":"Courtesy waiver"}.
     * @return array{'reason_message': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
