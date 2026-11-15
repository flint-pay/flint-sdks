<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read list<string> $states
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxExemptionCoverageStates extends Model {
    /** @param array{'country': string, 'states': list<string>, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxExemptionCoverageStates')); }
    /** Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US".
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1. maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value): string.  Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     * @return list<string>
     */
    public function getStates(): array { return $this->get('states'); }
    public function hasStates(): bool { return $this->has('states'); }
    /** Choose all_states or states explicitly. Value enum: "states".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
