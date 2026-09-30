<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Invoice $invoice
 * @property-read string $public_url
 * Presence-aware response; omitted fields throw when accessed. */
final class RegenerateInvoiceLinkResult extends Model {
    /** @param array{'invoice': mixed, 'public_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RegenerateInvoiceLinkResult')); }
    /** @return Invoice
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return string
     * @throws SdkError When public_url is omitted; use hasPublicUrl() or valueOrDefault().
     */
    public function getPublicUrl(): string { return $this->get('public_url'); }
    public function hasPublicUrl(): bool { return $this->has('public_url'); }
}
