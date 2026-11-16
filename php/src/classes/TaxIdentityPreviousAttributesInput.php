<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null|null $legal_name
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $registered_address
 * @property-read list<DocumentTaxIDPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxIdentityPreviousAttributesInput extends Model {
    /** @param array{'legal_name'?: string|null|null, 'registered_address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'tax_ids'?: list<DocumentTaxIDPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentityPreviousAttributesInput')); }
    /** The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. anyOf[1] (Value): string or null. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When legal_name is omitted; use hasLegalName() or valueOrDefault().
     */
    public function getLegalName(): mixed { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. anyOf[1] (Value): ({@see AddressPreviousAttributesInput} or null). The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. anyOf[1].anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When registered_address is omitted; use hasRegisteredAddress() or valueOrDefault().
     */
    public function getRegisteredAddress(): mixed { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. anyOf[1] (Value): Array of {@see DocumentTaxIDPreviousAttributesInput}. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: 20. anyOf[1][] (Value): {@see DocumentTaxIDPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DocumentTaxIDPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_ids is omitted; use hasTaxIds() or valueOrDefault().
     */
    public function getTaxIds(): mixed { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
