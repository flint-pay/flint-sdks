<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read list<string> $states
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerTaxExemptionCoverageInput extends Model {
    /** @param array{'country': string, 'states'?: list<string>, 'type': string}|object|array{'country': string, 'states': list<string>, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxExemptionCoverageInput')); }
    /** Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1. maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value): string.  Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     * @return list<string>
     * @throws SdkError When states is omitted; use hasStates() or valueOrDefault().
     */
    public function getStates(): array { return $this->get('states'); }
    public function hasStates(): bool { return $this->has('states'); }
    /** Choose all_states or states explicitly. Value enum: "all_states", "states".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
