<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string $created_at
 * @property-read string|null $end_date
 * @property-read string $registration_number_last4
 * @property-read string $start_date
 * @property-read string|null $state
 * @property-read string $status
 * @property-read string $tax_registration_id
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxRegistration extends Model {
    /** @param array{'country': string, 'created_at': string, 'end_date': string|null, 'registration_number_last4': string, 'start_date': string, 'state': string|null, 'status': string, 'tax_registration_id': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxRegistration')); }
    /** Country of registration: US, CA, GB, AU or NZ, or EU for a non-Union OSS registration that covers all 27 member states. Uses ISO 3166-1 alpha-2 country codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US", "CA", "EU", "GB", "AU", "NZ".
     * @return string
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** When this registration was saved. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Last day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. `null` when the registration has no end date. Format: date.
     * @return string|null
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Last four characters of the registration number. The complete number is never returned.
     * @return string
     */
    public function getRegistrationNumberLast4(): string { return $this->get('registration_number_last4'); }
    public function hasRegistrationNumberLast4(): bool { return $this->has('registration_number_last4'); }
    /** First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: date.
     * @return string
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** US state code or DC, or CA province BC, MB, QC or SK. Null when the registration is a Canadian federal GST/HST registration or an EU, GB, AU or NZ registration. Date windows must not overlap for the same country and state. Uses the US postal abbreviation from ISO 3166-2:US (without the US- prefix). Value enum: "BC", "MB", "QC", "SK", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", null.
     * @return string|null
     */
    public function getState(): string|null { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** Pending until confirmed; then scheduled before start_date, active within the inclusive date window, and ended after end_date. Rejected when verification fails. Removed is returned only by DELETE in its final snapshot. Value enum: "pending", "scheduled", "active", "ended", "rejected", "removed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Flint tax registration ID.
     * @return string
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
    /** When this registration last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
