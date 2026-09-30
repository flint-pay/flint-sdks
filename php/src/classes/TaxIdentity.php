<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $legal_name
 * @property-read Address|null $registered_address
 * @property-read list<DocumentTaxID> $tax_ids
 * Presence-aware response; omitted fields throw when accessed. */
final class TaxIdentity extends Model {
    /** @param array{'legal_name'?: string|null, 'registered_address'?: mixed, 'tax_ids': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxIdentity')); }
    /** @return string|null
     * @throws SdkError When legal_name is omitted; use hasLegalName() or valueOrDefault().
     */
    public function getLegalName(): string|null { return $this->get('legal_name'); }
    public function hasLegalName(): bool { return $this->has('legal_name'); }
    /** @return Address|null
     * @throws SdkError When registered_address is omitted; use hasRegisteredAddress() or valueOrDefault().
     */
    public function getRegisteredAddress(): Address|null { return $this->get('registered_address'); }
    public function hasRegisteredAddress(): bool { return $this->has('registered_address'); }
    /** @return list<DocumentTaxID>
     * @throws SdkError When tax_ids is omitted; use hasTaxIds() or valueOrDefault().
     */
    public function getTaxIds(): array { return $this->get('tax_ids'); }
    public function hasTaxIds(): bool { return $this->has('tax_ids'); }
}
