<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|null $end_date
 * @property-read string $registration_number_last4
 * @property-read string $start_date
 * @property-read string $state
 * @property-read string $status
 * @property-read string $tax_registration_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxRegistrationInput extends Model {
    /** @param array{'country': string, 'created_at': string|\DateTimeInterface, 'end_date': string|null, 'registration_number_last4': string, 'start_date': string, 'state': string, 'status': string, 'tax_registration_id': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxRegistrationInput')); }
    /** Country of registration. Currently US. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** When this registration was saved. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Last day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. Null means no end date. Format: date.
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Last four characters of the registration number. The complete number is never returned.
     * @return string
     * @throws SdkError When registration_number_last4 is omitted; use hasRegistrationNumberLast4() or valueOrDefault().
     */
    public function getRegistrationNumberLast4(): string { return $this->get('registration_number_last4'); }
    public function hasRegistrationNumberLast4(): bool { return $this->has('registration_number_last4'); }
    /** First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: date.
     * @return string
     * @throws SdkError When start_date is omitted; use hasStartDate() or valueOrDefault().
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** US postal state code or DC. Registrations in the same state must have non-overlapping date windows. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     * @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** Pending until confirmed; then scheduled before start_date, active within the inclusive date window, and ended after end_date. Rejected when verification fails. Removed is returned only by DELETE in its final snapshot. Value enum: "pending", "scheduled", "active", "ended", "rejected", "removed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Flint tax registration ID.
     * @return string
     * @throws SdkError When tax_registration_id is omitted; use hasTaxRegistrationId() or valueOrDefault().
     */
    public function getTaxRegistrationId(): string { return $this->get('tax_registration_id'); }
    public function hasTaxRegistrationId(): bool { return $this->has('tax_registration_id'); }
    /** When this registration last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
