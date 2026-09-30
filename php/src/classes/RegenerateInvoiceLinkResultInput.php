<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read string $public_url
 * Presence-aware input; omitted fields throw when accessed. */
final class RegenerateInvoiceLinkResultInput extends Model {
    /** @param array{'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'public_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RegenerateInvoiceLinkResultInput')); }
    /** @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return string
     * @throws SdkError When public_url is omitted; use hasPublicUrl() or valueOrDefault().
     */
    public function getPublicUrl(): string { return $this->get('public_url'); }
    public function hasPublicUrl(): bool { return $this->has('public_url'); }
}
