<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_id
 * @property-read string $invoice_late_fee_id
 * @property-read array{'reason_message': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesWaiveLateFeeInput extends Model {
    /** @param array{'invoice_id': string, 'invoice_late_fee_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'reason_message': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesWaiveLateFeeInput')); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'reason_message': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
