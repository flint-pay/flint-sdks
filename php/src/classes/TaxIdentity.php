<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $legal_name
 * @property-read Address|null $registered_address
 * @property-read list<DocumentTaxID> $tax_ids
 * Presence-aware response; omitted optional fields return null. */
final class TaxIdentity extends Model {
    /** @param array{'legal_name': string|null, 'registered_address': mixed, 'tax_ids': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentity')); }
    /** Shape $ (Value): string or null. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** Shape $ (Value): {@see Address} or null. Replaced as a whole: send every field you want to keep. Shape $.anyOf[1] (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. Shape $.anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getRegisteredAddress(): Address|null { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** Shape $ (Value): Array of {@see DocumentTaxID}. maxItems: 20. Shape $[] (Value): {@see DocumentTaxID}. A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.
     * @return list<DocumentTaxID>
     */
    public function getTaxIds(): array { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
