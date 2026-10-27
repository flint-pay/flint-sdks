<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $city
 * @property-read string $country
 * @property-read string $line1
 * @property-read ?string $line2
 * @property-read string $postal_code
 * @property-read string $state
 * Presence-aware response; omitted optional fields return null. */
final class PostalAddress extends Model {
    /** @param array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PostalAddress')); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getCity(): string { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. Surrounding whitespace is trimmed and letters are converted to uppercase before validation. The normalized code has 2 ASCII characters; no length limit applies before trimming. minLength: 2.
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getLine1(): string { return $this->get('line1'); }
    public function hasLine1(): bool { return $this->has('line1'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getLine2(): ?string { return $this->get('line2'); }
    public function hasLine2(): bool { return $this->has('line2'); }
    /** Shape $ (Value): string. Limited to 32 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 32.
     * @return string
     */
    public function getPostalCode(): string { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. maxLength: 255.
     * @return string
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
