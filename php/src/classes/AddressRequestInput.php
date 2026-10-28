<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $city
 * @property-read string $country
 * @property-read string $line1
 * @property-read string|null $line2
 * @property-read string|null $postal_code
 * @property-read string|null $state
 * Presence-aware input; omitted fields throw when accessed. */
final class AddressRequestInput extends Model {
    /** @param array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddressRequestInput')); }
    /** Shape $ (Value): string. Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. minLength: 1. maxLength: 100. pattern: \S.
     * @return string
     * @throws SdkError When city is omitted; use hasCity() or valueOrDefault().
     */
    public function getCity(): string { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** Shape $ (Value): string. A real ISO 3166-1 alpha-2 country code. Lowercase codes and surrounding whitespace are rejected. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. minLength: 1. maxLength: 255. pattern: \S.
     * @return string
     * @throws SdkError When line1 is omitted; use hasLine1() or valueOrDefault().
     */
    public function getLine1(): string { return $this->get('line1'); }
    public function hasLine1(): bool { return $this->has('line1'); }
    /** Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. minLength: 1. maxLength: 255. pattern: \S.
     * @return string|null
     * @throws SdkError When line2 is omitted; use hasLine2() or valueOrDefault().
     */
    public function getLine2(): string|null { return $this->get('line2'); }
    public function hasLine2(): bool { return $this->has('line2'); }
    /** Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. Required for US addresses. minLength: 1. maxLength: 20. pattern: \S.
     * @return string|null
     * @throws SdkError When postal_code is omitted; use hasPostalCode() or valueOrDefault().
     */
    public function getPostalCode(): string|null { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. Required for US addresses. minLength: 1. maxLength: 100. pattern: \S.
     * @return string|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string|null { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
