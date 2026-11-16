<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $country
 * @property-read list<string>|null $states
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerTaxExemptionCoverageStatesPreviousAttributesInput extends Model {
    /** @param array{'country'?: string|null, 'states'?: list<string>|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxExemptionCoverageStatesPreviousAttributesInput')); }
    /** Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Value enum: "US". anyOf[1] (Value): string. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): mixed { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** US postal state codes or DC. Required for states and forbidden for all_states. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[1] (Value): Array of string. US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1. maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[1][] (Value): string.  Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When states is omitted; use hasStates() or valueOrDefault().
     */
    public function getStates(): mixed { return $this->get('states'); }
    public function hasStates(): bool { return $this->has('states'); }
    /** Choose all_states or states explicitly. Value enum: "states". anyOf[1] (Value): string. Choose all_states or states explicitly. Value enum: "states". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "states".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
