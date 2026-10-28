<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $end_date
 * @property-read string $expected_version
 * @property-read string $registration_number
 * @property-read string $start_date
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateTaxRegistrationRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateTaxRegistrationRequestInput')); }
    /** Shape $ (Value): string or null. Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: date. minLength: 1.
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Shape $ (Value): integer string. Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
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
}
