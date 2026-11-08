<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'configuration': mixed, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbacksCreateInput extends Model {
    /** @param array{'body': array{'configuration': mixed, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbacksCreateInput')); }
    /** The request body for: Create a tax calculation callback. Example: {"configuration":{"url":"https://example.com/tax"},"name":"Merchant tax engine"}.
     * @return array{'configuration': mixed, 'external_reference_id'?: string, 'name': string, 'signing_methods'?: list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
