<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $certificate_number
 * @property-read CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass $coverage
 * @property-read string|null $description
 * @property-read string|null $end_date
 * @property-read string|null $evidence_reference
 * @property-read int $expected_version
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $reason
 * @property-read string $start_date
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateTaxExemptionParams extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateTaxExemptionParams')); }
    /** Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When certificate_number is omitted; use hasCertificateNumber() or valueOrDefault().
     */
    public function getCertificateNumber(): string|null { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): mixed { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: 1. maxLength: 1024.
     * @return string|null
     * @throws SdkError When evidence_reference is omitted; use hasEvidenceReference() or valueOrDefault().
     */
    public function getEvidenceReference(): string|null { return $this->get('evidence_reference'); }
    public function hasEvidenceReference(): bool { return $this->has('evidence_reference'); }
    /** Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Exemption reason. Other requires a description. Value enum: "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat", "charitable_organization", "religious_organization", "educational_organization", "resale", "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string
     * @throws SdkError When start_date is omitted; use hasStartDate() or valueOrDefault().
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
}
