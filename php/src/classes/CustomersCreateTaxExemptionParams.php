<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $certificate_number
 * @property-read CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass $coverage
 * @property-read string|null $description
 * @property-read string|null $end_date
 * @property-read string|null $evidence_reference
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $reason
 * @property-read string $start_date
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateTaxExemptionParams extends Model {
    /** @param array{'certificate_number'?: string|null, 'coverage': CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass, 'description'?: string|null, 'end_date'?: string|null, 'evidence_reference'?: string|null, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'reason': string, 'start_date': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateTaxExemptionParams')); }
    /** Merchant's exemption certificate number. Null when none is recorded. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When certificate_number is omitted; use hasCertificateNumber() or valueOrDefault().
     */
    public function getCertificateNumber(): string|null { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): mixed { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string|null
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     * @return string|null
     * @throws SdkError When evidence_reference is omitted; use hasEvidenceReference() or valueOrDefault().
     */
    public function getEvidenceReference(): string|null { return $this->get('evidence_reference'); }
    public function hasEvidenceReference(): bool { return $this->has('evidence_reference'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
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
