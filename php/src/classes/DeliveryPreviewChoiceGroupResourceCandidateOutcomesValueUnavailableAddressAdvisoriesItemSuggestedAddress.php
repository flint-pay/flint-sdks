<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $city
 * @property-read ?string $country
 * @property-read ?string $line1
 * @property-read ?string $line2
 * @property-read ?string $postal_code
 * @property-read ?string $state
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableAddressAdvisoriesItemSuggestedAddress extends Model {
    /** @param array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableAddressAdvisoriesItemSuggestedAddress')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getCity(): ?string { return $this->get('city'); }
    public function hasCity(): bool { return $this->has('city'); }
    /** Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * @return ?string
     */
    public function getCountry(): ?string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getLine1(): ?string { return $this->get('line1'); }
    public function hasLine1(): bool { return $this->has('line1'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getLine2(): ?string { return $this->get('line2'); }
    public function hasLine2(): bool { return $this->has('line2'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getPostalCode(): ?string { return $this->get('postal_code'); }
    public function hasPostalCode(): bool { return $this->has('postal_code'); }
    /** Shape $ (Value): string. State, province, or region. State conditions read it as a subdivision of the address's country: send its code with or without the country prefix, such as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. US addresses also accept the USPS military codes AA, AE, and AP. If the address country is listed by a state condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). minLength: 1.
     * @return ?string
     */
    public function getState(): ?string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
