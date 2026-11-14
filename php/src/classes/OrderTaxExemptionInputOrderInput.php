<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $certificate_number
 * @property-read CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass $coverage
 * @property-read string $description
 * @property-read string $evidence_reference
 * @property-read string $reason
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxExemptionInputOrderInput extends Model {
    /** @param array{'certificate_number'?: string, 'coverage': CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'evidence_reference'?: string, 'reason': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxExemptionInputOrderInput')); }
    /** Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When certificate_number is omitted; use hasCertificateNumber() or valueOrDefault().
     */
    public function getCertificateNumber(): string { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Replaced as a whole: send every field you want to keep. Required for type order. Covers all US states or an explicit list of states and DC. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): mixed { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** Explanation of the exemption. Required when reason is other; optional for every other reason. Up to 500 characters. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. minLength: 1. maxLength: 1024.
     * @return string
     * @throws SdkError When evidence_reference is omitted; use hasEvidenceReference() or valueOrDefault().
     */
    public function getEvidenceReference(): string { return $this->get('evidence_reference'); }
    public function hasEvidenceReference(): bool { return $this->has('evidence_reference'); }
    /** Required for type order. other requires description; description is optional for every other reason. Value enum: "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat", "charitable_organization", "religious_organization", "educational_organization", "resale", "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Required selector. customer uses the linked customer; none ignores customer exemptions; order supplies a declaration. Value enum: "order".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
