<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_id
 * @property-read array{'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateInvoiceCheckoutSessionInput extends Model {
    /** @param array{'invoice_id': string, 'Idempotency-Key'?: string, 'body'?: array{'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateInvoiceCheckoutSessionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create an invoice checkout session for the current buyer; Get or create invoice checkout collection.
     * @return array{'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
