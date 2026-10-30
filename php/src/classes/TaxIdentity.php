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
    /** minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getRegisteredAddress(): Address|null { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** maxItems: 20. [] (Value): {@see DocumentTaxID}. A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.
     * @return list<DocumentTaxID>
     */
    public function getTaxIds(): array { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
