<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'calculation': mixed, 'external_reference_id'?: string, 'late_fee_policy'?: mixed, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsCreateInput extends Model {
    /** @param array{'body': array{'calculation': mixed, 'external_reference_id'?: string, 'late_fee_policy'?: mixed, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsCreateInput')); }
    /** The request body for: Create invoice payment term.
     * @return array{'calculation': mixed, 'external_reference_id'?: string, 'late_fee_policy'?: mixed, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
