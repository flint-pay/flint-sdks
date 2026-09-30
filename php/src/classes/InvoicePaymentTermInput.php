<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermInput extends Model {
    /** @param array{'external_reference_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermInput')); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
}
