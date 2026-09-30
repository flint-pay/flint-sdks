<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $legal_name
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null $registered_address
 * @property-read list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass> $tax_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxIdentityInput extends Model {
    /** @param array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentityInput')); }
    /** @return string|null
     * @throws SdkError When legal_name is omitted; use hasLegalName() or valueOrDefault().
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null
     * @throws SdkError When registered_address is omitted; use hasRegisteredAddress() or valueOrDefault().
     */
    public function getRegisteredAddress(): mixed { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** @return list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_ids is omitted; use hasTaxIds() or valueOrDefault().
     */
    public function getTaxIds(): array { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
