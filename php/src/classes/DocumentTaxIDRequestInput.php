<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $document_tax_id
 * @property-read string $identifier_type
 * @property-read string $region
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DocumentTaxIDRequestInput extends Model {
    /** @param array{'country': string, 'document_tax_id'?: string, 'identifier_type': string, 'region'?: string, 'value': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DocumentTaxIDRequestInput')); }
    /** Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Server-generated identity of an existing entry. Omit when adding an entry. minLength: 1. pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When document_tax_id is omitted; use hasDocumentTaxId() or valueOrDefault().
     */
    public function getDocumentTaxId(): string { return $this->get('document_tax_id'); }
    public function hasDocumentTaxId(): bool { return $this->has('document_tax_id'); }
    /** Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$.
     * @return string
     * @throws SdkError When identifier_type is omitted; use hasIdentifierType() or valueOrDefault().
     */
    public function getIdentifierType(): string { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): string { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
