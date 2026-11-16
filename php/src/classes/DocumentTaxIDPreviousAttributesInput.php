<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read string|null $document_tax_id
 * @property-read string|null $identifier_type
 * @property-read string|null $region
 * @property-read string|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DocumentTaxIDPreviousAttributesInput extends Model {
    /** @param array{'country'?: string|null, 'document_tax_id'?: string|null, 'identifier_type'?: string|null, 'region'?: string|null, 'value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DocumentTaxIDPreviousAttributesInput')); }
    /** Two-letter ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Server-generated identity of an existing entry. Omit when adding an entry. anyOf[1] (Value): string. Server-generated identity of an existing entry. Omit when adding an entry. minLength: 1. pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dti_01KEZF7C00NS1FDK30F1BE6HPH". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When document_tax_id is omitted; use hasDocumentTaxId() or valueOrDefault().
     */
    public function getDocumentTaxId(): mixed { return $this->get('document_tax_id'); }
    public function hasDocumentTaxId(): bool { return $this->has('document_tax_id'); }
    /** Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. anyOf[1] (Value): string. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When identifier_type is omitted; use hasIdentifierType() or valueOrDefault().
     */
    public function getIdentifierType(): mixed { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. anyOf[1] (Value): string. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. minLength: 1. maxLength: 64. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When region is omitted; use hasRegion() or valueOrDefault().
     */
    public function getRegion(): mixed { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** Full identifier printed on documents. Not verified by Flint. anyOf[1] (Value): string. Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
