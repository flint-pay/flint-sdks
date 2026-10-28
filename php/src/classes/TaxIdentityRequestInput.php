<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $legal_name
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null $registered_address
 * @property-read list<DocumentTaxIDRequestRequestInput|array<array-key, mixed>|\stdClass> $tax_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxIdentityRequestInput extends Model {
    /** @param array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<DocumentTaxIDRequestRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentityRequestInput')); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When legal_name is omitted; use hasLegalName() or valueOrDefault().
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** Shape $ (Value): {@see AddressRequestInput} or null. Replaced as a whole: send every field you want to keep. Shape $.anyOf[1] (Value): {@see AddressRequestInput}. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. Shape $.anyOf[2] (Value): null.
     * @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null
     * @throws SdkError When registered_address is omitted; use hasRegisteredAddress() or valueOrDefault().
     */
    public function getRegisteredAddress(): mixed { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** Shape $ (Value): Array of {@see DocumentTaxIDRequestRequestInput}. maxItems: 20. Shape $[] (Value): {@see DocumentTaxIDRequestRequestInput}. A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.
     * @return list<DocumentTaxIDRequestRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_ids is omitted; use hasTaxIds() or valueOrDefault().
     */
    public function getTaxIds(): array { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
