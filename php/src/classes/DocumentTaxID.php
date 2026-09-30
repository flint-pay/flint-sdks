<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $document_tax_id
 * @property-read string $identifier_type
 * @property-read string $region
 * @property-read string $value
 * Presence-aware response; omitted fields throw when accessed. */
final class DocumentTaxID extends Model {
    /** @param array{'country': string, 'document_tax_id'?: string, 'identifier_type': string, 'region'?: string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DocumentTaxID')); }
    /** @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** @return string
     * @throws SdkError When document_tax_id is omitted; use hasDocumentTaxId() or valueOrDefault().
     */
    public function getDocumentTaxId(): string { return $this->get('document_tax_id'); }
    public function hasDocumentTaxId(): bool { return $this->has('document_tax_id'); }
    /** @return string
     * @throws SdkError When identifier_type is omitted; use hasIdentifierType() or valueOrDefault().
     */
    public function getIdentifierType(): string { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** @return string
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): string { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
