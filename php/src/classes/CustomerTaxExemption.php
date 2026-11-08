<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $certificate_number
 * @property-read CustomerTaxExemptionCoverageAllStates|CustomerTaxExemptionCoverageStates|\stdClass $coverage
 * @property-read string $created_at
 * @property-read string $customer_id
 * @property-read string $customer_tax_exemption_id
 * @property-read string|null $description
 * @property-read string|null $end_date
 * @property-read string|null $evidence_reference
 * @property-read array<array-key, string> $metadata
 * @property-read string $reason
 * @property-read string $start_date
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerTaxExemption extends Model {
    /** @param array{'certificate_number': string|null, 'coverage': mixed, 'created_at': string, 'customer_id': string, 'customer_tax_exemption_id': string, 'description': string|null, 'end_date': string|null, 'evidence_reference': string|null, 'metadata': mixed, 'reason': string, 'start_date': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerTaxExemption')); }
    /** Merchant's exemption certificate number. Null when none is recorded. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getCertificateNumber(): string|null { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageAllStates|CustomerTaxExemptionCoverageStates|\stdClass
     */
    public function getCoverage(): CustomerTaxExemptionCoverageAllStates|CustomerTaxExemptionCoverageStates|\stdClass { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** When the exemption was recorded. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The customer that owns this nested child for its lifetime.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint customer tax exemption ID, prefixed ctex_.
     * @return string
     */
    public function getCustomerTaxExemptionId(): string { return $this->get('customer_tax_exemption_id'); }
    public function hasCustomerTaxExemptionId(): bool { return $this->has('customer_tax_exemption_id'); }
    /** Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1. maxLength: 500.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: date.
     * @return string|null
     */
    public function getEndDate(): string|null { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     * @return string|null
     */
    public function getEvidenceReference(): string|null { return $this->get('evidence_reference'); }
    public function hasEvidenceReference(): bool { return $this->has('evidence_reference'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Exemption reason. Other requires a description. Value enum: "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat", "charitable_organization", "religious_organization", "educational_organization", "resale", "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: date.
     * @return string
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** Derived from dates in the merchant timezone, using UTC when unset. DELETE archives the record. Value enum: "scheduled", "active", "expired", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the exemption last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Date-derived status changes do not advance it. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
