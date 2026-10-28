<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string|null $end_date
 * @property-read string $registration_number
 * @property-read string $start_date
 * @property-read string $state
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateTaxRegistrationRequestInput extends Model {
    /** @param array{'country'?: string, 'end_date'?: string|null, 'registration_number': string, 'start_date': string, 'state': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateTaxRegistrationRequestInput')); }
    /** Shape $ (Value): string. Country of registration. Only US is accepted. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string or null. Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: date. minLength: 1.
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Shape $ (Value): string. Seller's tax registration number. Write-only; responses return only its last four characters. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When registration_number is omitted; use hasRegistrationNumber() or valueOrDefault().
     */
    public function getRegistrationNumber(): string { return $this->get('registration_number'); }
    public function hasRegistrationNumber(): bool { return $this->has('registration_number'); }
    /** Shape $ (Value): string. First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: date. minLength: 1.
     * @return string
     * @throws SdkError When start_date is omitted; use hasStartDate() or valueOrDefault().
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** Shape $ (Value): string. US postal state code or DC. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     * @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
