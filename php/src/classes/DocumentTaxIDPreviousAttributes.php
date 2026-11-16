<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read string|null $document_tax_id
 * @property-read string|null $identifier_type
 * @property-read string|null $region
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class DocumentTaxIDPreviousAttributes extends Model {
    /** @param array{'country'?: mixed, 'document_tax_id'?: mixed, 'identifier_type'?: mixed, 'region'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DocumentTaxIDPreviousAttributes')); }
    /** Two-letter ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Server-generated identity of an existing entry. Omit when adding an entry. anyOf[1] (Value): string. Server-generated identity of an existing entry. Omit when adding an entry. minLength: 1. pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDocumentTaxId(): string|null { return $this->get('document_tax_id'); }
    public function hasDocumentTaxId(): bool { return $this->has('document_tax_id'); }
    /** Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. anyOf[1] (Value): string. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdentifierType(): string|null { return $this->get('identifier_type'); }
    public function hasIdentifierType(): bool { return $this->has('identifier_type'); }
    /** State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. anyOf[1] (Value): string. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. minLength: 1. maxLength: 64. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRegion(): string|null { return $this->get('region'); }
    public function hasRegion(): bool { return $this->has('region'); }
    /** Full identifier printed on documents. Not verified by Flint. anyOf[1] (Value): string. Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
