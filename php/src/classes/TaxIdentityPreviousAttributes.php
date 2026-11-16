<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $legal_name
 * @property-read AddressPreviousAttributes|null $registered_address
 * @property-read list<DocumentTaxIDPreviousAttributes>|null $tax_ids
 * Presence-aware response; omitted optional fields return null. */
final class TaxIdentityPreviousAttributes extends Model {
    /** @param array{'legal_name'?: mixed, 'registered_address'?: mixed, 'tax_ids'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentityPreviousAttributes')); }
    /** The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. anyOf[1] (Value): string. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getRegisteredAddress(): AddressPreviousAttributes|null { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. anyOf[1] (Value): Array of {@see DocumentTaxIDPreviousAttributes}. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: 20. anyOf[1][] (Value): {@see DocumentTaxIDPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DocumentTaxIDPreviousAttributes>|null
     */
    public function getTaxIds(): array|null { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
