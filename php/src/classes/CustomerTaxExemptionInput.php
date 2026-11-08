<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $certificate_number
 * @property-read CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass $coverage
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string $customer_tax_exemption_id
 * @property-read string|null $description
 * @property-read string|null $end_date
 * @property-read string|null $evidence_reference
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $reason
 * @property-read string $start_date
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerTaxExemptionInput extends Model {
    /** @param array{'certificate_number': string|null, 'coverage': CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'customer_id': string, 'customer_tax_exemption_id': string, 'description': string|null, 'end_date': string|null, 'evidence_reference': string|null, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'reason': string, 'start_date': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxExemptionInput')); }
    /** Merchant's exemption certificate number. Null when none is recorded. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When certificate_number is omitted; use hasCertificateNumber() or valueOrDefault().
     */
    public function getCertificateNumber(): string|null { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): mixed { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** When the exemption was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The customer that owns this nested child for its lifetime. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint customer tax exemption ID, prefixed ctex_. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     * @return string
     * @throws SdkError When customer_tax_exemption_id is omitted; use hasCustomerTaxExemptionId() or valueOrDefault().
     */
    public function getCustomerTaxExemptionId(): string { return $this->get('customer_tax_exemption_id'); }
    public function hasCustomerTaxExemptionId(): bool { return $this->has('customer_tax_exemption_id'); }
    /** Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: date. Example: "2026-08-02".
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
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
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
    /** First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When start_date is omitted; use hasStartDate() or valueOrDefault().
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** Derived from dates in the merchant timezone, using UTC when unset. DELETE archives the record. Value enum: "scheduled", "active", "expired", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the exemption last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Date-derived status changes do not advance it. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
